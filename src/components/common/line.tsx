import { Component, createElement } from 'react';
export interface LineProps {
    x1?: number;
    x2?: number;
    y1?: number;
    y2?: number;
    fill?: string;
    width?: number;
}
export class Line extends Component<LineProps, any> {
    static defaultProps = {
        fill: '1f77b4',
        width: 2
    }
    render() {
        const style = {
            stroke: this.props.fill,
            strokeWidth: this.props.width
        }
        return (
            <line
                x1={this.props.x1}
                y1={this.props.y1}
                x2={this.props.x2}
                y2={this.props.y2}
                style={style}
            />
        )
    }
}
