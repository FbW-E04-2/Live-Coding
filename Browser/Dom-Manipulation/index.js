console.dir(document)


/* let h1= document.querySelector("h1")
h1.classList.add("heading", "newClass")  */// attach new class/classes to el

/*  h1.className="heading newclass" */
/*h1.className="newClass" */
/* h1.classList.remove("newClass")  *///remove class/classes from el


/* h1.classList.toggle("heading")  */// if class is there it will remove that class but if class is not there it will add that class

/* h1.classList.contains("heading") */ //true or false


//create element
let div = document.createElement("div") //<div><div/> 
let h1 = document.createElement("h1") //<h1><h1/>
h1.innerText= "this is our heading" //<h1>this is our heading<h1/>
h1.classList.add("heading")
div.append(h1)  // <div><h1></h1></div>  //adding h1 into div

let section = document.createElement("section") //<section><section/>
let p = document.createElement("p") //<p><p/>
p.innerText="this is our paragraph" //<p>this is our paragraph<p/>
p.classList.add("para")
section.append(p) //adding p into section

/* p= document.createElement("p")
p.innerText="para number 2"
section.append(p) */
//add into dom tree // append into DOM
//appendChild()
//append()

/* document.body.appendChild(h1) // append h1 into DOM tree
document.body.appendChild(p) */

//create image
let img = document.createElement("img") 

img.src= "https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832__480.jpg"


/* img.setAttribute("src", "https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832__480.jpg") */
img.classList.add("image")
img.width="200"
img.height="200"


console.log(img.getAttribute("id"))

/* setAttribute()
getAttribute() */

document.body.append(section,div,img)

console.dir(h1) 

  ///insert after
  /* document.querySelector("p").after(section) */