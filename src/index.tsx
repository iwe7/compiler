import { render } from "react-dom";
import { createElement } from "react";
import { Circle, Line, Polyline, ClassNode, IfStatement } from "./components";
import "./index.scss";

render(
  <div>
    <ul>
      <li>if</li>
      <li>for</li>
      <li>class</li>
      <li>function</li>
      <li>interface</li>
    </ul>
    <IfStatement />
    <ClassNode />
    <svg>
      <Circle cx={500} cy={100} r={100} className="circle" />
      <Line x1={200} y1={200} x2={300} y2={300} />
      <Polyline points="20,20 40,25 60,40 80,120 120,140 200,180" />
    </svg>
  </div>,
  document.getElementById("app")
);
