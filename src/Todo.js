import React, { useState } from 'react';
import { 
  Checkbox, 
  InputBase, 
  ListItem, 
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
} from '@mui/material';
import DeleteOutliend from "@mui/icons-material/DeleteOutlined";

function Todo(props){
  // console.log(props);
  // console.log(props.number);
  // console.log(typeof props.onEvent);
  // console.log(props.onEvent());

  // let result = useState("str");
  // let [str, setStr] = result;
  // const str = useState("str");
  // console.log(str); // 정체는 배열
  // str[1]("changed str");

  const [item, setItem] = useState(props.item);
  const [readOnly, setReadOnly] = useState(true);
  const editItem = props.editItem;
  const editEventHandler = (e) => {
    item.title = e.target.value;
    editItem();
  }

  const turnOnReadOnly = (e) => {
    if(e.key === "Enter"){
      setReadOnly(true);
    }
  }
  const turnOffReadOnly = () => {
    setReadOnly(false);
  }
  const deleteItem = props.deleteItem;
  const deleteEventHandler = () =>{
    deleteItem(item);
  }

  const checkboxEventHandler = (e) => {
    item.done = e.target.checked;
    editItem();
  }
  
  // console.log(item.a);
  return (
    // <div className='Todo'>
    //   <input type="checkbox" id={item.id} name={item.id} checked={item.done} />
    //   <label for={item.id}>{item.title}</label>
    // </div>
    <ListItem>
      <Checkbox checked={item.done} onChange={checkboxEventHandler}/>
      <ListItemText>
        <InputBase
          inputProps={{"aria-label": "naked", readOnly: readOnly}}
          onClick={turnOffReadOnly}  
          onKeyDown={turnOnReadOnly}
          onChange={editEventHandler}
          type="text"
          id={item.id}
          name={item.id}
          value={item.title}
          multiline={true}
          fullWidth={true} />
      </ListItemText>
      <ListItemSecondaryAction>
        <IconButton aria-label='Delete Todo'
          onClick={deleteEventHandler}>
          <DeleteOutliend />
        </IconButton>  
      </ListItemSecondaryAction> 
    </ListItem>
  );
};

export default Todo;