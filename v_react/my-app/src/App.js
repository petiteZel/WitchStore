import './App.css';
import { BrowserRouter,Routes, Route } from "react-router-dom";
import Home from './component/home/home';
import Type from './component/type-test/type-test';
import Header from './component/header/header';
// footer import 할것
import ProductList from './component/product-list/product-list';
import ProductDetail from './component/product-detail/product-detail';
import FinishShopping from './component/finish-shopping/finish-shopping';
import Cart from './component/cart/cart';
import Order from './component/order/order';
import OrderDetail from './component/order-detail/order-detail';
import AdminOrderManagement from './component/admin-order-management/admin-order-management';
import AdminOrderCheck from './component/admin-order-check/admin-order-check';
import AdminUsers from './component/admin-users/admin-users';
import AddCategory from './component/add-category/add-category';
import AddProduct from './component/add-product/add-product';
import AdminMain from './component/admin-main/admin-main';
import Register from './component/register/register';
import ChangingInfo from './component/changing-info/changing-info';
import Login from './component/login/login';


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
        <Route path="/admin-users" element={<AdminUsers />} />
        <Route path="/add-category" element={<AddCategory />} />
        <Route path="/add-product" element={<AddProduct />} />
        <Route path="/admin-main" element={<AdminMain />} />
        <Route path="/register" element={<Register />} />
        <Route path="/changing-info" element={<ChangingInfo />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      {/* footer */}
  </BrowserRouter>
  )
}

export default App;