// import { getImageUrl } from "../aws-s3.js";
// import { checkLogin, createNavbar } from "../../useful-functions.js";
import * as Api from "../api.js";
import React from "react";
import  style from "./order-detail.module.css"

function OrderDetail(){
  return(
    <div className={style.center}>

        <div className={style.container}>
            <h2 className={style.trackPackageTitle}>상품 현황</h2>

            <div className={style.IconBox}>
                <i className="fa-solid fa-box-open"></i>
                <i className="fa-solid fa-truck-fast "></i>
                <i className="fa-solid fa-circle-check"></i>
            </div>

            <div className={style.progressBarBox}>
                <div className={style.basicBar}></div>
                <div className={style.progressBar}></div>
            </div>

            <div className={style.trackPackageTxt}>
                <p>상품 준비중</p>
                <p>배송 중</p>
                <p>배송 완료</p>
            </div>
        </div>
        
        <div className={style.orderDetailList}>
            <div className={style.container}>
    
                <h3>주문내역</h3>
    
                <div className={style.orderProductBox} id="ordersContainer">
                    {/*결제한 상품들의 html 요소(카드 형태)가 주입되는 곳 */}
                    <div className={style.orderProduct} id="productItem-${_id}">
                        <div className={style.productImg}>
                            <img id="image-${_id}" src="${imageUrl}"alt="product-image"/>
                        </div>
                        <p className={style.productName} id="title-${_id}">{/* ${compressString(title)} */}상품명</p>
                        <p className={style.countNumber} id="quantityInput-${_id}">1</p>
                        <p className={style.productPrice} id="total-${_id}">{/* ${addCommas(quantity * price)} */}18,000원</p>
                    </div>
                </div>

                <div className={style.totalPriceBox}>
                    <span>합계</span>
                    <span className={style.totalPrice}>54,000</span>
                </div>

            </div>
        </div>{ /* <!-- orderDetailList end --> */ }

        <div className={style.ordererInfo}>
            <div className={style.ordererInfoContainer}>
                <h3>주문자 정보</h3>
                <div className={style.ordererInfoBox}>

                  <div className={style.ordererInfoList}>
                    <div className={style.info}>
                      <p className={style.infoTitle}>이름</p>
                      <p className={style.infoContent}>User</p>
                    </div>

                    <div className={style.info}>
                      <p className={style.infoTitle}>전화번호</p>
                      <p className={style.infoContent}>010-0000-0000</p>
                    </div>

                    <div className={style.info}>
                      <p className={style.infoTitle}>주소</p>
                      <p className={style.infoContent}>서울 성동구 아차산로 17길 48 성수낙낙</p>
                    </div>
                  </div>

                </div>
            </div>
        </div>{ /* !-- oderer info end --> */ }
    
        <div className={style.calcleBtnBox}>
            <button className={style.cancleBtn}>주문 취소하기</button>
        </div>

    </div>
  )
}

export default OrderDetail;


/*
// 요소(element), input 혹은 상수
const ordersContainer = document.querySelector("#ordersContainer");
// const modal = document.querySelector("#modal");
// const modalBackground = document.querySelector("#modalBackground");
// const modalCloseButton = document.querySelector("#modalCloseButton");
const deleteCompleteButton = document.querySelector("#deleteCompleteButton");
const deleteCancelButton = document.querySelector("#deleteCancelButton");

checkLogin();
addAllElements();
addAllEvents();

// 요소 삽입 함수들을 묶어주어서 코드를 깔끔하게 하는 역할임.
function addAllElements() {
  createNavbar();
  insertOrders();
}

// 여러 개의 addEventListener들을 묶어주어서 코드를 깔끔하게 하는 역할임.
function addAllEvents() {
  //modalBackground.addEventListener("click", closeModal);
  //modalCloseButton.addEventListener("click", closeModal);
  document.addEventListener("keydown", keyDownCloseModal);
  deleteCompleteButton.addEventListener("click", deleteOrderData);
  deleteCancelButton.addEventListener("click", cancelDelete);
}

// 페이지 로드 시 실행, 삭제할 주문 id를 전역변수로 관리함
let orderIdToDelete;
async function insertOrders() {
  const orders = await Api.get("/api/orderlist/user");
  const imageUrl = await getImageUrl(imageKey);

  for (const order of orders) {
    const { _id, createdAt, summaryTitle, status } = order;
    const date = createdAt.split("T")[0];

    ordersContainer.insertAdjacentHTML(
      "beforeend",
      `
      <div className="order-product" id="order-${_id}">
            <figure className="product-img">
                <img id="image-${_id}" src="${imageUrl}"alt="product-image"/>
            </figure>

            <p className="product-name" >${summaryTitle}</p>
            <p className="count-number" id="quantityInput-${_id}">1</p>
            <p className="product-price" id="total-${_id}">${addCommas(quantity * price)}원</p>
        </div>
      `
    );

    const deleteButton = document.querySelector(`#deleteButton-${_id}`);

    // Modal 창 띄우고, 동시에, 전역변수에 해당 주문의 id 할당
    deleteButton.addEventListener("click", () => {
      orderIdToDelete = _id;
      openModal();
    });
  }
}

// db에서 주문정보 삭제
async function deleteOrderData(e) {
  e.preventDefault();

  try {
    await Api.delete("/api/orders", orderIdToDelete);

    // 삭제 성공
    alert("주문 정보가 삭제되었습니다.");

    // 삭제한 아이템 화면에서 지우기
    const deletedItem = document.querySelector(`#order-${orderIdToDelete}`);
    deletedItem.remove();

    // 전역변수 초기화
    orderIdToDelete = "";

    closeModal();
  } catch (err) {
    alert(`주문정보 삭제 과정에서 오류가 발생하였습니다: ${err}`);
  }
}

//Modal 창에서 아니오 클릭할 시, 전역 변수를 다시 초기화함.
function cancelDelete() {
  orderIdToDelete = "";
  closeModal();
}

// Modal 창 열기
function openModal() {
  modal.classNameList.add("is-active");
}

// Modal 창 닫기
function closeModal() {
  modal.classNameList.remove("is-active");
}

// 키보드로 Modal 창 닫기
function keyDownCloseModal(e) {
  // Esc 키
  if (e.keyCode === 27) {
    closeModal();
  }
}
*/
