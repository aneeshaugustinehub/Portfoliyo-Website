/* function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
  } */
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

const hidddenElement = document.querySelectorAll(".hidden");
hidddenElement.forEach((el) => observer.observe(el));

let date = new Date().getFullYear();
let copy = "<p>&copy; " + date + " aneesh augustine</p>";
document.getElementById("year").innerHTML = copy;
