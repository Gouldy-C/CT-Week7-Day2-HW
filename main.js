//Q1:
//Use the array of shop items provided and present the the information in the following format

// =======================================
// Name: 	 Air Max 97
// Price: 	 130
// About: 	 The design of the shoe is commonly thought to be inspired by the bullet trains of Japan, but the design was inspired by mountain bikes. 
// Category: shoes


const shopItems=[{
    id:1,
    name:"Air Max 97",
    price:130.00,
    desc:"The design of the shoe is commonly thought to be inspired by the bullet trains of Japan, but the design was inspired by mountain bikes. ",
    category:"shoes"
},{
    id:2,
    name:"Adidas NMD R1",
    price:128.00,
    desc:"New-wave classics, with a timeless vintage design: men’s NMD R1 gear is the ultimate go-anywhere shoe. Vibrant styles and soft cushioning will have you gliding through life, wherever it may take you.",
    category:"shoes"
},{
    id:3,
    name:"Gucci Oversize T-shirt with Interlocking G",
    price:580.00,
    desc:"The now recognizable oversize Gucci T-shirt continues to evolve with each new collection, the Interlocking G print is influenced by an '80s design from the archives. Streetwear continues to be a defining feature of Gucci's collections and is often juxtaposed by tailored separates.",
    category:"shirts"
},{
    id:4,
    name:"Nike Sportswear Club",
    price:18.97,
    desc:"The Nike Sportswear Club T-Shirt is made with our everyday cotton fabric and a classic fit for a familiar feel right out of the bag. An embroidered Futura logo on the chest provides a signature Nike look.",
    category:"shirts"
},{
    id:5,
    name:"Spanx Flare Jeans, Vintage Indigo",
    price:148.00,
    desc:"These 70s inspired flare jeans are the perfect wear everywhere with anything style. Designed with premium stretch denim, high-rise coverage and hidden core shaping technology, this jean puts a new twist on a retro silhouette.",
    category:"pants"
},{
    id:6,
    name:"Bonobos Premium Stretch Jeans",
    price:69.00,
    desc:"Resilient stretch denim made incredibly soft. Yes, jeans can be unbelievably comfortable.",
    category:"pants"
}]

function displayArray(arr) {
    for(d of arr){
        console.log('=======================================')
        console.log(`Name: ${d.name}`)
        console.log(`Price: ${d.price.toFixed(2)}`)
        console.log(`About: ${d.desc}`)
        console.log(`Category: ${d.category}`)
    }
}

displayArray(shopItems)

//            =======================================
// main.js:52 Name: Air Max 97
// main.js:53 Price: 130.00
// main.js:54 About: The design of the shoe is commonly thought to be inspired by the bullet trains of Japan, but the design was inspired by mountain bikes. 
// main.js:55 Category: shoes
// main.js:51 =======================================
// main.js:52 Name: Adidas NMD R1
// main.js:53 Price: 128.00
// main.js:54 About: New-wave classics, with a timeless vintage design: men’s NMD R1 gear is the ultimate go-anywhere shoe. Vibrant styles and soft cushioning will have you gliding through life, wherever it may take you.
// main.js:55 Category: shoes
// main.js:51 =======================================
// main.js:52 Name: Gucci Oversize T-shirt with Interlocking G
// main.js:53 Price: 580.00
// main.js:54 About: The now recognizable oversize Gucci T-shirt continues to evolve with each new collection, the Interlocking G print is influenced by an '80s design from the archives. Streetwear continues to be a defining feature of Gucci's collections and is often juxtaposed by tailored separates.
// main.js:55 Category: shirts
// main.js:51 =======================================
// main.js:52 Name: Nike Sportswear Club
// main.js:53 Price: 18.97
// main.js:54 About: The Nike Sportswear Club T-Shirt is made with our everyday cotton fabric and a classic fit for a familiar feel right out of the bag. An embroidered Futura logo on the chest provides a signature Nike look.
// main.js:55 Category: shirts
// main.js:51 =======================================
// main.js:52 Name: Spanx Flare Jeans, Vintage Indigo
// main.js:53 Price: 148.00
// main.js:54 About: These 70s inspired flare jeans are the perfect wear everywhere with anything style. Designed with premium stretch denim, high-rise coverage and hidden core shaping technology, this jean puts a new twist on a retro silhouette.
// main.js:55 Category: pants
// main.js:51 =======================================
// main.js:52 Name: Bonobos Premium Stretch Jeans
// main.js:53 Price: 69.00
// main.js:54 About: Resilient stretch denim made incredibly soft. Yes, jeans can be unbelievably comfortable.
// main.js:55 Category: pants




//Question 2:
//Write a function that parses through the below object and displays all of their favorite food dishes as shown:

const hwPerson = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}

function allElementsOfObject(obj) {
    for(ele of Object.keys(obj)) {
        if (!(Array.isArray(obj))){
            console.log(`${ele} contains:`)}
        if ((obj[ele] instanceof Object)){
            allElementsOfObject(obj[ele])}
        else {
            console.log(obj[ele])
        }
    }
}

allElementsOfObject(hwPerson)


// main.js:115 pizza contains:
// main.js:119 Deep Dish
// main.js:119 South Side Thin Crust
// main.js:115 tacos contains:
// main.js:119 Anything not from Taco bell
// main.js:115 burgers contains:
// main.js:119 Portillos Burgers
// main.js:115 ice_cream contains:
// main.js:119 Chocolate
// main.js:119 Vanilla
// main.js:119 Oreo
// main.js:115 shakes contains:
// main.js:115 oberwise contains:
// main.js:119 Chocolate
// main.js:115 dunkin contains:
// main.js:119 Vanilla
// main.js:115 culvers contains:
// main.js:119 All of them
// main.js:115 mcDonalds contains:
// main.js:119 Sham-rock-shake
// main.js:115 cupids_candies contains:
// main.js:119 Chocolate Malt




// Question 3:
// Create a Promised based function that will check a string to determine if it's length is greater than 10.
// If the length is greater than 10 then resolve it and console log "Big word". 
// If the length of the string is less than 10 then reject it and  console log "Small String"

function wordLength(str) {
    return new Promise((res, rej) => {
        str.length > 10 ? res('Big word') : rej('Small String')
    })
}

wordLength('fan').then((mes) => {console.log(mes)}).catch((mes) => {console.log(mes)})
wordLength('fabricators').then((mes) => {console.log(mes)}).catch((mes) => {console.log(mes)})


// main.js:165 Big word
// main.js:164 Small String





// Question 4:
// Create a base class of GameMember and 2 children classes of Dealer, Player both dealer and player have:
// hand : array of 2 numbers (1-13) ex: [5, 12] which starts with 2 random numbers
// hit() : ability to add  a random number [1-13] to their hand
// When a Dealer try's to hit he can only hit if he has his hand adds up to less than a total of 17 (so 16 and under)
// When a Player hits they can hit as long as their total is under 21
// Use the randomNumber function provided below to generate a random number 1-12

function randomNumber(){
    return Math.ceil(Math.random() * 11)
}

class GameMember{
        hand = [randomNumber(), randomNumber()]


    handTotal(){
        const total = this.hand.reduce((acc, next) => acc + next)
        return total
    }

    displayHand(){
        const strHand = this.hand.join(', ')
        return strHand
    }

    hit(){
        const card = randomNumber()
        this.hand.push(card)
        return card
    }
}

class Dealer extends GameMember{
    decision(){
        if (this.handTotal() < 17) {
            console.log(`Dealer hits`)
            this.hit()
            console.log(`Dealer now has ${this.displayHand()} for a total of ${this.handTotal()}`)
            this.decision()
        }
        else {
            if (this.handTotal() < 22){
                console.log(`Dealer stands with ${this.displayHand()} for a total of ${this.handTotal}`)
                return 'stand'
            }
            else{
                console.log(`Dealer busts with ${this.displayHand()} for a total of ${this.handTotal()}`)
                return 'bust'
            }
        }
    }
}

class Player extends GameMember{
    decision(){
        answer = getAnswer()
        if (answer === "hit"){
            this.hit()
            console.log(`Player hit. Players new cards are ${this.displayHand} for a total of ${this.handTotal}`)
            if (this.handTotal > 22){
                console.log(`Player busts with a total of ${this.handTotal}`)
                return 'bust'
                }
            }
        else if (answer === 'stand'){
            console.log(`Player stands. Players cards are ${this.displayHand} for a total of ${this.handTotal}`)
            return 'stands'
            }
        }
    }


function blackJack(){
    const dealer = new Dealer()
    const player = new Player()

    console.log(`Dealer shows: ${dealer.hand[0]}`)
    console.log(`Player shows: ${player.hand[0]}, ${player.hand[1]} for a total of ${player.handTotal()}`)
    const plDecision = player.decision()
    const deDecision = dealer.decision()
    if (plDecision === 'bust'){
        console.log('You Lose')}
    else if (plDecision === 'stands' && deDecision === 'bust'){
        console.log('You Win!')}
    else if (player.handTotal() > dealer.handTotal()){
        console.log('You Win!')}
    else{
        console.log('You Lose')}
}

console.log(blackJack())



//Complete 3 Codewars problems using JavaScript, start with ones you have already solved in python.  Paste a link here to the 3 questions you completed

//1:https://www.codewars.com/kata/53da6d8d112bd1a0dc00008b/train/javascript
function reverseList(list) {
    const res = []
    for(n of list){
        res.unshift(n)}
    return res
}

function reverseList(list) {
    return list.reverse();
}

//2:https://www.codewars.com/kata/5547929140907378f9000039/train/javascript
function shortcut (string) {
    return string.replaceAll('a', '').replaceAll('e', '').replaceAll('i', '').replaceAll('o', '').replaceAll('u', '')}
//lol

//3:https://www.codewars.com/kata/5861d28f124b35723e00005e/train/javascript
const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
    return distanceToPump > (mpg * fuelLeft) ? false: true
};