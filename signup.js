function register() {
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value.trim();
  const mobile = document.getElementById('mobile').value.trim();
  const role = document.getElementById('role').value;

  if (!name || !email || !password || !mobile) {
    alert("All fields are required!");
    return;
  }

  if (localStorage.getItem(email)) {
    alert("Email already registered!");
    return;
  }

  const user = { name, email, password, mobile, role };
  localStorage.setItem(email, JSON.stringify(user));
  alert("Registered Successfully!");
  window.location.href = "login.html";
}
