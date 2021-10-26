import React, { Component } from 'react'


export class WeatherComp extends Component {
    state={
        city:"Berlin",
        temp:70,
        maxTemp:175754,
        minTemp:2,
        description:"it is rainy today", 
        code:"10d",
        inputValue:"",
        errorMessage:""
    }


    componentDidMount(){
        console.log("`********* first render finished ************`")
        //onload
        this.fetchWeatherData(this.state.city)
    }

    getCityName=(e)=>{
        this.setState({inputValue:e.target.value})
    }

    submitForm=(e)=>{
        e.preventDefault()
        console.log("submitted data")
        if(this.state.inputValue.trim()!==""){
            this.fetchWeatherData(this.state.inputValue) 
        }else{
            this.setState({errorMessage:"please enter city name in input field"})
        }
       
    /*     this.setState({inputValue:""}) */
    }

    fetchWeatherData=(city)=>{
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_API_KEY}&units=metric`)
        .then(res=>res.json())
        .then(data=>{

            if(data.cod===200){
                this.setState({
                    city:data.name
                    ,temp : data.main.temp
                    ,maxTemp : data.main.temp_max
                    ,minTemp: data.main.temp_min
                    ,description : data.weather[0].description
                    ,code : data.weather[0].icon
                })
                
            }else{
                this.setState({errorMessage:data.message})
            } 
        })
    }


    shouldComponentUpdate(nextProps,nextState){
        console.log("********** should component update*****************")
        if(JSON.stringify(nextState)===JSON.stringify(this.state)){
              return false;
        }else{
            return true
        }
    }

    render() {

        console.log("*************** render ************************")
        const { city,temp,maxTemp,minTemp,description,code,inputValue,errorMessage }  =    this.state

        return (
            <div>
                <form onSubmit={this.submitForm}>
                    <input type="text" name="city" onChange={this.getCityName} value={inputValue} onFocus={()=>this.setState({errorMessage:""})} />
                    <input type="submit" value="get weather"/>
                </form>
                <h3 style={{color:"red", backgroundColor:"gray"}}>{errorMessage}</h3>
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
