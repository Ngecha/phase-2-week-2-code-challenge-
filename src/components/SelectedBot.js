import React from "react";

/// The selected Army
function SelectedBot({ content, handleReleaseBot }) {
  return (
    <div className="col-3 p-1">
      <div
        className="card"
        key={content.id}
        onClick={() => handleReleaseBot(content.id)}
      >
        <img className="card-img-top" src={content.avatar_url} alt="news item" />
        <div className="card-body">
          <h3 className="card-title">{content.name}</h3>
          <h4 className="card-title">{content.bot_class}</h4>
          <p className="card-text">{content.catchphrase}</p>
          <div>
            <p>Health: {content.health} </p>
            <p>Damage: {content.damage}</p>
            <p>Armor: {content.armor}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SelectedBot;
