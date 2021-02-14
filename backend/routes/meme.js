const router = require('express').Router();
const crio_meme = require('../models/crio_meme');
const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUI = require('swagger-ui-express');

router.route('/').get((req,res) => {
    crio_meme.find().sort({_id:-1}).limit(100)
    .then(memes => res.json(memes))
    .catch(err => res.status(400).json('Error:' + err));
});

router.route('/:id').get((req,res) => {
    crio_meme.findById(req.params.id)
    .then(meme => res.json(meme))
    .catch(err => res.status(404).json('404 Error:'));
});

router.route('/:id').patch(async(req,res)=>{
    try{
        const meme = await crio_meme.findById(req.params.id)
        meme.caption = req.body.caption;
        meme.url = req.body.url;
        const edit_meme = await meme.save();
        res.json(edit_meme); 
    }
    catch(err){
        res.status(404).send('404 Error');
    }
});

router.route('/:id').delete(async (req, res) => {
    try {
        const meme = await crio_meme.findById(req.params.id)
        const delete_meme = await meme.delete()
        res.json(delete_meme);
    }
    catch (err) {
        res.send('Error in deleting');
    }
})


router.route('/').post((req, res) => {

    const crioMeme = new crio_meme({
        name: req.body.name,
        caption: req.body.caption,
        url: req.body.url
    });
    crioMeme.save()
        .then((data) => res.json(data))
        .catch(err => res.status(400).json('Error:' + err));
});

module.exports = router;