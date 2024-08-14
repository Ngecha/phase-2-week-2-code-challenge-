import React from "react";

function BotItem({ bots, handleClicked, handleDelete }) {
  console.log(bots);
  return (
    <div className="d-flex flex-wrap">
      <h2 className="display-4">Available Bots</h2>
      <div className="d-flex flex-wrap">
        {bots.map((bot) => (
         ///// The bot card
         <div 
            className="card m-auto"
            onClick={() => handleClicked(bot.id)}
            key={bot.id}
            style={{ width: 18 + "em" }}
          >
            <img
              className="card-img-top"
              src={bot.avatar_url}
              alt="news item"
            />
            <div className="card-body">
              <h3 className="card-title">{bot.name}</h3>
              <h4 className="card-title">{bot.bot_class}</h4>
              <p className="card-text">{bot.catchphrase}</p>
              
              <p>Health: {bot.health} </p> <p>Damage: {bot.damage}</p>{" "}
              <p>Armor: {bot.armor}</p>
              <center>
                <button
                  type="button"
                  className="btn btn-outline-danger"
                  onClick={() => handleDelete(bot.id)} //delete button
                >
                  X
                </button>
              </center>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BotItem;
