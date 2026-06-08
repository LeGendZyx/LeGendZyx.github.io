// server/index.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const Visit = require('./models/Visit');

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// 连接数据库
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("Connected to MongoDB"))
    .catch(err => console.error(err));

// 记录访客接口
app.post('/api/visit', (req, res) => {
    const visit = new Visit({
        ip: req.ip,
        userAgent: req.headers['user-agent']
    });

visit.save()
    .then(() => res.status(201).send('Visit recorded'))
    .catch((err) => {
        console.error(err);
        res.status(500).send('Error recording visit');
    });
});

// 获取访问次数
app.get('/api/visit', async (req, res) => {
    const count = await Visit.countDocuments({});
    res.json({ visits: count });
});


// 启动服务
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
