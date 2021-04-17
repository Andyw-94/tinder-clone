import React from "react";
import "./SwipeButtons.css";
import ReplayIcon from "@material-ui/icons/Replay";
import CloseIcon from "@material-ui/icons/Close";
import StarIcon from "@material-ui/icons/Star";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FlashOnIcon from "@material-ui/icons/FlashOn";
import { IconButton } from "@material-ui/core";

function SwipeButtons() {
  return (
    <div className="swipeButtons">
      <IconButton className="swipeButtons__repeat">
        <ReplayIcon font-size="large" />
      </IconButton>
      <IconButton className="swipeButtons__left">
        <CloseIcon font-size="large" />
      </IconButton>
      <IconButton className="swipeButtons__star">
        <StarIcon font-size="small" />
      </IconButton>
      <IconButton className="swipeButtons__right">
        <FavoriteIcon font-size="large" />
      </IconButton>
      <IconButton className="swipeButtons__lightning">
        <FlashOnIcon font-size="small" />
      </IconButton>
    </div>
  );
}

export default SwipeButtons;
