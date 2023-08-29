import { Router } from "express";
import Farmer from "../models/Farmer.js";
import Farm from "../models/Farm.js";
import axios from "axios";

const router = Router();

// Create farmer route
router.post("/", async (request, response) => {
  try {
    const newFarmer = new Farmer(request.body);

    if (newFarmer.address1 && newFarmer.city && newFarmer.state) {
      const requestData = {
        location: `${newFarmer.address1} ${newFarmer.address2} ${newFarmer.city} ${newFarmer.state}`,
        options: {
          thumbMaps: false
        }
      };

      await axios
        .post(
          `https://www.mapquestapi.com/geocoding/v1/address?key=${process.env.MAPQUEST_KEY}`,
          requestData
        )
        .then(async mapquestData => {
          newFarmer.lat = mapquestData.data.results[0].locations[0].latLng.lat;
          newFarmer.lng = mapquestData.data.results[0].locations[0].latLng.lng;
          const data = await newFarmer.save();

          response.json(data);
        });
    }
  } catch (error) {
    // Output error to the console incase it fails to send in response
    console.log(error);

    if ("name" in error && error.name === "ValidationError")
      return response.status(400).json(error.errors);

    return response.status(500).json(error.errors);
  }
});

// Get all farmers route
router.get("/", async (request, response) => {
  try {
    // Store the query params into a JavaScript Object
    const query = request.query; // Defaults to an empty object {}

    const data = await Farmer.find(query);

    response.json(data);
  } catch (error) {
    // Output error to the console incase it fails to send in response
    console.log(error);

    return response.status(500).json(error.errors);
  }
});

// Get a single farm by ID
router.get("/:id", async (request, response) => {
  try {
    const data = await Farmer.findById(request.params.id);

    response.json(data);
  } catch (error) {
    // Output error to the console incase it fails to send in response
    console.log(error);

    return response.status(500).json(error.errors);
  }
});

// Delete a farmer by ID
router.delete("/:id", async (request, response) => {
  try {
    const data = await Farmer.findByIdAndRemove(request.params.id, {});

    response.json(data);
  } catch (error) {
    // Output error to the console incase it fails to send in response
    console.log(error);

    return response.status(500).json(error.errors);
  }
});

// Update a single farmer by ID
router.put("/:id", async (request, response) => {
  try {
    const body = request.body;

    const data = await Farmer.findByIdAndUpdate(
      request.params.id,
      {
        $set: {
          name: body.name,
          address1: body.address1,
          address2: body.address2,
          city: body.city,
          zip: body.zip,
          farmgoods: body.farmgoods,
          opportunity: body.opportunity
        }
      },
      {
        new: true
      }
    );

    response.json(data);
  } catch (error) {
    // Output error to the console incase it fails to send in response
    console.log(error);

    if ("name" in error && error.name === "ValidationError")
      return response.status(400).json(error.errors);

    return response.status(500).json(error.errors);
  }
});

export default router;
