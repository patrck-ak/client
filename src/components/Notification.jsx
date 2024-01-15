import React from "react";
import Snackbar from "@mui/material/Snackbar";
import Slide from "@mui/material/Slide";

function Notification({ msg, title }) {
  function Transition(props) {
    return <Slide {...props} direction="up" />;
  }

  return (
    <>
      {msg === " " ? (
        <></>
      ) : (
        <>
          <Snackbar
            TransitionComponent={Transition}
            open={true}
            message={msg}
          />
        </>
      )}
    </>
  );
}

export default Notification;
