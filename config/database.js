const mongoose = require('mongoose');

const dbConnection = () => {
    mongoose
    .connect(process.env.DATABASE_URL,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {console.log('Connected Database')})
    .catch((err) => {
        console.error(err);
        process.exit(1);
    })
}
module.exports = dbConnection;