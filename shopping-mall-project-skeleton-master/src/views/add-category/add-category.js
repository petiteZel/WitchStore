import * as Api from "../api.js";

async function addCategory() {
  const submitBtn = document.querySelector(".submit-button");
  submitBtn.addEventListener("click", async (e) => {
    e.preventDefault();
    const categoryName = document.querySelector(".info-content").value;
    const data = { categoryName: categoryName, imageUrl: "something" };
    try {
      await Api.post("/api/category/register", data);
      alert("카테고리가 추가되었습니다.");
      location.reload();
    } catch (err) {
      alert(err.message);
    }
  });
}

addCategory();
