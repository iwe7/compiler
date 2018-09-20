import { Component, createElement } from 'react';
export interface PolylineProps {
    points?: string;
    style?: any;
}
export class Polyline extends Component<PolylineProps, any> {
    static defaultProps = {
        style: {
            fill: 'none',
            stroke: '1f77b4',
            strokeWidth: 2
        }
    };
    render() {
        return (
            <polyline points={this.props.points} style={this.props.style} />
        )
    }
}
