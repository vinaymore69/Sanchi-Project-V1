let statusCode = true; // Change this to false as needed

// Select the elements by id
const dashboardSection = document.getElementById('dashboard-section');
const loginSection = document.getElementById('login-section');

// Toggle visibility based on statusCode
if (statusCode) {
  dashboardSection.style.display = 'block';
  loginSection.style.display = 'none';
} else {
  dashboardSection.style.display = 'none';
  loginSection.style.display = 'block';
}
