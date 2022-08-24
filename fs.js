const fs = require('fs');

//criando pasta
/* if (!fs.existsSync('./public')){
  fs.mkdirSync('./public', (err)=>{
    if(err){
      throw err;
    }
    console.log('Pasta criada com sucesso!!!');
  })
} else{
  console.log('A pasta "public" já existe!')
} */

// fs.existsSync('./public') || fs.mkdirSync('./public'); // maniera mais curta para criar uma pasta.

// mudando nome da pasta

/*if (fs.existsSync('./public')){
  fs.renameSync('./public','./jean', (err)=>{
    if(err){
      throw err;
    }
    console.log('Pasta renomeada com sucesso!!!');
  })
} else{
  console.log('Impossivel renomear porque "public" não existe!')
}*/

//deletando pasta
if (fs.existsSync('./jean')){
  fs.rmdir('./jean',{recursive:true}, (err)=>{
    if(err){
      throw err;
    }
    console.log('Pasta deletada com sucesso com sucesso!!!');
  });
} else{
  console.log('Impossivel deletar porque "jean" não existe!')
}
