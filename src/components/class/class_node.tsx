import { Component, createElement } from 'react';
import "./class_node.scss"
export class ClassNode extends Component {
    render() {
        return (
            <div className="class-node">
                <div className="class-node-title">类 ClassDemo</div>
                <div className="class-node-children">
                    <ul className="class-node-children-property">
                        <li>属性一</li>
                        <li>属性二</li>
                    </ul>
                    <ul className="class-node-children-method">
                        <li>方法一</li>
                        <li>方法二</li>
                    </ul>
                </div>
            </div>
        )
    }
}
