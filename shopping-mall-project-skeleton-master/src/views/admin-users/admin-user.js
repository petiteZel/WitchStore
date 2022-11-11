import * as Api from "../../api.js";

async function showUser(){
    const api = await Api.get('/api/users')
    const infoBox = document.querySelector('.orders-info')
    let count = 0
    api.forEach(e=>{
        count+=1
        infoBox.innerHTML += `<div class="orders-info__row">
        <div class="orders-info__column">${e.createdAt.split('T')[0]}</div>
        <div class="orders-info__column">${e.email}</div>
        <div class="orders-info__column">${e.fullName}</div>
        <div class="orders-info__column">
          <select id="" class="orders-info__column member-select">
            <option value="관리자" ${e.role==='admin'?"selected":""} >관리자</option>
            <option value="일반 사용자" ${e.role!=='admin'?"selected":""}>일반 사용자</option>
          </select>
        </div>
        <div class="orders-info__column">
          <button type="button" class="member-delete__btn" id="memeber-del-btn-${count}">
            회원정보 삭제
          </button>
        </div>
      </div>`
      
      const delBtns = document.querySelectorAll(`#memeber-del-btn-${count}`)
    })

}

showUser()

// createdAt
// : 
// "2022-11-11T08:18:20.318Z"
// email
// : 
// "god@gmail.com"
// fullName
// : 
// "iAmAdmin"
// password
// : 
// "$2b$10$4J7fJrAsqRMesJEqahArEuNux8VFXXvGiOscuCM/auhCGkqicFH.O"
// role
// : 
// "admin"
// updatedAt
// : 
// "2022-11-11T08:18:20.318Z"