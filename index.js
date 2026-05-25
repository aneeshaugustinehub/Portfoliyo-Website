
let date = new Date().getFullYear();
let copy = "<p>&copy; " + date + " aneesh augustine</p>";
document.getElementById("year").innerHTML = copy;

const toggle = document.getElementById('theme-toggle');

toggle.addEventListener('click', () => {
  document.documentElement.classList.toggle('dark');

  // Save preference
  const isDark = document.documentElement.classList.contains('dark');
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
});

// Load saved preference on page load
if (localStorage.getItem('theme') === 'dark' ||
  (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  document.documentElement.classList.add('dark');
}