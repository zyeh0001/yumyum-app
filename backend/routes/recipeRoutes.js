const express = require('express');
const router = express.Router();

const {
  getRecipes,
  createRecipe,
  getRecipe,
  updateRecipe,
  deleteRecipe,
} = require('../controller/recipeController');

const { protect } = require('../middleware/authMiddleware');

router.route('/').get(protect, getRecipes).post(protect, createRecipe);

router
  .route('/:id')
  .get(protect, getRecipe)
  .delete(protect, deleteRecipe)
  .put(protect, updateRecipe);

module.exports = router;
