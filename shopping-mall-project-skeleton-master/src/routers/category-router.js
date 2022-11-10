import { Router } from 'express';
import is from '@sindresorhus/is';
// 폴더에서 import하면, 자동으로 폴더의 index.js에서 가져옴
import { loginRequired, adminOnly } from '../middlewares';
import { categoryService } from '../services';

const categoryRouter = Router();

// 1. 카테고리등록 api (아래는 /register이지만, 실제로는 /api/register로 요청해야 함.)
categoryRouter.post('/', adminOnly, async (req, res, next) => {
// categoryRouter.post('/', async (req, res, next) => {
  try {
    // 1-1. Content-Type: application/json 설정을 안 한 경우, 에러를 만들도록 함.
    // 1-2. application/json 설정을 프론트에서 안 하면, body가 비어 있게 됨.
    if (is.emptyObject(req.body)) {
      throw new Error(
        'headers의 Content-Type을 application/json으로 설정해주세요'
      );
    }

    // 1-3. req (request)의 body 에서 데이터 가져오기
    const categoryName = req.body.categoryName;
    const imageUrl = req.body.imageUrl;
 
    // 1-4. 위 데이터를 카테고리 db에 추가하기
    const newCategory = await categoryService.addCategory({
      categoryName,
      imageUrl,
    });

    // 1-5. 추가된 카테고리의 db 데이터를 프론트에 다시 보내주기
    // 프론트에서 안 쓸 수도 있지만, 편의상 일단 보내준다.
    res.status(201).json(newCategory);
  } catch (error) {
    next(error);
  }
});

// 2. 전체 카테고리 목록을 가져오기.
categoryRouter.get('/categories', async function (req, res, next) {
  try {
    // 전체 카테고리 목록을 얻음
    const categories = await categoryService.findAllCategories();
    // 카테고리 목록을 JSON 형태로 프론트에 보냄
    res.status(200).json(categories);
  } catch (error) {
    next(error);
  }
});

// 3. 특정 카테고리 정보 불러오기
categoryRouter.get('/info/:categoryId', loginRequired, async function (req, res, next) {
  try {
    const categoryInfo = await categoryService.getCategoryInfo(
      req.params.categoryId
    );

    res.status(200).json(categoryInfo);
  } catch (error) {
    next(error);
  }
});

// 카테고리 정보 수정
categoryRouter.patch('/update/:categoryId', async function (req, res, next) {
  try {
    // content-type 을 application/json 로 프론트에서
    // 설정 안 하고 요청하면, body가 비어 있게 됨.
    if (is.emptyObject(req.body)) {
      throw new Error(
        'headers의 Content-Type을 application/json으로 설정해주세요'
      );
    }
    const categoryId = req.params.categoryId;

    // body data 로부터 업데이트할 카테고리 정보를 추출함.
    const categoryName = req.body.categoryName;
    const imageUrl = req.body.imageUrl;

    // 위 데이터가 undefined가 아니라면, 즉, 프론트에서 업데이트를 위해
    // 보내주었다면, 업데이트용 객체에 삽입함.
    const toUpdate = {
      ...(categoryName && { categoryName }),
      ...(imageUrl && { imageUrl }),
    };

    // 카테고리 정보를 업데이트함.
    const updatedcategoryInfo = await categoryService.setCategory(
      categoryId,
      toUpdate
    );

    // 업데이트 이후의 카테고리 데이터를 프론트에 보내 줌
    res.status(200).json(updatedcategoryInfo);
  } catch (error) {
    next(error);
  }
});

// 카테고리 정보 삭제
categoryRouter.delete('/delete/:categoryId', async function (req, res, next) {
  try {
    const categoryId = req.params.categoryId;
    const deletedCategoryInfo = await categoryService.deleteCategory(
      categoryId
    );

    res.status(200).json(deletedCategoryInfo);
  } catch (error) {
    next(error);
  }
});

export { categoryRouter };
