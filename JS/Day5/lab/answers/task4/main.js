var nameInput = document.getElementById("nameInput");
var ageInput = document.getElementById("ageInput");
var favoriteColor = document.getElementById("colorSelect");
var genderRadios = document.getElementsByName("gender");

function register() {
    var name = nameInput.value;
    var age = ageInput.value;
    var favoriteColorValue = favoriteColor.value;

    var genderSelected = "";
    genderRadios[0].checked ? genderSelected = genderRadios[0].id : genderSelected = genderRadios[1].id;

    document.cookie = `name=${encodeURIComponent(name)};`;
    document.cookie = `age=${encodeURIComponent(age)};`;
    document.cookie = `favoriteColor=${encodeURIComponent(favoriteColorValue)};`;
    document.cookie = `gender=${encodeURIComponent(genderSelected)};`;
    document.cookie = `visitCount=${encodeURIComponent(0)};`;
    window.location.href = "about.html";
}