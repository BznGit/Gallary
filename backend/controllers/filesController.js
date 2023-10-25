const axios = require('axios');
const settings = require('../settings.json'); 
const ip = settings.freaPoolApiEndpoint;

let ApiController = class {

  // Запрос информации одной ноды -----------------------------------------------------------------------------/
  async getOneNode(){
    let obj = null;
    try{
      await axios.get(ip + ':7000'  + '/general'  ,{agent:false}).then(res => {
        obj = res.data;  
      })
    }catch(err){
      console.log('getOneNode error!', err);
    }
    return obj;  
  };

 
}

module.exports = ApiController;