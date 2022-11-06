import { orderModel } from '../db';

class OrderService {
  constructor(orderModel) {
    this.orderModel = orderModel;
  }

  // 1. 주문 입력
  async putOrder(orderInfo) {
    const newOrderInfo = {
    // 1-1. 주문자
      orderer: {
        userId: orderInfo.ordererUserId,
      },
    // 1-2. 수령자 정보
      recipient: {
        fullName: orderInfo.recipientFullName,
        phoneNumber: orderInfo.recipientPhoneNumber,
        address: orderInfo.recipientAddress,
      },
    // 1-3. 주문 정보
      order: {
        orderList: orderInfo.orderList,
        request: orderInfo.orderRequest,
        status: orderInfo.orderStatus,
      },
    };
    // 1-4. db에 저장
    const createdNewOrder = await this.orderModel.create(newOrderInfo);
    return createdNewOrder;
  }

  // 2. 전체 주문 목록 조회
  async getAllOrders() {
    const orders = await this.orderModel.findAll();
    return orders;
  }

  // 3. 유저 id로 주문 정보 조회
  async getOrdersByUserId(userId) {
    const orders = await this.orderModel.findByUserId(userId);
    // 3-1. db에서 찾지 못한 경우, 에러 메시지 반환
    if (!orders) {
      throw new Error('해당 주문 정보가 없습니다. 유효한 User ID가 아닙니다.');
    }

    return orders;
  }

  // 4. 주문 번호로 주문 정보 조회
  async getOrdersByOrderId(orderId) {
    const orders = await this.orderModel.findByOrderId(orderId);
    // 4-1. db에서 찾지 못한 경우, 에러 메시지 반환
    if (!orders) {
      throw new Error(
        '해당 주문 정보가 없습니다. 유효한 주문 번호가 아닙니다.'
      );
    }
    return orders;
  }

  // 5. 주문 정보 수정
  async setOrderStatus(orderId, toUpdate) {
    let order = this.orderModel.findByOrderId(orderId);
    // 5-1. db에서 찾지 못한 경우, 에러 메시지 반환
    if (!order) {
      throw new Error('주문 내역이 없습니다. 주문 번호를 확인해 주세요.');
    }
    // 5-2. 업데이트 진행
    order = await this.orderModel.update({
      orderId,
      update: toUpdate,
    });
    return order;
  }

  // 6. 주문 정보 삭제 (주문 취소)
  async cancelOrder(orderId) {
    const order = await this.orderModel.findByOrderId(orderId);
    // 6-1. db에서 찾지 못한 경우, 에러 메시지 반환
    if (!order) {
      throw new Error(
        '해당 주문 정보가 없습니다. 유효한 주문 정보가 아닙니다.'
      );
    }
    const canceledOrder = await this.orderModel.delete(orderId);

    return canceledOrder;
  }
}

const orderService = new OrderService(orderModel);
export { orderService };
