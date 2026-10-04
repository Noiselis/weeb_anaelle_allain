import { useState } from "react";

export default function Blog() {
    const [listOfArticles, setListOfArticles] = useState([{}]);
    return (
        <div className="text-center">
            {listOfArticles.map((article) => {
                <div key={article.id}>
                    <h2>{article.title}</h2>
                    <p>{article.body}</p>
                </div>;
            })}
        </div>
    );
}
