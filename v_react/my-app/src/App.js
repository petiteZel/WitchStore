import './App.css';
import { BrowserRouter,Routes, Route, Link,Switch } from "react-router-dom";
import Home from './component/home/home';
import Type from './component/type-test/type-test';
import Header from './component/header/header';
import ProductList from './component/product-list/product-list';
import ProductDetail from './component/product-detail/product-detail';
import FinishShopping from './component/finish-shopping/finish-shopping';
import Cart from './component/cart/cart';
import Order from './component/order/order';
import OrderDetail from './component/order-detail/order-detail';
import AdminOrderManagement from './component/admin-order-management/admin-order-management';
import AdminOrderCheck from './component/admin-order-check/admin-order-check';

function App() {
  return(
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/type-test" element={<Type />} />
        <Route path="/product-list" element={<ProductList />} />
        <Route path="/product-detail" element={<ProductDetail />} />
        <Route path="/finish-shopping" element={<FinishShopping />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/order" element={<Order />} />
        <Route path="/order-detail" element={<OrderDetail />} />
        <Route path="/admin-order-management" element={<AdminOrderManagement />} />
        <Route path="/admin-order-check" element={<AdminOrderCheck />} />
      </Routes>
      
  </BrowserRouter>
  )
}

export default App;