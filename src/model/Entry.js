"use strict";
var def_1 = require("../util/def");
/**
 * Created by gijin on 2017-07-11.
 */
var Entry = (function () {
    function Entry(book) {
        this.book = book;
        this.status = def_1.Status.UNREAD;
        this.fav = false;
        this.own = false;
        this.thoughts = "";
        this.similar = [];
    }
    Entry.prototype.changeStatus = function (s) {
        this.status = s;
    };
    Entry.prototype.toggleFav = function (f) {
        this.fav = f;
    };
    Entry.prototype.toggleOwn = function (o) {
        this.own = o;
    };
    Entry.prototype.addThoughts = function (thoughts) {
        // add complexity
    };
    Entry.prototype.addSimilar = function (b) {
        this.similar.push(b);
    };
    return Entry;
}());
exports.Entry = Entry;
