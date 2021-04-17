import React from "react";
import Chat from "./Chat";
import "./Chats.css";

function Chats() {
  return (
    <div className="chats">
      <h5>Messages</h5>
      <Chat
        name="Pamela"
        message="I didn't see you there 😟"
        timestamp="40 seconds ago"
        profilePic="https://iv1.lisimg.com/image/3649081/500full-pamela-anderson.jpg"
      />
      <Chat
        name="Amber"
        message="I'll see you there 😉"
        timestamp="20 minutes ago"
        profilePic="http://www.celebsfirst.com/wp-content/uploads/2019/11/amber-heard-attends-puma-x-balmain-launch-event-at-milk-studios-in-los-angeles-211119_13.jpg"
      />
      <Chat
        name="Daisy"
        message="Sorry, I was onset 😅"
        timestamp="1 hour ago"
        profilePic="https://imgix.bustle.com/uploads/image/2019/7/8/5eebb74e-1e9f-46c9-bd90-d039a28e2750-4-190626_bustle_daisyridley_4.jpg?w=1000&fit=max&auto=format&q=70g"
      />
    </div>
  );
}

export default Chats;
