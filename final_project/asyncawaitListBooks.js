const axios = require('axios').default;

const getBookList = new Promise((resolve, reject) => {
    const url = "http://localhost:5000/"
    const req = axios.get(url);
    req.then(resp => {
        // console.log("List of Books : ")
        // console.log(resp.data);
        resolve("List of Books : \n"+JSON.stringify(resp.data))
    })
    .catch(err => {
        console.log("Rejected for url "+url)
        console.log(err.toString())
    });
});

const getBookByISBN = new Promise((resolve, reject) => {
    const isbn = 5;
    const url = "http://localhost:5000/isbn/"+isbn;
    const req = axios.get(url);
    req.then(resp => {
        // console.log("Book by ISBN : ")
        // console.log(resp.data);
        resolve("Book by ISBN : \n"+JSON.stringify(resp.data))
    })
    .catch(err => {
        console.log("Rejected for url "+url)
        console.log(err.toString())
    });
});

const getBookByAuthor = new Promise((resolve, reject) => {
    const author = "Jane Austen";
    const url = "http://localhost:5000/author/"+author;
    const req = axios.get(url);
    req.then(resp => {
        // console.log("Book by Author : ")
        // console.log(resp.data);
        resolve("Book by Author : \n"+JSON.stringify(resp.data))
    })
    .catch(err => {
        console.log("Rejected for url "+url)
        console.log(err.toString())
    });
});

const getBookByTitle = new Promise((resolve, reject) => {
    const title = "The Epic Of Gilgamesh";
    const url = "http://localhost:5000/title/"+title;
    const req = axios.get(url);
    req.then(resp => {
        // console.log("Book by Title : ")
        // console.log(resp.data);
        resolve("Book by Title : \n"+JSON.stringify(resp.data))
    })
    .catch(err => {
        console.log("Rejected for url "+url)
        console.log(err.toString())
    });
});

getBookList.then((successMessage) => {
    console.log("\n"+successMessage+"\n");
    getBookByISBN.then((successMessage) => {
        console.log(successMessage+"\n");
        getBookByAuthor.then((successMessage) => {
            console.log(successMessage+"\n");
            getBookByTitle.then((successMessage) => {
                console.log(successMessage+"\n");
            })
        });
    });
});