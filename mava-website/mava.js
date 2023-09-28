window.onscroll = function() { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("header").classList.add("header-scroll");
  } else {
    document.getElementById("header").classList.remove("header-scroll");
  }
}


function goToHomePage() {
  window.location.href = "mava.html"; }



var dropdownStates = {};

function showDropdown(menuKey) {
  var dropdownMenu = document.getElementById("dropdown-menu-" + menuKey);
  dropdownMenu.style.display = "block";
  dropdownStates[menuKey] = true;
}

function hideDropdown(menuKey) {
  var dropdownMenu = document.getElementById("dropdown-menu-" + menuKey);
  if (!dropdownStates[menuKey]) {
    dropdownMenu.style.display = "none";
  }
  dropdownStates[menuKey] = false;
}

function hideDropdownContent(menuKey) {
  var dropdownMenu = document.getElementById("dropdown-menu-" + menuKey);
  dropdownMenu.style.display = "none";
}

function selectMenuItem(event, menuKey, index) {
  if (dropdownStates[menuKey]) {
    event.preventDefault();
    alert("Seçilen menü öğesi: " + index + " (" + menuKey + ")");
   
  }
}

  



function openModal() {
    var modal = document.getElementById("modal");
    modal.style.display = "block";
  }
  
  function closeModal() {
    var modal = document.getElementById("modal");
    modal.style.display = "none";
  }
  
  function goToPage(url) {
    window.location.href = url;
  }



  