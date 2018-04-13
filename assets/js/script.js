function menuToggle(value){
  var menu =  document.getElementById("menuClickOpen");
  var wrapper = document.getElementById("menuClick");
  menu.classList.toggle('d-none');
  menu.classList.toggle('d-flex')
  wrapper.classList.toggle('d-none');
}
