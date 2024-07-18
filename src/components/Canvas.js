import React from 'react';
import { useDrop } from 'react-dnd';
import DraggableComponent from './dragable';
import './Canvas.css';

const Canvas = ({ components, moveComponent, updateComponentContent, deleteComponent, isPreview, canvasBgColor }) => {
  const [, drop] = useDrop({
    accept: 'component',
    drop: (item, monitor) => {
      if (isPreview) return;
      const delta = monitor.getDifferenceFromInitialOffset();
      const left = Math.round(item.left + delta.x);
      const top = Math.round(item.top + delta.y);
      moveComponent(item.id, left, top);
    },
  });

  return (
    <div ref={drop} className="canvas" style={{ backgroundColor: canvasBgColor }}>
      {components.map(comp => (
        <DraggableComponent
          key={comp.id}
          component={comp}
          updateComponentContent={updateComponentContent}
          deleteComponent={deleteComponent}
          isPreview={isPreview}
        />
      ))}
    </div>
  );
};

export default Canvas;
