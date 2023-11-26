const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const infoRouter = require('./routes/info');
const rewardRouter = require('./routes/reward');
const mongoConnect = require('./util/database').mongoConnect;

/* ------------------ Settings ------------------ */

const app = express();

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('build'));

/* ------------------ Routing ------------------ */

app.use(infoRouter);
app.use(rewardRouter);

/* ------------------ Default pages ------------------ */

mongoConnect((client) => {
    app.get('/', (req, res) => {
        res.send('hello world!');
    });
});
app.listen(3000, () => {
    console.log('server start!');
});
