import React, { useState } from "react";
import "./styles/comment.css";
import useComment from "../../hooks/useComment";
import { useParams } from "react-router-dom";

const Comment = ({ comments }) => {
  const [newComment, setNewComment] = useState("");
  const { createComment } = useComment();

  const { id } = useParams();

  const handleSubmit = (event) => {
    event.preventDefault();
    createComment(newComment, id);
    setNewComment("");
  };

  return (
    <div className="comment-section">
      <h2>Comentarios</h2>

      <ul className="comments-list">
        {comments?.map((comment) => (
          <li key={comment.id}>
            <span className="user">
              {(comment?.user?.name).toUpperCase()}:{" "}
            </span>
            {comment?.text}
          </li>
        ))}
      </ul>

      <form className="comment-form" onSubmit={handleSubmit}>
        <label htmlFor="new-comment">Agregar comentario:</label>
        <textarea
          id="new-comment"
          name="new-comment"
          value={newComment}
          onChange={(event) => setNewComment(event.target.value)}
          required
        />
        <button type="submit">Comentar</button>
      </form>
    </div>
  );
};

export default Comment;
