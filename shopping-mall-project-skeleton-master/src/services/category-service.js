import { categoryModel } from '../db';

class CategoryService {
  constructor(categoryModel) {
    this.categoryModel = categoryModel;
  }

  // 1. 새로운 카테고리 추가
  async addCategory(categoryInfo) {
    const { categoryName } = categoryInfo;
    // 1-1. 카테고리 이름 중복 확인
    const category = await this.categoryModel.findByCategoryName(categoryName);
    if (category) {
      throw new Error('이미 동일한 카테고리가 존재합니다.');
    }
    // 1-2. 카테고리가 중복되지 않으므로, 카테고리 등록을 진행
    // 1-3. db에 저장
    const newCategory = await this.categoryModel.addCategory(categoryInfo);
    return newCategory;
  }

  // 2. 전체 카테고리 목록 받기
  async findAllCategories() {
    const categories = await categoryModel.findAllCategories();
    return categories;
  }

  // 3. 카테고리 불러오기
  async getCategoryInfo(categoryId) {
    const category = await this.categoryModel.findByCategoryId(categoryId);
    return category;
  }

  // 4. 카테고리 정보 수정
  async setCategory(categoryId, toUpdate) {
    // 4-1. 해당 id의 카테고리가 db에 있는지 확인
    let category = await this.categoryModel.findByCategoryId(categoryId);
    // 4-2. db에서 찾지 못한 경우, 에러 메시지를 반환
    if (!category) {
      throw new Error('존재하지 않는 카테고리입니다.');
    }
    // 4-3. db에 있는 경우, 업데이트 진행
    category = await this.categoryModel.updateCategory({
      categoryId,
      update: toUpdate,
    });

    return category;
  }

  // 5. 카테고리 삭제
  async deleteCategory(categoryId) {
    const deleteCategory = await this.categoryModel.deleteCategory(categoryId);
    if (!deleteCategory) {
        throw new Error('해당 카테고리 정보가 없습니다.');
    }
    return deleteCategory;
  } 

  // 6. 상품 추가 시 카테고리에 반영
  async addProductToCategory(categoryName, productId){
    const updatedCategory = await categoryModel.addProductToCategory(categoryName, productId);
    return updatedCategory;
  }

  // 7. 상품 삭제 시 카테고리에 반영
  async removeProductFromCategory(categoryName, productId){
    const updatedCategory = await Category.updateOne(categoryName,productId);
    return updatedCategory;
  }
}


const categoryService = new CategoryService(categoryModel);

export { categoryService };
