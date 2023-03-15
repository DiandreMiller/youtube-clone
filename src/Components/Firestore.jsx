// import { firestore } from "../firebase_setup/firebase"
// import { useState } from "react"

// const Firestore = () => {
//     const [comment , setComment] = useState("");
//     const [userName , setUserName] = useState("");

//     const sumbit = (e) => {
//         e.preventDefault();
         
//         // Add data to the store
//         firestore.collection("data").add({
//             Comment: comment,
//             UserName: userName 
//         })
//         .then((docRef) => {
//             alert("Thank you! Your comment is submitted");
//         })
//         .catch((error) => {
//             console.error("Error adding document: ", error);
//         });
//     }
 
//     return (
//         <div>
//             <center>
//                 <form style={{marginTop:"200px" }}
//                   onsumbitmit={(event) => {sumbit(event)}}>
//                     <input type="text" placeholder="your comment"
//                       onChange={(e)=>{setComment(e.target.value)}} />
//                       <br/><br/>
//                     <input type="text" placeholder="Course Enrolled"
//                       onChange={(e)=>{Setcourse(e.target.value)}}/>
//                       <br/><br/>
//                     <button type="sumbitmit">sumbitmit</button>
//                 </form>
//             </center>
//         </div>
//     );
// }
 
// export default Firestore;
