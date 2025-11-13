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
  //create result array
  let resultArray = [];
  //for-in loop; iterate thru object values
  for(let key in object){
    //create sub array; inside loop will create new array every time
    let subArray = [];
    if(typeof object[key] === 'number'){
      subArray = [key, object[key]];
    resultArray.push(subArray);
    }
    
  }

return resultArray;
}


//takes in object
//add additions keys and values, array of subarrays, to object
//returns object
// #2 // 
const addKeyValuePairs = (object, additions) => {
 //iterate thru additions array
 for(let i = 0; i < additions.length; i++){
  //add key and value from additions subarray to object
  //object[key] = object[value]
        //object key = additions[index][index0]
                        //object value = additions[index][index1]
  object[additions[i][0]] = additions[i][1];
 }
 return object;
};

//takes in array of objects
//return new array
//use filter method
const filterByPrice = (array, price) => {
  //use filter method on array of objects
  let priceFind = array.filter(function(obj){
    //return price of object if greater than price parameter input
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
  //define most recent review
  //recentReview = obj.mostLikedReviews[obj.mostLikedReviews.length - 1].text;
  //NO NEED TO CREATE FOR LOOP
  //loop thru review object array 
  for(i = 0; i < obj.mostLikedReviews.length; i++){
    return obj.product.toUpperCase() + ' ' + '-' + ' ' + 'Review:' + ' ' + obj.mostLikedReviews[obj.mostLikedReviews.length - 1].text;
  }
  //return obj.product.toUpperCase() + '-' + 'Review:' + recentReview
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
    //define object quantity value
   let wordIndex = obj.quantity;
   //convert product string into array
   let wordArray = obj.product.split(' ');
   //DO NOT NEED FOR LOOP
   //iterate thru wordArray
  //  for(let i = 0; i < wordArray.length; i++){
  //   acc += wordArray[wordIndex - 1];
  //  }
   acc += wordArray[wordIndex - 1];
   return acc;
  }, '')
  return string;
};

//takes in array of objects; iterates thru array to find product match; if object[i].product === product[i];
// push object.product and object.category into result array; else return null at 0 and 1 index
//return array
//use recursion; need to access index 0
// #6 //
const findProduct = (array, product, output=[]) => {
  //Base Case
    //condition
        //write this condition last
        //with arrays stop condition will be length
    if(array.length === 0){
      //return null on index 1, 0
      output.push(null, null);
      return output;
    }
  //RECURSION
    //condition 
        //write this condition first
    if(array[0].product === product){
      output.push(array[0].product, array[0].category);
      return output;
    }
    //return function with array slice index 1
    return findProduct(array.slice(1), product, output);
};


//takes in array of objects; if object.mostLikedReviews[i].length > 35; return object
//return array
//use filter
// #7 //
const filterByReviewLength = (array) => {
  //use filter on array of objects
  let reviewLength = array.filter(function(obj){
    //iterate thru mostLikedReviews objects
    for(let i = 0; i < obj.mostLikedReviews.length; i++){
      if(obj.mostLikedReviews[i].text.length > 35){
        return obj;
      }
    }
  })
  return reviewLength;
};







