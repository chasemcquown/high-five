// identify login button 
const loginButton = document.querySelector('loginBtn');
// identify sign up button
const signUpButton = document.querySelector('signUpBtn');

async function handleLogin(event) {

    event.preventDefault();

    // retreive username
    const username = document.querySelector('#username-login').value.trim();
    // retrieve password
    const password = document.querySelector('#password-login').value.trim();

    if (username && password) {
        const response = await fetch('', {
            method: 'Post',
            body: JSON.stringify({username, password}),
            headers: { 'Content-Type' : 'application/json'}
        })
        if (response.ok) {
            document.location.replace('/home');
        } else {
            alert(response.statusText);
        }
    }

};

function handleSignup() {
    
    // if the sign up button is selected, then route user to the sign up page 
    document.location.replace('/signup');

};

// add event listener to login button
loginButton.addEventListener('submit', handleLogin);
// add event listener to the sign up button 
signUpButton.addEventListener('click', handleSignup);