function getCookieByName(cookieName) {
    var cookieArray = document.cookie.split(';');
    for (var i = 0; i < cookieArray.length; i++) {
        var cookiePair = cookieArray[i].trim().split('=');
        if (cookiePair[0] === cookieName) {
            return decodeURIComponent(cookiePair[1]);
        }
    }
    return null;
}

var userCookie = getCookieByName('user');
if (userCookie) {
    try {
        var userData = JSON.parse(userCookie);
        document.getElementById('profile-id').textContent = userData.id;
        document.getElementById('profile-name').textContent = userData.name;
        document.getElementById('profile-email').textContent = userData.email;
        document.getElementById('profile-username').textContent = userData.username;
        document.getElementById('profile-address').textContent = 
            userData.address.street + ', ' + userData.address.city;
        document.getElementById('profile-phone').textContent = userData.phone;
        
        var websiteElement = document.getElementById('profile-website');
        websiteElement.href = 'http://' + userData.website;
        websiteElement.textContent = userData.website;
        
        document.getElementById('profile-avatar').src = 
            'https://picsum.photos/50/50?random=' + (userData.id);
            
    } catch (error) {
        document.getElementById('profile-card').innerHTML = 
            '<div class="error-message">Error loading user profile data.</div>';
    }
} else {
    document.getElementById('profile-card').innerHTML = 
        '<div class="error-message">No user data available. Please return to the main page.</div>';
}