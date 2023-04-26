import React, { useEffect, useState } from "react";
import { getCategoryImages, getProducts } from "../../services/Services";
import { Divider } from "antd";
import Loading from "../Common/Loading";

const CategoriesCards = () => {
  const [categoryImages, setCategoryImages] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await getProducts("show-pros");
        setCategoryImages(data);
      } catch (e) {
        console.log("err");
      }
    };
    fetchData();
  }, []);

  if (!categoryImages) {
    return <Loading />;
  }

  return (
    <div className="col-md-10 col-11 mx-auto mt-5 ">
      <Divider>
        <h5 className="font-weight-bold">دسته‌بندی‌ها</h5>
      </Divider>
      <div className="row">
        {categoryImages.map((item) => (
          <img
            className="col-6 col-md-3 mt-2 "
            src={`http://localhost:1337${item.img.url}`}
            key={item.id}
            alt="لوازم ورزشی مردانه و زنانه"
            style={{ borderRadius: "25px" }}
          />
        ))}
      </div>
    </div>
  );
};

export default CategoriesCards;
