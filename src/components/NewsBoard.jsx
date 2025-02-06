import { useEffect, useState } from "react";
import NewsItem from "./NewsItem";

const API_KEY = import.meta.env.VITE_API_KEY;

const NewsBoard = ({ category, darkMode }) => {
    const [articles, setArticle] = useState([]);

    useEffect(() => {
        let url = `https://gnews.io/api/v4/top-headlines?category=${category}&lang=en&country=us&max=10&apikey=${API_KEY}`;
        fetch(url)
            .then(response => response.json())
            .then(data => setArticle(data.articles || []));
    }, [category]);

    return (
        <div>
            {Array.isArray(articles) && articles.length > 0 ? (
                articles.map((news, index) => (
                    <NewsItem
                        key={index}
                        title={news.title}
                        description={news.description}
                        src={news.image}
                        url={news.url}
                        darkMode={darkMode}
                    />
                ))
            ) : (
                <p>No articles available</p>
            )}
        </div>
    );
};

export default NewsBoard;
