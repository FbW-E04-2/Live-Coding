import React from 'react'

/* export default function Article(props) {
    return (
        <div>
            <h1>{props.heading}</h1>
            <p>{props.para1}</p>
            <p>{props.para2}</p>
        </div>
    )
} */

export default class Article extends React.Component{

    render(){
        return(
            <div>
            <h1>{this.props.heading}</h1>
            <p>{this.props.para1}</p>
            <p>{this.props.para2}</p>
            </div>
        )
    }
}
