import List from "./List"

function App() {

  const fruits = [{id: 1, name: 'Apple', calories: 100},
                    {id: 2, name: 'Orange', calories: 200},
                    {id: 3, name: 'Banana', calories: 300},
                    {id: 4, name: 'Pear', calories: 400}];

  return (<>
    {fruits.length > 0 && <List items={fruits} category="Fruits"/>}
    </>
  )
}

export default App