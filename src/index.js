import React, { useState } from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import Comment from "./components/Comment";
import ApprovalCard from "./components/ApprovalCard";

const App = () => {
  const [state] = useState({
    comments: [
      {
        id: 1,
        author: "Annie Gunderson",
        date: "Yesterday at 6:09PM",
        comment: "Nice post!",
      },
      {
        id: 2,
        author: "Hank Hill",
        date: "Yesterday at 6:14PM",
        comment: "Got any propane?",
      },
      {
        id: 3,
        author: "Bill Skarsgard ",
        date: "Yesterday at 6:09PM",
        comment: "Nice post!",
      },
      {
        id: 4,
        author: "Annie Gunderson",
        date: "Yesterday at 6:09PM",
        comment: "Nice post!",
      },
    ],
  });

  return (
    <div className="ui container comments">
      {state.comments.map((content) => {
        return (
          <ApprovalCard key={content.id}>
            <Comment
              key={content.id}
              image={faker.image.animals()}
              author={content.author}
              date={content.date}
              comment={content.comment}
            />
          </ApprovalCard>
        );
      })}
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
