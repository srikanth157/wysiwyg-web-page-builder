import React, { useState } from 'react';
import { useDrag } from 'react-dnd';
import './DraggableComponent.css';

const DraggableComponent = ({ component, updateComponentContent, deleteComponent, isPreview }) => {
  const [{ isDragging }, drag] = useDrag({
    type: 'component',
    item: { ...component },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
    canDrag: !isPreview,
  });

  const [image, setImage] = useState(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setImage(reader.result);
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleTextChange = (e) => {
    updateComponentContent(component.id, e.target.value);
  };

  const styles = {
    left: component.left,
    top: component.top,
    position: 'absolute',
    opacity: isDragging ? 0.5 : 1,
    pointerEvents: isPreview ? 'none' : 'auto',
  };

  return (
    <div ref={drag} style={styles} className="draggable-component">
      {component.type === 'text' && (
        <input
          type="text"
          value={component.content}
          onChange={handleTextChange}
          className="text-component"
          readOnly={isPreview}
        />
      )}
      {component.type === 'image' && (
        <div className="image-component">
          {image ? (
            <img src={image} alt="Uploaded" className="uploaded-image" />
          ) : (
            !isPreview && <input type="file" onChange={handleImageUpload} />
          )}
        </div>
      )}
      {component.type === 'button' && (
        <button className="button-component" disabled={isPreview}>
          {component.content || 'Button'}
        </button>
      )}
      {!isPreview && (
        <button onClick={() => deleteComponent(component.id)} className="delete-button">
          Delete
        </button>
      )}
    </div>
  );
};

export default DraggableComponent;
