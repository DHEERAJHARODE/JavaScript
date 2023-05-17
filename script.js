let btn=document.querySelector('#new-quote');
let quote=document.querySelector('.quote');
let person=document.querySelector('.person');

const quotes=[{
	quote:"All our dreams can come true, if we have the courage to pursue them.",
	person:"Walt Disney"
},{
	quote:"“Only the paranoid survive.",
	person:"Andy Grove"
},{
	quote:"It’s hard to beat a person who never gives up.",
	person:"Babe Ruth"
},{
	quote:"If people are doubting how far you can go, go so far that you can’t hear them anymore.",
	person:"Michele Ruiz"
},{
	quote:"The secret of getting ahead is getting started.",
	person:"Mark Twain"
},{
	quote:"Everything you can imagine is real.",
	person:"Pablo Picasso"
},{
	quote:"Do what you feel in your heart to be right―for you’ll be criticized anyway.",
	person:"Eleanor Roosevelt"
},{
	quote:"Whatever you are, be a good one.",
	person:"Abraham Lincoln"
},{
	quote:"Magic is believing in yourself. If you can make that happen, you can make anything happen.",
	person:"Johann Wolfgang Von Goethe"
},{
	quote:"Don’t be afraid to give up the good to go for the great.",
	person:"John D. Rockefeller"
},{
	quote:"The writer creates the story, not the character. When he rubs the pen, the character moves forward.",
	person:"Dheeraj Harode"
}];

btn.addEventListener('click',function(){
	let random=Math.floor(Math.random()*quotes.length);
	quote.innerText=quotes[random].quote;
	person.innerText=quotes[random].person;
})