import React from "react";

function Potato(props) {
  console.log(props.name);
  return <div>Props = {props.name}</div>;
}

export default Potato;
