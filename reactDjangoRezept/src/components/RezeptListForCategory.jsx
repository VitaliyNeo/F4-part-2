import * as React from "react";
import { useParams, Link } from "react-router-dom";
import Table from 'react-bootstrap/Table';

import "../styles/RezeptListForCategory.css";
import { getRezeptListForCategory } from "../services/djangoService";

function RezeptListForCategory(props) {
    let [recipes, setRecipes] = React.useState([]);
    const params = useParams();
    React.useEffect(() => {
        if (!recipes.length) {
            getRezeptListForCategory(params.category_pk).then((value) => {
                if (value.length) { setRecipes(value) };
                console.log('Recipes list: ', value);
            });
        }
    }, []);

    return (
        <div className="choose-recipe" >
            {recipes ? (
                <>
                    <p>Блюда в категории{props.categoryName ? (` "${props.categoryName}"`) : ("")}:</p>
                    <Table striped bordered hover className="countries">
                        <thead>
                            <tr>
                                <th>Изображение</th>
                                <th>Блюдо</th>
                                <th>Рецепт</th>
                            </tr>
                        </thead>
                        <tbody>
                            {recipes.map((recipe) => (
                                <tr key={recipe.pk + recipe.dish + recipe.photo}>
                                    <td>
                                        <img src={recipe.photo} alt=""/>
                                    </td>
                                    <td>
                                        <Link to={`/recipe/${recipe.pk}`}>{recipe.dish}</Link>
                                    </td>
                                    <td>{recipe.recipe.slice(0,31)}...</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </>
            ) : (<p>Wait...</p>)}
        </div >
    );
}

export default RezeptListForCategory;