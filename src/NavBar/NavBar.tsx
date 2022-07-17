import React, {FC} from "react";
import './navBar.module.css';

interface NavBarProps {
    onEventAdd: () => void;
}

const NavBar: FC<NavBarProps> = ({ onEventAdd }) => {

  return (
    <div className="navBar">
      <h1 className="phrase">Your TODO list</h1>
      <button className="addButton" onClick={onEventAdd}>Add event</button>
    </div>
  )
}

export default NavBar;