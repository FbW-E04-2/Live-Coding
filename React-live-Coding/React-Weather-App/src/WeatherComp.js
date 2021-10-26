import React, { Component } from 'react'

const API_KEY= "1d68185a8bf5aeed5e1de06743bc9c7d"

const URL="https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}"


export class WeatherComp extends Component {
    state={
        city:"Berlin",
        temp:7,
        maxTemp:14,
        minTemp:2,
        description:"it is rainy today",
        code:"10d",
        inputValue:""
    }

    getCityName=(e)=>{
        this.setState({inputValue:e.target.value})
    }

    submitForm=(e)=>{
        e.preventDefault()
        console.log("submitted data")
        this.fetchWeatherData(this.state.inputValue)
    }

    fetchWeatherData=(city)=>{
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`)
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
        })
    }
    
    render() {

        const { city,temp,maxTemp,minTemp,description,code }  =    this.state

        return (
            <div>
                <form onSubmit={this.submitForm}>
                    <input type="text" name="city" onChange={this.getCityName} />
                    <input type="submit" value="get weather"/>
                </form>
                <div className="top">
                    <h2>{city}</h2>
                    <div className="image">
                        <img src={`https://openweathermap.org/img/wn/${code}@2x.png `} width="120" height="120" alt="" />
                    </div>
                </div>

                <div className="bottom">
                    <div className="left">
                        {temp}°C
                    </div>
                    <div className="right">
                        <p>Max Temp: {maxTemp}°C</p>
                        <p>Min Temp: {minTemp}°C</p>
                        <p>Description: {description}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default WeatherComp
