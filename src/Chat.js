import { Avatar } from "@material-ui/core";
import React from "react";
import "./Chat.css";
import { Link } from "react-router-dom";

function Chat({ name, message, timestamp, profilePic }) {
  return (
    <Link to={`/chat/${name}`}>
      <div className="chat">
        <Avatar className="chat__image" src={profilePic} />
        <div className="chat__right">
          <div className="chat__details">
            <h4>{name}</h4>
            <p>{message}</p>
          </div>
          <p className="chat__timestamp">{timestamp}</p>
        </div>
      </div>
    </Link>
  );
}

export default Chat;
