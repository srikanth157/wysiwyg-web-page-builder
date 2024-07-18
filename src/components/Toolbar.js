import React from 'react';
import './Toolbar.css';

const Toolbar = ({ addComponent, changeCanvasBgColor }) => (
  <div className="toolbar">
    <button onClick={() => addComponent('text')} >Add Text</button>
    <button onClick={() => addComponent('image')}>Add Image</button>
    <button onClick={() => addComponent('button')}>Add Button</button>
    <button onClick={() => changeCanvasBgColor('black')} style={{ backgroundColor: 'black',width:"100px",color:"white" }}> Black </button>
    <button onClick={() => changeCanvasBgColor('lightblue')} style={{ backgroundColor: 'lightblue',width:"100px",color:"black"  }}>Light Blue</button>
    <button onClick={() => changeCanvasBgColor('lightgreen')} style={{ backgroundColor: 'lightgreen',width:"100px",color:"black"  }}>Light Green</button>
  </div>
);

export default Toolbar;
