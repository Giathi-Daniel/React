import React from "react";

function Jokes({ setup, punchline }) {
  return (
    <div>
      <h4>{setup}</h4>
      <p>{punchline}</p>
    </div>
  );
}

export default Jokes;
