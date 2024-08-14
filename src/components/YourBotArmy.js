import React from "react";
import SelectedBot from "./SelectedBot";

function YourBotArmy({ electedBot, bots, setElectedBot }) {
  // Release function
  function handleReleaseBot(input) {
    setElectedBot(electedBot.filter((bot) => bot !== input));
    console.log(input);
  }

  // to filter the clicked bot and the  bot list

  let theSelectedArmy = bots.filter((bot) => {
    for (let i = 0; i < electedBot.length; i++) {
      if (bot.id === electedBot[i]) {
        return bot;
      }
    }
  });


  return (
    <div>
      <div className="row m-auto">
        <center>
          <h2>Your Army</h2>
        </center>
        <SelectedBot
      theSelectedArmy={theSelectedArmy}
      handleReleaseBot={handleReleaseBot}
    />
      </div>
    </div>
  );
}

export default YourBotArmy;
