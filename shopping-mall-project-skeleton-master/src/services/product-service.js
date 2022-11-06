/*service의 역할 비즈니스 로직 => 비즈니스+로직
비즈니스에 도움이 되는 코드가 담겨있는 곳을 비즈니스 로직이라고 한다
(회원가입 등)*/

const { productModel } = require('../db/models/product-model');
const {categoryModel} = require('../db/models/category-model');

class ProductService {
    
    constructor(productModel){
        this.productModel = productModel;
    }
    
    // 1. 전체 / 카테고리 상품 목록 조회
    async findAllProducts(category, page, perPage){

            let query = {}
        
            if (category !== null && category !== undefined){
                
                const isCategoryExist = await categoryModel.findOne(category);
                
                if(isCategoryExist){
                    query = {category: isCategoryExist._id}
                }
            }
            const [productList, totalPage] = await this.productModel.getPaginatedProducts(query, page, perPage);
            
            return [ productList, totalPage ];
            

    }
    // 2. 상품 상세 정보 조회
    async findById(productId){

        const product = await this.productModel.findById(productId);

        return product;
    }

    // 3. 상품 등록
    async addProduct(categoryName, productInfo){
        const { productName }= productInfo

        // 3-1. 상품명 중복 확인
        const product = await this.productModel.findByName(productName);

        if (product){
            throw new Error("이미 존재하는 상품명입니다. 새로운 이름을 등록해주세요.");
        }
        
        // 3-2. 추가된 상품 객체 반환
        return addedProduct;
    }
    
    // 4. 상품 정보 수정
    async updateProduct(productId, update){
        const updatedProduct = await this.productModel.updateProduct(productId, update);
        return updatedProduct;
    }
    // 5. 상품 삭제
    async deleteProduct(productId){
        const categoryName = await categoryModel.findCategoryName(productId);

        const updatedCategory = await categoryModel.removeProductFromCategory(categoryName, productId);
    
        const deletedProduct = await this.productModel.deleteProduct(productId);

        return updatedCategory, deletedProduct;
    }




    // 6. 관리자 상품 목록 조회
    async findAllProductsForAdmin(){
        const productList = await this.productModel.findAllProducts();
        return productList;
        

    }


}

const productService = new ProductService(productModel);

export { productService }
