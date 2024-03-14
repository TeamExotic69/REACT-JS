import PropTypes from 'prop-types';
function List(props){

    // const fruits=[  {id:1, name:  "apple", calories: 95},
    //                 {id:2, name:  "orange", calories: 45},
    //                 {id:3, name:  "banana", calories: 105},
    //                 {id:4, name:  "coconut", calories: 159},
    //                 {id:5, name:  "pinapple", calories: 37}
    //             ];
    


    // fruits.sort((a,b) => a.name.localeCompare(b.name)); //ALPHABETICAL 
    // fruits.sort((a,b) => b.name.localeCompare(a.name)); //REVERSE ALPHABETICAL 
    // fruits.sort((a,b) => a.calories - b.calories); //INC. CALORIES
    // fruits.sort((a,b) => b.calories - a.calories); //DEC.  CALORIES


    // const lowCalFruits = fruits.filter(fruit => fruit.calories<100);
    // const highCalFruits = fruits.filter(fruit => fruit.calories>=100);


    // const listItems=fruits.map(fruit => <li key={fruit.id}>
    //                                         {fruit.name}: &nbsp;
    //                                         <b>{fruit.calories}</b>
    //                                         </li>)
    
    
    // const listItems=lowCalFruits.map(lowCalFruit => <li key={lowCalFruit.id}>
    //                                         {lowCalFruit.name}: &nbsp;
    //                                         <b>{lowCalFruit.calories}</b>
    //                                         </li>)  //THIS WILL FILTER LOW CAL. FRUITS AND DISPLAY THEM ONLY
    
    // const listItems=highCalFruits.map(highCalFruit => <li key={highCalFruit.id}>
    //                                         {highCalFruit.name}: &nbsp;
    //                                         <b>{highCalFruit.calories}</b>
    //                                         </li>)  //THIS WILL FILTER HIGH CAL. FRUITS AND DISPLAY THEM ONLY
    
    
    const category=props.category;
    const itemList=props.items;


    const listItems=itemList.map(item => <li key={item.id}>
                                            {item.name}: &nbsp;
                                            <b>{item.calories}</b>
                                            </li>)

    return( <>
            <h3 className="list-catogry">{category}</h3>
            <ol className="list-items">{listItems}</ol>
            </>);
}
List.propTypes = {
    category: PropTypes.string,
    items:PropTypes.arrayOf(PropTypes.shape({   id: PropTypes.number,
                                                name:PropTypes.string,
                                                calories:PropTypes.number}))
}
List.defaultProps = {
    category:"category",
    items:[],

}
export default List









// const fruits=[
//     {id:1, name:  "apple", calories: 95},
//     {id:2, name:  "orange", calories: 45},
//     {id:3, name:  "banana", calories: 105},
//     {id:4, name:  "coconut", calories: 159},
//     {id:5, name:  "pinapple", calories: 37}
//   ];
// const vegies=[{id:6, name:  "potatoes", calories: 110},
//     {id:7, name:  "celery", calories: 15},
//     {id:8, name:  "carrots", calories: 25},
//     {id:9, name:  "corn", calories: 163},
//     {id:10, name:  "broccoli", calories: 58}];

// return (  <>
//   {/* {fruits.length>0 ? <List items={fruits} category="Fruits"/> : null} */}
//   {fruits.length>0 && <List items={fruits} category="Fruits"/> }
//   {vegies.length>0 ? <List items={vegies} category="vegies"/> : null}
//   </>);










// .list-catogry{
//     font-size: 2.5em;
//     font-weight: bold;
//     color: hsl(0, 0%, 20%);
//     margin-bottom: 10px;
//     text-align: center;
//     border: 3px solid;
//     border-radius: 5px;
//     background-color: aquamarine;
// }
// .list-items li{
//     font-size: 2em;
//     list-style: none;
//     color: hsl(0, 0%, 25%);
//     text-align: center;
//     margin: 0;
// }
// .list-items li:hover{
//     color: hsl(0, 0%, 45%);
//     cursor: pointer;

// }