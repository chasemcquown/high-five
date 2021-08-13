// identify sign up/submit button
const signupBtn = document.querySelector('#signupBtn');

async function signupHandler(event) {

    event.preventDefault();

    // retrieve username value
    const username = document.querySelector('#username').value.trim();
    // retrieve password value
    const password = document.querySelector('#password').value.trim();

    // retreive user's first name
    const firstName = document.querySelector('#firstName').value.trim();
    // retrieve user's last name
    const lastName = document.querySelector('#lastName').value.trim();

    // retrieve 5 favorite things
    const favoriteSong = document.querySelector('').value.trim();
    const favoriteTeam = document.querySelector('').value.trim();
    const favoriteFood = document.querySelector('').value.trim();
    const favoritePlace = document.querySelector('').value.trim();
    const favoriteMovie = document.querySelector('').value.trim();

    // check that username and password values exist... if they do, send their info to the database
    if (username && password) {
        const response = await fetch('/api/users', {
            method: 'Post',
            body: JSON.stringify({ username, password }),
            headers: { 'Content-Type' : 'application/json' }
        })
        if (response.ok) {
            console.log('All good!');
        } else {
            alert(response.statusText);
        }
    }

    // check that user's 5 favorite things values exist... if they do, send their 5 favorite things to the database
    if (favoriteSong && favoriteTeam && favoriteFood && favoritePlace && favoriteMovie) {
        const response = await fetch('/api/users/interests', {
            method: 'Post',
            body: JSON.stringify({ favoriteSong, favoriteTeam, favoriteFood, favoritePlace, favoriteMovie }),
            headers: { 'Content-Type' : 'application/json' }
        })

        // check if response is ok.. if it is, route user to the homepage
        if (response.ok) {
            document.location.replace('/home');
        } else {
            alert(response.statusText);
        }
    }

};

// add event listener to sign up button, then execute function to send user info to database
signupBtn.addEventListener('submit', handleSignup);