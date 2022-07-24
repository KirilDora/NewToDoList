import React, {FC} from "react";
import styles from './navBar.module.css';

interface NavBarProps {
    onEventAdd: () => void;
}

const NavBar: FC<NavBarProps> = ({ onEventAdd }) => {

  return (
    <div className={styles.navBar}>
      <h1 className={styles.phrase}>Your TODO list</h1>
      <button className={styles.addButton} onClick={onEventAdd}>Add event</button>
    </div>
  )
}

export default NavBar;