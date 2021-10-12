import React from "react";

export default function ChildComponent() {
  let name = "Joseph";
  let obj = {
    name: "Naqvi",
  };

  function Name() {
    return "Robert";
  }

  let numbers = [1, 2, 3, 4, 5]; // => [<p>1</p>, <p>2</p>,<p>3</p>,<p>4</p>,<p>5</p>]

  let students = [
    { name: "misbah", age: 23 },
    { name: "Rais", age: 34 },
  ];
  let studentsData= students.map(student=>{
    return (
        <div> 
            <h2>Student name is {student.name} and age is {student.age}</h2>
        </div>
    )
  })

  return (
    //JSX
    <div>
      <h1 /* style={name==="Ali"? {backgroundColor:"green"}:{backgroundColor:"red"}} */
      >
        Hi,
        {numbers.map((num) => {
          return <p> {num} </p>;
        })}
      </h1>
       { studentsData }
    </div>
  );
}
