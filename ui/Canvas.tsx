import {BookThumbnail} from "./BookThumbnail";
import React from 'react';


class Canvas extends React.Component {


    constructor() {
        super();
    }

    render() {
        return (
            <div>
                    HAVE YOU READ THIS ?
            <div>
                <BookThumbnail />
            </div>

            </div>
        );
    }

}

export default Canvas;