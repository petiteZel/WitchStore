import { checkLogin, createNavbar } from "../../useful-functions.js";
import * as Api from "../../api.js";

// 요소(element), input 혹은 상수
const securityTitle = document.querySelector("#securityTitle");
const fullNameInput = document.querySelector("#fullNameInput");
const emailInput = document.querySelector("#emailInput");
const postalCodeInput = document.querySelector("#postalCodeInput");
const address1Input = document.querySelector("#address1Input");
const phoneNumberInput = document.querySelector("#phoneNumberInput");
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
  userData = await Api.get("/api/user");
  console.log("get완료")

  // 객체 destructuring
  const { fullName, email, address, phoneNumber } = userData;

  // 서버에서 온 비밀번호는 해쉬 문자열인데, 이를 빈 문자열로 바꿈
  // 나중에 사용자가 비밀번호 변경을 위해 입력했는지 확인하기 위함임.
  // userData.password = "";

  //확인필요!
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
  postalCodeInput.setAttribute("disabled", "");
  searchAddressButton.setAttribute("disabled", "");
  address1Input.setAttribute("disabled", "");
  phoneNumberInput.setAttribute("disabled", "");
}


// db에 정보 저장
async function saveUserData(e) {
  e.preventDefault();

  const fullName = fullNameInput.value;;
  const postalCode = postalCodeInput.value;
  const address1 = address1Input.value;
  const phoneNumber = phoneNumberInput.value;


  const isPostalCodeChanged =
    postalCode !== (userData.address?.postalCode || "");
  const isAddress1Changed = address1 !== (userData.address?.address1 || "");
  const isAddressChanged = isPostalCodeChanged || isAddress1Changed;

//확인필요!
  // const data = { emailInput };
  const data = {};
  data['emailInput'] = emailInput.value;

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
    await Api.patch("/api/user", _id, data);

    alert("회원정보가 안전하게 저장되었습니다.");
    disableForm();
  } catch (err) {
    alert(`회원정보 저장 과정에서 오류가 발생하였습니다: ${err}`);
  }
}

