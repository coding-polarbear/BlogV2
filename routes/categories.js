var express = require('express');
var router = express.Router();
var Category = require('../models/Category');
var Post = require('../models/Post');

router.post('/add', (req, res) => {
    console.log(req.body);
    Category.create(req.body, (err,category) => {
        if(err) throw err;
        res.send('<script>alert("성공적으로 생성되었습니다!");location.href="/posts/write"</script>');
    });
});

router.get('/:categoryName', (req, res) => {
    Post.find({category : req.params.categoryName}, (err, posts) => {
        Category.find({}, (err, categories) => {
            res.render('index', {
                postList : posts,
                user : req.user,
                isLast : true,
                pageNum : 0,
                categoryList : categories
            });
        });
    }).sort({date : -1});
});

module.exports = router;