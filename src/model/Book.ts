import {Genres, Status} from "../util/def";
/**
 * Created by gijin on 2017-07-11.
 */


export class Book {

    private title : string;
    private author : string;
    private year : number;
    private version : number;
    private genre : Genres;


    constructor(title : string, author : string, year : number, version : number, genre : Genres) {
        this.title = title;
        this.author = author;
        this.year = year;
        this.version = version;
        this.genre = genre;
    }

    static parse() : Book[] {
        return [];
    }


}