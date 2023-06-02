import React, { useEffect, useState } from "react";
import { getProducts } from "../../services/Services";
import Loading from "../Common/Loading";

const CategoriesCards = () => {
  const [categoryImages, setCategoryImages] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await getProducts("show-pros");
        setCategoryImages(data);
      } catch (err) {
        console.log("err => ", err);
      }
    };
    fetchData();
  }, []);

  if (!categoryImages) {
    return <Loading />;
  }

  return (
    <div className="col-md-10 col-11 mx-auto mt-5 ">
      <div class="my-4 text-center">
        <h5 class="fw-bold px-3 ">دسته‌بندی‌ها</h5>
        <hr />
      </div>

      <div className="row">
        {categoryImages.map((item) => (
          <img
            className="col-6 col-md-3 mt-2 rounded-5"
            src={`http://localhost:1337${item.img.url}`}
            key={item.id}
            alt="لوازم ورزشی مردانه و زنانه"
          />
        ))}
      </div>
    </div>
  );
};

export default CategoriesCards;
