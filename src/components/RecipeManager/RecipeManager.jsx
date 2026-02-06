import React, { useState } from 'react';
import Recipe from './Recipe';
import './RecipeManager.css';

function RecipeManager() {
  // 1. Estado: Lista de recetas
  const [recipes, setRecipes] = useState([]);


  // 2. Estado: Formulario 
  const [form, setForm] = useState({
    name: "",
    cuisine: "",
    difficulty: "Easy",
    cookTime: "",
    servings: "",
    allergens: ""
  });

  // Maneja TODOS los inputs automáticamente
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  // Agregar receta a la lista
  const addRecipe = (e) => {
    e.preventDefault(); // Evita recarga de página
    if (!form.name) return; // Validación mínima: requiere nombre (quizás por el momento)

    setRecipes([...recipes, form]); // Agregamos a la lista

     // Limpia el formulario (Reset)
    setForm({
      name: "",
      cuisine: "",
      difficulty: "Easy",
      cookTime: "",
      servings: "",
      allergens: ""
    });
  };

  // Borrar receta
  const deleteRecipe = (index) => {
    const newRecipes = recipes.filter((_, i) => i !== index);
    setRecipes(newRecipes);
  };

  return (
    <div className="manager-container">
      <h1 className="manager-title">Recipe Manager</h1>

      {/* FORMULARIO */}
      <form className="recipe-form" onSubmit={addRecipe}>
        <input className="form-input" name="name" placeholder="Recipe Name *" value={form.name} onChange={handleChange} />
        <input className="form-input" name="cuisine" placeholder="Cuisine (e.g. Italian)" value={form.cuisine} onChange={handleChange} />
        
        <select className="form-select" name="difficulty" value={form.difficulty} onChange={handleChange}>
          <option value="Easy">Easy</option>
          <option value="Medium">Medium</option>
          <option value="Hard">Hard</option>
        </select>

        <input className="form-input" type="number" name="cookTime" placeholder="Cook Time (mins)" value={form.cookTime} onChange={handleChange} />
        <input className="form-input" type="number" name="servings" placeholder="Servings" value={form.servings} onChange={handleChange} />
        <input className="form-input" name="allergens" placeholder="Allergens" value={form.allergens} onChange={handleChange} />

        <button className="btn-add" type="submit">Add Recipe</button>
      </form>

       {/* LISTA */}
      <div>
        {recipes.map((recipe, index) => (
          <Recipe 
            key={index} 
            recipe={recipe} 
            onDelete={() => deleteRecipe(index)} 
          />
        ))}
      </div>
    </div>
  );
}

export default RecipeManager;