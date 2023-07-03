import React from "react";
import Avatar from "./Avatar";
import Details from "./Details";

function Card(props) {
  return (
    <div className="card">
      <div className="top">
        <h2 className="name">{props.name}</h2>
        <Avatar imgURL={props.imgURL} />
      </div>
      <div className="bottom">
        <Details info={props.phone} />
        <Details info={props.email} />
        {/* <p className="info">{props.phone}</p>
        <p className="info">{props.email}</p> */}
      </div>
    </div>
  );
}

export default Card;
