import { CommentsContext } from "../context/CommentsContext";
import { useState, useContext } from "react";
import { v4 as uuid } from "uuid";
import  axios  from "axios";

const AddComment = (props) => {
  //"topic1"
  const current = new Date();
  const date = `${current.getDate()}:${current.getHours()}:${current.getMinutes()}`;

  // const [comments, setComments] = useContext(CommentsContext);
  const [newComment, setNewComment] = useState({
    name: "",
    title: "",
    message: "",
    type: props.type, // kommt von Topic1 type{"topic2"}
    date: date,
    id: "",
  });

  // const onSubmitLocalStorage = (e) => {
  //   // e.preventDefault();
  //   const { userName, commentTitle, message, id } = newComment;

  //   let toStorage = JSON.parse(localStorage.getItem(props.type)) || []; // wenn null, undefined dann nimm []

  //   toStorage.push(newComment);
  //   localStorage.setItem(props.type, JSON.stringify(toStorage));  // props type wird key.
  //   setComments([
  //     ...comments,
  //     {
  //       userName: userName,
  //       commentTitle: commentTitle,
  //       message: message,
  //       id: id,
  //       type: props.type,
  //       date: date,
  //     },
  //   ]);
  //   e.target.reset();
  // };

  const onSubmit = async (e) => {
    // e.preventDefault();
    console.log("submit");
    const res = await axios.post("http://localhost:4000", newComment);
    console.log("newComment", newComment)
  };

  return (
    <form onSubmit={onSubmit} className="messageform">
      <label>UserName:</label>
      <input
        name="name"
        onChange={(e) => {
          setNewComment({ ...newComment, name: e.target.value });
        }}
        type="text"
        required
        placeholder="Enter your UserName"
      />
      <label>Comment Title:</label>
      <input
        title="title"
        onChange={(e) => {
          setNewComment({ ...newComment, title: e.target.value });
        }}
        type="text"
        required
        placeholder="Enter the title of your comment"
      />

      <label>Your Message:</label>
      <textarea

        onChange={(e) => {
          setNewComment({ ...newComment, message: e.target.value, id: uuid() });
        }}
        name="message"
        id=""
        cols="30"
        rows="10"
        placeholer="Enter your message"
        required
      >

      </textarea>
      <button type="submit">Add your comment</button>
    </form>
  );
};
export default AddComment;
