import { model } from 'mongoose';
import { OrderSchema } from '../schemas/order-schema';

const Order = model('order', OrderSchema);

export class OrderModel {
  // 주문 정보
  async create(orderInfo) {
    const createdNewOrder = await Order.create(orderInfo);
    return createdNewOrder;
  }

  // 주문 관리용 - 관리자
  // 1. 전제 주문 목록 조회
  async findAll() {
    const orders = await Order.find({});
    return orders;
  }
  // 2. 유저 id로 주문 정보 조회
  async findByUserId(userId) {
    const orders = await Order.find({ orderer: { userId: userId } });
    return orders;
  }

  // 3. 주문 번호로 주문 정보 조회
  async findByOrderId(orderId) {
    const orders = await Order.findOne({ _id: orderId });
    // orders 안에서 꺼내서 가공해서 사용한다
    return orders;
  }

  // 4. 주문 정보 수정
  async update({ orderId, update }) {
    const filter = { _id: orderId };
    const option = { returnOriginal: false };

    const updatedOrder = await Order.findOneAndUpdate(filter, update, option);
    return updatedOrder;
  }

  // 5. 주문 정보 삭제
  async delete(orderId) {
    const orders = await Order.findOneAndDelete({ _id: orderId });
    // 삭제한 주문의 주문 정보를 리턴함
    return orders;
  }
}

const orderModel = new OrderModel();

export { orderModel };