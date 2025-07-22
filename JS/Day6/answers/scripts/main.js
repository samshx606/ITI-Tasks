var userDataContainer = document.getElementById('user-data'),
    fetchButton       = document.getElementById('fetch-btn'),
    searchButton     = document.getElementById('search-btn'),
    searchField      = document.getElementById('search-input'),
    userList         = [];

function makeTableCell(content) {
    var cell = document.createElement('td');
    cell.textContent = content;
    return cell;
}

function buildUserRow(userData) {
    var newRow = document.createElement('tr');
    
    newRow.appendChild(makeTableCell(userData.id));
    
    var avatarCell = document.createElement('td');
    var avatarImage = new Image();
    avatarImage.src = 'https://picsum.photos/50/50?random=' + (userData.id);
    avatarCell.appendChild(avatarImage);
    newRow.appendChild(avatarCell);
    
    newRow.appendChild(makeTableCell(userData.name));
    newRow.appendChild(makeTableCell(userData.email));
    newRow.appendChild(makeTableCell(userData.username));
    newRow.appendChild(makeTableCell(userData.phone));
    
    var websiteCell = document.createElement('td');
    var websiteAnchor = document.createElement('a');
    websiteAnchor.href = 'http://' + userData.website;
    websiteAnchor.textContent = userData.website;
    websiteAnchor.target = '_blank';
    websiteCell.appendChild(websiteAnchor);
    newRow.appendChild(websiteCell);
    
    var actionCell = document.createElement('td');
    var viewButton = document.createElement('button');
    var deleteButton = document.createElement('button');
    
    viewButton.textContent = 'View';
    viewButton.className = 'actions-btn view-btn';
    deleteButton.textContent = 'Delete';
    deleteButton.className = 'actions-btn delete-btn';
    
    viewButton.addEventListener('click', function() {
        document.cookie = 'user=' + encodeURIComponent(JSON.stringify(userData)) + ';path=/';
        window.location.href = '../pages/profile.html';
    });
    
    deleteButton.addEventListener('click', function() {
        userDataContainer.removeChild(newRow);
        for (var i = 0; i < userList.length; i++) {
            if (userList[i].id === userData.id) {
                userList.splice(i, 1);
                break;
            }
        }
    });
    
    actionCell.appendChild(viewButton);
    actionCell.appendChild(deleteButton);
    newRow.appendChild(actionCell);
    
    userDataContainer.appendChild(newRow);
}
function getAllUsers() {
    var request = new XMLHttpRequest();
    
    request.onreadystatechange = function() {
        if (request.readyState === 4) {
            if (request.status === 200) {
                userList = JSON.parse(request.responseText);
                userDataContainer.innerHTML = '';
                
                for (var i = 0; i < userList.length; i++) {
                    buildUserRow(userList[i]);
                }
            } else {
                console.error('Error fetching users:', request.status);
            }
        }
    };
    
    request.open('GET', 'https://jsonplaceholder.typicode.com/users', true);
    request.send();
}
function findUser() {
    var userId = searchField.value;
    
    if (!userId) {
        return;
    }
    
    var request = new XMLHttpRequest();
    
    request.onreadystatechange = function() {
        if (request.readyState === 4) {
            userDataContainer.innerHTML = '';
            
            if (request.status === 200) {
                var user = JSON.parse(request.responseText);
                buildUserRow(user);
            } else {
                alert('No user found with ID: ' + userId);
            }
        }
    };
    
    request.open('GET', 'https://jsonplaceholder.typicode.com/users/' + userId, true);
    request.send();
}
fetchButton.addEventListener('click', getAllUsers);
searchButton.addEventListener('click', findUser);