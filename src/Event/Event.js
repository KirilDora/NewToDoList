

let events = [
  {checked:false, text: 'Do homework'},
  {checked:false, text: 'Cook dinner'},
  {checked:false, text: 'Cleen flat'},
  {checked:true, text: 'Attend school'}
]

const Event = (props) => {
  return(
    <div>
      <input type="checkbox" checked={props.checked}> </input>
      <div>{props.text}</div>
    </div>
  )
}

export let convertEvents = () => {
  return (
    events.map(() => (<Event props={events}/>))
  )
}


export default Event;
