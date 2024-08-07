import React from "react";

function Entry(props) {
  return (
    <div className="term">
      <div className="contents">
        <dt>
          <span className="emoji" role="img" aria-lebel="Tense Biceps">
            {props.emoji}
          </span>
        </dt>
        <dt>
          <span className="name">{props.name}</span>
        </dt>
        <dd className="desc">{props.description}</dd>
      </div>
    </div>
  );
}

export default Entry;
