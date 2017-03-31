$(function() {
	$( ".addFavourites" ).on("click", function(){
		
		try {
			$(this).attr('disabled', true);
			
			var signIdToAdd = $(this).closest("p").attr("id");
			
			var myFavouriteSign=JSON.parse(localStorage.getItem("favSign"));
			
			if(myFavouriteSign == null) {
				myFavouriteSign = [];
			}
			
			if(myFavouriteSign != null) {
				for ( var j = 0; j < myFavouriteSign.length; j++) {
					
					if ( signIdToAdd == myFavouriteSign[j]) {
						
						alert("This SIGN is already in your favourites"); 
						myFavouriteSign = [];
					}
				}
			}
			
			myFavouriteSign.push(signIdToAdd);
			
			localStorage.setItem("favSign", JSON.stringify(myFavouriteSign));
			
		}
		
		catch (e) {
			if (e==QUOTA_EXCEEDED_ERR) {
				console.log("Error: Favourites limit exceeds");
			}
			
			else {
				console.log("ERROR: Saving to local storge.");
			}
		}
	});
});




$(function() {
	$( ".removeFavourites" ).on("click", function(){
		
			$(this).attr('disabled', true);
			
			var signIdToRemove = $(this).closest("p").attr("id");
			
			 myFavouriteSign=JSON.parse(localStorage.getItem("favSign"));
			
			
			if(myFavouriteSign != null) {
				for ( var j = 0; j < myFavouriteSign.length; j++) {
					
					if ( signIdToRemove == myFavouriteSign[j]) {
						
						alert("This SIGN has been removed");
						
						delete myFavouriteSign[j];
						
						localStorage.setItem("favSign", JSON.stringify(myFavouriteSign));
						
						myFavouriteSign[j] = [];
					}
				}
			}
			
			if(myFavouriteSign == null) {
				alert("You have no favourite Signs");
			}
		});
	});
	
	
$(function(){
		
		console.log("Restoring array data from local storage");
		
		myFavouriteSign=JSON.parse(localStorage.getItem("favSign"));
		
		var output = "<ul>";
		
		if (myFavouriteSign != null) {
			
			for (var i = 0; i < data.sign_pages.length; i++) {
				for (j = 0; j < myFavouriteSign.length; j++) {
					
					if (data.sign_pages[i].id == myFavouriteSign[j]) {	
output+="<h1>" + data.sign_pages[i].sign + "" + "</h1>" + 
"<img src=" + data.sign_pages[i].image + ">" +"<li><button><a href=' " +data.sign_pages[i].url + "'>Visit page</a></button></li>";
					}
				}
			}
		}
		output+="</ul>";
		
		document.getElementById( "favouriteResults" ).innerHTML = output;
	
	});



$(function() {
	$( ".clearFavourites" ).on("click", function(){
		
		$("#favouriteResults").remove();
		
		myFavouriteSign=JSON.parse(localStorage.getItem("favSign"));
		
		localStorage.clear();
		
	});
	
});

var data = { 

	"sign_pages": [
        {
                "id":"sign1",
                "sign": "Hello",
                "url": "../signs_pages/hello.html",
                "image": "../media/image/makaton_signs/hello.svg"
            },
            {
                "id":"sign2",
                "sign": "World",
                "url": "../signs_pages/world.html",
                "image": "../media/image/makaton_signs/world.svg"
            },
            {
                "id":"sign3",
                "sign": "Home",
                "url": "../signs_pages/home.html",
                "image": "../media/image/makaton_signs/home.svg"
            },
            {
                "id":"sign4",
                "sign": "Please",
                "url": "../signs_pages/please.html",
                "image": "../media/image/makaton_signs/please.svg"
            },
            {
                "id":"sign5",
                "sign": "Good",
                "url": "../signs_pages/good.html",
                "image": "../media/image/makaton_signs/good.svg"
            } 
]}