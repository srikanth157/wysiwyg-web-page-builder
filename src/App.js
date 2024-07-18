import React, { useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Toolbar from './components/Toolbar';
import Canvas from './components/Canvas';
import './App.css';

const App = () => {
  const [components, setComponents] = useState([]);
  const [isPreview, setIsPreview] = useState(false);
  const [canvasBgColor, setCanvasBgColor] = useState('white');

  const addComponent = (type) => {
    const newComponent = { id: components.length + 1, type, left: 50, top: 50, content: '' };
    setComponents([...components, newComponent]);
  };

  const moveComponent = (id, left, top) => {
    setComponents(components.map(comp => (comp.id === id ? { ...comp, left, top } : comp)));
  };

  const updateComponentContent = (id, content) => {
    setComponents(components.map(comp => (comp.id === id ? { ...comp, content } : comp)));
  };

  const deleteComponent = (id) => {
    setComponents(components.filter(comp => comp.id !== id));
  };

  const changeCanvasBgColor = (color) => {
    setCanvasBgColor(color);
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="app">
        <Toolbar addComponent={addComponent} changeCanvasBgColor={changeCanvasBgColor} />
        <button onClick={() => setIsPreview(!isPreview)} className="toggle-button">
          {isPreview ? 'Back to Design' : 'Preview'}
        </button>
        <Canvas
          components={components}
          moveComponent={moveComponent}
          updateComponentContent={updateComponentContent}
          deleteComponent={deleteComponent}
          isPreview={isPreview}
          canvasBgColor={canvasBgColor}
        />
      </div>
    </DndProvider>
  );
};

export default App;
