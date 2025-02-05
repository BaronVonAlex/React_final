import { useEffect, useState } from "react";
import NewsItem from "./NewsItem";

const NewsBoard = ({ category, darkMode }) => {
    const [articles, setArticle] = useState([]);

    useEffect(() => {
        let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`;
        fetch(url)
            .then(response => response.json())
            .then(data => setArticle(data.articles || [])); // Ensuring articles is always an array
    }, [category]);

    return (
        <div>
            <h2 className="text-center">Latest <span className="badge bg-danger">News</span></h2>
            {Array.isArray(articles) && articles.length > 0 ? (
                articles.map((news, index) => (
                    <NewsItem
                        key={index}
                        title={news.title}
                        description={news.description}
                        src={news.urlToImage}
                        url={news.url}
                        darkMode={darkMode}
                    />
                ))
            ) : (
                <p>No articles available</p> // Optional: display a message if no articles are found
            )}
        </div>
    );
};

export default NewsBoard;
