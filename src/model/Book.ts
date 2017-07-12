import {Genres, Status} from "../util/def";
/**
 * Created by gijin on 2017-07-11.
 */


interface IBook  {
    title : string;
    author : string;
    year: number;
    version: number;
    genre: Genres;
}

export class Book implements IBook {

    private title;
    private author;
    private year;
    private version;
    private genre;


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