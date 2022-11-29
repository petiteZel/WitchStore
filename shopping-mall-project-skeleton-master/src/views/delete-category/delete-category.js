import * as Api from "../api.js";

async function rending(){
  const api = await Api.get('/api/category/categories')
  const categoryBox = document.querySelector('#content-category')
  api.forEach(e=>{
      categoryBox.innerHTML += `<option value="${e._id}">${e.categoryName}</option>`
  })
}
rending()

async function delCategory() {
  const submitBtn = document.querySelector(".submit-button");
  submitBtn.addEventListener("click", async (e) => {
    e.preventDefault();
    const category = document.querySelector('#content-category').value
    try{
      await Api.delete(`/api/category/delete/${category}`)
      alert('카테고리를 삭제하였습니다.')
      location.reload()
    }catch(err){
      alert(`err: ${err.message}`)
    }
  });
}

delCategory();
