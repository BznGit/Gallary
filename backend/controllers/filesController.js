const fs = require('fs/promises');

let FileController = class {

  // Запрос информации одной ноды -----------------------------------------------------------------------------/
  async getDir(){
    let obj={};
    try{
      let folders = await fs.readdir('./data', (err, dir) => {
        if (err) throw err; 
        return dir
      });
      await Promise.allSettled(folders.map(item=>
        fs.readdir('./data/' + item))).then(res=> {
          res.map((item, k )=>{
            let arr = item.value;
            obj[folders[k]] = arr
          })
        })
      return obj
       
    }catch(err){
      console.log('FileController error!', err);
    }
  };
}

module.exports = FileController;