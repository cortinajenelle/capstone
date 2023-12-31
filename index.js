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
    console.log(state);
    state.farms.forEach(farm => {
      L.mapquest
        .textMarker([farm.lat, farm.lng], {
          text: farm.name,
          subtext: "Click for Farm Details",
          position: "right",
          type: "marker",
          hover: "Howdy",
          icon: {
            primaryColor: "#333333",
            secondaryColor: "#333333",
            size: "sm"
          }
        })
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

    // Contact Form Submit Handler
    document.querySelector("#contactform").addEventListener("submit", event => {
      event.preventDefault();

      const inputList = event.target.elements;
      console.log("Input Element List", inputList);

      const farmgoods = [];

      for (let input of inputList.farmgoods) {
        if (input.checked) {
          farmgoods.push(input.value);
        }
      }

      const freelancers = [];

      for (let input of inputList.freelancers) {
        if (input.checked) {
          freelancers.push(input.value);
        }
      }

      const requestData = {
        name: inputList.name.value,
        address1: inputList.address1.value,
        address2: inputList.address2.value,
        city: inputList.city.value,
        state: inputList.state.value,
        zip: inputList.zip.value,
        farmgoods: farmgoods,
        opportunity: freelancers
      };

      console.log("request Body", requestData);

      axios
        // Make a POST request to the API to create a new pizza
        .post(`${process.env.LANDSCAPE_API}/farmers`, requestData)
        .then(response => {
          //  Then push the new pizza onto the Pizza state pizzas attribute, so it can be displayed in the pizza list
          store.Contact.farms.push(response.data);
          store.Farmers.farmers.push(response.data);
          router.navigate("/Contact");
        })
        // If there is an error log it to the console
        .catch(error => {
          console.log("UH OH!", error);
        });
    });
  }
}

//  ADD ROUTER HOOKS HERE ...
router.hooks({
  before: (done, params) => {
    let view = "Home";

    if (params && params.data) {
      view = params.data.view ? capitalize(params.data.view) : "Home";
    }

    switch (view) {
      case "Contact":
      case "Farmers":
        axios.get(`${process.env.LANDSCAPE_API}/farmers`).then(response => {
          console.log(response.data);
          store.Contact.farms = response.data;
          store.Farmers.farmers = response.data;
          done();
        });
        break;
      default:
        done();
    }
  },
  already: params => {
    const view =
      params && params.data && params.data.view
        ? capitalize(params.data.view)
        : "Home";

    render(store[view]);
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
