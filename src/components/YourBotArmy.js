import React from "react";
import SelectedBot from "./SelectedBot";

function YourBotArmy({ electedBot, bots, setElectedBot }) {
  // delete function
  function handleDelete(input) {
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

  //functon to get the ids of the selected to be removed bots in the selected army

  console.log(theSelectedArmy);
  console.log(electedBot);

  //iterates through the filtered an added bot items and appends the details to a bot card
  const theeBots = theSelectedArmy.map((content, index) => (
    <SelectedBot
      image={content.avatar_url}
      name={content.name}
      health={content.health}
      damage={content.damage}
      armor={content.armor}
      bot_class={content.bot_class}
      catchphrase={content.catchphrase}
      key={content.name + index}
      id={content.id}
      handleDelete={handleDelete}
    />
  ));

  return (
    <div>
      <div className="row m-auto">
        <center>
          <h2 style={{ color: "red" }}>Bot Army</h2>
        </center>
        {theeBots}
      </div>
    </div>
  );
}

export default YourBotArmy;
