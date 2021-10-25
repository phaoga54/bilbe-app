export interface IConfig {
    value: number;
    verses: {};
}
export interface IIncrementAction {
    value: number
}
export interface IVerse {
    verse_id:string;
    book_id: string;
    book_name: string;
    chapter: number;
    text: string;
    verse: number;
}