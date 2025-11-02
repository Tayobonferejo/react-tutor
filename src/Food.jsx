function Food() {

    const foodFirst = "Orange";
    const foodSecoond = "Banana";
    return( 
        <ul>
            <li>Apple</li>
            <li>{foodFirst}</li>
            <li>{foodSecoond.toUpperCase()}</li>
        </ul>
    );
}

export default Food