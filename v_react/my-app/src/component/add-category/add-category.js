import * as Api from "../api.js";
import React from 'react';
import style from './add-category.module.css'

// async function addCategory() {
//   const submitBtn = document.querySelector(".submit-button");
//   submitBtn.addEventListener("click", async (e) => {
//     e.preventDefault();
//     const categoryName = document.querySelector(".info-content").value;
//     const data = { categoryName: categoryName, imageUrl: "something" };

//     const categoryApi = await Api.post("/api/category/register", data);
//   });
function AddCategory() {
    return (
      <div>
        <div className={style.main}>
          <div className={style.containerForm}>
            <form className={`${style.addbox} ${style.category}`}>
              <div className={style.contentsBox}>
                <p>카테고리 추가하기</p>
                <div className={style.field}>
                  <label for="content" className={style.infoTitle}>
                    카테고리 이름
                  </label>
                  <div>
                    <input
                      className={style.infoContent}
                      id="content"
                      placeholder="인형"
                      autocomplete="on"
                    />
                  </div>
                </div>
              </div>
              <div className={style.buttonSpace}>
                <button type="submit" className={style.submitButton}>
                  카테고리 추가하기
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
}

export default  AddCategory;

  // console.log(categoryApi)

  // const data = {categoryName:"why", imageUrl:""}
  // const response = await fetch('/add-category/category.json', {
  //     method: 'POST', // *GET, POST, PUT, DELETE, etc.
  //     mode: 'cors', // no-cors, *cors, same-origin
  //     cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
  //     credentials: 'same-origin', // include, *same-origin, omit
  //     headers: {
  //       'Content-Type': 'application/json'
  //       // 'Content-Type': 'application/x-www-form-urlencoded',
  //     },
  //     redirect: 'follow', // manual, *follow, error
  //     referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
  //     body: JSON.stringify(data) // body data type must match "Content-Type" header
  //   });

  //   response.json()
// }

// addCategory();
