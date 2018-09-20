import { render } from 'react-dom';
import { createElement } from 'react';
import { Circle } from './components/cricle';
import "./index.scss";
render(<svg>
    <Circle cx={100} cy={100} r={100} className="circle"/>
</svg>, document.getElementById('app'))
