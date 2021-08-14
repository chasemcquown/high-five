// identify sign up/submit button
const signupBtn = document.querySelector('#signupBtn');

// identify button wrapper
const buttonWrapper = document.querySelector("#wrapper")

// create an array to store user's chosen interests
const usersInterestsArray = [];

// send user's info to database
async function signupHandler(event) {

    event.preventDefault();

    // retrieve username value
    const username = document.querySelector('#username').value.trim();
    // retrieve password value
    const password = document.querySelector('#password').value.trim();
    // retrieve email value
    const email = document.querySelector('#email').value.trim();


    // check that username and password values exist... if they do, send their info to the database
    if (username && password && email) {
        const response = await fetch('/api/users', {
            method: 'Post',
            body: JSON.stringify({ username, password, email }),
            headers: { 'Content-Type' : 'application/json' }
        })
        if (response.ok) {
            console.log('All good!');
        } else {
            alert(response.statusText);
        }
    }

};

// send user's interest to database
async function handleInterests (event) {

    event.preventDefault();

    usersInterestsArray.push(event.target.id); 

    const interest1 = usersInterestsArray[0];
    const interest2 = usersInterestsArray[1];
    const interest3 = usersInterestsArray[2];
    const interest4 = usersInterestsArray[3];
    const interest5 = usersInterestsArray[4];
    
    if (usersInterestsArray[0] && usersInterestsArray[1] && usersInterestsArray[2] && usersInterestsArray[3] && usersInterestsArray[4]) {
        const response = await fetch('/api/interests', {
            method: 'Post',
            body: JSON.stringify({ interest1, interest2, interest3, interest4, interest5 }),
            headers: { 'Content-Type' : 'application/json' }
        })
        if (response.ok) {
            document.location.replace('/user-feed');
        } else {
            alert(response.statusText);
        }
    }

}

// add event listener to sign up button, then execute function to send user info to database
signupBtn.addEventListener('submit', handleSignup);

// add event listener to button wrapper, then execute function to send user's interest to database
buttonWrapper.addEventListener('click', handleInterests)