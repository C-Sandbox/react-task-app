import React from "react";

const DeleteBtn = (props) => {
  const { clickFunc, passedID } = props;

  return (
    <input 
      type="button" 
      value='X'
      onClick={clickFunc}
      data-id={passedID}
    />
  )
}

export default DeleteBtn;