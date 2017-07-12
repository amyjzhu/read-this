"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var BookThumbnail_1 = require("./BookThumbnail");
var react_1 = require('react');
var Canvas = (function (_super) {
    __extends(Canvas, _super);
    function Canvas() {
        _super.call(this);
    }
    Canvas.prototype.render = function () {
        return (<div>
                <h>
                    HAVE YOU | READ THIS ?
                </h>

            <div>
                <BookThumbnail_1.BookThumbnail />
            </div>

            </div>);
    };
    return Canvas;
}(react_1["default"].Component));
exports.__esModule = true;
exports["default"] = Canvas;
