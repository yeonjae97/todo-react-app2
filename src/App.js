import React, { useEffect, useState } from 'react';
import Todo from './Todo';
import "./App.css";
import { AppBar, Button, Container, Grid, List, Paper, Toolbar, Typography } from '@mui/material';
import AddTodo from './AddTodo';
import { call, signout } from './service/ApiService';
import { Navigation } from '@mui/icons-material';


function App() {
  // const[item, setItem] = useState({id: 1, title:"Hello World 1", done: true});
  const [loading, setLoading] = useState(true);
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
      .then((response) => {
        setItems(response.data)
    
        // setLoading(false);
    });
    setTimeout(() => {
      setLoading(false);
    }, 300);
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
  
    let navigationBar = (
      <AppBar position='static'>
        <Toolbar>
          <Grid justifyContent='space-between' container>
            <Grid item>
              <Typography variant='h6'>오늘의 할일</Typography>
            </Grid>
            <Grid item>
              <Button color='inherit' onClick={signout}> 
                로그아웃
              </Button>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    )

    


    return (
    <div className='App'>
    {loading ? (
      <h1>로딩 중...</h1>
    ) : (
      <div>
        {/* <Navigation /> */}
        {navigationBar}
        <Container maxWidth="md">
          <AddTodo addItem={addItem}/>
          <div className='TodoList'>{todoItems}</div>
        </Container>
      </div>
    )}
    </div>
    )
}
export default App;