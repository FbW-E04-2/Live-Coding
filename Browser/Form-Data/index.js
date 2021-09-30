let form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  //first way to get data from all input field
  /*    let inputs = document.querySelectorAll("input") //NodeList
let obj ={}
    inputs.forEach(inp=>{
        if(inp.type==="checkbox" || inp.type==="radio"){
            if(inp.checked){
               obj[inp.name]=inp.value
            }
        }else{
            obj[inp.name]=inp.value
        }
    }) 
    let textarea= document.querySelector("textarea")
     console.log(textarea.value)  
    obj[textarea.name]=textarea.value
  
    console.log(obj) */
  //second way to get data from form

  /* let username = form.elements["user"].value;
    let email = form.elements["email"].value;
    let html = form.elements["html"].checked? form.elements["html"].value:null
    console.log(username, email,html) */

  /*   let obj ={
        username: form.elements["user"].value,
        password: form.elements["password"].value
    } */

  //third way to get data from form

  let formData = new FormData(form);
 

  console.log([...formData])
let obj = {}
let skills=[]
  for(let item of formData){
      if(item[0]==="skill"){
        skills.push(item[1])
      }else{
          obj[item[0]] = item[1]
      }
  }

  obj.skill=skills

  console.log(obj)


  /* 
    console.log(formData.get("user"))
    console.log(formData.get("html"))
    console.log(formData.get("css"))
    console.log(formData.get("gender")) 
    console.log(formData.get("message")) */
});

/* let array = [
  ["item1", "item2"],
  ["item3", "item4"],
  ["item5", "item6"],
  ["item7", "item8"],
  ["item9", "item10"],
];

for (let item of array) {
  console.log(item[1]);
} */
