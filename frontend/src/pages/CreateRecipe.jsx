import React, { useState } from 'react';

const CreateRecipe = () => {
    const [recipe, setRecipe] = useState({ title: '', description: '', imageUrl: '' });

    const handleChange = (e) => {
        setRecipe({ ...recipe, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch('http://localhost:5000/api/recipes', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(recipe),
        });

        if (response.ok) {
            alert('Recipe added successfully!');
            setRecipe({ title: '', description: '', imageUrl: '' });
        } else {
            alert('Failed to add recipe');
        }
    };

    return (
        <div>
            <h2>Create New Recipe</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="title" placeholder="Recipe Title" value={recipe.title} onChange={handleChange} required />
                <textarea name="description" placeholder="Recipe Description" value={recipe.description} onChange={handleChange} required />
                <input type="text" name="imageUrl" placeholder="Image URL (Optional)" value={recipe.imageUrl} onChange={handleChange} />
                <button type="submit">Post Recipe</button>
            </form>
        </div>
    );
};

export default CreateRecipe;
