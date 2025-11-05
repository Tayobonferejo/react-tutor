function List () {

    const fruits = [{id: 1, name: "apple", calorie: 95},{id: 2,name: "orange", calorie: 95} , {id: 3,name: "banana", calorie: 45},{id: 4,name: "coconut", calorie : 66}, {id: 5,name: "pineapple", calorie: 78}];

    fruits.sort((a, b) => a.name.localeCompare(b.name));
    const listItems = fruits.map(fruit => <li key={fruit.id}>{fruit.name}: &nbsp;
            <b>{fruit.calorie}</b></li>)
    return(<ul>{listItems}
    </ul>);
}

export default List