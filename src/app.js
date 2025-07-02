import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  const valuesCard = ['A', '2', '3','4','5','6','7','8','9','10','J','Q','K'];
  const suits = [
    {symbol: '♥', className: 'heart'},
    {symbol: '♦', className: 'diamond'},
    {symbol: '♠', className: 'spade'},
    {symbol: '♣', className: 'club'}
  ];

  document.querySelector('#card-button').addEventListener('click', function(){
    
    const randomValuesCard = valuesCard[Math.floor(Math.random() * valuesCard.length)];
    const randomSuit = suits[Math.floor(Math.random() * suits.length)];

    document.querySelector("#valuesCard").textContent = randomValuesCard;
    document.querySelector("#top-suit").textContent = randomSuit.symbol;
    document.querySelector("#bottom-suit").textContent = randomSuit.symbol;

    const currentCard = document.querySelector('#card');
    currentCard.classList.remove('heart', 'diamond', 'spade', 'club');
    currentCard.classList.add(randomSuit.className);
  });


  
};
