import React from 'react';
import './Recipe.css';

function Recipe({ recipe, onDelete }) {
  return (
    <div className="recipe-card">
      <div className="recipe-header">
        <h3 className="recipe-title"> 🍽️ {recipe.name}</h3>
        <button className="btn-delete" onClick={onDelete}>Delete</button>
      </div>
      
      <div className="recipe-details">
        <p><strong>Cuisine:</strong> {recipe.cuisine}</p>
        <p><strong>Difficulty:</strong> {recipe.difficulty}</p>
        <p><strong>Time:</strong> {recipe.cookTime} mins</p>
        <p><strong>Servings:</strong> {recipe.servings}</p>
        <p><strong>Allergens:</strong> {recipe.allergens}</p>
      </div>
    </div>
  );
}

export default Recipe;