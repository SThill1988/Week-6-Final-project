const suit = ['Diamond', 'Heart', 'Spade', 'Club']
const value = ['A,', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K']
const rank =[1,2,3,4,5,6,7,8,9,10,11,12,13]

class Deck {
    constructor (cards = freshDeck()){
        this.cards = cards
    }

    shuffle () {
        for (let i = this.cards.length - 1; i > 0; i--){
            const newIndex = Math.floor(Math.random() * (i + 1))
            const oldValue = this.cards[newIndex]
            this.cards[newIndex] = this.cards[i]
            this.cards[i] = oldValue
        }
    }

    cut (){
        return Math.ceil(this.cards.length / 2)

    }
}
        



class Card {
    constructor (suit, value, rank){
        this.suit = suit
        this.value = value
        this.rank = rank
    }
}


function freshDeck() {
    return suit.flatMap (suit => {
        return value.map ((value, index) =>{
            let cardValue = rank[index]
            return new Card (suit, value, cardValue)
        })
    })
}



const deck = new Deck
deck.shuffle()

const deckMidpoint = deck.cut()
playerDeck = new Deck (deck.cards.slice(0, deckMidpoint))
computerDeck = new Deck (deck.cards.slice(deckMidpoint, deck.cards.length))


console.log(playerDeck.cards[0].rank > computerDeck.cards[0].rank)
console.log(playerDeck.cards[1].rank > computerDeck.cards[1].rank)
console.log(playerDeck.cards[2].rank > computerDeck.cards[2].rank)
console.log(playerDeck.cards[3].rank > computerDeck.cards[3].rank)
console.log(playerDeck.cards[4].rank > computerDeck.cards[4].rank)
console.log(playerDeck.cards[5].rank > computerDeck.cards[5].rank)
console.log(playerDeck.cards[6].rank > computerDeck.cards[6].rank)
console.log(playerDeck.cards[7].rank > computerDeck.cards[7].rank)
console.log(playerDeck.cards[8].rank > computerDeck.cards[8].rank)
console.log(playerDeck.cards[9].rank > computerDeck.cards[9].rank)
console.log(playerDeck.cards[10].rank > computerDeck.cards[10].rank)
console.log(playerDeck.cards[11].rank > computerDeck.cards[11].rank)
console.log(playerDeck.cards[12].rank > computerDeck.cards[12].rank)
console.log(playerDeck.cards[13].rank > computerDeck.cards[13].rank)
console.log(playerDeck.cards[14].rank > computerDeck.cards[14].rank)
console.log(playerDeck.cards[15].rank > computerDeck.cards[15].rank)
console.log(playerDeck.cards[16].rank > computerDeck.cards[16].rank)
console.log(playerDeck.cards[17].rank > computerDeck.cards[17].rank)
console.log(playerDeck.cards[18].rank > computerDeck.cards[18].rank)
console.log(playerDeck.cards[19].rank > computerDeck.cards[19].rank)
console.log(playerDeck.cards[20].rank > computerDeck.cards[20].rank)
console.log(playerDeck.cards[21].rank > computerDeck.cards[21].rank)
console.log(playerDeck.cards[22].rank > computerDeck.cards[22].rank)
console.log(playerDeck.cards[23].rank > computerDeck.cards[23].rank)
console.log(playerDeck.cards[24].rank > computerDeck.cards[24].rank)
console.log(playerDeck.cards[25].rank > computerDeck.cards[25].rank)

