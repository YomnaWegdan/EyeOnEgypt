import React, { Fragment , useEffect, useState} from 'react'
import axios from 'axios'
import Messages from './Messages'
import send from '../images/Vector.png'
import '../App.css'
import { BsImage } from 'react-icons/bs'
const Chat = () => {
  const [responses, setResponses] = useState([])
  const [currentMessage, setCurrentMessage] = useState('')
  const [image, setImage] = useState(null);


  const message = {
    text: currentMessage,
    image : image,
    isBot: false,
  }
  
  const handleMessageSubmit = (message) => {
    const data = {
      message,
    }
    axios.post('http://localhost:3001/chatbot', data)
      .then((response) => {
        const responseData = {
          text:
            response.data['message']['fulfillmentText'] !== ''
              ? response.data['message']['fulfillmentText']
              : "Sorry, I can't get it. Can you please repeat once?",
          isBot: true,
        }
        setResponses((responses) => [...responses, responseData])
      })
      .catch((error) => {
        console.log('Error: ', error)
      })
    }
  const handleMessageChange = (event) => {
    setCurrentMessage(event.target.value);
  }
  const handleImageChange = (e) => {
  
   const reader = new FileReader();
   reader.onload = () => {
      if (reader.readyState === 2 ) { 
        setImage(reader.result);
      }      
    }
    reader.readAsDataURL(e.target.files[0]);
    
    }
    

    const saveMessagesToLocalStorage = (messages) => {
      localStorage.setItem('chatbot_messages', JSON.stringify(messages));
    }



  const handleSubmit = (event) => {
    const message = {
      text: currentMessage,
      image:image,
      isBot: false,
    }


    if ((event.key === 'Enter'  ) && event.target.value !== '') {
      setResponses((responses) => [...responses, message])
      handleMessageSubmit( message.text || message.image)
      setCurrentMessage('')
      setImage('')
    }
    const updatedMessages = [...messages, event];
  setMessages(updatedMessages);
  saveMessagesToLocalStorage(updatedMessages);
  }  

 


return (
    <Fragment>
    
    <>

    <div className=" flex justify-end px-3 transition-5 " style={{  borderRadius: '12px 12px 12px 0', width:'31%',marginTop:'20px',  marginLeft:'65%' ,  position:'fixed' , zIndex:'2'}}>
    
    <div className="  flex justify-center  mt-2 py-2 border-t-2 " style={{height:'60px', backgroundColor:'#FFF5E3' }}   >

    {/*  <img src={img} alt='' style={{width:'50px' , height:'50px' , marginInline:'4%', marginBlock:''}}/> */}
      <p style={{color:'rgb(60, 47, 6)'}} className='mx-4 mt-2'>Chat Bot</p>

</div>
      <div style={{height:'450px' , overflowY:'scroll' }} className=" chat  flex flex-col w-full bg-white  max-w-xs py-2  bg-gray-100 shadow-sm lg:max-w-md dark:bg-gray-900 rounded-xl">
      
          <div className=" flex flex-col p-3 space-y-4 "  >
          <Messages messages={responses} />  
          </div>
      </div>


          <div  className=" inputMes w-full px-2 py-2   " style={{marginTop:'-14px', backgroundColor:'#FFF5E3'}}>

          <input 
              value={currentMessage  || image ||''}
              onChange={handleMessageChange ||handleImageChange }
              onKeyDown={handleSubmit}
              placeholder="Message Here ...."
              style={{border:'none' , width:'84%',  backgroundColor:'#FFF5E3'}}
/> 

<label htmlFor="upload-button" style={{marginLeft:'' , color:'#f2390ced' }}>
  <BsImage className="picture-icon mx-2" style={{cursor:'pointer'}}/>
</label>
<input
type="file" accept="image/*" multiple
id="upload-button" 
style={{ display:'none' }}
//onChange={handleImageChange}
onChange={handleImageChange}
/>


<button className="btn float text-white " id='sendBtn'
onClick={(e)=>  
   { setResponses((responses) => [...responses, message]) || 
    handleSubmit(message)  || setCurrentMessage('') || setImage('')}
}
        >
      <img src={send} alt='' width={16} height={16}  style={{  marginTop:'-4px'}}/>
      </button>
      </div>
    </div>
  </>
    </Fragment>
  )
}

export default Chat



/*
{/*
<>

<div className=" flex justify-end px-3 transition-5 " style={{  borderRadius: '12px 12px 12px 0', width:'31%',marginTop:'20px',  marginLeft:'65%' ,  position:'fixed' , zIndex:'2'}}>

<div className="  flex justify-center   py-0 border-t-2 border-gray-200 dark:border-gray-600 "  >
<div className="  flex justify-center  mt-2 py-2 border-t-2 " style={{height:'60px', backgroundColor:'#FFF5E3' }}   >

{/*  <img src={img} alt='' style={{width:'50px' , height:'50px' , marginInline:'4%', marginBlock:''}}/> }
  <p style={{color:'rgb(60, 47, 6)'}} className='mx-4 mt-2'>Chat Bot</p>

    </div>
</div>
  <div style={{height:'450px' , overflowY:'scroll' }} className=" chat  flex flex-col w-full bg-white  max-w-xs py-2  bg-gray-100 shadow-sm lg:max-w-md dark:bg-gray-900 rounded-xl">
  
      <div className=" flex flex-col p-3 space-y-4 "  >
      <Messages messages={responses} />  
      </div>
  </div>


  <div className=" inputMes flex justify-center  py-0 border-t-2 border-gray-200 dark:border-gray-600 " >
      <div style={{marginTop:'-14px'}} className=" inputMes w-full px-2 py-2 bg-white rounded-lg shadow-sm dark:bg-gray-800 lg:max-w-lg " >

      <input 
          value={currentMessage  || image}
          onChange={handleMessageChange ||handleImageChange }
          onKeyDown={handleSubmit}
          placeholder="Message Here ...."
          style={{border:'none' , width:'90%', backgroundColor:'#FFF5E3'}}
/> 

<label htmlFor="upload-button" style={{marginLeft:'-6%' , color:'#f2390ced' }}>
<BsImage className="picture-icon" style={{cursor:'pointer'}}/>
</label>
<input
type="file" accept="image/*" multiple
id="upload-button" 
style={{ display:'none' }}
//onChange={handleImageChange}
onChange={handleImageChange}
/>


<button className="btn float rounded-full  text-white " id='sendBtn'
onClick={(e)=>  
{ setResponses((responses) => [...responses, message]) || 
handleSubmit(message)  || setCurrentMessage('') || setImage('')}
}
    >
  <img src={send} alt='' width={16} height={16}  style={{marginLeft:'-4px' , marginTop:'-4px'}}/>
  </button>
  </div>
</div>
</div>
</>


*/
