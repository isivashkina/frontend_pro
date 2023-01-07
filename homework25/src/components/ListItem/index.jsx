import React, { Component } from "react";
import "./style.css";

export default class ListItem extends Component {
    render() {
        const { list } = this.props;

        return (
            <div>
                {list.map((item) => (
                    <li key={item.id}>{item.title}</li>
                ))}
            </div>
        );
    }
}