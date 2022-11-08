/*model의 역할
데이터 베이스에 접근하는 로직을 작성하는 곳
db에 접근하는 로직만!!!담겨있음 다른건 ㄴㄴ*/

import { model } from 'mongoose';
import { ProductSchema } from '../schemas/product-schema';


const Product = model('products', ProductSchema);

export class ProductModel {
    
    // 1. 전체 상품 조회
    async findAllProducts() {
        const productList = await Product.find({});
        return productList;
    }
    // 2. 카테고리별 상품 조회
    async findByCategory(category){
        const productList = await Product.find({category: category});
        return productList;
    }
    // 3. 상품 상세 정보
    async findById(productId) {
        // const product = await Product.findOne({_id: productId});
        
        const filter = {_id: productId};
        const update = { $inc : {views: 1}};
        const option = { returnOriginal : false };
        
        const updatedProduct = await Product.findOneAndUpdate(filter, update, option);
        return updatedProduct;
    }
    // 4. 상품 등록 (추가)
    async create(productInfo) {
        const createdNewProduct = await Product.create(productInfo);

        return createdNewProduct;
    }
    // 5. 상품 정보 수정
    async updateProduct(productId, update) {
        const filter = {_id: productId};
        const option = { returnOriginal : false };

        const updatedProduct = await Product.findByIdAndUpdate(productId, update, option).exec();
        return updatedProduct;
    }
    // 6. 상품 삭제
    async deleteProduct(productId) {
        const deletedProduct = await Product.deleteOne({ _id: productId });
        return deletedProduct;
    }

    // 7. 상품 조회 페이지네이션 (페이지 넘기는것)
    async getPaginatedProducts (query, page, perPage) {

        const [total, productList] = await Promise.all([
            Product.countDocuments(query),
            Product
                .find(query)
                .sort({views: -1})
                .skip(perPage * (page - 1))
                .limit(perPage)
        ]);

        const totalPage = Math.ceil(total / perPage);

        return [productList, totalPage];
        
    }

}

const productModel = new ProductModel();

export { productModel }
