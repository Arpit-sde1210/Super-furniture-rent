import { useState } from 'react';

import {
  Routes,
  Route,
  useNavigate
} from 'react-router-dom';

import Navbar from './components/Navbar';

import Hero from './components/Hero';
import Features from './components/Features';
import Categories from './components/Categories';
import Products from './components/Products';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';

import WhatsAppButton from './components/WhatsappButton';

import ProductDetailPage from './components/ProductDetailPage';
import CartPage from './components/CartPage';
import CheckoutPage from './components/CheckoutPage';
import PaymentPage from './components/PaymentPage';
import OrderConfirmation from './components/OrderConfirmation';

/* NEW PAGES */

import AboutUs from './components/About';

import PrivacyPolicy from './components/privacy-policy';

import CancellationPolicy from './components/CancellationPolicy';

import './styles/global.css';

/* =========================
   HOME PAGE
========================= */

function HomePage({
  addToCart
}) {

  return (

    <>

      <Hero />

      <Features />

      <Categories />

      <Products
        addToCart={addToCart}
        isHomePage={true}
      />

      <Pricing />

      <Testimonials />

      <FAQ />

    </>

  );
}

/* =========================
   APP
========================= */

function App() {

  const navigate = useNavigate();

  /* CART */

  const [cart, setCart] =
    useState([]);

  /* =========================
     ADD TO CART
  ========================= */

  const addToCart = (product) => {

    const existingItem =
      cart.find(

        (item) =>
          item.id === product.id

      );

    if (existingItem) {

      const updatedCart =
        cart.map(

          (item) =>

            item.id === product.id

              ? {

                ...item,

                quantity:
                  item.quantity + 1

              }

              : item

        );

      setCart(updatedCart);
    }

    else {

      setCart([

        ...cart,

        {

          ...product,

          quantity: 1,

          rentalDays: 30

        }

      ]);
    }
  };

  /* =========================
     REMOVE
  ========================= */

  const removeFromCart = (id) => {

    const updatedCart =
      cart.filter(

        (item) =>
          item.id !== id

      );

    setCart(updatedCart);
  };

  /* =========================
     UPDATE QUANTITY
  ========================= */

  const updateQuantity = (
    id,
    quantity
  ) => {

    if (quantity <= 0) {

      removeFromCart(id);

      return;
    }

    const updatedCart =
      cart.map(

        (item) =>

          item.id === id

            ? {

              ...item,

              quantity

            }

            : item

      );

    setCart(updatedCart);
  };

  /* =========================
     RETURN
  ========================= */

  return (

    <div className="App">

      {/* NAVBAR */}

      <Navbar
        cartCount={cart.length}
      />

      {/* ROUTES */}

      <Routes>

        {/* HOME */}

        <Route
          path="/"

          element={

            <HomePage
              addToCart={addToCart}
            />

          }
        />

        {/* PRODUCTS */}

        <Route
          path="/products"

          element={

            <Products
              addToCart={addToCart}
            />

          }
        />

        {/* PRODUCT DETAIL */}

        <Route
          path="/product/:id"

          element={

            <ProductDetailPage
              onAddToCart={
                addToCart
              }
            />

          }
        />

        {/* ABOUT */}

        <Route
          path="/about"

          element={
            <AboutUs />
          }
        />

        {/* CONTACT */}

        <Route
          path="/contact"

          element={
            <Contact />
          }
        />

        {/* PRIVACY */}

        <Route
          path="/privacy-policy"

          element={
            <PrivacyPolicy />
          }
        />

        {/* CANCELLATION */}

        <Route
          path="/cancellation-policy"

          element={
            <CancellationPolicy />
          }
        />

        {/* CART */}

        <Route
          path="/cart"

          element={

            <CartPage

              cart={cart}

              onRemoveFromCart={
                removeFromCart
              }

              onUpdateQuantity={
                updateQuantity
              }

              onCheckout={() =>
                navigate('/checkout')
              }

              onContinueShopping={() =>
                navigate('/products')
              }

            />

          }
        />

        {/* CHECKOUT */}

        <Route
          path="/checkout"

          element={

            <CheckoutPage

              cart={cart}

              onProceedToPayment={() =>
                navigate('/payment')
              }

              onBackToCart={() =>
                navigate('/cart')
              }

            />

          }
        />

        {/* PAYMENT */}

        <Route
          path="/payment"

          element={

            <PaymentPage

              orderData={{

                orderItems: cart,

                firstName: 'Arpit',

                lastName: 'Singh',

                address: 'Demo Address',

                city: 'Delhi',

                state: 'Delhi',

                pincode: '110001',

                email: 'arpit@gmail.com',

                phone: '9876543210'

              }}

              onPaymentSuccess={() =>

                navigate(
                  '/order-confirmation'
                )

              }

              onBack={() =>
                navigate('/checkout')
              }

            />

          }
        />

        {/* ORDER CONFIRMATION */}

        <Route
          path="/order-confirmation"

          element={

            <OrderConfirmation

              orderData={{

                orderId:
                  `SFR${Date.now()}`,

                paymentMethod:
                  'card',

                transactionId:
                  `TXN${Date.now()}`,

                firstName: 'Arpit',

                lastName: 'Singh',

                address: 'Demo Address',

                city: 'Delhi',

                state: 'Delhi',

                pincode: '110001',

                email: 'arpit@gmail.com',

                phone: '9876543210'

              }}

              onBackToHome={() =>
                navigate('/')
              }

            />

          }
        />

      </Routes>

      {/* FOOTER */}

      <Footer />

      {/* WHATSAPP */}

      <WhatsAppButton />

    </div>
  );
}

export default App;