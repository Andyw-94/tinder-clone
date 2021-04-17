import React, { useState } from "react";
import "./ChatScreen.css";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { Link } from "react-router-dom";
import { Avatar, IconButton } from "@material-ui/core";

function ChatScreen({ image }) {
  const [input, setInput] = useState();
  const [messages, setMessages] = useState([
    {
      name: "Pamela",
      image: "https://iv1.lisimg.com/image/3649081/500full-pamela-anderson.jpg",
      message: "Are you almost here??",
    },
    {
      message: "Yeah, almost",
    },
    {
      name: "Pamela",
      image: "https://iv1.lisimg.com/image/3649081/500full-pamela-anderson.jpg",
      message: "I didn't see you there? 😟",
    },
  ]);

  const handleSend = (e) => {
    e.preventDefault();

    setMessages([...messages, { message: input }]);
    setInput("");
  };

  return (
    <div className="chatScreen">
      <div className="chatScreen__header">
        <Link to="/chat">
          <IconButton>
            <ArrowBackIosIcon className="chatScreen__back" />
          </IconButton>
        </Link>
      </div>
      <p className="chatScreen__timestamp">
        You matched with Pamela on 5/12/2020
      </p>
      {messages.map((message) =>
        message.name ? (
          <div className="chatScreen__message">
            <Avatar
              className="chatScreen__image"
              src={message.image}
              alt={message.name}
            />
            <p className="chatScreen__text">{message.message}</p>
          </div>
        ) : (
          <div className="chatScreen__message">
            <p className="chatScreen__textUser">{message.message}</p>
          </div>
        )
      )}
      <div>
        <form className="chatScreen__input">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="chatScreen__inputField"
            type="text"
            placeholder="Type a message"
          />
          <button onClick={handleSend} className="chatScreen__inputButton">
            SEND
          </button>
        </form>
      </div>
    </div>
  );
}

export default ChatScreen;
