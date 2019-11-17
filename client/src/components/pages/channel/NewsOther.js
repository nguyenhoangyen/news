import React from "react";
import { Link } from "react-router-dom";

import Loading from "../../Loading";

export default function NewsOther(props) {
  const [tags, setTags] = React.useState([]);
  const [newByTag, setNewByTag] = React.useState([]);

  React.useEffect(() => {
    setTags(props.tags);
    setNewByTag(props.newByTag);

  }, [props.tags, props.newByTag]);

  // just show news <= 50
  newByTag.length = 50;

  return(
    <React.Fragment>
      {
        tags
        ? (
          tags.map((tag, index) => (
            <div className="mt-5" key={index}>
              <h3 className="mb-3">{tag}</h3>
              {
                newByTag
                ? (
                  newByTag.map((item, index) => (
                    item.tag.includes(tag)
                    ? (
                      <Link to={`/${item._id}`} key={index} className="featured-new p-3 bg-white rounded text-decoration-none">
                        <div className="featured-new__image border border-secondary">
                          <img
                            src={`/uploads/news/${item.articlePicture}`}
                            alt={item.title}
                          />
                        </div>
                        <div className="featured-new__info">
                          <h3 className="featured-new__title">{item.title}</h3>
                          <p className="featured-new__createby text-secondary">Creator: {item.createdBy.username} | Time: {item.dateCreate} | <i className="mdi mdi-eye" /> {item.view}</p>
                        </div>
                      </Link>
                    )
                    : null
                  ))
                )
                : (<Loading />)
              }
            </div>
          ))
        )
        : null
      }
    </React.Fragment>
  )
}
