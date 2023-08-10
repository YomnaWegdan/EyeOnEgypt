import React, { useEffect, useRef } from 'react'
import Message from './Message'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
/*const Messages = ({ messages }) => {
  const messagesEndRef = useRef(null)
  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({ behavior: 'smooth' })
  }
  useEffect(scrollToBottom, [messages])

  return (
    <div className="messages">
    {messages.map((message, i) => (
        <Message message={message} />
    ))}
    <div ref={messagesEndRef} />
  </div>

  )
}

export default Messages

/**

 <TransitionGroup className="messages">
    {messages.map((message, i) => (
      <CSSTransition timeout={300} classNames="item" key={i}>
        <Message message={message} />
      </CSSTransition>
    ))}
    <div ref={messagesEndRef} />
  </TransitionGroup>

 */



const Messages = ({ messages }) => {
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' })
    }
    useEffect(scrollToBottom, [messages])
  
  
    return (
        <div className="messages">
            {messages.map((message, i) => <div key={i} ><Message message={message}  /></div>)}
            <div ref={messagesEndRef} />

            </div>

       
    );
};
export default Messages
