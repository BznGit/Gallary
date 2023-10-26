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
      console.log(folders)
      await Promise.allSettled(folders.map(item=>{
      console.log(item)
         fs.readdir('./data/' + item, (err, files) => {
              return files;
             
          }).then(files=>obj[item] = files)

        }) 
      )
      return obj   
    
       
    }catch(err){
      console.log('FileController error!', err);
    }
  };
}

module.exports = FileController;