import React from "react";
import io from "socket.io-client"
import API from "../../utils/API" 
/* import withAuth from './../withAuth'; */

export const CTX = React.createContext();

const initState = {
    general: [
        
            {from: "rafa", msg: "hello"}
        
    ],
    username:""
}

function reducer(state, action) {
    const {from, msg, topic} = action.payload;
    switch(action.type) {
       case 'RECEIVE_MESSAGE' : 
       return {
         ...state,
           [topic]: [
               ...state[topic],
               {
                    from,
                    msg
               }
            ]
       }
       default:
           return state
    }
}

let socket;

function sendChatAction(value) {
    socket.emit('chat message', value);

}


export default function Store(props) {

    const [allChats, dispatch] = React.useReducer(reducer, initState);

        //console.log(props.user.username)
   
    if(!socket) {
        socket= io()
        socket.on('chat message', function(msg){
            dispatch({type:"RECEIVE_MESSAGE", payload: msg})
          });
    }

    // const user = "rafa" + Math.random(100).toFixed(2)
    const user = props.user.username;


    return (
        <CTX.Provider value = {{allChats, sendChatAction, user}}>
            {props.children}
        </CTX.Provider>
    )
}