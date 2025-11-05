function List () {

    const fruits = [{name: "apple", calorie: 95},{name: "orange", calorie: 95} , {name: "banana", calorie: 45},{name: "coconut", calorie : 66}, {name: "pineapple", calorie: 78}];

    const listItems = fruits.map(fruit => <li>{fruit}</li>)
    return(<ul>{listItems}</ul>);
}

export default List