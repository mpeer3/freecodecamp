/*Random Quotes by Michael Peer 2015
  michael@michael-peer.net
  http://michael-peer.net
  ===================================
  This script contains a 2D-array with a couple of quotes. A random quote is selected and displayed using
  jQuery. It can also be posted at Twitter.
*/

var quotes = [
  ["The most important thing is to enjoy your life - to be happy - it's all that matters.",
    "Audrey Hepburn"
  ],
  ["Life isn't about finding yourself. Life is about creating yourself.", "George Bernard Shaw"],
  ["Very little is needed to make a happy life; it is all within yourself, in your way of thinking.", "Marcus Aurelius"],
  ["We do not remember days, we remember moments.", "Cesare Pavese"],
  ["Life is really simple, but we insist on making it complicated.", "Confucius"],
  ["The journey of a thousand miles begins with one step.", "Lao Tzu"],
  ["It's not what you look at that matters, it's what you see.", "Henry David Thoreau"],
  ["The only true wisdom is in knowing you know nothing.", "Socrates"],
  ["Be happy for this moment. This moment is your life.", "Omar Khayyam"],
  ["There is only one happiness in this life, to love and be loved.", "George Sand"],
  ["Happiness is when what you think, what you say, and what you do are in harmony.", "Mahatma Gandhi"],
  ["Happiness is not something ready made. It comes from your own actions.", "Dalai Lama"],
  ["The best way to pay for a lovely moment is to enjoy it.", "Richard Bach"],
  ["Success is not final, failure is not fatal: it is the courage to continue that counts.", "Winston Churchill"],
  ["Success consists of going from failure to failure without loss of enthusiasm.", "Winston Churchill"],
];
twitter="https://twitter.com/intent/tweet?text=";
tw="";
function getquote(){
  var r=Math.floor(Math.random() * quotes.length);
  $("#quote").text(quotes[r][0]);
  $("#author").text(quotes[r][1]);
tw=twitter+quotes[r][0]+"-"+quotes[r][1];
  $("#tweet").attr("href",tw);
  
}
function send_tweet(){
  window.open(tw);
}
$(document).ready(function(){
  getquote();
});