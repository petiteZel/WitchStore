import * as Api from "../../api.js";


async function callOrderApi(){
    const data = {
        orderId: '1',
        productId: '33',
        quantity: 2,
        totalPrice
    }
    Api.post('/api/orderitem',{})
    const orderApi = await Api.get("/api/orderitem/orderitemlist/all")
    orderApi.then(data=> console.log(data))

}