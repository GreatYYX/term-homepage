// Light/dark theme. The saved choice is applied early by a small script in the
// <head> of index.html; colors for each mode are defined in style.css.
function is_light_mode() {
  return document.documentElement.getAttribute("data-theme") === "light";
}

function set_theme_mode(light) {
  document.documentElement.setAttribute("data-theme", light ? "light" : "dark");
  localStorage.setItem("theme-mode", light ? "light" : "dark");
  document.getElementById("theme-switch").innerHTML = light ? "[ ◑ light ]" : "[ ◐ dark ]";
}

function load_content(element_id, page) {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", page);
  xhr.onload = function () {
    if (xhr.status === 200) {
      document.getElementById(element_id).innerHTML = xhr.responseText;
    } else {
      console.log(xhr.statusText);
    }
  };
  xhr.send(null);
}

(function () {
  set_theme_mode(is_light_mode());
  document.getElementById("theme-switch").addEventListener("click", function () {
    set_theme_mode(!is_light_mode());
  });

  load_content("logo", "logo.html");
  load_content("profile-picture", "profile-picture.html");
})();
