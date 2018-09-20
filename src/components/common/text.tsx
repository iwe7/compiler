import { Component, createElement } from 'react';
export interface TextProps {
    text: string;
}
export class Text extends Component<TextProps, any> {
    render() {
        return (
            <text>{this.props.text}</text>
        )
    }
}
