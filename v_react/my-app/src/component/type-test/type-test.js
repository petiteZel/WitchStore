// import * as Api from "/api.js";
// import { validateEmail } from "/useful-functions.js";
import React from "react";
import style from "./type-test.module.css"
import { useState } from 'react';

import gameImgRoot from "../image/video_game.png"
import newImgRoot from "../image/newspaper.png"
import womanImgRoot from "../image/woman-bowing.png"
import palmingImgRoot from "../image/man-facepalming.png"
import pilotImgRoot from "../image/pilot.png"
import mapImgRoot from "../image/world-map.png"
import pleadingImgRoot from "../image/pleading-face.png"
import zipperImgRoot from "../image/zipper-mouth-face.png"
import handsImgRoot from "../image/woman-and-man-holding-hands.png"
import heartsImgRoot from "../image/smiling-face-with-hearts.png"
import earImgRoot from "../image/ear.png"
import bubbleImgRoot from "../image/right-anger-bubble.png"
import moonImgRoot from '../image/moon.png'



function Type() {
  const [Style2,setStyle] = useState({display: 'none'})
  //https://stackoverflow.com/questions/24502898/show-or-hide-element-in-react
  const [ addStyle, setAddStyle ] = useState("")
  
  
  const handleClick = (e)=>{
    const btnVal = e.currentTarget.value
    const [ type, category ] = btnVal.split("_")
    e.currentTarget.classList.add = style.select;
    e.currentTarget.disabled=true;
    e.currentTarget.nextSibling.disabled = true;
  }

    return(
  <main id={style.loginArea}>
      {/* <!-- 배경 별 --> */}
    <div className={style.backgroundImage}>

    {/* <!-- 심리테스트 질문 --> */}
    <div className={style.questionTitle}>
      <div className={`${style.icon} ${style.moonImg}`}> 
        <img id={style.moonImg} src={moonImgRoot} />
      </div>
      <h2>나에게 필요한 위로는?</h2>
    </div>


  <div className={style.mainPage} id={style.mainPage}>
      {/* <!-- 첫번째 질문, 카테고리1 --> */}
    <div className={`${style.questionBox} ${style.firstTuestion}`}>
      <div className={style.question}>
        <h2>Q1. 좋아하는 TV 프로그램은?</h2>
      </div>
      
  
      <div className={style.selectBox}>
        <button className={`${style.box} ${style.selectAbox} ${addStyle}`} value="A_1" onClick={handleClick}>
          <div className={style.selectA}>
            <div className={style.icon}> 
              <img id={style.gameImg} src={gameImgRoot} />
            </div>
            <p>예능, 오락</p>
          </div>
        </button>
    
        <button className={`${style.box} ${style.selectBbox}`} value="B_1" onClick={handleClick}>
            <div className={style.selectB}>
                <div className={style.icon}>
                  <img id={style.newsImg} src={newImgRoot} />
                </div>
                <p>뉴스, 시사, 퀴즈</p>
              </div>
            </button>
      </div>
    </div>

       {/* <!-- 두번째 질문 --> */}
       <div className={`${style.questionBox} ${style.secondQuestion}`}>
        <div className={style.question}>
          <h2>Q2. 다투고 난 뒤 화해하는 방법은?</h2>
        </div>
        
    
        <div className={style.selectBox}>
          <button className={`${style.box} ${style.selectAbox}`} value="A_1">
            <div className={style.selectA}>
              <div className={style.icon}> 
                <img id={style.bowingImg} src={womanImgRoot} />
              </div>
              <p>바로 사과하고 화해한다</p>
            </div>
          </button>
      
          <button className={`${style.box} ${style.selectBbox}`} value="B_1">
              <div className={style.selectB}>
                  <div className={style.icon}>
                    <img id={style.facepalmingImg} src={palmingImgRoot} />
                  </div>
                  <p>진정한 뒤 다시 이야기한다</p>
                </div>
              </button>
        </div>
      </div>

           {/* <!-- 세번째 질문 --> */}
           <div className={`${style.questionBox} ${style.thirdQuestion}`}>
            <div className={style.question}>
              <h2>Q3. 지하철에서 길을 헤맬 때 가장 먼저 찾게 되는 것은?</h2>
            </div>
            
        
            <div className={style.selectBox}>
              <button className={`${style.box} ${style.selectAbox}`} value="A_1">
                <div className={style.selectA}>
                  <div className={style.icon}> 
                    <img id={style.pilotImg} src={pilotImgRoot} />
                  </div>
                  <p>역무원</p>
                </div>
              </button>
          
              <button className={`${style.box} ${style.selectBbox}`} value="B_1">
                  <div className={style.selectB}>
                      <div className={style.icon}>
                        <img id={style.mapImg} src={mapImgRoot} />
                      </div>
                      <p>구내지도 또는 안내표지</p>
                    </div>
                  </button>
            </div>
          </div>

          {/* <!-- 네번째 질문 , 카테고리2--> */}
          <div className={`${style.questionBox} ${style.fourthQuestion}`}>
            <div className={style.question}>
              <h2>Q4. 상대에게 받고 싶은 위로는?</h2>
            </div>
            
        
            <div className={style.selectBox}>
              <button className={`${style.box} ${style.selectAbox}`} value="A_2">
                <div className={style.selectA}>
                  <div className={style.icon}> 
                    <img id={style.pleadingImg} src={pleadingImgRoot} />
                  </div>
                  <p>"무슨 일 있었어?"라고 신경써서 말 걸어주기</p>
                </div>
              </button>
          
              <button className={`${style.box} ${style.selectBbox}`} value="B_2">
                  <div className={style.selectB}>
                      <div className={style.icon}>
                        <img id={style.zipper_img} src={zipperImgRoot} />
                      </div>
                      <p>내 기분이 나아질때까지 조용히 기다려주기</p>
                    </div>
                  </button>
            </div>
          </div>

          {/* <!-- 다섯번째 질문 --> */}
          <div className={`${style.questionBox} ${style.fifthQuestion}`}>
            <div className={style.question}>
              <h2>Q5. 데이트 계획을 세울 때 당신은?</h2>
            </div>
            
        
            <div className={style.selectBox}>
              <button className={`${style.box} ${style.selectAbox}`} value="A_2">
                <div className={style.selectA}>
                  <div className={style.icon}> 
                    <img id={style.holdingImg} src={handsImgRoot} />
                  </div>
                  <p>가능하다면 상대방에게 맞추려고 한다</p>
                </div>
              </button>
          
              <button className={`${style.box} ${style.selectBbox}`} value="B_2">
                  <div className={style.selectB}>
                      <div className={style.icon}>
                        <img id={style.smileImg} src={heartsImgRoot} />
                      </div>
                      <p>나 스스로가 즐거워야 같이 즐거울 수 있다고 생각한다</p>
                    </div>
                  </button>
            </div>
          </div>

          {/* <!-- 여섯번째 질문 --> */}
          <div className={`${style.questionBox} ${style.sixthQuestion}`}>
            <div className={style.question}>
              <h2>Q6. 대화를 할 때의 당신은?</h2>
            </div>
            
        
            <div className={style.selectBox}>
              <button className={`${style.box} ${style.selectAbox}`} value="A_2">
                <div className={style.selectA}>
                  <div className={style.icon}> 
                    <img id={style.ear_img} src={earImgRoot} />
                  </div>
                  <p>주로 상대방의 이야기를 듣는 역할</p>
                </div>
              </button>
          
              <button className={`${style.box} ${style.selectBbox}`} value="B_2">
                  <div className={style.selectB}>
                      <div className={style.icon}>
                        <img id={style.bubble_img} src={bubbleImgRoot} />
                      </div>
                      <p>적극적으로 말하는 스타일</p>
                    </div>
                  </button>
            </div>
          </div>

          <div className={style.showResultBox} id={style.showResultBox}>
            <button className={style.showResultBtn} id={style.showResultBtn}
            onClick={e => {
              setStyle({display:'block'})
            }}
            >
              결과 보기
            </button>
          </div>


    </div>
   
    <div className={style.resultPage} id={style.resultPage} style={Style2}>

      <div className={style.resultTitle} id={style.resultTitle}>
        <h1></h1>
      </div>

    <div className={style.resultAnswer} id={style.resultAnswer}>
      <h3></h3> 
    </div>
    

    <div className={style.resultTeletTox}>
      {/* <button className={`${style.resultBox} ${style.tryAgainBtn}`} id={style.tryAgainBtn} onClick={window.location.reload()}> */}
      <button className={`${style.resultBox} ${style.tryAgainBtn}`} id={style.tryAgainBtn} onClick={()=>window.location.reload()}>
        테스트 다시 하기
      </button>
  
      {/* <button className={`${style.resultBox} ${style.shoppingBtn}`} id={style.shoppingBtn}  onclick={window.location.href='/productTist/product.html'}> */}
      <button className={`${style.resultBox} ${style.shoppingBtn}`} id={style.shoppingBtn} onClick={()=>window.location.href='/product-list'}>
        다른 제품 보러가기
        </button>

    </div>


    </div>
    
   

   </div>
 </main>

    )
}



// //요소(element), input 혹은 상수
// const resultTitle= document.querySelector("#resultTitle");
// const resultAnswer = document.querySelector("#resultAnswer");
// const resultPage =document.querySelector('#resultAge');
// const showResultBtn=document.querySelector('#showResultBtn');




// // calType();
// doDisplay();

// //결과 페이지 보이게
// async function doDisplay(){ 	

//     showResultBtn.addEventListener("click", ()=> {
//         if(resultPage.style.display=='none'){ 		
//             resultPage.style.display = 'block'; 	
//         }else{ 		
//             resultPage.style.display = 'none'; 	
//         } 
//     });

   
// }

// function calType() {
//     const select = document.querySelectorAll('.box');
//     let firstCount = 0;
//     let secondCount = 0;
    
//     select.forEach(async (e)=>{
//         e.addEventListener('click', ()=>{
//             const resultValue = e.value;
//             const [ type, category ] = resultValue.split("_");
//             //클릭했을 때 
//             e.classList.add("select");
            
//             e.disabled = true;
//             if(type == "A") {
//                 e.nextSibling.disabled = true;
//                 if(category == 1){
//                     firstCount += 1;
//                     // console.log(firstCount + "first");
//                 }else{
//                     secondCount +=1;
//                     // console.log(secondCount);
//                 }
//                 calScore(firstCount, secondCount)
//             }else{
//                 calScore(firstCount, secondCount)
//                 e.previousSibling.disabled = true;
//             }
            
//         })
        
//     })
    
// }
// calType()



// async function calScore(firstCount, secondCount){
//     let typeId = 0;
//     // console.log(firstCount + "계산중1");
//     // console.log(secondCount + "계산중2");
//     if(firstCount >= 2){
//         if(secondCount >= 2){
//             typeId = 1;
//         }else{
//             typeId = 2;
//         }
        
//     }else{
//         if(secondCount >= 2){
//             typeId = 3;
//         }else{
//             typeId = 4;
//         }
//     }
//     // console.log(typeId +"typeID");
//     // return typeId;
//     setInnerHTML(typeId)
// }


// // //결과값 바꾸기
// async function setInnerHTML(typeId)  {
//     const title = document.getElementById('resultTitle');
//     const answer = document.getElementById('resultAnswer');
//     const resultArray = 
//     [ {title: `<h1>당신은 아이돌 타입!</h1>`, answer: `<h3>타고난 밝음과 상냥함으로 상대에게 활력을 불어넣는 아이돌 타입이라고 할 수 있습니다. 우울할 때일수록 기분을 빨리 전환하고 싶은 경향이 강해,친구에게 상담하거나 다른 일을 함으로써 리프레쉬하려고 하는 경우가 많습니다. 아이돌 타입은 상대를 기쁘게 하는 것에 보람을 느끼기 때문에,우울할 때일수록 사람들과의 교류가 필요합니다.</h3>`},
//         {title: `<h1>당신은 찐우정 타입!</h1>`, answer:   `<h3>자신보다 타인을 우선시하고, 곤란한 사람 특히 주변 사람이 곤란할 때에는 모든 걸 제처 두고 달려가는 타입입니다.기본적으로 부탁을 잘 거절하지 못하고 상대방이 힘들어 하면 적극적으로 격려하거나 지키려고 하는데요. 자신이 좋아서 하는 일이지만 감사의 인사나 확실한 피드백을 받으면 아주 기뻐합니다. 이런 타입은 남들 걱정하느라 자신은 우울함에 빠져있을 틈이 없습니다.</h3>`},
//         {title:  `<h1>당신은 컨설팅 타입!</h1>`, answer:  `<h3>정확한 조언과 차분한 포용력이 매력적인 타입으로 언제나 냉정을 유지하고 침착한 상태로 트러블이나 문제해결에 강하기 때문에 주위로부터 의지하는 일이 많습니다. 우울해하고 있는 사람을 봐도 감정적으로만 다가가지 않고, 어떻게 하면 해결할 수 있을까를 함께 생각하려고 하는 경향이 있습니다. 본인이 우울할 때에도 그 이유에 대해서 파고듭니다.</h3>`},
//         {title: `<h1>당신은 오아시스 타입!</h1>`, answer:  `<h3>조용하고 부드럽지만 어딘가 무게감이 있어 함께 있는 것만으로도 안정을 주는 타입입니다. 이 유형은 상대를 적극적으로 돌보려고는 하지 않지만, 상대의 마음이 돌아올 때까지 옆에서 지켜봐 줍니다. 즉, 매우 상냥하고 상대의 의사를 존중하는 매력을 가지고 있죠. 이런 타입이 우울함에 빠졌을 때에는 동굴을 파고 들어가는 경향이 강합니다.</h3>` }, 
//     ]
    
//     //if 카테고리1 a2개 이상, 카테고리2 a2개 이상
//     title.innerHTML = resultArray[typeId-1].title;
    
    
//     answer.innerHTML = resultArray[typeId-1].answer;
    
    
//     //출처 : https://post.naver.com/viewer/postView.naver?volumeNo=34267779&memberNo=8164145
// }

// // calType()
// //     .then((firstCount,secondCount)=>calScore(firstCount,secondCount))
// //     .then(typeId => setInnerHTML(typeId))

export default Type;

