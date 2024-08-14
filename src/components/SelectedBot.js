import React from "react";



/// The selected Army
function SelectedBot({//the props passed
  image,
  name,
  health,
  damage,
  armor,
  bot_class,
  catchphrase,
  id,
  handleReleaseBot,
}) {
  return (
    <div className="col-3 p-1">
      <div
        className="card"
        key={id}
        name={id}
        onClick={() => handleReleaseBot(id)}
      >
        <img className="card-img-top" src={image} alt="news item" />
        <div className="card-body">
          <h3 className="card-title">{name}</h3>
          <h4 className="card-title">{bot_class}</h4>
          <p className="card-text">{catchphrase}</p>
          <div>
            <p>Health: {health} </p>
            <p>Damage: {damage}</p>
            <p>Armor: {armor}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SelectedBot;
