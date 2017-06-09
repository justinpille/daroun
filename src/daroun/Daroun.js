import React from "react";

function Daroun({ children = "", shift = 0 }) {
  const realShift = shift % children.length;
  const left = children.slice(realShift);
  const right = children.slice(0, realShift);
  return <div>{"".concat(left, right)}</div>;
}

export default Daroun;
