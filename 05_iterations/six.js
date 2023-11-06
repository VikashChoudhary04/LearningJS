const coding = ["js", "ruby", "java", "python", "cpp"]

const values = coding.forEach((item) => {
    console.log(item);
    return item
})
console.log(values); // returning for each loop in a variable however its output will be undefined 

const myNums = [1,2,3,4,5,6,7,8,9,10]
myNums.filter( (num) => num > 4)
console.log(newNums);  // filter is like a for each loop but it takes a conditions to check and then return to the variable


//returning using for each loop to a variable
const newNums = []
myNums.forEach( (num) => {
    if(num > 4) {
        newNums.push(num)
    }

})
console.log(newNums);

// Filter Method
const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];
  let userBooks = books.filter( (bk) => bk.genre === 'History')
  userBooks = books.filter( (bk) => { 
    return bk.publish >= 2000 && bk.genre === "History" })
  console.log(userBooks);
