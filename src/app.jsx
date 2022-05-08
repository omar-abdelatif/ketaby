import React, { useEffect, useState } from 'react';
import "./components/responsive/responsive.css";
import { Route, Routes } from 'react-router-dom'
import { commerce } from './lib/commerce';
import "../node_modules/animate.css/animate.min.css";
// import Preloader from './components/preloader/preloader';
import ScrollTop from './components/scrollBtn'
import Nav from './components/navbar/nav';
import Index from './components/index';
import ProductDetails from './components/productdetails';
import Arabic from './components/arabic';
import Footer from './components/footer/footer';
import ErrorPage from './components/404/errorPage';
function App() {
    const [product, setproduct] = useState([]);
    const [cart, setCart] = useState({});
    const [search, setSearch] = useState('');
    const [Category, setCategory] = useState([]);
    // const [Download, setDownload] = useState([]);
    // const fetchDownload = async () => {
    //     const data = await commerce.getDownload();
    //     setDownload(data);
    // };
    // console.log(Download);
    const fetchProducts = async () => {
        const { data: product } = await commerce.products.list();
        const { data: categoryData } = await commerce.categories.list();
        const productsPerCategory = categoryData.reduce((acc, category) => {
            return [
                ...acc,
                {
                    ...category,
                    categoriesData: product.filter(product => product.categories.find(cat => cat.id === category.id))
                }]
        }, [])
        setCategory(productsPerCategory);
        setproduct(product);
    };
    const fetchCart = async () => {
        setCart(await commerce.cart.retrieve());
    };
    const handleAddToCart = async (productId, quanitity) => {
        const { cart } = await commerce.cart.add(productId, quanitity);
        setCart(cart);
    };
    const handleRemoveFromCart = async (productId) => {
        const { cart } = await commerce.cart.remove(productId);
        setCart(cart);
    };
    const emptyCart = async () => {
        const { cart } = await commerce.cart.empty();
        setCart(cart);
    };
    const filterBooks = product.filter(book => {
        let bookFilter = book.name.toLowerCase().includes(search.toLowerCase());
        return bookFilter;
    })
    function handleSearch(e) {
        e.preventDefault();
        setSearch(e.target.value);
        const result = document.getElementById('result');
        if (e.target.value === '') {
            result.style.display = 'none';
        }
        else {
            result.style.display = 'block';
        }
    }
    useEffect(() => {
        const script = document.createElement("script");
        script.src = "/js/custom.js";
        script.async = true;
        document.body.appendChild(script);
        fetchProducts();
        fetchCart();
        // fetchDownload();
    }, []);
    return (
        <React.Fragment>
            {/* <Preloader /> */}
            <ScrollTop />
            <Nav totalItems={cart.total_items}
                product={product}
                cart={cart}
                removeItem={handleRemoveFromCart}
                filterBooks={filterBooks}
                emptyCart={emptyCart}
                handleSearch={handleSearch}
            />
            <Routes>
                <Route index path="/" element={<Index product={product} onAddToCart={handleAddToCart} categories={Category} />} />
                <Route path="/:productId" element={<ProductDetails product={product} handleAddToCart={handleAddToCart} />} />
                <Route path="/arabicbooks" element={<Arabic product={product} categories={Category} onAddToCart={handleAddToCart} />} />
                <Route path="*" element={<ErrorPage />} />
            </Routes>
            <Footer />
        </React.Fragment>
    );
}
export default App;