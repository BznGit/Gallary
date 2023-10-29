const fs = require('fs/promises');

let FileController = class {

  // Запрос информации одной ноды -----------------------------------------------------------------------------/
  async getDir(){
    let obj={};
    try{
      let folders = await fs.readdir('./dist/data', (err, dir) => {
        if (err) throw err; 
        return dir
      });
      await Promise.allSettled(folders.map(item=>
        fs.readdir('./dist/data/' + item))).then(res=> {
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

  async setDir(dir){
    try{
     let err = false
      await fs.mkdir('./dist/data/' + dir).catch(e=>err = true)
      return err 
    }catch(err){
      console.log('FileController error!', err);
    }
  };

  async delDir(dir){
    try{
      let err = false
      await fs.rmdir('./dist/data/' + dir).catch(e=>err = true)
      return err
    }catch(err){
      console.log('FileController error!', err);
    }
  };

  async delFile(dir, file){
    try{
      let err = false
      await fs.unlink('./dist/data/' + dir + '/' + file).catch(e=>err = true)
      return err
    }catch(err){
      console.log('FileController error!', err);
    }
  };
  async setFile(dir, file){
    try{
      let err = false
      let fl = await fs.readFile('./uploads/'  + file).catch(e=>err = true)
      await fs.writeFile('./dist/data/' + dir + '/' + file, fl).catch(e=>err = true)
      //await fs.unlink('./uploads/'  + file).catch(e=>err = true)
      return err
    }catch(err){
      console.log('FileController error!', err);
    }
  };
}

module.exports = FileController;