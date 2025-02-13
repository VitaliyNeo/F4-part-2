import * as React from "react";
import { Routes, Route } from "react-router-dom";

import "../styles/App.css";
import Header from "./Header";
import CategorySelector from "./CategorySelector";
import RezeptListForCategory from "./RezeptListForCategory";
import RezeptSelector from "./RezeptSelector";

import SwaggerUI from "swagger-ui-react"
import "swagger-ui-react/swagger-ui.css"

function App() {
    const headerName = "React How to cook";
    let [categoryName, setCategoryName] = React.useState("");

    return (
        <>
            <Header headerName={headerName} />
            <Routes>
                <Route path="*" element={
                    <CategorySelector setCategoryName={setCategoryName} />
                } />

                <Route path="openapi" element={
                    <SwaggerUI url="http://localhost:8000/openapi/" />
                } />

                <Route path="category/:category_pk" element={
                    <RezeptListForCategory categoryName={categoryName} />
                } />

                <Route path="recipe/:recipe_pk" element={
                    <RezeptSelector />
                } />
            </Routes>
        </>
    );
}

export default App;