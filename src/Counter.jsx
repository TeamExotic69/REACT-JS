import React,{useState} from "react"
function Counter(){

    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count+1);
    }
    const decreament = () => {
        setCount(count-1);
    }
    const reset = () => {
        setCount(0);
    }
    return( <div className="counert-container">
                <p className="count-display">{count}</p>
                <button className="counter-button" onClick={decreament}>Decreament</button>
                <button className="counter-button" onClick={reset}>Reset</button>
                <button className="counter-button" onClick={increment}>Increament</button>
            </div>)
}
export default Counter







// return(<><Counter /></>)






// .counert-container{
//     text-align: center;
//     font-family: Arial, Helvetica, sans-serif;
// }
// .count-display{
//     font-size: 10em;
//     margin-top: 0;
//     margin-bottom: 50px;
// }
// .counter-button{
//     width: 150px;
//     height: 50px;
//     font-size: 1.5em;
//     font-weight: bold;
//     margin: 0px 5px;
//     background-color: rgb(254, 140, 0);
//     color: aliceblue;
//     border: none;
//     border-radius: 5px;
//     cursor: pointer;
// }
// .counter-button:hover{
//     background-color: rgb(194, 106, 0);

// }