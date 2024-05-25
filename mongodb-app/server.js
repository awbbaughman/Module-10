const express = require("express");
const app = express();
const apiRoutes = require('./routes/apiRoutes');
require("dotenv").config();

app.use('/api', apiRoutes);

app.use(express.json());

const PORT = process.env.PORT || 8080;

app.use('/api/users', userRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port${PORT}.`);
});