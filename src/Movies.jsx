import React, { useState, useEffect } from "react";
import Movies from "./Movies";

function Movie() {
    const [searchQuery, setSearchQuery] = useState("");
    const [data, setData] = useState([]);

    const fetchData = async () => {
        try {
            const response = await fetch("https://fakestoreapi.com/products");
            if (response.ok) {
                const data = await response.json();
                setData(data);
            } else {
                console.error("Failed to fetch data");
            }
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const filteredData = data.filter((product) =>
        product.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="container">
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
                    <div>
                        <Movies key={product.id} {...product} />
                    </div>
                ))}
            </div>
        </div>
    );
}