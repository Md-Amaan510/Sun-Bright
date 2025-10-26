const modal = document.getElementById('loginModal');
function openLogin(role) {
modal.classList.add('open');
document.getElementById('loginTitle').textContent = role ? role.charAt(0).toUpperCase() + role.slice(1) + " Login" : "Login";
}
function closeLogin() { modal.classList.remove('open'); }
function switchTab(e) {
document.querySelectorAll('.tab').forEach(tab => tab.classList.remove('active'));
e.target.classList.add('active');
}
function handleLogin(e) {
e.preventDefault();
alert('Logged in (demo)');
closeLogin();
}