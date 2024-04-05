// Get the container element
var navbar = document.getElementById("navbar");

// Get all buttons with class="btn" inside the container
var links = navbar.getElementsByClassName("link");

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < links.length; i++) {
  links[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");

    // If there's no active class
    if (current.length > 0) {
      current[0].className = current[0].className.replace(" active", "");
    }

    // Add the active class to the current/clicked button
    this.className += " active";
  });
}

//Fetching Users...................................
		
		fetch("https://jsonplaceholder.typicode.com/users/").then((data) => {
	return data.json(); //converted data to object file.
	
})
.then((objData) => {
		//console.log(objData[3].name);
		let storeData = "";
		
		objData.map((values) => {
			storeData += `<div class="card" id="names">
			<div class="name-container">
				<div class="image-box"></div>
				<p>${values.name}</p>
			</div>
				<div id="add">
				<img src="add1.svg" alt="invite to watch party." />
				</div>
			</div>`;
		});
		
		document.getElementById("cards").innerHTML = storeData;
		// users.innerHTML = data.name;
	})
	.catch((error) => {
	alert(error);
});



//----------SEARCH MOVIE API--------------------//

async function fetchData(){

    try{
		const name = document.getElementById("name");
        const pokemonName = document.getElementById("pokemonName").value.toLowerCase();
        const response = await fetch(`http://www.omdbapi.com/?apikey=[yourkey]&`);
		

        if(!response.ok){
            throw new Error("Could not fetch resource");
        }
		
        const data = await response.json();
		
		name.classList.remove("fade");
		
		name.innerHTML = data.name;
		
		/* name.classList.add("fade");
		imgElement.classList.add("fade"); */
		console.log(data);
    }
    catch(error){
		if(pokemonName.value === "")
        alert("Enter pokemon name");
		else
		alert("Could not find pokemon");
    }
}