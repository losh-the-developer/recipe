import React from 'react';
import style from './recipe.module.css';

const Recipe = ({title, calories, image, ingredients, dietLabels}) => {
    return(
        <div className={style.recipe}>
            <h1>{title}</h1>
            <ol>
                {ingredients.map(ingredient => (
                    <li>{ingredient.text}</li>
                ))}
            </ol>
            <p className={style.calories}> Calories: {calories.toFixed(2)}</p>
            
            {/* <ol>
                {dietLabels.map(label => (
                    <li>{label}</li>
                ))}
            </ol> */}

            <p className={style.labels}> Labels: {dietLabels}</p>
            <img className={style.image} src={image} alt={title}/>
        </div>
    )
}

export default Recipe;