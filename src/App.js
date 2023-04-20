import React, { Suspense, useEffect, useState } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import NotFound from './components/NotFound/index.jsx';
import Header from './components/Header';
import productApi from './api/productApi';



const Photo = React.lazy(() => import('./features/Photo'));

function App() {

  // Sử dụng productApi trong ReactJS component
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    const fetchProductList = async () => {

      // dùng try catch để bắt lỗi
      try {
        // dùng param để quy định bao nhiêu sản phẩm trên 1 trang
        const params = {
          _page: 1,
          _limit: 5,
        };
        // truyền params vào
        //getAll là láy hết
        const response = await productApi.getAll(params);
        console.log(response);
        setProductList(response.data);
      } catch (error) {
        console.log('Failed to fetch product list: ', error);
      }
    }
    fetchProductList();
    // chạy 1 lần nên dùng dependice
  }, []);



  return (
    <div className="App">
      <Suspense fallback={<div>Loading...</div>} >
        <BrowserRouter>
          <Header />

          <h3>Này tập dùng axios rồi map data ra chơi</h3>
          <ul style={{width:'90%', border: '10px solid #3333', borderRadius: '50px'}}>
            {/* map ra chơi xem data như thế nào */}
            {productList.map((product) => (
              <li key={product.id}>
                {product.name}
                <br />
                {product.salePrice}
                <br />
                {product.shortDescription}
              </li>
            ))}
          </ul>

          <h3>Này thì dùng redux: thêm sửa xóa, formik, yup để báo validation</h3>
          <h2>Giao diện dùng ReactStrap cho lẹ</h2>
          <Switch>
            <Redirect exact from="/" to="/photos" />

            <Route path="/photos" component={Photo} />
            <Route component={NotFound} />
          </Switch>
        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;
