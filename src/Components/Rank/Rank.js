import React from "react";

const Rank = ({ user,rank }) => {
  return (
    <div>
      <div className="white f3">{user + " , your current rank is ..."}</div>
      <div className="white f3">{rank}</div>
    </div>
  );
};

export default Rank;
