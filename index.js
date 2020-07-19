
// Add your code here

let submit = document.getElementById("submit");
submit.addEventListener("submit", (e) => {
       e.preventDefault();
      let name = document.getElementById("name").innerHTML;
      let name = document.getElementById("email").innerHTML;
      submitData(name ,email);
});


function submitData(name ,email){

      let formData = {
      dogName: name,
      dogBreed: email
      };

      let configObj = {
      method: "POST",
      headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
      },
      body: JSON.stringify(formData)
      };

      fetch("http://localhost:3000/users", configObj)
      .then(function(response) {
      return response.json();
      })
      .then(function(object) {
          respondFun(object);
      }).catch(function(error) {
         alert("Bad things! Ragnarők!");
        console.log(error.message);
  });
}

function respondFun(object){
   document.getElementById("name").innerHTML = object ;
}
