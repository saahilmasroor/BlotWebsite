
function openNav(x) {
  const screenWidth = screen.width;
  if (screenWidth < 800) {
    document.getElementById("mySidenav").style.width = "100%";
  } else {
  document.getElementById("mySidenav").style.width = "30%";
  }
}

function closeNav(x) {
  document.getElementById("mySidenav").style.width = "0";
}

function myFunction(x) {
    x.classList.toggle("change");
  }