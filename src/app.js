const path=require('path')
const express=require('express')
const hbs =require('hbs')
const forecast=require('./utils/forecast')
const geocode=require('./utils/geocode')

const app=express()
const port=process.env.PORT || 3000

// Define path for express config
const publicDirectoryPath=path.join(__dirname,'../publik')
const viewsPath=path.join(__dirname, '../temp/views')
const partialsPath=path.join(__dirname,'../temp/partials')

// setup handlerbars engine and views loaction.
app.set('view engine', 'hbs')
app.set('views',viewsPath)
hbs.registerPartials(partialsPath)

// setup static directory to serve
app.use(express.static(publicDirectoryPath))

app.get('', (req,res) =>{
    res.render('index',{
        name:'Kalasa Ivan',
        country:'Rwanda',
        head:'Dynamic Web'
    })
})
app.get('/about', (req,res)=>{
    res.render('about', {
        name:'Kalasa Ivan',
        title:'About me!',
        head:'Dynamic Web'
    })
})
app.get('/help',(req,res)=>{
    res.render('help', {
        message:'All the help',
        title:'How can we help you?',
        name:'Kalasa Ivan',
        head:'Dynamic Web'
    })
})

app.get('/weather', (req,res) =>{

    if(!req.query.address){
        return res.send({
           error:'The address for the weather app is not found!...'
        })
    }

    geocode(req.query.address,(error, {latitude, longitude, location} ={})=>{
        if(error){
            return res.send({error})
        }
  
    forecast(latitude,longitude, (error, forecastData)=>{
        if(error){
            return res.send({error})
        }
        
        res.send({
            forecast:forecastData,
            location,
            address:req.query.address
        })
    })
})
})
// app.get('/product',(req, res)=>{

// if(!req.query.search){
//    return res.send({
//         error:'Page not found successfully!.....'
//     })
// }
//     console.log(req.query.search)
//     res.send({
//         products:[]
//     })
// })

app.get('/help/*',(req, res)=>{
    res.render('exercise',{
        value:'Help article not found!'
    })
})

app.get('*', (req, res)=>{
    res.render('exercise',{
        value:'Not found!'
    })
})

app.listen(port,()=>{
    console.log('The server is running on port '+port)
})
