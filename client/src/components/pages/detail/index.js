import React from "react";
import axios from "axios";

import NewsDetail from "./NewsDetail";
import NewsSimilar from "./NewsSimilar";
import NewsWatchMuch from "./NewsWatchMuch";
import NewsOther from "../home/NewsOther";

export default function Detail({ match }) {
  const [ datas, setDatas ] = React.useState([]);
  const id = match.params.id;

  React.useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(`/news/details/${id}`);

      setDatas(res.data.data[0]);
    };

    fetchData();
  }, [id]);

  return(
    <React.Fragment>
      <div className="container">
        <div className="row">
          <NewsDetail datas={datas} />
          <div className="col-lg-4">
            show quang cao
          </div>
        </div>
        <div className="row">
          <NewsSimilar id={datas.cateNews} />
        </div>
        <div className="row">
          <NewsWatchMuch />
        </div>
        <div className="row">
          <div className="col-lg-8 p-0 main-featured-new">
            <h3 className="mb-3 mt-3">Tin khác</h3>
            <NewsOther />
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}
