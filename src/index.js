import express from 'express';
const app = express();

app.get('/', (req, res) => {
    const message = "Hello World!";
    res.send(message);
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
