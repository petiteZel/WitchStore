import * as Api from "../../api.js";

async function showUser(){
    try{
        const api = await Api.get('/api/users')
        const infoBox = document.querySelector('.orders-info')
        api.forEach(e=>{
            infoBox.innerHTML += `<div class="orders-info__row">
            <div class="orders-info__column">${e.createdAt?e.createdAt.split('T')[0] : ""}</div>
            <div class="orders-info__column">${e.email}</div>
            <div class="orders-info__column">${e.fullName}</div>
            <div class="orders-info__column">
            <select value="${e._id}" class="orders-info__column member-select">
                <option value="관리자" ${e.role==='admin'?"selected":""} >관리자</option>
                <option value="일반 사용자" ${e.role!=='admin'?"selected":""}>일반 사용자</option>
            </select>
            </div>
            <div class="orders-info__column">
            <button type="button" class="member-delete__btn" value="${e._id}">
                회원정보 삭제
            </button>
            </div>
        </div>`


        })
        const delBtns = document.querySelectorAll('.member-delete__btn')
        const changeRoles = document.querySelectorAll('.orders-info__column.member-select')
        delBtns.forEach(delBtn=>{
            delBtn.addEventListener('click',async ()=>{
                try{
                    await Api.delete(`/api/users`,delBtn.value)
                alert(`사용자가 삭제되었습니다.`)
                location.reload();
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

showUser()