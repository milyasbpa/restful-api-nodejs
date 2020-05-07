const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// parser app
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// panggil router
const router= require('./router')
router(app);

const port=4500;
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});