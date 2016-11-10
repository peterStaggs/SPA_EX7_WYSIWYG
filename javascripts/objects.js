//capitalize actual obj. 
"use strict"
var MyApp = (function(myApp) {

	console.log("we got here");


let mainArray = []; 

let celeb1 = {
  title: "Paleontologist",
  name: "Dr. Jack Horner",
  bio: "With over 100 scientific articles and eight books published to his name, Dr. Jack Horner is a leading figure in the field of paleontology.",
  image: "http://vignette2.wikia.nocookie.net/jurassicpark/images/a/ad/Jack_Horner_Image.jpg/revision/latest?cb=20090808043321",
  lifespan: {
    birth: '1946',
    death: 'N/A'
  }
}

let celeb2 = {
  title: "Musician",
  name: "Robert Smith",
  bio: "Robert Smith is a musician best known as the frontman of popular New Wave band 'The Cure'",
  image: "https://s-media-cache-ak0.pinimg.com/236x/ab/4b/de/ab4bdee035e22713b083bc684cbb8886.jpg",
  lifespan: {
    birth: '1959',
    death: 'N/A'
  }
}

let celeb3 = {
  title: "Comedian",
  name: "Larry David",
  bio: "Larry David is a writer, comedian, and actor best known for his work on 'Seinfeld' and on his HBO show, 'Curb Your Enthusiasm'",
  image: "https://pbs.twimg.com/profile_images/1229880667/hbo-curbyourenthusiasm-header.jpg",
  lifespan: {
    birth: '1947',
    death: 'N/A'
  }
}



	mainArray.push(celeb1, celeb2, celeb3); 
	//this is the link, or anchor. The anchor is a function that calls the object in
	myApp.getMainArray = function() {
		return mainArray;
	}

	return myApp;
//call actual object
})(MyApp|| {} ); 

