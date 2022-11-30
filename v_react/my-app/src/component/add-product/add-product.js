import { addImageToS3, getImageUrl } from "../awsS3.js";
import * as Api from "../api.js";
import React from "react";
import style from "./add-product.module.css"

function AddProduct() {
  // async function rending() {
  //   const api = await Api.get("/api/categories");
  //   const categoryBox = document.querySelector("#contentCategory");
  //   api.forEach((e) => {
  //     categoryBox.innerHTML += `<option value="${e.categoryName}">${e.categoryName}</option>`;
  //   });
  // }
  // rending();

  // async function addCategory() {
  //   const submitBtn = document.querySelector(".submitButton");
  //   submitBtn.addEventListener("click", (e) => submitInfo(e));
  // }

  // async function changeImageName() {
  //   const uploading = document.querySelector("#uploading");
  //   uploading.addEventListener("change", imageUpload);
  // }
  // async function imageUpload() {
  //   const file = uploading.files[0];
  //   const fileName = document.querySelector(".uploadContent");
  //   if (file) {
  //     fileName.innerHTML = file.name;
  //   }
  // }

  // async function submitInfo(e) {
  //   await e.preventDefault();
  //   const productName = document.querySelector("#content-productName").value;
  //   const category = document.querySelector("#contentCategory").value;
  //   const type = document.querySelector("#content-type").value;
  //   const brandName = document.querySelector("#contentBrandName").value;
  //   const description = document.querySelector("#content-description").value;
  //   const uploading = document.querySelector("#uploading");
  //   const shortDescription = document.querySelector(
  //     "#contentShortDescription"
  //   ).value;
  //   const price = document.querySelector("#content-price").value;
  //   const image = uploading.files[0];

  //   try {
  //     const imageKey = await addImageToS3(uploading, category);
  //     const imageUrl = await getImageUrl(imageKey);

  //     const data = {
  //       category: category,
  //       personType: type,
  //       brand: brandName,
  //       productName: productName,
  //       image: imageUrl,
  //       price: price,
  //       shortDescription: shortDescription,
  //       detailDescription: description,
  //     };
  //     await Api.post("/api/product/register", data);
  //     console.log(data);

  //     alert(`정상적으로 ${productName}이 등록되었습니다.`);
  //   } catch (err) {
  //     console.log(err.stack);

  //     alert(
  //       `문제가 발생하였습니다. 확인 후 다시 시도해 주세요: ${err.message}`
  //     );
  //   }
  // }

  // changeImageName()
  // changeImageName();
  // addCategory();

  return (
    <div className={style.main}>
      <div className={style.containerForm}>
        <form className={`${style.addbox} ${style.category}`}>
          <div className={style.contentsBox}>
            <p>제품을 판매해 보세요</p>
            <div className={style.field}>
              <label for="content-productName" className={style.infoTitle}>
                제품 이름
              </label>
              <div>
                <input
                  className={style.infoContent}
                  id="content-productName"
                  placeholder="승연 인형"
                  autocomplete="on"
                />
              </div>
            </div>
            <div className={style.field}>
              <label for="contentCategory" className={style.infoTitle}>
                카테고리
              </label>
              <div className={style.selectBox}>
                <select className={style.selectContent} id="contentCategory">
                  <option>선택</option>
                </select>
                <i className="fa-solid fa-chevron-down"></i>
              </div>
            </div>
            <div className={style.field}>
              <label for="contentType" className={style.infoTitle}>
                유형
              </label>
              <div className={style.selectBox}>
                <select className={style.selectContent} id="contentType">
                  <option>선택</option>
                  <option value="1유형">1유형</option>
                  <option value="2유형">2유형</option>
                  <option value="3유형">3유형</option>
                  <option value="4유형">4유형</option>
                </select>
                <i className="fa-solid fa-chevron-down"></i>
              </div>
            </div>
            <div className={style.field}>
              <label for="contentBrandName" className={style.infoTitle}>
                브랜드명
              </label>
              <div>
                <input
                  className={style.infoContent}
                  id="contentBrandName"
                  placeholder="THE WITCH STORE"
                  autocomplete="on"
                />
              </div>
            </div>
            <div className={style.field}>
              <label for="contentShortDescription" className={style.infoTitle}>
                한 줄 소개
              </label>
              <div>
                <input
                  className={style.infoContent}
                  id="contentShortDescription"
                  placeholder="한 줄 소개"
                  autocomplete="on"
                />
              </div>
            </div>
            <div className={style.field}>
              <label for="content-description" className={style.infoTitle}>
                상세설명
              </label>
              <div>
                <textarea
                  className={`${style.infoContent} ${style.textarea}`}
                  id="content-description"
                  placeholder="이 제품은 어쩌구 저쩌구 뭐가 좋고 나쁜건 없고 그렇고 말고."
                  autocomplete="on"
                ></textarea>
              </div>
            </div>
            <div className={style.field}>
              <label for="uploading" className={style.infoTitle}>
                제품 사진
              </label>
              <div>
                <label className={style.imageUploadLabel}>
                  <input
                    className={style.imageUpload}
                    id="uploading"
                    type="file"
                    accept=".png, .jpeg, .jpg"
                  />

                  <div className={style.uploadBox}>
                    <div className={style.uploadIcon}>
                      <i className="fas fa-upload"></i>
                    </div>
                    <div className={style.uploadButton}>사진업로드</div>
                  </div>
                  <div className={style.uploadContent}>사진파일 (png, jpg, jpeg)</div>
                </label>
              </div>
            </div>
            <div className={style.field}>
              <label for="content-price" className={style.infoTitle}>
                가격
              </label>
              <div>
                <input
                  className={style.infoContent}
                  id="content-price"
                  placeholder="18,000"
                  autocomplete="on"
                />
              </div>
            </div>
          </div>
          <div className={style.buttonSpace}>
            <button type="submit" className={style.submitButton}>
              제품 판매하기
            </button>
          </div>
        </form>
      </div>
    </div>


  );
}

export default AddProduct;
