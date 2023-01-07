import React, { Component } from "react";
import ListButton from "../ListButton";
import ListItem from "../ListItem";
import "./style.css";

export default class List extends Component {
    render() {
        const { list, actions } = this.props;

        return (
            <div className='list'>
                <ul>
                    <ListItem list={list} />
                    {list.length ? <ListButton actions={actions} /> : null}
                </ul>
            </div>
        );
    }
}