// identify sign up/submit button
const signupBtn = document.querySelector('#signupBtn');

// send user's info to database
async function signupHandler(event) {

	event.preventDefault();
	// retrieve username value
	const username = document.querySelector('#inputUsername3').value.trim();
	// retrieve password value
	const password = document.querySelector('#inputPassword3').value.trim();
	// retrieve email value
	const email = document.querySelector('#inputEmail3').value.trim();
	// retrieve user's interests
	const interestOne = document.querySelector('#interest1').value.trim();
	const interestTwo = document.querySelector('#interest2').value.trim();
	const interestThree = document.querySelector('#interest3').value.trim();
	const interestFour = document.querySelector('#interest4').value.trim();
	const interestFive = document.querySelector('#interest5').value.trim();

	// check that username and password values exist... if they do, send their info to the database
	if (password && email && username && interestOne && interestTwo && interestThree && interestFour && interestFive) {
		const response = await fetch('/api/user', {
			method: 'Post',
			body: JSON.stringify({ username, email, interestOne, interestTwo, interestThree, interestFour, interestFive, password }),
			headers: { 'Content-Type': 'application/json' },
		});
		if (response.ok) {
			console.log('All good!');
			document.location.replace('feed-routes');
		} else {
			alert(response.statusText);
		}
	}
}

// add event listener to sign up button, then execute function to send user info to database
signupBtn.addEventListener('click', signupHandler);

