import { useState, useEffect } from 'react';
import { firestore } from "../firebase_setup/firestore";
import { addDoc, collection, getDocs, orderBy, serverTimestamp, query, deleteDoc, doc } from "@firebase/firestore";


export default function Comments({id}){
    const [comments, setComments] = useState([]);
    const [name, setName] = useState("");
    const [comment, setComment] = useState("");

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

    const submitHandler = (e) => {
        e.preventDefault()
        handleSubmit(comment, name);
        setName("");
        setComment("");
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

    // async function updateComment(firestore){
        
    // }


    useEffect(() => {
        fetchComments(firestore);
    }, []);
    return (
        <div className="comments">
        <form onSubmit={submitHandler}>
            <input type="text" value={name}  onChange={(e) => setName(e.target.value)}/>
            <textarea type="text" value={comment}  onChange={(e) => setComment(e.target.value)}/>
            <button type="submit">Save</button>
        </form>
        <h2>Comments</h2>
        <ul>
            {comments.map((comment, index) => (
                <>
                <li key={index}>{comment.data.name} says, {comment.data.comment}</li>
                 {/* <button onClick={}>Edit</button> */}
                <button onClick={()=>deleteComment(firestore, comment.id)}>Delete</button> 
                </>
            ))}
        </ul>
    </div> 

    )
}