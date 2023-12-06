const router = require('express').Router();
const path = require('path');

router.get('/', (req, res) => {
    const absolutePath = path.join(__dirname, '../public/index.html');
    res.sendFile(absolutePath);
});

router.get('/notes', (req, res) => {
    const absolutePath = path.join(__dirname, '../public/notes.html');
    res.sendFile(absolutePath);
});

module.exports = router;
