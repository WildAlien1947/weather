// Register
const registerForm = document.getElementById('registerForm');
if (registerForm) {
  registerForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const username = document.getElementById('regUsername').value;
    const password = document.getElementById('regPassword').value;

    if (username && password) {
      localStorage.setItem(username, password);
      document.getElementById('registerSuccess').textContent = 'Account created successfully!';
      registerForm.reset();
    }
  });
}

// Login
const loginForm = document.getElementById('loginForm');
if (loginForm) {
  loginForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;

    const storedPassword = localStorage.getItem(username);

    if (storedPassword && storedPassword === password) {
      window.location.href = 'main.html';
    } else {
      document.getElementById('loginError').textContent = 'Invalid username or password.';
    }
  });
}
