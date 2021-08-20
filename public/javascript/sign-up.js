// identify sign up/submit button
const signupBtn = document.querySelector('#signupBtn');
// identify button wrapper
const buttonWrapper = document.querySelector('#interestId');
// create an array to store user's interests
const usersInterestsArray = [];
// send user's info to database
async function signupHandler(event) {
	event.preventDefault();
	// retrieve username value
	const username = document.querySelector('#inputUsername3').value.trim();
	// retrieve password value
	const password = document.querySelector('#inputPassword3').value.trim();
	// retrieve email value
	const email = document.querySelector('#inputEmail3').value.trim();
	// check that username and password values exist... if they do, send their info to the database
	if (password && email && username) {
		console.log(username);
		console.log(password);
		console.log(email);
		const response = await fetch('/api/user', {
			method: 'Post',
			body: JSON.stringify({ username, email, password }),
			headers: { 'Content-Type': 'application/json' },
		});
		if (response.ok) {
			console.log('All good!');
			document.location.replace('user-feed');
		} else {
			alert(response.statusText);
		}
	}
}

// send user's interest to database
async function handleInterests(event) {
	event.preventDefault();
	if (event.target.id !== '#interestId') {
		usersInterestsArray.push(event.target.id);
	}

	const interest1 = usersInterestsArray[0];
	const interest2 = usersInterestsArray[1];
	const interest3 = usersInterestsArray[2];
	const interest4 = usersInterestsArray[3];
	const interest5 = usersInterestsArray[4];

	// check that user's 5 favorite things values exist... if they do, send their 5 favorite things to the database
	if (
		usersInterestsArray[0] &&
		usersInterestsArray[1] &&
		usersInterestsArray[2] &&
		usersInterestsArray[3] &&
		usersInterestsArray[4]
	) {
		const response = await fetch('/api/users/interests', {
			method: 'Post',
			body: JSON.stringify({
				interest1,
				interest2,
				interest3,
				interest4,
				interest5,
			}),
			headers: { 'Content-Type': 'application/json' },
		});

		// check if response is ok.. if it is, route user to the homepage
		if (response.ok) {
			console.log('All good!');
		} else {
			alert(response.statusText);
		}
	}
}

// add event listener to sign up button, then execute function to send user info to database
signupBtn.addEventListener('click', signupHandler);
// add event listener to button wrapper, then execute function to send user's interest to database
buttonWrapper.addEventListener('click', handleInterests);
