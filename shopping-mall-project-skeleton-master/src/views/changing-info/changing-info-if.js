import { checkLogin, createNavbar } from "../../useful-functions.js";
import * as Api from "../../api.js";

// 요소(element), input 혹은 상수
const securityTitle = document.querySelector("#securityTitle");
const fullNameInput = document.querySelector("#fullNameInput");
const emailInput = document.querySelector("#emailInput");
// const passwordInput = document.querySelector("#passwordInput");
const postalCodeInput = document.querySelector("#postalCodeInput");
// const searchAddressButton = document.querySelector("#searchAddressButton");
const address1Input = document.querySelector("#address1Input");
// const address2Input = document.querySelector("#address2Input");
const phoneNumberInput = document.querySelector("#phoneNumberInput");
// const saveButton = document.querySelector("#submitButton");
// const modal = document.querySelector("#modal");
// const modalBackground = document.querySelector("#modalBackground");
// const modalCloseButton = document.querySelector("#modalCloseButton");
// const currentPasswordInput = document.querySelector("#currentPasswordInput");
const saveCompleteButton = document.querySelector("#saveCompleteButton");

checkLogin();
addAllElements();
addAllEvents();

// 요소 삽입 함수들을 묶어주어서 코드를 깔끔하게 하는 역할임.
function addAllElements() {
  createNavbar();
  insertUserData();
}

// 여러 개의 addEventListener들을 묶어주어서 코드를 깔끔하게 하는 역할임.
function addAllEvents() {
  // searchAddressButton.addEventListener("click", searchAddress);
  // saveButton.addEventListener("click", openModal);
  // modalBackground.addEventListener("click", closeModal);
  // modalCloseButton.addEventListener("click", closeModal);
  // document.addEventListener("keydown", keyDownCloseModal);
  saveCompleteButton.addEventListener("click", saveUserData);
}



// 페이지 로드 시 실행
// 나중에 사용자가 데이터를 변경했는지 확인하기 위해, 전역 변수로 userData 설정
let userData;
async function insertUserData() {
  //api/users/abc12345 로 요청 필요..?
  userData = await Api.get("/api/users");
  
  console.log("get완료")

  // 객체 destructuring
  const { fullName, email, address, phoneNumber } = userData;

  // 서버에서 온 비밀번호는 해쉬 문자열인데, 이를 빈 문자열로 바꿈
  // 나중에 사용자가 비밀번호 변경을 위해 입력했는지 확인하기 위함임.
  // userData.password = "";

  // securityTitle.innerText = `회원정보 관리 (${email})`;
  emailInput.value = email;
  fullNameInput.value = fullName;


  if (address) {
    const { postalCode, address1} = address;

    postalCodeInput.value = postalCode;
    address1Input.value = address1;
  } else {
    // 나중에 입력 여부를 확인하기 위해 설정함
    userData.address = { postalCode: "", address1: "" };
  }

  if (phoneNumber) {
    phoneNumberInput.value = phoneNumber;
  }

  // 크롬 자동완성 삭제함.
  // passwordInput.value = "";

  // 기본적으로 disabled 상태로 만듦
  // disableForm();
}

function disableForm() {
  fullNameInput.setAttribute("disabled", "");
  // fullNameToggle.checked = false;
  // passwordInput.setAttribute("disabled", "");
  // // passwordToggle.checked = false;
  // passwordConfirmInput.setAttribute("disabled", "");
  postalCodeInput.setAttribute("disabled", "");
  // addressToggle.checked = false;
  searchAddressButton.setAttribute("disabled", "");
  address1Input.setAttribute("disabled", "");
  // address2Input.setAttribute("disabled", "");
  // phoneNumberToggle.checked = false;
  phoneNumberInput.setAttribute("disabled", "");
}

// Daum 주소 API (사용 설명 https://postcode.map.daum.net/guide)
// function searchAddress(e) {
//   e.preventDefault();

//   new daum.Postcode({
//     oncomplete: function (data) {
//       let addr = "";
//       let extraAddr = "";

//       if (data.userSelectedType === "R") {
//         addr = data.roadAddress;
//       } else {
//         addr = data.jibunAddress;
//       }

//       if (data.userSelectedType === "R") {
//         if (data.bname !== "" && /[동|로|가]$/g.test(data.bname)) {
//           extraAddr += data.bname;
//         }
//         if (data.buildingName !== "" && data.apartment === "Y") {
//           extraAddr +=
//             extraAddr !== "" ? ", " + data.buildingName : data.buildingName;
//         }
//         if (extraAddr !== "") {
//           extraAddr = " (" + extraAddr + ")";
//         }
//       } else {
//       }

//       postalCodeInput.value = data.zonecode;
//       address1Input.value = `${addr} ${extraAddr}`;
//       address2Input.placeholder = "상세 주소를 입력해 주세요.";
//       address2Input.focus();
//     },
//   }).open();
// }

// db에 정보 저장
async function saveUserData(e) {
  e.preventDefault();

  const fullName = fullNameInput.value;
  // const password = passwordInput.value;
  // const passwordConfirm = passwordConfirmInput.value;
  const postalCode = postalCodeInput.value;
  const address1 = address1Input.value;
  // const address2 = address2Input.value;
  const phoneNumber = phoneNumberInput.value;
  // const currentPassword = currentPasswordInput.value;

  // const isPasswordLong = password.length >= 4;
  // const isPasswordSame = password === passwordConfirm;
  const isPostalCodeChanged =
    postalCode !== (userData.address?.postalCode || "");
  const isAddress1Changed = address1 !== (userData.address?.address1 || "");
  const isAddressChanged = isPostalCodeChanged || isAddress1Changed;

  // // 비밀번호를 새로 작성한 경우
  // if (password && !isPasswordLong) {
  //   closeModal();
  //   return alert("비밀번호는 4글자 이상이어야 합니다.");
  // }
  // if (password && !isPasswordSame) {
  //   closeModal();
  //   return alert("비밀번호와 비밀번호확인이 일치하지 않습니다.");
  // }

  const data = { emailInput};

  // 초기값과 다를 경우 api 요청에 사용할 data 객체에 넣어줌
  if (fullName !== userData.fullName) {
    data.fullName = fullName;
  }


  // 주소를 변경했는데, 덜 입력한 경우
  if (isAddressChanged && !address1) {
    return alert("주소를 모두 입력해 주세요.");
  }

  if (isAddressChanged) {
    data.address = {
      postalCode,
      address1,
    };
  }

  if (phoneNumber && phoneNumber !== userData.phoneNumber) {
    data.phoneNumber = phoneNumber;
  }

  // 만약 업데이트할 것이 없다면 (디폴트인 currentPassword만 있어서 1개라면), 종료함
  const toUpdate = Object.keys(data);
  if (toUpdate.length === 1) {
    disableForm();
    return alert("업데이트된 정보가 없습니다");
  }

  try {
    const { _id } = userData;
    // db에 수정된 정보 저장
    await Api.patch("/api/users", _id, data);

    alert("회원정보가 안전하게 저장되었습니다.");
    disableForm();
  } catch (err) {
    alert(`회원정보 저장 과정에서 오류가 발생하였습니다: ${err}`);
  }
}

// // Modal 창 열기
// function openModal(e) {
//   e.preventDefault();

//   modal.classList.add("is-active");
//   currentPasswordInput.focus();
// }

// // Modal 창 닫기
// function closeModal(e) {
//   if (e) {
//     e.preventDefault();
//   }

//   modal.classList.remove("is-active");
// }

// // 키보드로 Modal 창 닫기
// function keyDownCloseModal(e) {
//   // Esc 키
//   if (e.keyCode === 27) {
//     closeModal();
//   }
// }
