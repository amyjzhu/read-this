import {Status} from "../util/def";
import {Book} from "./Book";
/**
 * Created by gijin on 2017-07-11.
 */


export class Entry {

    book : Book;

    img : string; //link to asset name
    status : Status;
    fav : boolean;
    own : boolean;

    thoughts : string;
    similar : Book[];


    constructor(book : Book) {
        this.book = book;
        this.status = Status.UNREAD;
        this.fav = false;
        this.own = false;
        this.thoughts = "";
        this.similar = []
    }

    changeStatus(s : Status) {
        this.status = s;
    }

    toggleFav(f : boolean) {
        this.fav = f;
    }

    toggleOwn(o : boolean) {
        this.own = o;
    }

    addThoughts(thoughts : string) {
        // add complexity
    }

    addSimilar(b : Book) {
        this.similar.push(b);
    }

}