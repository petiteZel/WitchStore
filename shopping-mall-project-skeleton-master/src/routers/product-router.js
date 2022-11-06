/*router의 역할 (컨트롤러)
사용자로부터 요청을 받아서 사용자에게 요청에 대한 응답을 전해주는 계층*/

import { Router } from 'express';
import { productService } from '../services/product-service';

const productRouter = Router();

// 1. 상품 목록
productRouter.get('/', async (req, res, next) => {
    try {
        const { category, page, perPage } = req.query;

        const [productList, totalPage] = await productService.findAllProducts(
            category,
            page,
            perPage,
        );

        res.status(200).json({ productList, totalPage });
    } catch (error) {
        next(error);
    }
});

// 2. 장바구니 내에 있는 상품 상세 정보
productRouter.post('/cart', async (req, res, next) => {
    try {
        const { productIds } = req.body;

        const productList = await productService.getProductsInCart(productIds);

        res.status(200).json(productList);
    } catch (error) {
        next(error);
    }
});

// 3. 상품 상세 정보
productRouter.get('/:productId', async (req, res, next) => {
    try {
        const { productId } = req.params;
        const product = await productService.findById(productId);
        res.status(200).json(product);
    } catch (error) {
        next(error);
    }
});

export { productRouter };
