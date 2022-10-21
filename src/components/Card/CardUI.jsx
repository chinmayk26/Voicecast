import React,{useState} from "react";
import './card-style.css';
import ReactAudioPlayer from "react-audio-player";

function Card (props) {
    console.log(props)
    const [show,setShow]=useState(false);
    return (
        
        <div className="card text-center m-4">
            <div classname="overflow">
                <img src={`./images/Audiobook/${props.name}.webp`} alt="image1" width="200rem" />
            </div>
            <div classname="card-body text-dark">
                <p className="card-text text-secondary">
                    {props.name}
                </p>
                <button onClick={() =>{setShow(true)}}  className="btn btn-outline-success">Play Me</button>
                {show?<ReactAudioPlayer src='https://dsrwlysbnaq4x.cloudfront.net/books/Rich Dad Poor Dad.mp3' controls />:null}

            </div>
        </div>
      );
}

export default Card; 