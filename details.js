// Signup Page
const signupForm = document.getElementById('signupForm');

if (signupForm) {
  signupForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const user = {
      username: username,
      password: password
    };
    localStorage.setItem('user', JSON.stringify(user));
    alert('Signup successful! Please proceed to the login page.');
    signupForm.reset();
    window.location.href = 'login.html'; // Redirect to the login page
  });
}

// Login Page
const loginForm = document.getElementById('loginForm');

if (loginForm) {
  loginForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const storedUser = JSON.parse(localStorage.getItem('user'));

    if (storedUser) {
      console.log(storedUser); // Log the stored user data to the console for debugging
      if (storedUser.username === username && storedUser.password === password) {
        alert('Login successful! You are now logged in.');
        loginForm.reset();
        window.location.href = 'index.html'; // Redirect to the index.html (dashboard) page
        return false; // Prevent form submission after successful login
      } else {
        alert('Invalid credentials. Please try again.');
      }
    } else {
      alert('User not found. Please sign up first.');
    }
  });
}
