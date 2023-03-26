import React from "react";

const PopupSuccessOperation = ({ message, errorPopup }) => {
  if (message === null) {
    return null;
  }
  return <div className={errorPopup ? "popupError" : "popupSuccees"}>{message}</div>;
};

export default PopupSuccessOperation;
