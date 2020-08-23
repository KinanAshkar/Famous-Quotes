const quotes = [

    {

        name:"Madeleine L'Engle",

        quote:"You have to write the book that wants to be written. And if the book will be too difficult for grown-ups, then you write it for children."

    },

    {

        name:"Stephen King",

        quote:"If you don't have time to read, you don't have the time (or the tools) to write. Simple as that."

    },

    {

        name:"Anaïs Nin",

        quote:"We write to taste life twice, in the moment and in retrospect."

    },

    {

        name:"Mark Twain",

        quote:"Substitute 'damn' every time you're inclined to write 'very;' your editor will delete it and the writing will be just as it should be."

    },

    {

        name:"Toni Morrison",

        quote:"If there's a book that you want to read, but it hasn't been written yet, then you must write it."

    },

    {

        name:"Jack Kerouac, The Dharma Bums",

        quote:"One day I will find the right words, and they will be simple."

    },

    {

        name:"Benjamin Franklin",

        quote:"Either write something worth reading or do something worth writing."

    },

    {

        name:"Saul Bellow",

        quote:"You never have to change anything you got up in the middle of the night to write."

    },

    {

        name:"Robert Frost",

        quote:"No tears in the writer, no tears in the reader. No surprise in the writer, no surprise in the reader"

    },

    {

        name:"William Faulkner",

        quote:"Read, read, read. Read everything -- trash, classics, good and bad, and see how they do it. Just like a carpenter who works as an apprentice and studies the master. Read! You'll absorb it. Then write. If it's good, you'll find out. If it's not, throw it out of the window."

    }

];




const quoteBtn = document.querySelector('#quoteBtn');

const quoteAuthor = document.querySelector('#quoteAuthor');

const quote = document.querySelector('#quote');




quoteBtn.addEventListener('click',displayQuote);

function displayQuote(){

    let number = Math.floor(Math.random()*quotes.length);

    quoteAuthor.innerHTML = quotes[number].name;

    quote.innerHTML = quotes[number].quote;

}