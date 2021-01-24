const request=require('request')

const geocode=(address, callback)=>{
    const url='https://api.mapbox.com/geocoding/v5/mapbox.places/'+ encodeURIComponent(address) +'.json?access_token=pk.eyJ1Ijoia2FsYXNhaXZhbiIsImEiOiJja2pyNTBlZHA3bWdyMnlsZzM5YzV3aTF2In0.f7Z8ewv0O-99WHP4kqTifw&limit=1'

    request({url, json:true},(error, {body})=>{
        if(error){
            callback("Unable to get weather services!",undefined)
        }else if(body.features===undefined){ 
           callback("Unable to get the long and lat!",undefined) 
             } 
             else{
                callback(undefined, {
                    latitude: body.features[0].center[0],
                    longitude: body.features[0].center[1],
                    location: body.features[0].place_name
                })
            }
    })
}

// geocode('Kampala',(error, data)=>{
//     if(error){
//         console.log('error',error)
//     }else{
   
//         console.log('data',data)
//     }
// })

module.exports=geocode