import axios from "axios";

async function getCategoriesList() {
  try {
    const res = await axios.get("http://localhost:8000/category/");
    return res.data;
  } catch (error) {
    throw error;
  }
};

async function getRezeptListForCategory(category) {
  try {
    const res = await axios.get(`http://localhost:8000/category/${category}/`);
    return res.data;
  } catch (error) {
    throw error;
  }
};

async function getRezept(recipe) {
  try {
    const res = await axios.get(`http://localhost:8000/recipe/${recipe}/`);
    return res.data;
  } catch (error) {
    throw error;
  }
};

export { getCategoriesList, getRezeptListForCategory, getRezept };