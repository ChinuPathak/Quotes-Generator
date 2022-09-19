// Variable

let btn = document.querySelector("button");
let quote = document.querySelector(".quote"); 
let person = document.querySelector(".person"); 

const quotes = [{
    quote : `"The best way to find yourself is to lose yourself in the service of the others."`,
    person : `Mahatma Gandhi`
},{

    quote :`"If you want to live a happy life, tie it to a goal, not to people or things."`,
    person : `Albert Einstein`
},{

    quote :`"At his best, man in the noblest of all animals; seperated from law and justice he is the worst."`,
    person : `Arirstotle`
},{

    quote :`"Your time is limited, so don't waste in living someone else's life".`,
    person : `Steve Jobs`
},{

    quote :`"Tell me I forget. Teach me and I remember. Involve me and I learn."`,
    person : `Benjamin Frenklin`
},{

    quote :`"It does not matter how slowly you go as long as you do not stop."`,
    person : `Confucius`
},
];

btn.addEventListener("click" , function(){
    let random = Math.floor(Math.random() * quotes.length);
    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;
})

