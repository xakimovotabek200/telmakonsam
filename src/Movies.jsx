import React, { useEffect, useState } from "react";
import Navbar from './components/Navbar/Navbar';

function Movies() {
    const [searchQuery, setSearchQuery] = useState("");
    const [data, setData] = useState([]);
    const [cart, setCart] = useState([]);

    const fetchData = async () => {
        try {
            const response = await fetch("https://fakestoreapi.com/products/");
            if (response.ok) {
                const data = await response.json();
                const productsWithCart = data.map((product) => ({
                    ...product,
                    cart: false,
                }));
                setData(productsWithCart);
            } else {
                console.error("Failed to fetch data");
            }
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    const handleAddToCart = (productId) => {
        const selectedProduct = data.find((product) => product.id === productId);
        setCart([...cart, selectedProduct]);
    };

    const filteredData = data.filter((product) =>
        product.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    useEffect(() => {
        fetchData();
    }, [searchQuery]);

    return (
        <div className="container">
            <Navbar cartLength={cart.length} />
            <div className="search">
                <input
                    type="search"
                    placeholder="Search for movies"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
            </div>
            <div className="movies">
                {filteredData.map((product) => (
                    <div key={product.id} className="hello">
                        <img className='salom' src={product.image} alt={"salom"} />
                        <p className="salomText">{product.title.slice(0, 50)}</p>
                        <div className="ratings">
                            <span>Rating: {product.rating.rate}</span>
                            <span>Count: {product.rating.count}</span>
                        </div>
                        <button
                            onClick={() => handleAddToCart(product.id)}
                            className={cart.some((item) => item.id === product.id) ? "added-to-cart" : ""}
                        >
                            {cart.some((item) => item.id === product.id) ? "In Cart" : "Add to Cart"}
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Movies;
