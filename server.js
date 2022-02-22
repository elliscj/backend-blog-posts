const express = require("express");

const app = express();

const PORT = 3001;

app.use(express.json());

app.get("/api/blog/:tag", (req, res) => {
  const city = req.params.city;
  const state = req.params.state;
  const category = req.params.category;
  axios
    .get(``)
    .then(({ data }) => {
      res.send(data);
    })
    .catch((error) => {
      console.log(error);
      res.status(500).send(error);
    });
});

app.listen(PORT, () => console.log("now listening on http://localhost/3001"));
