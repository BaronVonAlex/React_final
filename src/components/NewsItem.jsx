import image from '../assets/news-default-big.png';

const NewsItem = ({ title, description, src, url, darkMode }) => {
  return (
    <div className={`card mb-3 d-inline-block my-3 mx-3 py-2 px-2 ${darkMode ? "bg-dark text-light" : "bg-light text-dark"}`} 
         style={{ maxWidth: "345px", height: "450px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
      <img src={src ? src : image} style={{ maxHeight: 200, maxWidth: 360, objectFit: "cover" }} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title" style={{ minHeight: "60px" }}>{title.slice(0, 50)}</h5>
        <p className="card-text" style={{ minHeight: "90px" }}>
          {description ? description.slice(0, 90) : "Current Event, Something new just happened."}
        </p>
        <a href={url} className="btn btn-primary mt-auto">Read More</a>
      </div>
    </div>
  );
};

export default NewsItem;
