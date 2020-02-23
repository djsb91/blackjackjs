const suits = ['Hearts', 'Diamonds', 'Spades', 'Clubs'];
const ranks = ['Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Jack', 'Queen', 'King', 'Ace'];
const values = {'Two': 2, 'Three': 3, 'Four': 4, 'Five': 5, 'Six': 6, 'Seven': 7, 'Eight': 8, 'Nine': 9, 'Ten': 10,
          'Jack': 10, 'Queen': 10, 'King': 10, 'Ace': 11};

//console.log(suits);
//console.log(ranks);
//console.log(values);

let playing = true;

// Karta


function Card(suit,rank){
    this.suit = suit;
    this.rank = rank;
    return [suit,rank];
};

let card = new Card();


function Deck() {
    
    this.deck = [];
    for (let suit in suits) {
        for (let rank in ranks) {
            this.deck.push(Card(suits[suit], ranks[rank]));
        }
    }   
}

let deck = new Deck();

function deal() {
    let single_card = deck.deck.pop();
    return single_card;
}
// class Deck {
//     constructor() {
//         this.deck = [];
//         for (let suit in suits) {
//             for (let rank in ranks) {
//                 this.deck.push(Card(suits[suit], ranks[rank]));
//             }
//         }
        
//     }
//     deal() {
//         let single_card = this.deck.pop();
//         return single_card;
//     }
// }


    
        cards = [];
        value = 0
        aces = 0
    
    




function add_card(card){
    cards.push(card);
    console.log(card);
    if (card[1] == 'King' || card[1] == 'Queen' || card[1] == 'Jack' ){
        value += 10;
    }else if(card[1] == 'Ace' && value > 11){
        value +=1;
    }else if(card[1] == 'Ace'){
        value +=11;
    }
    
    

        
}

//



console.log(deck.deck);

console.log(deck.deck);

add_card(deal());
console.log(value+": WARTOŚĆ");
console.log(cards);
console.log(card.rank);


