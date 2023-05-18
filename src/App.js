import React, { useState } from 'react';
import Todo from './Todo';
import "./App.css";
import { Container, List, Paper } from '@mui/material';
import AddTodo from './AddTodo';


function App() {
  // const[item, setItem] = useState({id: 1, title:"Hello World 1", done: true});
  const[items, setItems] = useState([
    {id: 0, done: true, title:"제목1"},
    {id: 1, done: false, title:"제목2"},
  ]);

  // let str = [];
  // for(let i = 0; i < items.length; i++){
  //   str.push(<Todo item={items[i]}/>);
  // }

  const addItem = item => {
    item.id = "ID-" + items.length;
    item.done=false;
    setItems([...items, item]);
    console.log("items : " , items);
  }

  let todoItems = items.length > 0 && (
    <Paper style={{ margin: 16}}>
      <List>
        {items.map((item) => (
          <Todo item={item} key={item.id}/>
          )
        )}
      </List>
    </Paper>
    );
  
    return (
     <div className='App'>
        <Container maxWidth="md">
          <AddTodo addItem={addItem}/>
          <div className='TodoList'>{todoItems}</div>
        </Container>
        {/* <Todo 
          number={10} 
          item={item}
          onEvent={function(){
            console.log("message");
          }}
          /> */}
        {/* <Todo /> ??? => 목적 부합 X */}
        {/* {todoItems} */}
      </div>
    );
  
}
export default App;