import * as Api from "../api.js";
import React from "react"
import style from "./admin-users.module.css"

async function showUser(){
    try{
        const api = await Api.get('/api/users')
        const infoBox = document.querySelector('.orders-info')
        api.forEach(e=>{
            infoBox.innerHTML += `<div className="orders-info__row">
            <div className={style.ordersInfoColumn}>${e.createdAt?e.createdAt.split('T')[0] : ""}</div>
            <div className={style.ordersInfoColumn}>${e.email}</div>
            <div className={style.ordersInfoColumn}>${e.fullName}</div>
            <div className={style.ordersInfoColumn}>
            <select value="${e._id}" className="ordersInfoColumn member-select">
                <option value="관리자" ${e.role==='admin'?"selected":""} >관리자</option>
                <option value="일반 사용자" ${e.role!=='admin'?"selected":""}>일반 사용자</option>
            </select>
            </div>
            <div className={style.ordersInfoColumn}>
            <button type="button" className="member-deleteBtn" value="${e._id}">
                회원정보 삭제
            </button>
            </div>
        </div>`


        })
        const delBtns = document.querySelectorAll('.member-deleteBtn')
        const changeRoles = document.querySelectorAll('.ordersInfoColumn.member-select')
        delBtns.forEach(delBtn=>{
            delBtn.addEventListener('click',async ()=>{
                try{
                    await Api.delete(`/api/users`,delBtn.value)
                alert(`사용자가 삭제되었습니다.`)
                window.location.reload();
            }
                catch(err){
                    alert(`err: ${err}`)
                }
            })
            
        })
        
        changeRoles.forEach((select)=>{
            select.addEventListener('chage',()=>{
                try{
                    const statusValue = select.options[select.selectedIndex].text == '관리자'?'admin':"basic-user"
                    Api.patch("/api/users", select.value, {status:statusValue})
                }catch(err){
                    alert(`patch err: ${err}`)
                }
            })
        })
    }
    catch(err){
        alert(err.message)
    }

}

// showUser()

function AdminUser(){
    return(
        <section className={style.adminOrderManagement}>
      <div className={style.container}>
        <div className={style.title}>
          <h3 className={style.titleTxt}>회원관리</h3>
        </div>

        <div className={style.infoContainer}>
          <div className={style.orderTotal}>
            <div className={style.item}>
              <p className={style.itemTitle}>총 회원수</p>
              <p className={style.itemCount}>56</p>
            </div>
            <div className={style.item}>
              <p className={style.itemTitle}>관리자 수</p>
              <p className={style.itemCount}>4</p>
            </div>
          </div>

          <div className={style.ordersInfo}>
            <div className={`${style.ordersInfoRow} ${style.ordersInfoTitle}`}>
              <div className={style.ordersInfoColumn}><p>가입날짜</p></div>
              <div className={style.ordersInfoColumn}><p>이메일</p></div>
              <div className={style.ordersInfoColumn}><p>이름</p></div>
              <div className={style.ordersInfoColumn}><p>권한</p></div>
              <div className={style.ordersInfoColumn}><p>관리</p></div>
            </div>

            {/* 삭제할 것 */}
            <div className={style.ordersInfoRow}>
            <div className={style.ordersInfoColumn}>2022-11-23</div>
            <div className={style.ordersInfoColumn}>이메일@test.com</div>
            <div className={style.ordersInfoColumn}>울랄라</div>
            <div className={style.ordersInfoColumn}>
            <select className={`${style.ordersInfoColumn} ${style.memberSelect}}`}>
                <option value="관리자" >관리자</option>
                <option value="일반 사용자">일반 사용자</option>
            </select>
            </div>
            <div className={style.ordersInfoColumn}>
            <button type="button" className={style.memberDeleteBtn}>
                회원정보 삭제
            </button>
            </div>
        </div>
            {/* 삭제 */}



          </div>
        </div>
      </div>
    </section>
    )
}



export default AdminUser;