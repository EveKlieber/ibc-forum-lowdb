import { useState } from 'react';
import axios from 'axios';



const Comment = (props) => {

  const [message, setMessage] = useState(props.comment.message); // default value
  const [isEdit, setIsEdit] = useState(false)


const putMessage = async () => {
  const res = await axios.put("http://localhost:4000", {
    id: props.comment.id,
    message: message,
  })
  setIsEdit(!isEdit)
}


  
  return (
    <div className="comment">
      <h3>{props.comment.name}</h3>
      <h5>{props.comment.title}</h5>
      {!isEdit ? <p> {message}</p> : null}
      {isEdit ? (
        <textarea
        value = {message}
        onChange={(e) => {
          setMessage(e.target.value)
        }}

      ></textarea>) : null}

      {/* <p>{props.comment.message}</p> */}
      <p className="date">{props.comment.date}</p>
      <button onClick={() => props.onDelete(props.comment.id)}>delete</button>

      {!isEdit ?<button onClick={() => setIsEdit(!isEdit)}>edit</button> : null }

      {isEdit ? <button onClick={(putMessage) }>Done</button> : null }
    </div>
  );
};

export default Comment;
