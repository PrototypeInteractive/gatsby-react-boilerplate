import React from "react";

const Icon = (props) => (
  <svg viewBox={props.icon.viewBox} width={props.width} height={props.height}>
    <use xlinkHref={`#${props.icon.id}`} />
  </svg>
)

export default Icon;
