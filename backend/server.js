const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
// const uri = 'mongodb+srv://rishabh100:rishabh100@cluster0.aiswa.mongodb.net/crio_meme?retryWrites=true&w=majority';
const uri = 'mongodb://localhost:27017/crio_meme'
const swaggerDocument = require('./swagger.json');
const swaggerUI = require('swagger-ui-express');
const Router = require('./routes/meme');
require('dotenv').config();

const app = express();
const SwaggerApi = express();
const port = process.env.PORT || 8081;
const swagger_port = process.env.SWAGGER_PORT || 8080;

app.use(cors());
app.use(bodyParser.json());

// const swaggerDocs = swaggerJSDoc(swaggerOptions);
SwaggerApi.use('/swagger-ui', swaggerUI.serve, swaggerUI.setup(swaggerDocument));



mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true  });

const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB connection successful ");
})


app.use('/memes',Router);

app.get('/', (req,res)=>{
    res.send('CrioMeme Api');
});

app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
});
SwaggerApi.listen(swagger_port, () => {
    console.log(`Swagger Ui running on ${swagger_port}`);
});



