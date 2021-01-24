const formData=document.querySelector('form')
const search=document.querySelector('input')

const message=document.querySelector('#message-1')
const messageTwo=document.querySelector('#message-2')

formData.addEventListener('submit',(e)=>{
    e.preventDefault()

    const location=search.value

message.textContent='Loading...'
messageTwo.textContent=''

    fetch('/weather?address='+location)
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