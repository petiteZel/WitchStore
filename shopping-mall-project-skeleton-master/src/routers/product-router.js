import { Router } from 'express';
import { productService } from '../services/product-service';
import { loginRequired } from '../middlewares'

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

 // 4. 상품 등록
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
productRouter.patch('/update/:productId',
    loginRequired,
    async (req, res, next) => {
        try {
            // req의 params와 body에서 데이터 가져옴
            const { productId } = req.params;
            const { category, personType, brand, productName, image, price, shortDescription, detailDescription } = req.body;

            // 데이터를 상품 db에 반영하기
            const updateProduct = await productService.setProduct(productId, {
              category,
              personType,
              brand,
              productName,
              image,
              price,
              shortDescription,
              detailDescription
            });

            res.status(201).json(updateProduct);
        } catch (error) {
            next(error);
        }
    }
);

// 6.상품 정보 삭제 (/api/product/:productId) ⇒ admin 한정

productRouter.delete('/', 
async function (req, res, next) {
  try {
    // params로부터 id를 가져옴
    const { productId } = req.body;
    // id에 맞는 상품을 삭제함
    const deleteProduct = await productService.deleteProduct(productId);

    res.status(200).json(deleteProduct);
  } catch (error) {
    next(error);
  }
});



export { productRouter };
