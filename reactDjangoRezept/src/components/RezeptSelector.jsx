import * as React from "react";
import { useParams } from "react-router-dom";

import "../styles/RezeptSelector.css";
import { getRezept } from "../services/djangoService";

function RezeptSelector() {
    let [recipe, setRecipe] = React.useState([]);
    const params = useParams();
    React.useEffect(() => {
        if (!recipe.length) {
            getRezept(params.recipe_pk).then((value) => {
                if (value.length) { setRecipe(value) };
                console.log('Recipe: ', value);
            });
        }
    }, []);

    return (
        <div className="recipe" >
            {recipe[0] ? (
                <>  <div className="gallery">
                    <img src={recipe[0].photo} alt=""/>
                    </div>
                    <div className="column col_left">
                        <div className="column--name">Название блюда:</div>
                        <div className="column--info">{recipe[0].dish}</div>
                    </div>
                    <div className="column col_right">
                        <div className="column--name">Рецепт блюда:</div>
                        <div className="column--info">{recipe[0].recipe}</div>
                    </div>

                </>
            ) : (<p>Wait for a response from API...</p>)}
        </div >
    );
}

export default RezeptSelector;