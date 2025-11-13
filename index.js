const purchases = [
  {
    product: "Ergofit Wired Earbuds",
    category: "Electronics",
    quantity: 2,
    price: 12.99,
    mostLikedReviews: [
      {
        rating: 5,
        text: "Great noise-cancelling feature."
      }
    ]
  },
  {
    product: "LG Bluray Player Replacement Remote Control",
    category: "Electronics",
    quantity: 1,
    price: 6.99,
    mostLikedReviews: [
      {
        rating: 1,
        text: "Product didn't come with batteries."
      },
      {
        rating: 2,
        text: "Package was damaged."
      }
    ]
  },
  {
    product: "McCormick Grill Mates Chipotle Pepper Marinade (12 pk)",
    category: "Grocery",
    quantity: 3,
    price: 15.50,
    mostLikedReviews: [
      {
        rating: 1,
        text: "The marinade packets were damaged."
      }
    ]
  },
  {
    product: "Luxardo Gourmet Cocktail Cherries",
    category: "Grocery",
    quantity: 1,
    price: 24.45,
    mostLikedReviews: [
      {
        rating: 5,
        text: "You can taste the difference between these and marachinos."
      },
      {
        rating: 5,
        text: "I use these all the time for parties."
      }
    ]
  },
  {
    product: "Blood Pressure Monitor",
    category: "Medical Supplies and Equipment",
    quantity: 1,
    price: 49.99,
    mostLikedReviews: [
      {
        rating: 5,
        text: "Matches my blood pressure at the doctor's office."
      }
    ]
  }
];



// #1 // 
function getNumberEntries(object){
  //create storage array
  let array = [];
  let subArray = [];
  //for-in loop
  for(let key in object){
    if(typeof object[key] === 'number'){
      subArray = [key, object[key]];
    array.push(subArray);
    }
    
  }

return array;
}


//takes in object
//add additions keys and values, array of subarrays, to object
//returns object
// #2 // 
const addKeyValuePairs = (object, additions) => {
 //iterate thru additions array
 for(let i = 0; i < additions.length; i++){
  object[additions[i][0]] = additions[i][1];
 }
 return object;
};

//takes in array of objects
//return new array
//use filter method
const filterByPrice = (array, price) => {
  let priceFind = array.filter(function(obj){
    if(obj.price > price){
      return obj.price;
    }
  } )
  return priceFind;
};

//takes in array of objects
//return new array of strings; product title uppercase and review text
//use map method
const mapPurchases = (array) => {
let review = array.map(function(obj){
  //loop thru review object array
  for(i = 0; i < obj.mostLikedReviews.length; i++){
    return obj.product.toUpperCase() + ' ' + '-' + ' ' + 'Review:' + ' ' + obj.mostLikedReviews[obj.mostLikedReviews.length - 1].text;
  }
  
})
return review;
};


//takes in array of objects
//return string of 
//if product quantity is 1; push the first word of product description into string result
//use reduce
// #5 //
const accumulateString = (array) => {
  let string = array.reduce(function(acc, obj){
   let wordIndex = obj.quantity;
   //convert product string into array
   let wordArray = obj.product.split(' ');
   //iterate thru wordArray
   for(let i = 0; i < wordArray.length; i++){
    acc += wordArray[wordIndex - 1];
   }
   return acc;
  }, '')
  return string;
};

//takes in array of objects; iterates thru array to find product match; if object[i].product === product[i];
// push object.product and object.category into result array; else return null at 0 and 1 index
//return array
//use recursion
// #6 //
const findProduct = (array, product, output=[]) => {
  //Base Case
    //condition
    if(array[i].product === product[i]){
      output.push(array[i].product, array[i].category);
    }
  //RECURSION
    //condition
};



// #7 //
const filterByReviewLength = (array) => {
  
};







