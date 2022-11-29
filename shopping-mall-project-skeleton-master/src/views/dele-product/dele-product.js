import * as Api from "../../api.js";

async function showUser(){
    try{
        const api = await Api.get('/api/product')
        console.log(api)
        const infoBox = document.querySelector('.orders-info')
        let count = 0
        api.forEach(e=>{
            count+=1
            infoBox.innerHTML += `<div class="orders-info__row">
            <div class="orders-info__column">${count}</div>
            <div class="orders-info__column">${e.category}</div>
            <div class="orders-info__column">${e.personType}</div>
            <div class="orders-info__column">${e.productName}</div>
            <div class="orders-info__column">
            <button type="button" class="member-delete__btn" value="${e._id}">
                상품 삭제
            </button>
            </div>
        </div>`


        })
        const totalCoulnt = document.querySelector('#item_total_count')
        totalCoulnt.innerHTML=api.length
        const delBtns = document.querySelectorAll('.member-delete__btn')
        console.log(delBtns)
        delBtns.forEach(delBtn=>{
            delBtn.addEventListener('click',async ()=>{
                try{
                    await Api.delete(`/api/product`,delBtn.value)
                    alert(`상품이 삭제되었습니다.`)
                    location.reload();
                }
                catch(err){
                    alert(`err: ${err}`)
                }
            })
            
        })
    }
    catch(err){
        alert(err.message)
    }

}

showUser()