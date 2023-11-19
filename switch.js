

function darkmode(checkboxElem) {
    if (checkboxElem.checked) {
        var element = document.body;
        element.classList.toggle("dark-mode");
    } else {
        var element = document.body;
        element.classList.toggle("light-mode");    }
  }