const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const authRouter = require('./routes/auth');
const usersRouter = require('./routes/users');
const filialRouter = require('./routes/filial');
// const categoryRouter = require('./routes/category');
const adminRouter = require('./routes/admins');
const searchRouter = require('./routes/search');
const productRouter = require('./routes/products');
const rekvizitRouter = require('./routes/rekvizit');
const cors = require('cors');


const app = express();

app.use(cors());
dotenv.config();
app.use(express.json());


// db connection
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => { 
    console.log('MongoDB Connected');
}).catch((err) => {
    console.log(err);
})
// db connection


app.get('/', (req, res) => {
    res.send('Hello World!');
})

app.use('/media', express.static('./uploads'));
app.use('/api/auth', authRouter);
app.use('/api/users', usersRouter);
app.use('/api/filial', filialRouter);
//app.use('/api/category', categoryRouter);
app.use('/api/admin', adminRouter);
app.use('/api/search', searchRouter);
app.use('/api/product', productRouter);
app.use('/api/rekvizit', rekvizitRouter);




app.listen(process.env.PORT || 5000, () => {
    console.log('Example app listening on port 5000!')
})