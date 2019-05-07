
import fetch from 'node-fetch'
import Url from 'url';


  class ProductListApi {
    static getAllProducts() {
      let urlObjData = Url.format({
        protocol: 'http',
        hostname: '5b35ede16005b00014c5dc86.mockapi.io',
        pathname: '/list/',
        });
        return new Promise(resolve =>{
        fetch(urlObjData.toString())
            .then(res => res.json())
            .then(data =>{  return resolve(data.data)})
        })
    }
  }
  
  export default ProductListApi;