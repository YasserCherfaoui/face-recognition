import React from "react";

const Rank = ({ user }) => {
  return (
    <div>
      <div className="white f3">{user + " , your current rank is ..."}</div>
      <div className="white f3">{"#5"}</div>
    </div>
  );
};

export default Rank;
