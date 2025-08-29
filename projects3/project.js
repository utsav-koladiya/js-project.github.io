let films= [
    {
       name :"The Shawshank Redemption",
       Genre:" Drama",
       rating: 8.5 ,
       hero: "Andy Dufresne "
    },
    {
       name:" The Godfather",
       Genre: "Crime",
       rating: 9.7,
       hero: "Michael Corleone "
    },
    {
        name :"The godmother",
        Genre: "action",
        rating: 9,
        hero: "Michael owen "
    },
    {
        name:"pulp fiction",
        Genre:"crime",
        rating:8.6,
        hero :"John Travolta"
    },
    {
        name :"Forrest Gump",
        Genre:"cinema",
         rating:8,
         hero :"John kestol"


    },
    {
          name :"Inception",
        Genre:"crime",
         rating:7,
         hero :"Dom Cobb"
    },
    {
        
          name :"The Matrix",
        Genre:"action",
         rating:9.5,
         hero :"neo"
    }
]


// add

let addfilms = (name, Genre,rating,hero) => {
    films.push({name, Genre,rating,hero})
    console.log(`new film: ${name} - ${Genre} - ${rating}, - ${hero} added!`)
}



// show / read
let showfilms = () => {
    console.log("films: ")
    films.forEach((data, index)=>
        console.log(`${index+1}. ${data.name} - ${data.Genre} - ${data.rating} - ${data.hero}`)
    )
}
// update


let updatefilms = (position, newname, newgenre,newrating,newhero) => {
    
    let index = position ;

     films[index];
     films.splice(index,1, { name: newname, Genre: newgenre , rating :newrating ,  hero : newhero});

}
const searchfilms = (rating) => {
    let result = films.filter((data) => data.rating === rating);
    console.log(result.length === 0 ? "Not Found" : result);
};


// delete


const deletefilms = (index) => {
      let removed=films[index] &&films.splice(index, 1);
     
    console.log("removed",removed );
};
// random 
const playSong = () => {
let index = (Math.floor(Math.random()*films.length))
 console.log(`Now Playing 🎶: ${films[index].name}`)
}

// function call
deletefilms( 1)
updatefilms( 2,"the aneee" , "romentice" , 9 , "lues vithhol")
showfilms()
addfilms("mirzapur" , "action" , 9 , "munna tripathi")
searchfilms(9)
playSong()