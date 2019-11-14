import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function NewsSimilar(props) {
  const [ datas, setDatas ] = React.useState([]);
  const id = props.id;

  React.useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(`/news/similar/${id}`);

      setDatas(res.data.data);
    };

    fetchData();
  }, [id]);

  console.log('data', datas);

  return(
    <div className="col-lg-8 p-0">
      <h3 className="mb-3 mt-3">Tin tức tương tự</h3>
      {datas
        ? datas.map((data, index) => (
            <Link to={`/${data.title}/${data._id}`} key={index} className="featured-new p-3 bg-white rounded text-decoration-none">
              <div className="featured-new__image border border-secondary">
                <img
                  src={`/uploads/news/${data.articlePicture}`}
                  alt={data.title}
                />
              </div>
              <div className="featured-new__info">
                <h3 className="featured-new__title">{data.title}</h3>
                <p className="featured-new__createby text-secondary">Creator: {data.createdBy.username} | Time: {data.dateCreate}</p>
              </div>
            </Link>
          ))
        : "Chưa có tin tức nào"}
    </div>
  )
}
