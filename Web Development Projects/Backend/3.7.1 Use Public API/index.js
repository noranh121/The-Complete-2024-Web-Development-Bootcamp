import express from "express";
import axios from "axios";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
const API_URL = "https://holidayapi.com";


const myKey = "02336132-7444-43cd-8ae9-4ada2ac0f02c";


app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs", { content: "Waiting for data..." });
});

app.get("/get-holidays", async (req, res) => {
  try {
    const result = await axios.get(API_URL + '/v1/holidays', {
      params: {
        key: myKey,
        country: req.query.country,
        year: req.query.year
      }
    });
    res.render("index.ejs", { content: JSON.stringify(result.data) });
  } catch (error) {
    res.render("index.ejs", { content: JSON.stringify(error.response.data) });
  }
});

app.get("/get-countries", async (req, res) => {
  try {
    const result = await axios.get(API_URL + '/v1/countries', {
      params: {
        key: myKey,
      }
    });
    res.render("index.ejs", { content: JSON.stringify(result.data) });
  } catch (error) {
    res.render("index.ejs", { content: JSON.stringify(error.response.data) });
  }
});

app.get("/get-workday", async (req, res) => {
  try {
    const result = await axios.get(API_URL + '/v1/workday', {
      params: {
        key: myKey,
        country: req.query.country,
        start: req.query.start,
        days: req.query.days
      }
    });
    res.render("index.ejs", { content: JSON.stringify(result.data) });
  } catch (error) {
    res.render("index.ejs", { content: JSON.stringify(error.response.data) });
  }
});

// app.post("/post-secret", async (req, res) => {
//   // TODO 2: Use axios to POST the data from req.body to the secrets api servers.
//   try {
//     const result = await axios.post(API_URL + "/secrets", req.body, config);
//     res.render("index.ejs", { content: JSON.stringify(result.data) });
//   } catch (error) {
//     res.render("index.ejs", { content: JSON.stringify(error.response.data) });
//   }
// });

// app.post("/put-secret", async (req, res) => {
//   const searchId = req.body.id;
//   // TODO 3: Use axios to PUT the data from req.body to the secrets api servers.
//   try {
//     const result = await axios.put(API_URL + "/secrets/" + searchId, req.body, config);
//     res.render("index.ejs", { content: JSON.stringify(result.data) });
//   } catch (error) {
//     res.render("index.ejs", { content: JSON.stringify(error.response.data) });
//   }
// });

// app.post("/patch-secret", async (req, res) => {
//   const searchId = req.body.id;
//   // TODO 4: Use axios to PATCH the data from req.body to the secrets api servers.
//   try {
//     const result = await axios.patch(API_URL + "/secrets/" + searchId, req.body, config);
//     res.render("index.ejs", { content: JSON.stringify(result.data) });
//   } catch (error) {
//     res.render("index.ejs", { content: JSON.stringify(error.response.data) });
//   }
// });

// app.post("/delete-secret", async (req, res) => {
//   const searchId = req.body.id;
//   // TODO 5: Use axios to DELETE the item with searchId from the secrets api servers.
//   try {
//     const result = await axios.delete(API_URL + "/secrets/" + searchId, config);
//     res.render("index.ejs", { content: JSON.stringify(result.data) });
//   } catch (error) {
//     res.render("index.ejs", { content: JSON.stringify(error.response.data) });
//   }
// });


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
