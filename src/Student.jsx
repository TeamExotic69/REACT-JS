function Student(props){//props is goiing to be our js statement
    return(
        <div className="Student">
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>Student: {props.isStudent ? "YES" : "NO"}</p>
        </div>
    );
}
Student.defaultProps={
    name: "Guest",
    age: "0",
    isStudent: false,
}
export default Student




// import PropTypes from 'prop-types';
// import Student  from "./Student.jsx";
// function App(){ 
//     return (
//       <>
//       <Student name="Anurag Yadav" age={30} isStudent={true} />
//       <Student name="Patric" age={40} isStudent={false} />
//       <Student name="Squid age" age={50} isStudent={false} />
//       <Student name="Sandy" age={27} isStudent={true} />
//       <Student/>
//       </>
//     );
// }
// Student.PropTypes={
//   name: PropTypes.string,
//   age: PropTypes.number,
//   isStudent: PropTypes.bool
// }
// export default App






// .Student{
//     font-family: Arial, Helvetica, sans-serif;
//     font-size: 2em;
//     padding: 10px;
//     border: 1px solid hsl(0, 0%, 50%, 0.8);
// }
// .Student p{
//     margin: 0;   
// }