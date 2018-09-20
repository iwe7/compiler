import { Component, createElement } from 'react';
export interface CircleProps {
    cx?: number;
    cy?: number;
    r?: number;
    id?: string;
    className?: string;
    fill?: string;
}
export interface CircleState {
    circleRadius?: number;
    circleColor?: string;
}
export class Circle extends Component<CircleProps, CircleState> {
    static defaultProps = {
        fill: '#1f77b4'
    }
    constructor(props: CircleProps) {
        super(props);
        this.state = {
            circleColor: this.props.fill,
            circleRadius: this.props.r
        };
    }
    render() {
        const props = this.props;
        return <circle
            cx={props.cx}
            cy={props.cy}
            r={this.state.circleRadius}
            fill={this.state.circleColor}
            id={props.id}
            className={props.className}
        />
    }
}
