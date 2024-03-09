const axios = require("axios");
const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

app.use(cors());

app.get("/top-scorers", async (req, res) => {
  const options = {
    method: "GET",
    url: "https://api-football-beta.p.rapidapi.com/players/topscorers",
    params: {
      season: "2019",
      league: "39",
    },
    headers: {
      "X-RapidAPI-Key": "1136fcefa8msh7685030f419d76dp154591jsn183d22a2edac",
      "X-RapidAPI-Host": "api-football-beta.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);
    const topScorers = response.data;
    res.send(topScorers); // Enviando os dados de volta para o frontend
  } catch (error) {
    console.error(error);
    res.status(500).send("Erro ao buscar os artilheiros");
  }
});

app.listen(PORT, () => {
  console.log(`Server está rodando na porta ${PORT}`);
});
