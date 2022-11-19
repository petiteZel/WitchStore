import './App.css';
import { BrowserRouter,Routes, Route, Link,Switch } from "react-router-dom";
import Home from './component/home/home';
import Type from './component/type-test/type-test';
import Header from './component/header/header';

function App() {
  return(
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/type-test" element={<Type />} />
      </Routes>
      
  </BrowserRouter>
  )
}

export default App;
