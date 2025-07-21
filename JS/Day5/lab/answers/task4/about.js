var nameSpan = document.getElementById("aboutName");
var visitCountSpan = document.getElementById("visitCount");
var icon = document.getElementById("icon");
var name_;
var favoriteColor;
var gender;
var visitCount;

var cookies = document.cookie.split(';');
for (var i = 0; i < cookies.length; i++) {
    var cookie = cookies[i].trim().split('=');
    var key = cookie[0];
    var value = cookie[1];
    if (key === "name") {
        name_ = decodeURIComponent(value);
    } else if (key === "favoriteColor") {
        favoriteColor = decodeURIComponent(value);
    } else if (key === "gender") {
        gender = decodeURIComponent(value);
    } else if (key === "visitCount") {
        value++;
        document.cookie = `visitCount=${encodeURIComponent(value)};`;
        visitCount = decodeURIComponent(value);
    }
}

icon.className = gender == "male"
    ? "icon fa-solid fa-person"
    : "icon fa-solid fa-person-dress";
nameSpan.textContent = name_;
visitCountSpan.textContent = visitCount;

nameSpan.style.color = favoriteColor;
visitCountSpan.style.color = favoriteColor;