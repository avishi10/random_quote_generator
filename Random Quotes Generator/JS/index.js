const quotesDisplay = document.querySelector('#quote')
const pressMebtn = document.querySelector('button')

// Quotes list for Random selection
const quotes = [
    'Instead of cursing the darkness, light a candle',
    'All persons ought to endeavor to follow what is right, and not what is established',
    'Arise, awake, and, stop not till the goal is reached',
    'Genius is 1% talent and 99% percent hard work',
    'Rarest of all human quality is consistency'
]
// function to display Quotes Random 

function showQuotes(){
    let randomNumber = Math.floor(Math.random()*quotes.length)
    let randomQuotes = quotes[randomNumber]
    quotesDisplay.innerHTML=randomQuotes
}
// added on click funtion to displayquotes 

pressMebtn.addEventListener("click",showQuotes)