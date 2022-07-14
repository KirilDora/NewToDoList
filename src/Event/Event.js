import React from "react";

export const events = [
  {checked:false, text: 'Do homework'},
  {checked:false, text: 'Cook dinner'},
  {checked:false, text: 'Cleen flat'},
  {checked:true, text: 'Attend school'}
]

const Event = (props) => {
  return(
    <div>
      <input type="checkbox" checked={props.checked} />
      <div>{props.text}</div>
    </div>
  )
}

export default Event;
