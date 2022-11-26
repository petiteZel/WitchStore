import { model } from 'mongoose';
import { CategorySchema } from '../schemas/category-schema';

const Category = model('category', CategorySchema);

export class CategoryModel {
  // 1. 새로운 카테고리 추가
  async addCategory(categoryInfo) {
    const newCategory = await Category.create(categoryInfo);
    return newCategory;
  }

  // 2. 카테고리 삭제
  async deleteCategory(categoryId){
    const deleteCategory = await Category.deleteOne({_id: categoryId});
    return deleteCategory;
  }

  // 3. 카테고리 id로 특정 카테고리 찾기
  async findByCategoryId(categoryId) {
    const category = await Category.findOne({ _id: categoryId });
    return category;
  }

  // 4. 카테고리명으로 특정 카테고리 찾기
  async findByCategoryName(categoryName) {
    const category = await Category.findOne({ categoryName });
    return category;
  }

  // 5. 전체 카테고리 조회
  async findAllCategories() {
    const categories = await Category.find({});
    return categories;
  }

  // 6. 카테고리 수정
  
    async updateCategory({ categoryId, update }) {
    const filter = { _id: categoryId };
    const option = { returnOriginal: false };
    const updateCategory = await Category.findOneAndUpdate(filter, update, option);
    return updateCategory;
  }

  // 7. 상품 추가시 카테고리에 반영
  async addProductToCategory(categoryName, productId){
    const filter = { name: categoryName};
    const update = { $push : { products : productId}};
    const option = { returnOriginal : false };
    const updatedCategory = await Category.updateOne(filter, update, option);
    return updatedCategory;
  }

  // 8. 상품 삭제 시 카테고리에 반영
  async removeProductFromCategory(categoryName, productId){
    const filter = { name: categoryName};
    const update = { $pull : { products : productId}};
    const option = { returnOriginal : false };
    const updatedCategory = await Category.updateOne(filter, update, option);
    return updatedCategory;
  }
}

const categoryModel = new CategoryModel();

export { categoryModel };