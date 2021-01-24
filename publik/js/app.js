const formData=document.querySelector('form')
const search=document.querySelector('input')
const message=document.querySelector('#message-1')

message.textContent='Loading...'

const messageTwo=document.querySelector('#message-2')

messageTwo.textContent=''

formData.addEventListener('submit',(e)=>{
    e.preventDefault()

    const location=search.value
    fetch('http://localhost:3000/weather?address='+location)
    .then((response)=>{ 
        response.json().then((data)=>{
            if(data.error){
                message.textContent=data.error
            }else{
                message.textContent=data.location
                messageTwo.textContent=data.forecast
            }
            }) 
    })

})