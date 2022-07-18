import './App.css';
import React, {useCallback, useState} from "react";
import NavBar from './NavBar/NavBar';
import ToDoList from './ToDoList/ToDoList';
import {EventProps, initialEvents} from "./Event/Event";


export const App = () => {
    const [events, setEvents] = useState<EventProps[]>(initialEvents);

    const onAddEvent = useCallback(() => {
        const input = prompt("What you want to do?");
        if (!input) {
            alert("You need to enter the text");
            return;
        }
        setEvents([...events, {checked: false, text: input}]);
    }, [events])

    const onEventChange = (event: string) => {
        setEvents(events.map(it => it.text === event ? {...it, checked: !it.checked} : it));
    };

    const onDeleteEvent = (event: string) => {
      setEvents(events.filter((ev)=>ev.text !== event));
    }

    const onChangeArea = () => {
      return 0;
    }

    return (
        <div className="App">
            <NavBar onEventAdd={onAddEvent}/>
            <ToDoList events={events} 
            onChange={onEventChange}
            onChangeArea = {onChangeArea} 
            onClick={onDeleteEvent}/>
        </div>
  );
}
