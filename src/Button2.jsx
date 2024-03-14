function Button(){

    // const hendleClick = ()  => console.log(alert(`OUCHH!`));
    // const hendleClick2 = (name) => console.log(alert(`${name} Stop Clicking Me 😠`));

    // return(<button onClick={() => hendleClick2(`Bro`)}>Click Me 😎</button>)//here we use () => because  the function is going to be called when the button is pressed otherwise it was already pressing while reloading
    // return(<button onClick={hendleClick}>Click Me 😎</button>)
    
    



    // let count=0;
    
    // const hendleClick3=(name) => {
    //     if(count<3){
    //         count++;
    //         console.log(`${name} you clicked me ${count} time/s 😊`);
    //     }
    //     else{
    //         console.log(`${name} Stop Clicking Me 😠`);            
    //     }
    // }





    const hendleClick4 = (e) => e.target.textContent = "OUCH! 🤕";


    return(<button onDoubleClick={(e) => hendleClick4(e)}>Click Me 😎</button>)
}

export default Button







// return (<Button />);