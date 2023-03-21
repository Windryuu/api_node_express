const express = require('express')
const app = express()
const port = 3000

let compteurID = 1;

app.get('*',(req,res) =>{
    let articleId = req.originalUrl.split('/');
    
    const url = new URL(req.url, 'http://localhost/');
    const params = Object.fromEntries(url.searchParams);

    switch(req.originalUrl){
        case '/articles':
            res.send(poolOfArticle);
            return;
        case '/articles?id='+params.id:
            res.send(poolOfArticle.find(elem => elem.id == params.id));
            return;
    }
    
})

app.post('/',(req,res) =>{
    res.send('Posted some crap again right :)')
})

app.listen(port, () => {
    console.log('App listening to music')
})

class Article{
    constructor(id,nom,description,category,price,promo,note,quantity){
      this.id = id,
      this.nom = nom,
      this.description = description,
      this.category = category,
      this.price = price,
      this.promo = promo,
      this.note = note,
      this.quantity = quantity
    }
  }

let poolOfArticle =[];

function createNewArticle(id,nom,description,category,price,promo,note,quantity,arrayArticle){
  let article = new Article(id,nom,description,category,price,promo,note,quantity)
  compteurID++
  if(arrayArticle){
    poolOfArticle.push(article);
  }
}

let art1 = createNewArticle(compteurID,"pomme","une pomme","fruit",2,0,5,1,poolOfArticle);
let art2 = createNewArticle(compteurID,"poire","une poire","fruit",3,0,5,2,poolOfArticle);
