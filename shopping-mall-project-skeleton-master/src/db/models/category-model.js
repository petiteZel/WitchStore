import { model } from 'mongoose';
import { CategorySchema } from '../schemas/category-schema';

const Category = model('category', CategorySchema);

export class CategoryModel {
  // 1. 새로운 카테고리 추가
  async addCategory(categoryInfo) {
    const newCategory = await Category.create(categoryInfo);
    return newCategory;
  }
  // 2. 카테고리 검색 - 이름
  async findByCategoryName(categoryName) {
    const category = await Category.findOne({ categoryName });
    return category;
  }
  // 3. 카테고리 검색 - id
  async findByCategoryId(categoryId) {
    const category = await Category.findById(categoryId)
    return category;
  }
  // 4. 전체 카테고리 조회
  async findAllCategories() {
    const categories = await Category.find({});
    return categories;
  }
  // 5. 카테고리 수정
  async updateCategory({ categoryId, update }) {
    const filter = { _id: categoryId };
    const option = { returnOriginal: false };
    const updatedCategory = await Category.findOneAndUpdate(
      filter,
      update,
      option
    );
    return updatedCategory;
  }
  // 6. 카테고리 삭제
  async deleteCategory(categoryId) {
    const category = await Category.findOneAndDelete({ _id: categoryId });
    return category;
  }
}

const categoryModel = new CategoryModel();

export { categoryModel };