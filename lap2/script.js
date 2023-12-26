document.addEventListener("content", function () {
    fetchUserData();
  });
  
  function fetchUserData() {
    fetch("https://reqres.in/api/users?page=2")
      .then(response => response.json())
      .then(data => displayUserData(data.data))
      .catch(error => console.error('Error fetching user data:', error));
  }
  
  function displayUserData(users) {
    var userDataContainer = document.getElementById("userData");
  
    users.forEach(user => {
      var userDiv = document.createElement("div");
      userDiv.classList.add("user-card");
  
      var avatarImg = document.createElement("img");
      avatarImg.classList.add("user-avatar");
      avatarImg.src = user.avatar;
      avatarImg.alt = "User Avatar";
  
      var emailParagraph = document.createElement("p");
      emailParagraph.classList.add("user-email");
      emailParagraph.textContent = "Email: " + user.email;
  
      userDiv.appendChild(avatarImg);
      userDiv.appendChild(emailParagraph);
  
      userDataContainer.appendChild(userDiv);
    });
  }
  