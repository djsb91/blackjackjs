const suits = ['Hearts', 'Diamonds', 'Spades', 'Clubs'];
const ranks = ['Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Jack', 'Queen', 'King', 'Ace'];
const values = {'Two': 2, 'Three': 3, 'Four': 4, 'Five': 5, 'Six': 6, 'Seven': 7, 'Eight': 8, 'Nine': 9, 'Ten': 10,
          'Jack': 10, 'Queen': 10, 'King': 10, 'Ace': 11};

//console.log(suits);
//console.log(ranks);
//console.log(values);

let playing = true;

// Karta

function Card(suit, rank){
    this.suit = suit;
    this.rank = rank;
    return "karta: "+this.rank+" "+this.suit;
}

//console.log(Card('Serce', 'Dwójka'));

// Talia
    
let Deck = {
    deck: [],
    newDeck: function(){
        for(let suit=0 ; suit < suits.length; suit++){
            for(let rank=0 ; rank < ranks.length; rank++){
            this.deck.push(Card(suits[suit], ranks[rank]));
            }
        }
    },
    sort: function(a){
        var j, x, i;
        for (i = a.length - 1; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            x = a[i];
            a[i] = a[j];
            a[j] = x;
        }
    }
};

Deck.newDeck();
console.log(Deck.deck);
Deck.sort(Deck.deck);
console.log(Deck.deck);
