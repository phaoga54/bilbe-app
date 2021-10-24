export interface IBook {
    maxChapter: number;
    title: string;
}
export const BOOKS = [
    {
        title: 'Pentateuch (or the Law)',
        data: [{ maxChapter: 50, title: 'Genesis' },
        { maxChapter: 40, title: 'Exodus' },
        { maxChapter: 27, title: 'Leviticus' },
        { maxChapter: 36, title: 'Numbers' },
        { maxChapter: 34, title: 'Deuteronomy' }]
    },
    {
        title: 'Historical Books',
        data: [{ maxChapter: 24, title: 'Joshua' },
        { maxChapter: 21, title: 'Judges' },
        { maxChapter: 4, title: 'Ruth' },
        { maxChapter: 31, title: '1 Samuel' },
        { maxChapter: 24, title: '2 Samuel' },
        { maxChapter: 22, title: '1 Kings' },
        { maxChapter: 25, title: '2 Kings' },
        { maxChapter: 29, title: '1 Chronicles' },
        { maxChapter: 36, title: '2 Chronicles' },
        { maxChapter: 10, title: 'Ezra' },
        { maxChapter: 13, title: 'Nehemiah' },
        { maxChapter: 10, title: 'Esther' }]
    },
    {
        title: 'Books of Wisdom (or "Poetry")',
        data: [{ maxChapter: 42, title: 'Job' },
        { maxChapter: 150, title: 'Psalms' },
        { maxChapter: 31, title: 'Proverbs' },
        { maxChapter: 12, title: 'Ecclesiastes' },
        { maxChapter: 8, title: 'Song of Solomon' }]
    },
    {
        title: 'Major Prophets',
        data: [{ maxChapter: 66, title: 'Isaiah' },
        { maxChapter: 52, title: 'Jeremiah' },
        { maxChapter: 5, title: 'Lamentations' },
        { maxChapter: 48, title: 'Ezekiel' },
        { maxChapter: 12, title: 'Daniel' }]
    },
    {
        title: 'Minor Prophets',
        data: [{ maxChapter: 14, title: 'Hosea' },
        { maxChapter: 3, title: 'Joel' },
        { maxChapter: 9, title: 'Amos' },
        { maxChapter: 1, title: 'Obadiah' },
        { maxChapter: 4, title: 'Jonah' },
        { maxChapter: 7, title: 'Micah' },
        { maxChapter: 3, title: 'Nahum' },
        { maxChapter: 3, title: 'Habakkuk' },
        { maxChapter: 3, title: 'Zephaniah' },
        { maxChapter: 2, title: 'Haggai' },
        { maxChapter: 14, title: 'Zechariah' },
        { maxChapter: 4, title: 'Malachi' }]
    },
    {
        title: 'Gospels',
        data: [{ maxChapter: 28, title: 'Matthew' },
        { maxChapter: 16, title: 'Mark' },
        { maxChapter: 24, title: 'Luke' },
        { maxChapter: 21, title: 'John' }]
    },
    {
        title: 'History',
        data: [{ maxChapter: 28, title: 'Acts' },]
    },
    {
        title: 'Pauline Epistles',
        data: [{ maxChapter: 16, title: 'Romans' },
        { maxChapter: 16, title: '1 Corinthians' },
        { maxChapter: 13, title: '2 Corinthians' },
        { maxChapter: 6, title: 'Galatians' },
        { maxChapter: 6, title: 'Ephesians' },
        { maxChapter: 4, title: 'Philippians' },
        { maxChapter: 4, title: 'Colossians' },
        { maxChapter: 5, title: '1 Thessalonians' },
        { maxChapter: 3, title: '2 Thessalonians' },
        { maxChapter: 6, title: '1 Timothy' },
        { maxChapter: 4, title: '2 Timothy' },
        { maxChapter: 3, title: 'Titus' },
        { maxChapter: 1, title: 'Philemon' }]
    },
    {
        title: 'General Epistles',
        data: [{ maxChapter: 13, title: 'Hebrews' },
        { maxChapter: 5, title: 'James' },
        { maxChapter: 5, title: '1 Peter' },
        { maxChapter: 3, title: '2 Peter' },
        { maxChapter: 5, title: '1 John' },
        { maxChapter: 1, title: '2 John' },
        { maxChapter: 1, title: '3 John' },
        { maxChapter: 1, title: 'Jude' }]
    },
    {
        title: 'Apocalyptic Writings (Prophecy)',
        data:
            [{ maxChapter: 22, title: 'Revelation' }]
    },
]
