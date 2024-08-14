import React from "react";
import SelectedBot from "./SelectedBot";

function YourBotArmy({ electedBot, bots, setElectedBot }) {
  // delete function
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

  //function to get the ids of the selected to be removed bots.

  console.log(theSelectedArmy);
  console.log(electedBot);

  //iterates through the filtered and added bot items and appends the details to a bot card
  const theeBots = theSelectedArmy.map((content)=> (
    <SelectedBot
      content={content}
      key={content.id}
      handleReleaseBot={handleReleaseBot}
    />
  ));

  return (
    <div>
      <div className="row m-auto">
        <center>
          <h2>Your Army</h2>
        </center>
        {theeBots}
      </div>
    </div>
  );
}

export default YourBotArmy;
