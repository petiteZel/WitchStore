import { Router } from 'express';
import { productService } from '../services/product-service';

const productRouter = Router();

// 1. 전체 상품 목록
productRouter.get('/', async (req, res, next) => {
    try {
        const findAll = await productService.findAllProducts()

        res.status(200).json(findAll);
    } catch (error) {
        next(error);
    }
});

// 2. 카테고리별 상품 조회
productRouter.get('/:category', async (req, res, next) => {
    try {
        const category = req.params.category;
        const findByCategory = await productService.findByCategory(category)

        res.status(200).json(findByCategory);
    } catch (error) {
        next(error);
    }
});



// 3. 상품 상세 정보
productRouter.get('/:productId', async (req, res, next) => {
    try {
        const productId = req.params.productId;
        console.log(productId);
     
        const product = await productService.findById(productId);
        res.status(200).json(product);
    } catch (error) {
        next(error);
    }
});

 // 4. 상품 등록 ??
 productRouter.post('/register', async (req, res, next) => {
    try {

        const {category, personType, brand, productName, image, price, shortDescription, detailDescription} = req.body;
        const addedProduct = {category, personType, brand, productName, image, price, shortDescription, detailDescription}
        const findByCategory = await productService.addedProduct(addedProduct)

        res.status(200).json(findByCategory);
    } catch (error) {
        next(error);
    }
});

//5. 상품 수정 admin 한정




export { productRouter };
