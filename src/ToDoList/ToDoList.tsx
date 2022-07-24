import React, {FC, FormEvent} from 'react';
import Event, {EventProps} from "../Event/Event";

// const linearMap = function (elements, callback) {
//     const result = [];
//     for (let i = 0; i < elements.length; i++) {
//         result.push(callback(elements[i]));
//     }
//     return result;
// }
//
// function eventToJSX(event) {
//     return (<Event props={event}/>);
// }

interface ToDoListProps {
    events: EventProps[];
    onChange: (text: string) => void;
    onClick: (text: string) => void;
    onChangeArea: (inx: number, ev: FormEvent) => void;
}

const ToDoList: FC<ToDoListProps> = ({events, onChange, onClick, onChangeArea}) => {
    return(
      <>
          {events.sort((a, b) => {
              if (a.checked && !b.checked) {
                  return 1;
              }
              if (!a.checked && b.checked) {
                  return -1;
              }
              return 0;
          }).map((event, inx) => (
              <Event
                  onChange={() => onChange(event.text)}
                  onClick={() => onClick(event.text)}
                  onChangeArea={(ev: FormEvent) => onChangeArea(inx, ev)}
                  key={`event-${inx}`}
                  {...event}
              />)
          )}
      </>
  )
}

export default ToDoList;