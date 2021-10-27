const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  try {
    const findAllCats = await Category.findAll({
      include: [
        {model:Product}
      ],
    });
    res.status(200).json(findAllCats);
  } catch (error) {
    res.status(500).json(error);
    
  }
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  try {
    const catById = await Category.findByPk(req.params.id, {
      include: [
        {model:Product}
      ],
    });
    
      if (!catById) {
        res.status(404).json({ message: 'There is no category with this id.'});
        return;
      }
      res.status(200).json(catById);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.post('/', async (req, res) => {
  // create a new category
  try {
    const newCat = await Category.create(req.body);
    res.status(200).json(newCat);
  } catch (error) {
    res.status(400).json(error);
  }
});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  try {
    const updateCat = await Category.update(req.body, {
      where: {
        id:req.params.id
      }  
    });
      res.status(200).json(updateCat);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  try {
    const deleteCat = await Category.destroy({
      where: {
        id:req.params.id
      }
    });
    if (!deleteCat) {
      res.status(404).json({ message: 'No category was found with this id!' });
      return;
    }
    res.status(200).json(deleteCat);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
