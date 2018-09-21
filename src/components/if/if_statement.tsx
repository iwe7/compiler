import { Component, createElement, SVGProps } from "react";
import { SyntaxKind } from "../common/syntax_kind";
import "./if_statement.scss";
export interface IfStatementState {
  line: SVGProps<SVGLineElement>;
}
export class IfStatement extends Component<any, IfStatementState> {
  static defaultProps = {
    kind: SyntaxKind.IfStatement,
    stroke: "#333"
  };
  style = {
    fill: "#efefef",
    strokeWidth: 1,
    stroke: "#000"
  };
  constructor(props: any) {
    super(props);
    this.state = {
      line: {
        x1: 0,
        y1: 0,
        x2: 0,
        y2: 100,
        strokeWidth: 5,
        stroke: this.props.stroke
      }
    };
  }
  render() {
    return (
      <div className="if-statement" data-kind={this.props.kind}>
        <svg width="800" height="800">
          <line {...this.state.line} />
          <rect x={0} y={0} width="300" height="100" style={this.style} />
          <rect x={0} y={110} width="300" height="100" style={this.style} />
          <rect x={0} y={220} width="300" height="100" style={this.style} />
        </svg>
        <div className="expression">
          <div>Expression</div>
        </div>
        <div className="if-statement-container">
          <div className="if-statement-container-then">
            <div className="statement">Statement</div>
          </div>
          <div className="if-statement-container-else">
            <div className="statement">Statement</div>
          </div>
        </div>
      </div>
    );
  }
}
