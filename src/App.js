import React, { useEffect, useState } from 'react';
import Todo from './Todo';
import "./App.css";
import { Container, List, Paper } from '@mui/material';
import AddTodo from './AddTodo';
import { call } from './service/ApiService';


function App() {
  // const[item, setItem] = useState({id: 1, title:"Hello World 1", done: true});
  const[items, setItems] = useState([
    {id: "ID-1", done: true, title:"제목1"},
    {id: "ID-2", done: false, title:"제목2"},
  ]);

  // let str = [];
  // for(let i = 0; i < items.length; i++){
  //   str.push(<Todo item={items[i]}/>);
  // }

  const addItem = (item) => {
    // item.id = "ID-" + items.length;
    // item.done=false;
    // setItems([...items, item]);
    // console.log("items : " , items);
    call("/todo","POST", item)
      .then((response) => setItems(response.data));
  }

  const deleteItem = (item) => {
    // const newItems = items.filter(e => e.id !== item.id);
    // setItems([...newItems]);
    call("/todo", "DELETE", item)
      .then((response) => setItems(response.data));
  }

  const editItem = (item) => {
    // setItems([...items]);
    call("/todo", "PUT", item)
      .then((response) => setItems(response.data));
  }

  useEffect(() => {
    // const requestOptions = {
    //   method: 'GET',
    //   headers: { "Content-Type": "application:json"},
    // };
    // fetch("http://localhost:8080/todo", requestOptions)
    //   .then((response) => response.json())
    //   .then(
    //     (response) => {
    //       setItems(response.data);
    //     },
    //     (error) => {}
    //   );
    call("/todo","GET", null)
      .then((response) => setItems(response.data));
  }, []);

  let todoItems = items.length > 0 && (
    <Paper style={{ margin: 16}}>
      <List>
        {items.map((item) => (
          <Todo 
            item={item} 
            key={item.id} 
            deleteItem={deleteItem} 
            editItem={editItem}/>
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