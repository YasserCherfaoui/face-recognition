import React from "react";

const Navigation = ({ signout, click }) => {
  return (
    <nav style={{ display: "flex", justifyContent: "flex-end" }}>
      {signout === false ? (
        <p></p>
      ) : (
        <p className="f3 link dim black underline pa3 pointer" onClick={click}>
          SignOut
        </p>
      )}
    </nav>
  );
};
export default Navigation;
