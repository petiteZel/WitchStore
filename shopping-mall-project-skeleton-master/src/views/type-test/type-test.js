import * as Api from "../api.js";
// import { validateEmail } from "/useful-functions.js";

// 요소(element), input 혹은 상수
const resultTitle= document.querySelector("#result-title");
const resultAnswer = document.querySelector("#result-answer");
const resultPage =document.querySelector('#result-page');
const showResultBtn=document.querySelector('#show-result-btn');
const tryAginBtn=document.querySelector('#try-again-btn');
const itemBox=document.querySelectorAll('.r-item-box')


refresh();
doDisplay();

//결과 페이지 보이게
function doDisplay(countClick){ 	
    console.log(countClick)
    showResultBtn.addEventListener("click", async()=> {
        if(countClick<6){
            alert('선택지를 모두 완료해주세요');
            resultPage.style.display = 'none'; 	
        }else{
            if(resultPage.style.display=='none' || resultPage.style.display ===""){ 		
                resultPage.style.display = 'block'; 	
            }else{ 		
                resultPage.style.display = 'none'; 	
            } 
        }
        
        // //결과보기 클릭 후 스크롤 이동
        // var location = document.querySelector("#result-page").offsetTop;
        var location = window.scrollY
        window.scrollTo({ top: location+400, behavior: "smooth" });
        console.log("move");

    });


}

//초기화 할 때 스크롤 맨 위로
async function refresh(){
    window.onbeforeunload = function() {
        window.scrollTo(0, 0);
    }
}




function calType() {
    const select = document.querySelectorAll('.box');
    let firstCount = 0;
    let secondCount = 0;
    var location2 = 0;
    let countClick = 0;
    for(let i = 0; i<select.length;i++){
        const e = select[i]
        e.addEventListener('click', ()=>{
            const resultValue = e.value;
            const [ type, category ] = resultValue.split("_");
            //클릭했을 때 
            e.classList.add("select");

            //스크롤이동
            location2 += 500;
            window.scrollTo({ top: location2, behavior: "smooth" });

            //count
            countClick++;
            console.log(countClick);

            
            e.disabled = true;
            if(type == "A") {
                e.nextElementSibling.disabled = true;

                if(category == 1){
                    firstCount += 1;
                }else{
                    secondCount +=1;
                }
                calScore(firstCount, secondCount)
            }else{
                calScore(firstCount, secondCount)
                e.previousSibling.disabled = true;
            }
            
        })
    }
    console.log(countClick)
    return countClick
    
    
}
doDisplay(calType())
// calType()



async function calScore(firstCount, secondCount){
    let typeId = 0;

    if(firstCount >= 2){
        if(secondCount >= 2){
            typeId = 1;
        }else{
            typeId = 2;
        }
        
    }else{
        if(secondCount >= 2){
            typeId = 3;
        }else{
            typeId = 4;
        }
    }

    setInnerHTML(typeId)
}


// //결과값 바꾸기
async function setInnerHTML(typeId)  {
    const title = document.getElementById('result-title');
    const answer = document.getElementById('result-answer');
    const item = document.getElementById('item-title');
    const products = await Api.get('/api/product');
    const resultArray = 
    [ {title: `<h1>당신은 아이돌 타입!</h1>`, answer: `<h3>타고난 밝음과 상냥함으로 상대에게 활력을 불어넣는 아이돌 타입이라고 할 수 있습니다. 우울할 때일수록 기분을 빨리 전환하고 싶은 경향이 강해,친구에게 상담하거나 다른 일을 함으로써 리프레쉬하려고 하는 경우가 많습니다. 아이돌 타입은 상대를 기쁘게 하는 것에 보람을 느끼기 때문에,우울할 때일수록 사람들과의 교류가 필요합니다.</h3>`, item:`<h2>아이돌 타입인 당신에게 필요한 아이템!</h2>`},
        {title: `<h1>당신은 찐우정 타입!</h1>`, answer:   `<h3>자신보다 타인을 우선시하고, 곤란한 사람 특히 주변 사람이 곤란할 때에는 모든 걸 제처 두고 달려가는 타입입니다.기본적으로 부탁을 잘 거절하지 못하고 상대방이 힘들어 하면 적극적으로 격려하거나 지키려고 하는데요. 자신이 좋아서 하는 일이지만 감사의 인사나 확실한 피드백을 받으면 아주 기뻐합니다. 이런 타입은 남들 걱정하느라 자신은 우울함에 빠져있을 틈이 없습니다.</h3>`, item:`<h2>찐우정 타입인 당신에게 필요한 아이템!</h2>`},
        {title:  `<h1>당신은 컨설팅 타입!</h1>`, answer:  `<h3>정확한 조언과 차분한 포용력이 매력적인 타입으로 언제나 냉정을 유지하고 침착한 상태로 트러블이나 문제해결에 강하기 때문에 주위로부터 의지하는 일이 많습니다. 우울해하고 있는 사람을 봐도 감정적으로만 다가가지 않고, 어떻게 하면 해결할 수 있을까를 함께 생각하려고 하는 경향이 있습니다. 본인이 우울할 때에도 그 이유에 대해서 파고듭니다.</h3>`, item:`<h2>컨설팅 타입인 당신에게 필요한 아이템!</h2>`},
        {title: `<h1>당신은 오아시스 타입!</h1>`, answer:  `<h3>조용하고 부드럽지만 어딘가 무게감이 있어 함께 있는 것만으로도 안정을 주는 타입입니다. 이 유형은 상대를 적극적으로 돌보려고는 하지 않지만, 상대의 마음이 돌아올 때까지 옆에서 지켜봐 줍니다. 즉, 매우 상냥하고 상대의 의사를 존중하는 매력을 가지고 있죠. 이런 타입이 우울함에 빠졌을 때에는 동굴을 파고 들어가는 경향이 강합니다.</h3>` , item:`<h2>오아시스 타입인 당신에게 필요한 아이템!</h2>`}, 
    ]
    
    //if 카테고리1 a2개 이상, 카테고리2 a2개 이상
    title.innerHTML = resultArray[typeId-1].title; 
    answer.innerHTML = resultArray[typeId-1].answer;
    item.innerHTML = resultArray[typeId-1].item;
    
    //물품추천
    const typeProduct = products.filter((e)=>{
       return e.personType == `${typeId}유형`;
    })

    for (let i = 0; i<3 ; i++){
        itemBox[i].innerHTML = `<div class="item-img"><img src="${typeProduct[i].image}" 
        alt="추천상품"></img></div>`
    }



    //출처 : https://post.naver.com/viewer/postView.naver?volumeNo=34267779&memberNo=8164145
}







