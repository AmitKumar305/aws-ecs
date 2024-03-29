require('dotenv').config();
const app = require('express')();

app.get('/', (req, res) => {
    res.send('Hello world');
});

const port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})