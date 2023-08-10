import React from 'react'
import { GrDesktop, GrUser } from 'react-icons/gr'

const Message = ({ message }) => {



 

  return (
    <>
      {message.isBot ? (
        <div className="flex " >
          <div style={{color:'#FFF5E3'}}
            className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start shadow-lg
            rounded-lg m-1 " >

            <span className="px-4 py-2 " >
              {message.text }
            </span>
          </div>
          <GrDesktop/>
        </div>
      ) : (
        <div className="flex pt-2 " style={{}} >  <GrUser/>  

          <div  className=" flex flex-col space-y-2  text-xs  max-w-xs px-2 py-1  mx-3  order-1  
        shadow-lg rounded-lg m-1  d-inline-block" >
          
  <span className="px-2 py-1   ">
              
            {  message.text
              || <img src={message.image}  className="img-fluid " alt='' style={{ }}/> }
      </span>
          </div>
        </div>
      )}
    </>
  )
}

export default Message


//            { message.text || <img src={message.image}  className="img-fluid px-0 py-0" alt='' style={{  padding:0}}/>}
