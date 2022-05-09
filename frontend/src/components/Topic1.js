import { CommentsContext } from "../context/CommentsContext";
import { useContext, useEffect } from "react";
import AddComment from "./AddComment";
import Comment from "./Comment";
import { v4 as uuid } from "uuid";
import axios from "axios";

const Topic1 = () => {
  const [comments, setComments] = useContext(CommentsContext);

  const current = new Date();
  const date = `${(current.getMonth() + 1)
    .toString()
    .padStart(2, "0")}/${current
    .getDate()
    .toString()
    .padStart(2, "0")}/${current
    .getFullYear()
    .toString()
    .padStart(4, "0")} ${current
    .getHours()
    .toString()
    .padStart(2, "0")}:${current
    .getMinutes()
    .toString()
    .padStart(2, "0")}:${current.getSeconds().toString().padStart(2, "0")}`;

  // useEffect(() => {
  //   const getComments = () => {
  //     let topic1Comments = JSON.parse(localStorage.getItem("topic1")) || [];
  //     if (topic1Comments.length === 0) {
  //       topic1Comments.push(
  //         ...commentsData.filter((com) => com.type === "topic1"),
  //       );
  //       console.log("topic1Comments", topic1Comments)
  //       localStorage.setItem("topic1", JSON.stringify(topic1Comments));
  //     }
  //   };
  //   getComments();
  // });

  useEffect(() => {
    const getCommentsApi = async () => {
      const resp = await axios.get("http://localhost:4000");
      console.log(resp.data);
      setComments(resp.data);
    };
    getCommentsApi();
  }, []);

  // const getStored = () => {
  //   let topic1Comments = JSON.parse(localStorage.getItem("topic1")) || [];
  //   if (topic1Comments.length === 0) {
  //     topic1Comments.push({
  //       ...commentsData.filter((com) => com.type === "topic1"),
  //     });
  //     localStorage.setItem("topic1", JSON.stringify(topic1Comments));
  //   }
  // };
  // getStored();

const onDelete = async (id) => {
  const res = await axios.delete("http://localhost:4000", {
    data: {id: id},
  })
}


  return (
    <div className="topic-container">
      <h2>welcome at tech talk !</h2>
      <div className="comments">
        {comments
          .filter((topicComment) => topicComment.type === "topic1")
          .map((comment) => {
            return (
            <Comment 
            key={comment.id} 
            comment={comment}
            onDelete={onDelete}
             /> 
            ) 
          })}
      </div>
      <AddComment type={"topic1"} />
    </div>
  );
};

export default Topic1;
