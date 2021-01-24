const request=require('request')
const chalk=require('chalk')

const forecast=(latitude, longitude, callback)=>{
   const url='http://api.weatherstack.com/current?access_key=fed7fd46d5d5c80835054a1fb37c07aa&query='+ latitude+','+longitude+'&units=m'
    
   request({url, json:true},(error,{body})=>{
       if(error){
           callback('Unable to connect to weather services!',undefined)
       }else if(body.error){
           callback('Unable to get the location!',undefined)
       }else{
         callback( undefined,'Generally the day is '+ body.current.weather_descriptions +'. It is currently '
          + body.current.temperature +' celsius degrees'+'. And it feels like '+ body.current.feelslike+'. The pressure is '+body.current.pressure+
          ' and humidity is '+body.current.humidity+'. The visibility is '+ body.current.visibility+'. The cloudcover is '+body.current.cloudcover+ 
          '. Wind speed is '+body.current.wind_speed+'. The precipitation is '+ body.current .precip+'. Recorded at '+body.current.observation_time+
          '. on '+body.location.localtime+ '. Thank you for using the weather app online.')
       }

    })
    
}

// forecast(37.8267,-122.4233, (error, data)=>{
//     if(error){
//         console.log('error',error)
//     }else{
//         console.log('data',data)
//     }
    
    
// })
module.exports=forecast