/*service의 역할 비즈니스 로직 => 비즈니스+로직
비즈니스에 도움이 되는 코드가 담겨있는 곳을 비즈니스 로직이라고 한다
(회원가입 등)*/

const { productModel } = require('../db/models/product-model');
// const {categoryModel} = require('../db/models/category-model');

class ProductService {
    
    constructor(productModel){
        this.productModel = productModel;
    }


     // 1. 전체 상품 조회
    async findAllProducts(){

        const findAll = await this.productModel.findAllProducts()
        
        return findAll;
        

}

    // 2. 카테고리별 상품 조회
    async findByCategory(category){
        const info = { category: category}
        const findByCategory = await this.productModel.findByCategory(info)
        return findByCategory;
        
}



    // 3. 상품 상세 정보
    async findById(productName){
        const inf = {productName: productName}
        const product = await this.productModel.findById(inf);
        return product;
    }

 // 4. 상품 등록??
 async addedProduct(productInfo){

    const addedProduct = await this.productModel.create(productInfo);

    return addedProduct;
}

    // 5. 상품 수정
    async setProduct(productId, toUpdate) {
      const updatedProduct = await this.productModel.update({
        productId,
        update: toUpdate,
      });
  
      return updatedProduct;
    }
  

    // 6.상품 삭제
    async deleteProduct(productId) {
      let product = await productModel.delete(productId);
      // if (!product) {
      //   throw new customError(404, '해당 상품의 id가 없습니다. 다시 한 번 확인해 주세요.');
      // }
  
      return product;
    }



}



const productService = new ProductService(productModel);

export { productService }


//상품 추가?
//상품 수정?
//상품 삭제
//상품 목록ㅇ
//상품 상세ㅇ
//상품 정보(상품은 특정 카테고리에 속해있다)ㅇ
//상품 정보(db에 저장할 수 있다)