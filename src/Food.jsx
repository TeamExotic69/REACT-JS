function Food() {
    const Food1="Orange";
    const Food2="Apple";
    return(
        <ul>
            <li>Apple</li>
            <li>{Food1}</li>
            <li>{Food1.toLowerCase()}</li>
            <li>{Food2.toUpperCase()}</li>
        </ul>
    );
}
export default Food