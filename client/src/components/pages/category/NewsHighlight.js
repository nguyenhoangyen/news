import React from "react";
import { Link } from "react-router-dom";

export default function NewsHighlight(props) {
  const [highlightNew, setHighlightNew] = React.useState({});

  React.useEffect(() => {
    setHighlightNew(props.highlightNew);

  }, [props.highlightNew]);


  return(
    <div>
      <h3 className="mb-3">Tin tức nổi bật</h3>
      {highlightNew ? (
        <Link to={`/${highlightNew.title}/${highlightNew._id}`} className="featured-new p-3 bg-white rounded text-decoration-none">
          <div className="featured-new__image border border-secondary">
            <img
              src={`/uploads/news/${highlightNew.articlePicture}`}
              alt={highlightNew.title}
            />
          </div>
          <div className="featured-new__info">
            <h3 className="featured-new__title">
              {highlightNew.title}
            </h3>
          </div>
        </Link>
      ) : null}
    </div>
  )
}
