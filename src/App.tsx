import './App.css';
import React, {FormEvent, useCallback, useEffect, useState} from "react";
import NavBar from './NavBar/NavBar';
import ToDoList from './ToDoList/ToDoList';
import {EventProps, initialEvents} from "./Event/Event";


export const App = () => {
    const [events, setEvents] = useState<EventProps[]>(initialEvents);

    useEffect(() => console.log(events), [events]);

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

    const onChangeArea = (inx: number, e: FormEvent) => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      setEvents(events.map((ev, i) => i === inx ? {...ev, text: e.target.value} : ev))
    }

    return (
        <div className="App">
            <NavBar onEventAdd={onAddEvent}/>
            <ToDoList events={events} 
            onChange={onEventChange}
            onChangeArea ={onChangeArea}
            onClick={onDeleteEvent}/>
        </div>
  );
}
