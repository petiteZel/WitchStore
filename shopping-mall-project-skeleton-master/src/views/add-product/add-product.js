import * as Api from "../api.js"

async function addCategory(){
    const submitBtn = document.querySelector('.submit-button');
    submitBtn.addEventListener('click',(e)=>submitInfo(e))


    // submitBtn.addEventListener('click',async (e)=>{
    //     e.preventDefault()
    //     const categoryName = document.querySelector('.info-content').value;
    //     const data = {categoryName: categoryName, imageUrl:''}

    
    
    
    //     console.log(data)
    // })
}


// products validation failed: 
// image: Cast to string failed for value "{}" (type Object) at path "image",
// personType: Path `personType` is required.,
// brand: Path `brand` is required.,
// productName: Path `productName` is required.,
// shortDescription: Path `shortDescription` is required.,
// detailDescription: Path `detailDescription` is required.

// "category":"인형","personType":"1유형","brand":"WitchA","productName":"재인 인형","image":"http://img.com","price":10000,"shortDescription":"재인의 외형을 본뜬 인형","detailDescription":"엄청난 효과!"

async function submitInfo(e){
    await e.preventDefault();
    const productName = document.querySelector('#content-productName').value
    const category = document.querySelector('#content-category').value
    const type = document.querySelector('#content-type').value
    const brandName = document.querySelector('#content-brandName').value
    const description = document.querySelector('#content-description').value
    const uploading = document.querySelector('#uploading').files[0]
    const shortDescription = document.querySelector('#content-shortDescription').value
    const price = document.querySelector('#content-price').value

    const data = {
        category:category,
        personType: type,
        brand:brandName,
        productName:productName,
        image:`${uploading}`,
        price:price,
        shortDescription: shortDescription,
        detailDescription:description,
    }
    
    const productApi = await Api.post('/api/product/register',data)
    return productApi

}
addCategory()