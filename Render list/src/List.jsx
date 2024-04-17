import propsType from "prop-types";

function List(props) {

    const itemList = props.items;
    const category = props.category;

    // fruits.sort((a, b) => a.name.localeCompare(b.name)); // sort by name
    // fruits.sort((a, b) => b.name.localeCompare(a.name));
    // fruits.sort((a, b) => a.calories - b.calories); // sort by calories
    // fruits.sort((a, b) => b.calories - a.calories);

    // const lowCalories = fruits.filter(fruit => fruit.calories < 300); // filter
    // const highCalories = fruits.filter(fruit => fruit.calories > 300);

    const listItems = itemList.map(item => <li key={item}>
                                            {item.name}: &nbsp; 
                                            {item.calories}</li>);

    return (<>
        <h3>{category}</h3>
        <ul>{listItems}</ul>
        </>
    );
}

List.propTypes = {
    items: propsType.arrayOf(propsType.shape({
        id: propsType.number,
        name: propsType.string,
        calories: propsType.number
    })),
    category: propsType.string
}

List.defaultProps = {
    items: [],
    category: 'Fruits'
}
export default List