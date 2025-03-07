import React, { useState, useEffect } from 'react';

const SavedRecipes = () => {
    const [savedRecipes, setSavedRecipes] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/api/saved-recipes?userId=currentUserId')  // Replace with actual user ID
            .then(response => response.json())
            .then(data => setSavedRecipes(data))
            .catch(error => console.error('Error fetching saved recipes:', error));
    }, []);

    return (
        <div>
            <h2>Saved Recipes</h2>
            <div>
                {savedRecipes.length > 0 ? (
                    savedRecipes.map((recipe) => (
                        <div key={recipe._id} style={{ border: '1px solid #ddd', padding: '10px', margin: '10px' }}>
                            <h3>{recipe.title}</h3>
                            <p>{recipe.description}</p>
                        </div>
                    ))
                ) : (
                    <p>No saved recipes yet.</p>
                )}
            </div>
        </div>
    );
};

export default SavedRecipes;
