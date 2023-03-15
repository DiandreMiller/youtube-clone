import YouTube from "react-youtube";
import "./ShowVideo.css";
import { useParams} from "react-router-dom";
import { useState, useEffect } from 'react';
import { firestore } from "../firebase_setup/firestore";
import { addDoc, collection, getDocs } from "@firebase/firestore"

export default function ShowVideo() {
    const [comments, setComments] = useState([]);

    const handleSubmit = (commentData, nameData) => {
        const ref = collection(firestore, "comments") // Firebase creates this automatically

        let data = {
            comment: commentData,
            name: nameData
        }
        try {
            addDoc(ref, data);
            fetchComments(firestore);
        } catch (err) {
            console.log(err)
        }
    }

    const submitHandler = (e) => {
        e.preventDefault()
        handleSubmit(e.target[1].value, e.target[0].value)
    }

    async function fetchComments(firestore) {
        const commentsCol = collection(firestore, 'comments');
        const commentsSnapshot = await getDocs(commentsCol);
        const commentsList = commentsSnapshot.docs.map(doc => doc.data());
        setComments(commentsList);
    }

    useEffect(() => {
        fetchComments(firestore);
    }, []);

    const { id } = useParams();

    

    return (
        <div className="showVideo">
        <div className="video">
            <YouTube videoId={id} />
        </div>
            <div className="comments">
                <form onSubmit={submitHandler}>
                    <input type="text" />
                    <textarea type="text" />
                    <button type="submit">Save</button>
                </form>
                <h2>Comments</h2>
                <ul>
                    {comments.map((comment, index) => (
                        <li key={index}>{comment.name} says, {comment.comment}</li>
                    ))}
                </ul>
            </div> 
        </div>
    )
}

