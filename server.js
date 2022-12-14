const express = require('express');
const path = require('path');

const userRouter = require('./routes/user.router');
const messageRouter = require('./routes/message.router');

const PORT = 3000;
const app = express();

app.use((req, res, next) => {
    const start = Date.now();
    next();
    const diff = Date.now() - start;
    console.log(`API too execution about ${diff}s`);
});

app.use('/sites', express.static('public'));
app.use(express.json());

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

app.use('/users', userRouter);
app.use('/messages', messageRouter);

app.listen(PORT, () => {
    console.log(`Server Running on Port ${PORT}`);
});