mongodb-nodejs-casadocodigo
===========================

MongoDB + NodeJS ( express + monk)
--------------------------------------------

* Database.....: *test*
* Collection...: *seriados*


* Carga 

```
 mongo < db/seriados.js

```

* Exemplo de documento

```
db.seriados.findOne()
 
{
    "_id" : ObjectId("1"),
    "nome" : "Breaking Bad",
    "personagens" : [ 
        "Walter White", 
        "Skyler White", 
        "Jesse Pinkman", 
        "Hank Schrader", 
        "Marie Schrader ", 
        "Saul Goodman"
    ]
}
```

* Para executar o exemplo

```
git clone

cd mongodb-nodejs-casadocodigo

npm install 

./sobe-nodejs
```

