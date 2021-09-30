//Request Methods
//GET => get data from the server
//POST => add or create new data into exernal resources
//PATCH or PUT => updating any existing record/resources
//DELETE =>delete any existing record

//Request
//Response

//whenever you tranfer data from one place to another place you have to always stringify that data
//JSON.stringify(data)

//GET
/* fetch("https://jsonplaceholder.typicode.com/users", {method:"GET"})
.then(response=>response.json())
.then(data=>{
    console.log(data)
    let ul = document.createElement("ul")
    data.forEach(user=>{
        let li = document.createElement("li")
        li.innerText= user.name
        ul.appendChild(li)
    })
    document.body.appendChild(ul)
}) */

//POST
/* let user = {
    name: "morpheus",
    job: "leader",
    skill:"html"
};

fetch("https://reqres.in/api/users", {
  method: "POST",
  body: JSON.stringify(user)
})
  .then(response=>response.json())
  .then(result=>console.log(result)); */




  //PUT //PATCH

/*   let user = {
    name: "morpheus",
    job: "zion resident"
};

fetch("https://reqres.in/api/users/2", {
  method: "PATCH",
  body: JSON.stringify(user)
})
  .then(response=>response.json())
  .then(result=>console.log(result)); */


  //DELETE
  fetch("https://reqres.in/api/users/2", {
  method: "DELETE"
})
  .then(response=>console.log(response))
/*   .then(result=>console.log(result)); */