import React, { useState, useEffect } from "react";

const Comments = () => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  useEffect(() => {
    // Fetch comments from API (simulated)
    const storedComments = JSON.parse(localStorage.getItem("comments")) || [];
    setComments(storedComments);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedComments = [...comments, newComment];
    localStorage.setItem("comments", JSON.stringify(updatedComments));
    setComments(updatedComments);
    setNewComment("");
  };

  return (
    <div>
      <h2>Comment Box</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Leave a comment..."
        />
        <button type="submit">Post</button>
      </form>
      <div>
        <h3>Comments:</h3>
        {comments.length ? (
          // comments.map((comment, index) => (
          //   <p key={index} dangerouslySetInnerHTML={{ __html: comment }} /> // ❌ Vulnerable
          // ))
          comments.map((comment, index) => (
            <p key={index}>{comment}</p> // ✅ Safe: No HTML parsing!
          ))
        ) : (
          <p>No comments yet</p>
        )}
      </div>
    </div>
  );
};

export default Comments;
