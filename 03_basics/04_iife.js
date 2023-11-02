//Immediately Invoked Function Expressions (IIFE)

// IIFY is a function that invokes immediately and global scope ke pollution se problem hoti bhut bar to us global scope ke polloution / variable ko hatane ke liye scope ka use hota h

(function chai(){
    console.log('DB conected');
})(); // named iify //(;) to stopy the iify because it doesnt know where to stop the context

// structure
()() => pehla wala function ke liye h dsra wala execution call

// iify in arrow function
/* without name IIFY */ 
( (name) => {
    console.log(DB connected two ${name});
} ) ('vikash');  // passing name in a function
