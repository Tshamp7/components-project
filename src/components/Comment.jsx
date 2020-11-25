import React from "react";
import PropTypes from "prop-types";

const Comment = (props) => {
  return (
    <div className="comment">
      <a href="/" className="avatar">
        <img alt="avatar" src={props.image} />
      </a>
      <div className="content">
        <a href="/" className="author">
          {props.author}
        </a>
        <div className="metadata">
          <span className="date">{props.date}</span>
        </div>
        <div className="text">{props.comment}</div>
      </div>
    </div>
  );
};

Comment.propTypes = {
  image: PropTypes.func.isRequired,
  author: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  comment: PropTypes.string.isRequired,
};

export default Comment;
