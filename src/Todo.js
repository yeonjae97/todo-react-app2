import React, { useState } from 'react';
import "@mui/material";
import { Checkbox, InputBase, ListItem, ListItemText } from '@mui/material';

function Todo(props){
  // console.log(props);
  // console.log(props.number);
  // console.log(typeof props.onEvent);
  // console.log(props.onEvent());

  let result = useState("str");
  let [str, setStr] = result;
  // const str = useState("str");
  // console.log(str); // 정체는 배열
  // str[1]("changed str");

  const [item, setItem] = useState(props);
  // console.log(item.a);
  return (
    // <div className='Todo'>
    //   <input type="checkbox" id={item.id} name={item.id} checked={item.done} />
    //   <label for={item.id}>{item.title}</label>
    // </div>
    <ListItem>
      <Checkbox checked={item.done} />
      <ListItemText>
        <InputBase
          inputProps={{"aria-label": "naked"}}  
          type="text"
          id={item.id}
          name={item.id}
          value={item.title}
          multiline={true}
          fullWidth={true}
          />
      </ListItemText> 
    </ListItem>
  );
};

export default Todo;