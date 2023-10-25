const fs = require('fs/promises');

let FileController = class {

  // Запрос информации одной ноды -----------------------------------------------------------------------------/
  async getDir(){
    let obj={};
    try{
        await fs.readdir('./data', (err, dir) => {
        if (err) throw err; 
        return dir
      }).then(folders=>{
            folders.forEach(async(item)=> {
       return await fs.readdir('./data/' + item, (err, files) => {
          
          console.log('>>--', files);  
          obj[item] = files;
          return obj;
        }); 
      });
      })
  
        
   
        // не прочитать содержимое папки
      
    
      
 
    }catch(err){
      console.log('FileController error!', err);
    }

  };
}

module.exports = FileController;