import "./css/style.css"
import "./css/style.scss"
import {changeBG} from "./EventHandlers.js"

/* var _ = require('lodash'); */
import _ from "lodash" //without any extension
import moment from "moment"


// CommenJs syntax
/* var React = require('react');

//ES6 syntac
import React from "react" */

console.log(moment().format('MMMM Do YYYY, h:mm:ss a'))

export let heading = document.querySelector("h1")




let numbers= [1,2,3,4,5,6,7]

console.log(_.chunk(numbers, 2))

console.log(_.random(50,100))

console.log(_.shuffle(numbers))

console.log("parcel running well")
heading.addEventListener("click",changeBG )