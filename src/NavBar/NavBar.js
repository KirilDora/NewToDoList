import s from './NavBar.module.css'

const NavBar = () => {
  return (
    <div className = {s.navBar}>
      <h1 className={s.phrase}>Your ToDO list</h1>
      <button className={s.addButton}>Add event</button>
    </div>
  )
}

export default NavBar;