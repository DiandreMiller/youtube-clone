import { useState, useEffect } from 'react';
import { firestore } from "../firebase_setup/firestore";
import { addDoc, collection, getDocs } from "@firebase/firestore";


export default function Comments(){
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

    // async function editComment(firestore){

    // }

    // async function deleteComment(firestore){
        
    // }

    useEffect(() => {
        fetchComments(firestore);
    }, []);
    return (
        <div className="comments">
        <form onSubmit={submitHandler}>
            <input type="text" />
            <textarea type="text" />
            <button type="submit">Save</button>
        </form>
        <h2>Comments</h2>
        <ul>
            {comments.map((comment, index) => (
                <>
                <li key={index}>{comment.name} says, {comment.comment}</li>
                {/* <button onClick={}>Edit</button>
                <button onClick={}>Delete</button> */}
                </>
            ))}
        </ul>
    </div> 

    )
}