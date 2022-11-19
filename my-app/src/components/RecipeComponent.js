import { useParams, Link, Outlet } from 'react-router-dom';
import recipes from '../data/recipes';

// Juice Name webpage with details of juice recipe, img and blurb
//MacBook Air - healtharea.html/juice-name wireframe

function RecipeComponent() {
    const { juiceName } = useParams();
    console.log(recipes);
    let targetRecipe
    recipes.forEach((recipe) => {
        // if juice name natches recipe
        if (juiceName === recipe.juiceName) {
            targetRecipe = recipe
        }
    }
    )

    return (
        <section>
            <p>Hey from {targetRecipe.juiceName}</p>
        </section>
    );
}

export default RecipeComponent;