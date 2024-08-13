import React from "react";

function SelectedBot({
  image,
  name,
  health,
  damage,
  armor,
  bot_class,
  catchphrase,
  id,
  handleDelete,
}) {
  return (
    <div className="col-3 p-1">
      <h2>Your Army</h2>

      <div
        className="card border-warning h-100"
        key={id}
        name={id}
        onClick={() => handleDelete(id)}
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
