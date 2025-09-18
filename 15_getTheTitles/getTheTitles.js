const books = [
    {
    title: 'Book',
    author: 'Name'
    },
    {
    title: 'Book2',
    author: 'Name2'
    }
]

const getTheTitles = (arr) =>{
    return arr.map(item => item.title);
}

// const getTheTitles = function(arr) {
//     const titleArr =[];
//     for(let i = 0; i < arr.length; i++){
//         const target = arr[i].title;
//         titleArr.push(target);
//     }
//     return titleArr;     
// };

getTheTitles(books)

// Do not edit below this line
module.exports = getTheTitles;
