import YouTube from "react-youtube";
import "./ShowVideo.css";
import { useParams} from "react-router-dom";
import { useState } from 'react';

// firebase imports

import { collection, doc, setDoc } from "firebase/firestore";
import db from "../firebase_setup/db";


export default function ShowVideo() {
    const [name , setName] = useState("");
 	const [comment , setComment] = useState("");

   
   
    // const dataRef = useRef()
    const { id } = useParams();

    const submitHandler = (e) => {
        e.preventDefault()
        // handleSubmit(dataRef.current.value)
        // dataRef.current.value = ""
       db.collection("comments").add({
            			Name: name,
            			Comment: comment
            		})
            		.then((docRef) => {
            			alert("Comment Successfully Submitted");
            		})
            		.catch((error) => {
            			console.error("Error adding document: ", error);
            		});
            	}
    

    return (
        <div className="showVideo">
        <div className="video">
            <YouTube videoId={id} />
        </div>
            {/* <form onSubmit={submitHandler}>
                <input type="text" ref={dataRef} />
                <button type="submit">Save</button>
            </form> */}
            <form onSubmit={(e) => {submitHandler(e)}}>
					<input type="text" placeholder="your name"
					onChange={(e)=>{setName(e.target.value)}} />
					<br/><br/>
					<input type="text" placeholder="your comment"
					onChange={(e)=>{setComment(e.target.value)}}/>
					<br/><br/>
                    <button type="submit">Submit</button>
				</form>
        </div>
    )
}