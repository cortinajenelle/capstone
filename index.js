import Navigo from "navigo";
import { capitalize } from "lodash";
import { Header, Nav, Main, Footer } from "./components/";
import * as store from "./store";

import axios from "axios";

const router = new Navigo("/");

function render(state = store.Home) {
  document.querySelector("#root").innerHTML = `
    ${Header(state)}
    ${Nav(store.Links)}
    ${Main(state)}
    ${Footer()}
  `;
  router.updatePageLinks();

  afterRender(state);
}

function afterRender(state) {
  // add menu toggle to bars icon in nav bar
  document.querySelector(".fa-bars").addEventListener("click", () => {
    document.querySelector("nav > ul").classList.toggle("hidden--mobile");
  });

  if (state.view === "Contact") {
    /*
      Please refer to the documentation:
      https://developer.mapquest.com/documentation/mapquest-js/v1.3/
    */

    L.mapquest.key = process.env.MAPQUEST_KEY;

    const baseLayer = L.mapquest.tileLayer("map");
    const precipitationLayer = L.tileLayer(
      `https://tile.openweathermap.org/map/{layer}/{z}/{x}/{y}.png?appid=${process.env.OPEN_WEATHER_MAP_API_KEY}`,
      { layer: "precipitation_new" }
    );
    const temperatureLayer = L.tileLayer(
      `https://tile.openweathermap.org/map/{layer}/{z}/{x}/{y}.png?appid=${process.env.OPEN_WEATHER_MAP_API_KEY}`,
      { layer: "temp_new" }
    );
    const windLayer = L.tileLayer(
      `https://tile.openweathermap.org/map/{layer}/{z}/{x}/{y}.png?appid=${process.env.OPEN_WEATHER_MAP_API_KEY}`,
      { layer: "wind_new" }
    );

    // 'map' refers to a <div> element with the ID map
    const map = L.mapquest.map("map", {
      center: [42, -71],
      layers: baseLayer,
      zoom: 5
    });
    state.pins.forEach(pin => {
      L.mapquest
        .textMarker(
          [pin.locations[0].latLng.lat, pin.locations[0].latLng.lng],
          {
            text: `${pin.locations[0].adminArea5}, ${pin.locations[0].adminArea3}`,
            subtext: "Click for Farm Details",
            position: "right",
            type: "marker",
            hover: "Howdy",
            icon: {
              primaryColor: "#333333",
              secondaryColor: "#333333",
              size: "sm"
            }
          }
        )
        .addTo(map);
    });

    L.marker([30, -90], {
      icon: L.mapquest.icons.marker({
        primaryColor: "#22407F",
        secondaryColor: "#3B5998",
        shadow: true,
        size: "md"
        // symbol: 'T'
      })
    }).addTo(map);

    map.addControl(L.mapquest.control());

    // L.mapquest
    //   .directionsControl({
    //     routeSummary: {
    //       enabled: false
    //     },
    //     narrativeControl: {
    //       enabled: true,
    //       compactResults: false
    //     }
    //   })
    //   .addTo(map);

    // https://leafletjs.com/reference.html#control-layers
    L.control
      .layers(
        {},
        {
          Temperature: temperatureLayer,
          Precipitation: precipitationLayer,
          Wind: windLayer
        }
      )
      .addTo(map);
  }
}

//  ADD ROUTER HOOKS HERE ...
router.hooks({
  before: (done, params) => {
    let view = "Home";

    if (params && params.data) {
      view = params.data.view ? capitalize(params.data.view) : "Home";
    }

    if (view === "Contact") {
      // Verify the environment are being consumed. Placed here as this is the first place that the environment is being consumed.
      // Since it is not always possible to console log the entire `process.env` variable, we will output each attribute required below.
      // let requestBody = {
      //   locations: [],
      //   options: {
      //     maxResults: 1,
      //     thumbMaps: true,
      //     ignoreLatLngInput: false
      //   }
      // };
      // store.Contact.farms.forEach(farm => {
      //   requestBody.locations.push({
      //     city: farm.city,
      //     state: farm.state,
      //     address: farm.address1
      //   });
      // });
      // axios
      //   .post(
      //     `https://www.mapquestapi.com/geocoding/v1/batch?key=${process.env.MAPQUEST_KEY}`,
      //     requestBody
      //   )
      //   .then(response => {
      //     store.Contact.pins = response.data.results;
      //     done();
      //   });
    } else {
      done();
    }
  }
});

router
  .on({
    "/": () => render(),
    ":view": params => {
      let view = capitalize(params.data.view);
      if (view in store) {
        render(store[view]);
      } else {
        console.log(`View ${view} not defined`);
        render(store.Viewnotfound);
      }
    }
  })
  .resolve();
