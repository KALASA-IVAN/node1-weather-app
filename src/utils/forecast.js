const request=require('request')

const forecast=(latitude, longitude, callback)=>{
   const url='http://api.weatherstack.com/current?access_key=fed7fd46d5d5c80835054a1fb37c07aa&query='+ latitude+','+longitude+'&units=m'
    
   request({url, json:true},(error,{body})=>{
       if(error){
           callback('Unable to connect to weather services!',undefined)
       }else if(body.error){
           callback('Unable to get the location!',undefined)
       }else{
         callback( undefined,'Generally the day is '+ body.current.weather_descriptions +'. It is currently ' + body.current.temperature +' celsius degrees'+'. And it feels like '+ body.current.feelslike+'.')
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