import { addImageToS3, getImageUrl } from "../awsS3.js"
import * as Api from "../api.js"


async function rending(){
    const api = await Api.get('/api/category/categories')
    const categoryBox = document.querySelector('#content-category')
    api.forEach(e=>{
        categoryBox.innerHTML += `<option value="${e.categoryName}">${e.categoryName}</option>`
    })
}
rending()

async function addCategory(){
    const submitBtn = document.querySelector('.submit-button');
    submitBtn.addEventListener('click',(e)=>submitInfo(e))
}

async function changeImageName(){
    const uploading = document.querySelector('#uploading')
    uploading.addEventListener('change', imageUpload);
    
}
async function imageUpload() {
    const file = uploading.files[0];
    const fileName = document.querySelector('.upload-content')
    if (file) {
      fileName.innerHTML = file.name;
    }
  }
  
  async function submitInfo(e){
    await e.preventDefault();
    const productName = document.querySelector('#content-productName').value
    const category = document.querySelector('#content-category').value
    const type = document.querySelector('#content-type').value
    const brandName = document.querySelector('#content-brandName').value
    const description = document.querySelector('#content-description').value
    const uploading = document.querySelector('#uploading')
    const shortDescription = document.querySelector('#content-shortDescription').value
    const price = document.querySelector('#content-price').value
    const image = uploading.files[0]
    
    try {
        const imageKey = await addImageToS3(uploading, category)
        const imageUrl = await getImageUrl(imageKey)
        
        const data = {
            category:category,
            personType: type,
            brand:brandName,
            productName:productName,
            image:imageUrl,
            price:price,
            shortDescription: shortDescription,
            detailDescription:description,
        }
        await Api.post('/api/product/register',data)
        console.log(data)
        
        alert(`정상적으로 ${productName}이 등록되었습니다.`)
    }catch (err) {
        console.log(err.stack);
        
        alert(`문제가 발생하였습니다. 확인 후 다시 시도해 주세요: ${err.message}`)
    }

}

changeImageName()
changeImageName();
addCategory()
