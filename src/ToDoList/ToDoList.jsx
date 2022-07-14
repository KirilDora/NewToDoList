import React from 'react';
import Event, { events } from "../Event/Event";

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

const ToDoList = () => {
    return(
      <>
          {events.map((event) => <Event {...event} />)}
      </>
  )
}

export default ToDoList;