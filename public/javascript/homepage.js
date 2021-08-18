// identify login button
const loginButton = document.querySelector("#loginBtn");
// identify sign up button
const signUpButton = document.querySelector("#signUpBtn");

async function handleLogin(event) {
  event.preventDefault();

  // retreive username
  const username = document.querySelector("#username").value.trim();
  // retrieve password
  const password = document.querySelector("#password").value.trim();

  console.log(username, password);
  console.log("loginBtn");
  if (username && password) {
    const response = await fetch("/api/user/login", {
      method: "Post",
      body: JSON.stringify({ username, password }),
      headers: { "Content-Type": "application/json" },
    });
    if (response.ok) {
      document.location.replace("/user-feed");
    } else {
      alert(response.statusText);
    }
  }
}

function handleSignup() {
  // if the sign up button is selected, then route user to the sign up page
  document.location.replace("/sign-up");
}

// add event listener to login button
loginButton.addEventListener("click", handleLogin);

// add event listener to the sign up button
signUpButton.addEventListener("click", handleSignup);
