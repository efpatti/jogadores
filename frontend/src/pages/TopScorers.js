import React, { useState, useEffect } from "react";
import axios from "axios";

const TopScorers = () => {
  const [topPlayers, setTopPlayers] = useState([]);

  useEffect(() => {
    async function fetchTopPlayers() {
      try {
        const response = await axios.get("http://localhost:5000/top-scorers");
        setTopPlayers(response.data.response); // Assuming `response` is the array you want to use
      } catch (error) {
        console.log(error);
      }
    }

    fetchTopPlayers();
  }, []);

  return (
    <div className="font-mono">
      <h1 className="text-center text-3xl font-bold">2019</h1>
      <div className="grid md:grid-cols-3 sm:grid-cols-1 lg:grid-cols-3 gap-2 justify-items-center">
        {topPlayers.map((player, index) => (
          <div
            className="w-10/12 shadow-sm shadow-black bg-slate-100 rounded-md text-black grid grid-cols-2 mb-5"
            key={index}
          >
            <div className="flex items-center">
              <img
                src={player.player.photo}
                alt={player.player.name}
                className="rounded-full shadow shadow-lg shadow-black"
              />
            </div>
            <div className="md:p-5 sm:p-2 md:leading-5 sm:leading-2 p-5">
              <h1 className="text-2xl font-semibold">{player.player.name}</h1>
              <p>
                Gols:{" "}
                <span className="font-semibold">
                  {player.statistics[0].goals.total}
                </span>
              </p>
              <p>
                Assistências:{" "}
                <span className="font-semibold">
                  {player.statistics[0].goals.assists}
                </span>
              </p>
              <p>
                Chutes no gol:{" "}
                <span className="font-semibold">
                  {player.statistics[0].shots.on}
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopScorers;
