import React,{useState} from 'react'
import pic1 from './images/avtar.jpg'
import './Card.css'
function Card(props) {
    const[name,setName] = useState(props.name);
    const[job,setJob] = useState(props.job);
    const[about,setAbout] = useState('React · Declarative. React makes it painless to create interactive UIs. This function is a valid React component because it accepts a single “props” (which stands for properties) object argument with data and returns a React element. We call such components “function components” because they are literally JavaScript functions.· Component-Based. Build encapsulated components that manage their own state');
  return (
    <div className='Card'>
        <div className='upper-container'>
            <div className='image-container'>
                <img src={pic1} alt='' height="100px" width="100px"/>
            </div>
        </div>
      <div className="lower-container">
        <h3>{name}</h3>
        <h4>{job}</h4>
        <p>{about}</p>
        <button>visit profile</button>
      </div>
    </div>
  )
}

export default Card
//rcfe