import React from "react";

export const initialEvents: EventProps[] = [
  {checked:false, text: 'Do homework'},
  {checked:false, text: 'Cook dinner'},
  {checked:false, text: 'Cleen flat'},
  {checked:true,  text: 'Attend school'}
]

export interface EventProps {
    checked: boolean;
    text: string;
}

const Event = (props: EventProps & {onChange: () => void}) => {
  return(
    <div>
      <input type="checkbox" onChange={props.onChange} checked={props.checked} />
      <div>{props.text}</div>
    </div>
  )
}

export default Event;
