//document.getElementById("blok").style.backgroundColor = "red";


var button_1_F = document.getElementById("lS_add");

// :hover [CSS]
/*button_1_F.addEventListener("mouseover", function() {
	this.style.backgroundColor = "rgb(245,245,245)";
});
button_1_F.addEventListener("mouseout", function() {
	this.style.backgroundColor = "rgb(240,240,240)";
});*/

// :active [CSS]
/*button_1_F.addEventListener("mousedown", function() {
	this.style.backgroundColor = "rgb(250,250,250)";
});
button_1_F.addEventListener("mouseup", function() {
	this.style.backgroundColor = "rgb(245,245,245";
});*/


// Zadanie: Zastosuj tutaj getElementsByClassName z pętlą [for].
var buttons = document.getElementsByClassName("but_type_1");
for (i = 0; i < buttons.length; i++) {
	buttons[i].addEventListener("mouseover", function() {
		this.style.backgroundColor = "rgb(245,245,245)";
	});
}
for (i = 0; i < buttons.length; i++) {
	buttons[i].addEventListener("mouseout", function() {
		this.style.backgroundColor = "rgb(240,240,240)";
	});
}
for (i = 0; i < buttons.length; i++) {
	buttons[i].addEventListener("mousedown", function() {
		this.style.backgroundColor = "rgb(250,250,250)";
	});
}
for (i = 0; i < buttons.length; i++) {
	buttons[i].addEventListener("mouseup", function() {
		this.style.backgroundColor = "rgb(245,245,245)";
	});
}

// Dalsza część, tu już musi być [id], ponieważ będą funkcje indywidualne do każdego buttona.
//var value = 0;
//value_area.innerHTML = value;
var value_area = document.getElementById("counter_value");
var add = document.getElementById("lS_button_add");
var resetV = document.getElementById("lS_button_reset");
var subtrack = document.getElementById("lS_button_subtract");
add.addEventListener("click", function() {   // Wszystkie poniższe elementy tej funkcji muszą być ustawione w takiej właśnie kolejności.
	var value = Number(window.localStorage.getItem("user_score"));
	value += (9/1.9);   // + 4.74...
	window.localStorage.setItem("user_score", value);
	value_area.innerHTML = parseFloat(value).toFixed(2);   // value_area = document.getElementById("counter_value")
});
resetV.addEventListener("click", function() {
	var value = Number(window.localStorage.getItem("user_score"));
	value *= 0;
	window.localStorage.setItem("user_score", value);
	value_area.innerHTML = parseFloat(value).toFixed(2);
});
subtrack.addEventListener("click", function() {
	var value = Number(window.localStorage.getItem("user_score"));
	value -= (9/1.9);   // [value -= (9/1.9);] = [value = value + (9/1.9);]
	window.localStorage.setItem("user_score", value);
	value_area.innerHTML = parseFloat(value).toFixed(2);
});

// Usuwanie wszystkich danych z magazynu pamięci
var delete_memory = document.getElementById("lS_button_delete_memory");
delete_memory.addEventListener("click", function() {
	window.localStorage.clear();
	value_area.innerHTML = parseFloat(0).toFixed(2);   // Dodawanie do liczby 2 miejsc po przecinku, tzn: [LICZBA],00
});


// Wczytanie danych po ponownym otwarciu strony
function show_saved_values() {
	var value = Number(window.localStorage.getItem("user_score"));
	window.localStorage.setItem("user_score", value);
	value_area.innerHTML = parseFloat(value).toFixed(2);
}















