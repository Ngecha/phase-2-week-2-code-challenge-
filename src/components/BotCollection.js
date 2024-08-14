import React, { useEffect, useState } from "react";
import BotItem from "./BotItem";
import YourBotArmy from "./YourBotArmy";

function BotCollection() {
  const [bots, setBots] = useState([]);
  const [electedBot, setElectedBot] = useState([]);

  const url = "http://localhost:3000/bots"

  useEffect(() => {
    fetch(url)
      .then((r) => r.json())
      .then((data) => {
        console.log(data);
        setBots(data);
      });
  }, []);

  async function handleDelete(botId) {
    try{
      await  fetch(`url/${botId}`, {
        method: "DELETE",
      });
      setBots((bots) => bots.filter((bt) => bt.id !== botId));
      }
      catch (error) {
        console.error('Error deleting transaction:', error);
    }
  }


  function handleClicked(idInput) {
    setElectedBot([...electedBot, idInput]);
  }

  return (
    <div>
      <YourBotArmy electedBot={electedBot} bots={bots} setElectedBot={setElectedBot} />
      <div className="container mt-4">
        <BotItem
          handleClicked={handleClicked}
          handleDelete={handleDelete}
          bots={bots}
        />
      </div>
    </div>
  );
}

export default BotCollection;
