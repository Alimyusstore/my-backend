const express = require('express')
const app = express();
const port = 3000;
const uuid = require('uuid');

// parse JSON as express 
app.use(express.json());
app.use(express.urlencoded({ extended:false })); b

let movies = [{
    id: 1,
    title: "Inception",
    director:"ibrahim Osude",
    release_date: new Date()
},
{
    id: 2,
    title: " The Irish",
    director:"Aisha Osude",
    release_date: "2015-02-12"
},{
    id: 3,
    title: "The Blood Siblings",
    director:"Tajudeen Osude",
    release_date: "2012-05-08"
},]

// get the list in the form of JSON objects
app.get("/movies", (req, res) => {
    res.json(movies);
});

// add the movies to the list of movies

app.post("/movies", (req, res) => {
    // let found = movies.some(movie => movie.id === parseInt(req.params.id));
    let movie = req.body;
    // let newMovie = {
        //     id : uuid.v4(),
        //     title: movie.title,
        //     director: movie.director,
        //     release_date: new Date()
        // }
        
        // if (!movie.title || !movie.director){
            //     res.sendStatus(400);
            // }
    // movies.push(newMovie); 
    movies.push(movie); 
    res.json(movies);
    res.send("Movie added successfully")
    
})

// search for a movie in movies

app.get("movies/:id", function(req, res){
    let id = req.params.id;
    
    for (let movie of movies) {
        if (movie.id === id) {
            res.json(movie);
             return;
            }
        }
        res.status(404).send("Movie not found");
    })
    

    //  remove movie from the list

    app.delete("/movie/:id", (req, res)=> {
        let id = req.params.id;
        movies = movies.filter(movie => movie.id !== id);
        res.json(movies);
        res.send("movie deleted");
    })
    // set the list of movies to run on server 4000
    app.listen(port, () => console.log("listening on port " + port));