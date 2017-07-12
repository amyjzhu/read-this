import { Status } from "../util/def";
/**
 * Created by gijin on 2017-07-11.
 */
export class Entry {
    constructor(book) {
        this.book = book;
        this.status = Status.UNREAD;
        this.fav = false;
        this.own = false;
        this.thoughts = "";
        this.similar = [];
    }
    changeStatus(s) {
        this.status = s;
    }
    toggleFav(f) {
        this.fav = f;
    }
    toggleOwn(o) {
        this.own = o;
    }
    addThoughts(thoughts) {
        // add complexity
    }
    addSimilar(b) {
        this.similar.push(b);
    }
}
//# sourceMappingURL=Entry.js.map