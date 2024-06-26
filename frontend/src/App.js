import { BrowserRouter, Routes, Route } from "react-router-dom"
//components://
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";

//user components://
import RoutesWithUserChatComponent from "./components/user/RoutesWithUserChatComponent";

import HomePage from "./pages/HomePage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import ProductListPage from "./pages/ProductListPage";
import CartPage from "./pages/CartPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ProtectedRoutesComponent from "./components/ProtectedRoutesComponent";

import UserOrderDetailsPage from "./pages/user/UserOrderDetailsPage";
import UserProfilePage from "./pages/user/UserProfilePage";
import UserOrderPage from "./pages/user/UserOrderPage";
import UserCartDetailsPage from "./pages/user/UserCartDetailsPage";

//protected admin pages:

import AdminUserPage from "./pages/admin/AdminUserPage";
import AdminEditUserPage from "./pages/admin/AdminEditUserPage";
import AdminProdductsPage from "./pages/admin/AdminProductsPage";
import AdminCreateProdductsPage from "./pages/admin/AdminCreateProductsPage";
import AdminOrdersPage from "./pages/admin/AdminOrdersPage";
import AdminOrderDetailsPage from "./pages/admin/AdminOrderDetailsPage";
import AdminEditProductsPage from "./pages/admin/AdminEditProductsPage";
import AdminChatsPage from "./pages/admin/AdminChatsPage";
import AdminAnalyticsPage from "./pages/admin/AdminAnalyticsPage";
import ScrollToTop from "./utils/ScrollToTop";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <HeaderComponent />
      < Routes>
        <Route element={<RoutesWithUserChatComponent />}>

          <Route elements={<ProtectedRoutesComponent />} >
            <Route path="/" element={<HomePage />} />
            <Route path="/Product-list" element={<ProductListPage />} />
            <Route path="/Product-details" element={<ProductDetailsPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/*" element="Page not exists 404" />
    /*user protected routes*/
            <Route elements={<ProtectedRoutesComponent />} admin={false} >
              <Route path="/userorderdetails" element={<UserOrderDetailsPage />} />
              <Route path="/userprofile" element={<UserProfilePage />} />
              <Route path="/userorderpage" element={<UserOrderPage />} />
              <Route path="/usercartdetails" element={<UserCartDetailsPage />} />
            </Route>
          </Route>
        </Route>
     /*admin protected  routes*/

        <Route elements={<ProtectedRoutesComponent />} admin={true} >
          <Route path="/adminuserpage" element={<AdminUserPage />} />
          <Route path="/adminedituserpage" element={<AdminEditUserPage />} />
          <Route path="/adminproductspage" element={<AdminProdductsPage />} />
          <Route path="/admincreateproductspage" element={<AdminCreateProdductsPage />} />
          <Route path="/adminorderspage" element={<AdminOrdersPage />} />
          <Route path="/adminorderdetailspage" element={<AdminOrderDetailsPage />} />
          <Route path="/admineditproductspage" element={<AdminEditProductsPage />} />
          <Route path="/adminchatspage" element={<AdminChatsPage />} />
          <Route path="/adminanalyticspage" element={<AdminAnalyticsPage />} />

        </Route>
      </Routes>
      <FooterComponent />
    </BrowserRouter >

  );
}

export default App;
