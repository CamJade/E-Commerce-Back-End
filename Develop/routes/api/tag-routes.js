const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  try {
    const findAllTags = await Tag.findAll ({
      include: [
        {model:Product}
      ]
    });
    const allTags = findAllTags.map((tag) =>
    tag.get({plain:true})
    );
    res.status(200).json(allTags);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  try {
    const tagById = await Tag.findByPk(req.params.id, {
      include: [
        {model: Product}
      ],
    });
    if (!tagById) {
      res.status(404).json({ message: 'There is no tag found with this id.'});
      return;
    }
    res.status(200).json(tagById);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.post('/', async (req, res) => {
  // create a new tag
  try {
    const newTag = await Tag.create(req.body);
    res.status(200).json(newTag);
  } catch (error) {
    res.status(400).json(error);
  }
});

router.put('/:id', async (req, res) => {
  // update a tag's name by its `id` value
  try {
    const updateTag = await Tag.update(req.body, {
      where: {
        id: req.params.id,
      }
    });
    res.status(200).json(updateTag)
  } catch (error) {
    res.status(500).json(error);
  }
});

router.delete('/:id', async (req, res) => {
  // delete on tag by its `id` value
  try {
    const deleteTag = await Tag.destroy({
      where: {
        id:req.params.id
      }
    });
    if (!deleteTag) {
      res.status(404).json({ message: 'No tag was found with this id!' });
      return;
    }
    res.status(200).json(deleteTag);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
