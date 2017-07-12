/**
 * Created by gijin on 2017-07-11.
 */
"use strict";
(function (Genres) {
    Genres[Genres["drama"] = 0] = "drama";
    Genres[Genres["comedy"] = 1] = "comedy";
})(exports.Genres || (exports.Genres = {}));
var Genres = exports.Genres;
(function (Status) {
    Status[Status["READ"] = 0] = "READ";
    Status[Status["READING"] = 1] = "READING";
    Status[Status["DROPPED"] = 2] = "DROPPED";
    Status[Status["PLAN_TO_READ"] = 3] = "PLAN_TO_READ";
    Status[Status["UNREAD"] = 4] = "UNREAD";
})(exports.Status || (exports.Status = {}));
var Status = exports.Status;
