import { useState, useEffect } from 'react';
import { firestore } from "../firebase_setup/firestore";
import { addDoc, collection, getDocs, orderBy, serverTimestamp, query, deleteDoc, doc } from "@firebase/firestore";
import "./Comments.css"



export default function Comments({id}){
    const [comments, setComments] = useState([]);
    const [name, setName] = useState("");
    const [comment, setComment] = useState("");

    const submitHandler = (e) => {
        e.preventDefault()
        handleSubmit(comment, name);
        setName("");
        setComment("");
    }

      const handleSubmit = async (commentData, nameData) => {
      const ref = collection(firestore, "comments") // Firebase creates this automatically
        let data = {
            comment: commentData,
            name: nameData,
            timestamp: serverTimestamp(),
            id: id
        }
        try {
            await addDoc(ref, data);
            fetchComments(firestore);
        } catch (err) {
            console.log(err)
        }
    }

    async function fetchComments(firestore) {
        const commentsCol = collection(firestore, 'comments');
        const commentsSnapshot = await getDocs(query(commentsCol,orderBy('timestamp', 'desc')));
        const commentsList = commentsSnapshot.docs.map(doc => {
            let data = doc.data();
            return {data: data, id: doc.id}});
        setComments(commentsList);
    }

     async function deleteComment(firestore,id){
        await deleteDoc(doc(firestore, "comments", id));
        fetchComments(firestore)
    }

    useEffect(() => {
        fetchComments(firestore);
    }, []);
    return (
         <div className="comments">
            <form onSubmit={submitHandler}>
                <h2>Leave Comment</h2>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required />
                <label htmlFor="comment">Comment:</label>
                <textarea type="text" id="comment" value={comment} onChange={(e) => setComment(e.target.value)} required />
                <button type="submit">Post</button>
            </form>
            <div className='comment-section'>
        <h2>Comments</h2>
            {comments.map((comment, index) => (
                <>
                <div className='comment' key={index}>
                    <p className='author'><strong>{comment.data.name}:</strong></p>
                    <p>{comment.data.comment}</p>
                </div>
                <button onClick={()=>deleteComment(firestore, comment.id)}>Delete</button> 
                </>
            ))}
            </div>
    </div> 
    )
}

