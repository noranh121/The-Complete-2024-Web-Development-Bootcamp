import express from "express";
import axios from "axios";
import e from "express";

const app = express();
const port = 3000;
const API_URL = "https://secrets-api.appbrewery.com";

//TODO 1: Fill in your values for the 3 types of auth.
const yourUsername = "nora";
const yourPassword = "123";
const yourAPIKey = "38efcbe5-5c6c-4a3f-8111-27ece05195d8";
const yourBearerToken = "0bea1bbb-28c0-40eb-a66a-bf66d39e2e71";

app.get("/", (req, res) => {
  res.render("index.ejs", { content: "API Response." });
});

app.get("/noAuth", async (req, res) => {
  try {
    const result = await axios.get(API_URL + '/random')
    res.render("index.ejs", { content: secret_string(result) });
  }catch(error) {
    res.status(404).send(error.message);
  }
});

app.get("/basicAuth", async (req, res) => {
  try {
    const result = await axios.get(API_URL + '/all', {
      auth: {
        username: yourUsername,
        password: yourPassword,
      },
      params: {
        page: 2
      }
    });
    res.render("index.ejs", { content: JSON.stringify(result.data) });
  }catch(error) {
    res.status(404).send(error.message);
  }
});

app.get("/apiKey", async (req, res) => {
  try {
    const result = await axios.get(API_URL + '/filter', {
      params: {
        apiKey: yourAPIKey,
        score: 5
      }
    });
    res.render("index.ejs", { content: JSON.stringify(result.data) });
  }catch(error) {
    res.status(404).send(error.message);
  }
});

app.get("/bearerToken", async (req, res) => {
  try {
    const result = await axios.get(API_URL + '/secrets/42', {
      headers: {
        Authorization: `Bearer ${yourBearerToken}`
      }
    });
    res.render("index.ejs", { content: secret_string(result) });
  } catch (error) {
    res.status(404).send(error.message);
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

const secret_string = (result) => {
  return `Secret ID: ${result.data.id}\nSecret: ${result.data.secret}\nEmbarrassment Score: ${result.data.emScore}\nUsername: ${result.data.username}`;
};
