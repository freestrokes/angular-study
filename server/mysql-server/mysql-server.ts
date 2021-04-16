const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// const corsOptions = {
//     origin: 'http://localhost:8081'
// };

const PORT = process.env.PORT || 8080;

// Set CORS option
app.use(cors());
// app.use(cors(corsOptions));

// Parse requests of content-type: application/json
app.use(bodyParser.json());
// app.use(express.json());

// Parse requests of content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// RESTful API route for DB
app.use('/', require('./app/route/route.ts'));
// require('./app/common/db/mongodb/route/route.ts')(app);

// DB connection
const db = require('./app/model/index.ts');
db.sequelizeConfig.sync();
// // drop the table if it already exists
// db.sequelize.sync({ force: true }).then(() => {
//   console.log("Drop and re-sync db.");
// });

// Default route for server status
app.get('/', (req, res) => {
    res.json({ message: `Server is running on port ${PORT}` });
});

// Set listen port for request
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
