function validateForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
  
    var nameRegex = /^[a-zA-Z\s]+$/;
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

    clearErrors();

    if (!nameRegex.test(name)) {
      alert("nameError", "Name is invalid. Only letters and spaces are allowed.");
      return;
    }
  
    if (!emailRegex.test(email)) {
      alert("emailError", "Email is invalid.");
      return;
    }
  
    if (!passwordRegex.test(password)) {
      alert("passwordError \n Password must contain at least 8 characters, including one uppercase letter, one lowercase letter, and one digit.");
      return;
    }
  
    alert("Form submitted successfully!");
  }
  
  function clearErrors() {
    var errorElements = document.getElementsByClassName("error");
    for (var i = 0; i < errorElements.length; i++) {
      errorElements[i].innerHTML = "";
    }
  }
  