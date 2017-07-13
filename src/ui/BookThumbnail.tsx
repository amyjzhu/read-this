/**
 * Created by gijin on 2017-07-11.
 */

import React from 'react';

class BookState {
    name : string;
}

export class BookThumbnail extends React.Component<any,BookState> {


    state : BookState;

    constructor() {
        super();
        this.state = {
            name : this.props.value
        };
    }

    render() {
        return (
            <button className="bookthumbnail" onClick= { () => { this.setState({name:'Hi!'}) }} >
                { this.state.name }
            </button>
        );
    }

}