import React, { useState, useEffect } from 'react';

const Recipes = () => {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/api/recipes')  // Adjust API endpoint if needed
            .then(response => response.json())
            .then(data => setRecipes(data))
            .catch(error => console.error('Error fetching recipes:', error));
    }, []);

    const saveRecipe = async (recipeId) => {
        const response = await fetch('http://localhost:5000/api/save-recipe', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ recipeId, userId: "currentUserId" }) // Replace with actual user ID
        });

        if (response.ok) {
            alert('Recipe saved!');
        } else {
            alert('Failed to save recipe');
        }
    };

    return (
        <div>
            <h2>All Recipes</h2>
            <div>
                {recipes.map((recipe) => (
                    <div key={recipe._id} style={{ border: '1px solid #ddd', padding: '10px', margin: '10px' }}>
                        <h3>{recipe.title}</h3>
                        <p>{recipe.description}</p>
                        <button onClick={() => saveRecipe(recipe._id)}>Save Recipe</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Recipes;

