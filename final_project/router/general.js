const express = require('express');
let books = require("./booksdb.js");
let isValid = require("./auth_users.js").isValid;
let users = require("./auth_users.js").users;
const public_users = express.Router();

public_users.post("/register", (req,res) => {
  //Write your code here
  const username = req.body.username;
  const password = req.body.password;

  if (username && password) {
    if (!isValid(username)) { 
      users.push({"username":username,"password":password});
      return res.status(200).json({message: "User successfully registred. Now you can login"});
    } else {
      return res.status(404).json({message: "User already exists!"});    
    }
  } 
  return res.status(404).json({message: "Unable to register user."});
  // return res.status(300).json({message: "Yet to be implemented"});
});

// Get the book list available in the shop
public_users.get('/',function (req, res) {
  //Write your code here

  res.send(JSON.stringify(books,null,4));
  // return res.status(300).json({message: "Yet to be implemented"});
});

// Get book details based on ISBN
public_users.get('/isbn/:isbn',function (req, res) {
  //Write your code here
  isbn = req.params.isbn;
  return res.send(JSON.stringify(books[isbn],null,4));
  // return res.status(300).json({message: "Yet to be implemented"});
 });
  
// Get book details based on author
public_users.get('/author/:author',function (req, res) {
  //Write your code here
  let author = req.params.author;
  let isbns = Object.keys(books);
  booksByAuthor = {};
  let i=0;
  while(i<isbns.length){
    isbn = isbns[i];
    if(books[isbn]["author"] === author){
      booksByAuthor[isbn] = books[isbn];
    }
    i = i+1;
  }
  return res.send(JSON.stringify(booksByAuthor,null,4));
  // return res.status(300).json({message: "Yet to be implemented"});
});

// Get all books based on title
public_users.get('/title/:title',function (req, res) {
  //Write your code here
  let title = req.params.title;
  let isbns = Object.keys(books);
  booksByTitle = {};
  let i=0;
  while(i<isbns.length){
    isbn = isbns[i];
    if(books[isbn]["title"] === title){
      booksByTitle[isbn] = books[isbn];
    }
    i = i+1;
  }
  return res.send(JSON.stringify(booksByTitle,null,4));
  // return res.status(300).json({message: "Yet to be implemented"});
});

//  Get book review
public_users.get('/review/:isbn',function (req, res) {
  //Write your code here
  isbn = req.params.isbn;
  title = books[isbn]["title"];
  reviews = books[isbn]["reviews"];

  return res.send(`Reviews for isbn ${isbn} book ${title} : ${JSON.stringify(reviews)}`);
  // return res.status(300).json({message: "Yet to be implemented"});
});

module.exports.general = public_users;
