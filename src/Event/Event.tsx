import React, {FormEvent} from "react";

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

type Props = EventProps &
    {
        onChange: () => void;
        onClick: () => void;
        onChangeArea: (ev: FormEvent) => void;
    }

const Event = (props: Props) => {
  return(
    <div>
      <input type="checkbox" onChange={props.onChange} checked={props.checked} />
      <textarea value={props.text} onChange={props.onChangeArea}/>
      <button onClick={props.onClick}>delete</button>
    </div>
  )
}

export default Event;
