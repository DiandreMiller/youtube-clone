export default function Modal({comment, setComment, name, setName, handleSubmit}){
  
    
    const submitHandler = (e) => {
        e.preventDefault()
        handleSubmit(comment, name);
        setName("");
        setComment("");
    }


    return (
            <div className='comment-modal'>
            {/* <span className="close" onClick={togl}>&times;</span> */}
        <form onSubmit={submitHandler}>
        <label htmlFor="name">Name:</label>
            <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required/>
            <label htmlFor="comment">Comment:</label>
            <textarea type="text" id="comment" value={comment}  onChange={(e) => setComment(e.target.value)} required/>
            <button type="submit">Post</button>
        </form>
            </div>)
        }
