import React, { useCallback, useEffect, useState } from "react";
import Movie from "./Movie";

export default function Movies() {
    const [data, setData] = useState([]);
    const [search, setSearch] = useState("");
    const [loading, setLoading] = useState(false);

    const fetchData = useCallback(async () => {
        setLoading(true);
        const url = `https://anime-db.p.rapidapi.com/anime?page=1&size=10&search=${search}&genres=Fantasy%2CDrama&sortBy=ranking&sortOrder=asc`;
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '547905a7admsheebe69e0954ca44p1e974cjsneac7bd6f7950',
                'X-RapidAPI-Host': 'anime-db.p.rapidapi.com'
            }
        };


        try {
            const response = await fetch(url, options);
            const result = await response.json();
            setData(result.data);
            console.log(result.data)
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    }, [search]);

    useEffect(() => {
        const timeOutId = setTimeout(fetchData, 3000);
        return () => clearTimeout(timeOutId);
    }, [fetchData]);

    return (
        <div className="container">
            <div className="search">
                <input type="search" onChange={(e) => setSearch(e.target.value)} />
            </div>
            <div className="movies">
                {loading ? (
                    <h1>loadin ...</h1>
                ) : (
                    data.map((item) => <Movie key={item.id} {...item} />)
                )}
            </div>
        </div>
    );
}