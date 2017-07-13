import {BookThumbnail} from "./BookThumbnail";
import React from 'react';


class Canvas extends React.Component {


    constructor() {
        super();
    }


    createThumbnail(i : string) {
        return ( <BookThumbnail value={i} /> );
    }

    render() {
        return (
            <div>
                    HAVE YOU READ THIS ?
            <div>
                { this.createThumbnail("hello") }
            </div>

            </div>
        );
    }

}

export default Canvas;