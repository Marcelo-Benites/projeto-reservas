const express = require('express');
const mongoose = require('mongoose');

const routes = require('./routes');

const app = express();

mongoose.connect('mongodb://oministack:oministack@omnistack-shard-00-00-cwbvj.mongodb.net:27017,omnistack-shard-00-01-cwbvj.mongodb.net:27017,omnistack-shard-00-02-cwbvj.mongodb.net:27017/semana09?ssl=true&replicaSet=Omnistack-shard-0&authSource=admin&retryWrites=true&w=majority',{
   useNewUrlParser: true,
   useUnifiedTopology: true,
});


//Get.Post.Put.Delete
//req.query = acessar query params (para filtros)
//req.params = acessar route params (para edição, delete)
// req.body = Acessar corpo da requisição (para criação, edição)

app.use(express.json());
app.use(routes);


app.listen(3333);