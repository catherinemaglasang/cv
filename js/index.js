// Contact form validation
function validateForm() {
  var field = document.forms["myForm"];
  if (field.Email.value == "") {
    // document.getElementById("Email").value = "Email required";
    // field.Email.focus() ;
    return false;
  }

}
