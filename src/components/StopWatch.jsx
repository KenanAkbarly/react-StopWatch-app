// import React, { useEffect, useState,useReducer } from 'react'
// import './StopWatch.scss'

// function enter(initialState){
//     return{time:initialState}
// }
// let initialState = {
//     start:false,
//     time:0
// };

// function reducer(state, action){
//     switch(action.type){
//         case'START':
//         return startTimer()
//         case"RESET":
//         return resetTimer(initialState)
//         case"RESUME":
//         return 
//         default:
//             return state

//     }
// }
// function resetTimer(initialState){
//     return {initialState}
// }

// function startTimer(){
    
//     interval = setInterval(()=>{
//         state.time+10
//     },10)    
// }
// const StopWatch = () => {
//     const [state, dispatch] = useReducer(reducer, initialState)
   
//   return (
//     <div className='timer_body'>
//         <h1>StopWatch</h1>
//         <div className='timer_bottom'>
//         <div className='timer_count'>
//             <span>{('0' + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
//             <span>{('0' + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
//             <span>{('0' + ((time / 10) % 100)).slice(-2)}</span>
//         </div>
//         <div className='btns'>
//             {state.start ===false && state.time ===0 && ( <button onClick={()=>dispatch({type:'START'})}>Start</button>)}
//             {state.start ===true &&(<button onClick={this.stopTimer}>Stop</button>)}
            
//             {state.start === false && state.time > 0 && (
//           <button onClick={() => dispatch({ type: 'RESET' })}>Reset</button>
//         )}
//         </div>
//         </div>
     

//     </div>
//   )
// }

// export default StopWatch












// import React, { useRef, useEffect, useReducer } from "react";
// // import ReactDOM from "react-dom";

// const initialState = {
//   centiseconds: 0,
//   seconds: 0,
//   minutes: 0,
//   timerOn: false,
// };

// const reducer = (state, action) => {
//   switch (action.type) {
//     case "START":
//       return {
//         ...state,
//         timerOn: true,
//       };
//     case "STOP":
//       return {
//         ...state,
//         timerOn: false,
//       };
//     case "RESET":
//       return initialState;
//     case "SET_CENTISECONDS":
//       return {
//         ...state,
//         centiseconds: action.payload.centiseconds,
//       };
//     case "SET_SECONDS":
//       return {
//         ...state,
//         seconds: action.payload.seconds,
//       };
//     case "SET_MINUTES":
//       return {
//         ...state,
//         minutes: action.payload.minutes,
//       };

//     default:
//       return initialState;
//   }
// };

// function StopWatch(props) {
//   const [state, dispatch] = useReducer(reducer, initialState);
//   const { centiseconds, seconds, minutes, timerOn } = state;

//   useInterval(() => {
//     if (!timerOn) return;

//     dispatch({
//       type: "SET_CENTISECONDS",
//       payload: {
//         centiseconds: centiseconds === 99 ? 0 : centiseconds + 1,
//       },
//     });
//   }, 10);

//   useInterval(() => {
//     if (!timerOn) return;

//     dispatch({
//       type: "SET_SECONDS",
//       payload: {
//         seconds: seconds === 59 ? 0 : seconds + 1,
//       },
//     });
//   }, 1000);

//   useInterval(() => {
//     if (!timerOn) return;

//     dispatch({
//       type: "SET_MINUTES",
//       payload: {
//         minutes: minutes === 59 ? 0 : minutes + 1,
//       },
//     });
//   }, 60000);

//   return (
//     <>
//       <div>
//         {String(minutes).padStart(2, "0")} : {String(seconds).padStart(2, "0")}{" "}
//         : {String(centiseconds).padStart(2, "0")}
//       </div>
//       {timerOn === false && (
//         <button onClick={() => dispatch({ type: "START" })}>Start</button>
//       )}
//       {timerOn === true && (
//         <button onClick={() => dispatch({ type: "STOP" })}>Stop</button>
//       )}
//       {timerOn === true && (
//         <button onClick={() => dispatch({ type: "STOP" })}>Stop</button>
//       )}
//       {<button onClick={() => dispatch({ type: "RESET" })}>Reset</button>}
//     </>
//   );
// }

// // source: https://overreacted.io/making-setinterval-declarative-with-react-hooks/
// function useInterval(callback, delay) {
//   const savedCallback = useRef();

//   // Remember the latest callback.
//   useEffect(() => {
//     savedCallback.current = callback;
//   }, [callback]);

//   // Set up the interval.
//   useEffect(() => {
//     function tick() {
//       savedCallback.current();
//     }
//     if (delay !== null) {
//       let id = setInterval(tick, delay);
//       return () => clearInterval(id);
//     }
//   }, [delay]);
// }

// // ReactDOM.render(
// //   <React.StrictMode>
// //     <Timer />
// //   </React.StrictMode>,
// //   document.getElementById("root")
// // );

//  export default StopWatch










// import React, { useReducer, useEffect } from "react";
// import ReactDOM from "react-dom";

// // import "./styles.css";

// const initialState = { seconds: 0 };

// const reducer = (state, action) => {
//   switch (action.type) {
//     case "startCount":
//       return { seconds: action.payload };
//     default:
//       return state;
//   }
// };
// useInterval(() => {
//     const interval = setInterval(() => {
//       dispatch({ type: "startCount", payload: state.seconds + 1 });
//     }, 1000);
//     return () => clearInterval(interval);
//   });
// const Timer = () => {
//   const [state, dispatch] = useReducer(reducer, initialState);
// //   function start(){

      
// //   }
//   return (
//   <div className="App"><span>{state.seconds}</span> 
//   <button onClick={()=>dispatch({ type: "startCount"})}></button>
  
//   </div>)
// }

// export default Timer
// import React, { useEffect, useReducer, useState } from 'react'
// import './StopWatch.scss'
// const initialState = { seconds: 0};
// const reducer =(state,action)=>{
//     switch (action.type) {
//         case "startCount":
//             return { seconds: action.payload };
//         default:
//             return state;
//     }

// }
// const StopWatch = () => {
//     // const [time,setTime] = useState(0)
//     // const [start,setStart] = useState(false)
//     const [state,dispatch] = useReducer(reducer , initialState)

// useEffect(()=>{
//     let interval;

//     interval = setInterval(()=>{
//         // setTime(prevTime=>prevTime + 10)
//         dispatch({type:"startCount", payload:state.seconds+10})
//     },10)

//     // clearInterval(interval);


// return ()=>clearInterval(interval)
// })
//   return (
//     <div className='timer_body'>
//         <h1>StopWatch</h1>
//         <div className='timer_bottom'>
//         <div className='timer_count'>
//             {/* <span>{('0' + Math.floor((state / 60000) % 60)).slice(-2)}:</span>
//             <span>{('0' + Math.floor((state / 1000) % 60)).slice(-2)}:</span>
//             <span>{('0' + ((state / 10) % 100)).slice(-2)}</span> */}
//             <span>saksaksakls</span>
//         </div>
//         <div className='btns'>
//             <button onClick={dispatch({type:'startCount'})}>Start</button>
//             <button >Stop</button>
//             <button >Reset</button>
//         </div>
//         </div>
     

//     </div>
//   )
// }

// export default StopWatch






import React, { useEffect, useState } from 'react'
import './StopWatch.scss'
const StopWatch = () => {
    const [time,setTime] = useState(0)
    const [start,setStart] = useState(false)

useEffect(()=>{
    let interval;
if(start){
    interval = setInterval(()=>{
        setTime(prevTime=>prevTime + 10)
    },10)
}else{
    clearInterval(interval);

}
return ()=>clearInterval(interval)
},[start])
  return (
    <div className='timer_body'>
        <h1>StopWatch</h1>
        <div className='timer_bottom'>
        <div className='timer_count'>
            <span>{('0' + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
            <span>{('0' + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
            <span>{('0' + ((time / 10) % 100)).slice(-2)}</span>
        </div>
        <div className='btns'>
            <button onClick={()=>setStart(true)}>Start</button>
            <button onClick={()=>setStart(false)}>Stop</button>
            <button onClick={()=>{setTime(0); setStart(false)}}>Reset</button>
        </div>
        </div>
     

    </div>
  )
}

export default StopWatch