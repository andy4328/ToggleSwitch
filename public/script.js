var firebaseConfig = {
    apiKey: "AIzaSyC6p8TPu9hBqIvMuX3riabAjWwPOt1qhVM",
    authDomain: "toggletest2-d0ef2.firebaseapp.com",
    databaseURL: "https://toggletest2-d0ef2-default-rtdb.firebaseio.com",
    projectId: "toggletest2-d0ef2",
    storageBucket: "toggletest2-d0ef2.appspot.com",
    messagingSenderId: "755644832492",
    appId: "1:755644832492:web:add81b86a217fc5ef123c9"
  };

firebase.initializeApp(firebaseConfig);

$(document).ready(function(){
    var database = firebase.database();
	var Led1Status;

	database.ref().on("value", function(snap){
		Led1Status = snap.val().Led1Status;
		if(Led1Status == "1"){    // check from the firebase
			//$(".Light1Status").text("The light is off");
			document.getElementById("unact").style.display = "none";
			document.getElementById("act").style.display = "block";
		} else {
			//$(".Light1Status").text("The light is on");
			document.getElementById("unact").style.display = "block";
			document.getElementById("act").style.display = "none";
		}
	});

    $(".toggle-btn").click(function(){
		var firebaseRef = firebase.database().ref().child("Led1Status");

		if(Led1Status == "1"){    // post to firebase
			firebaseRef.set("0");
			Led1Status = "0";
		} else {
			firebaseRef.set("1");
			Led1Status = "1";
		}
	})
});

