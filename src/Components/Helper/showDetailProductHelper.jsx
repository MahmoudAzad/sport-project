import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";


import { EffectFade, Navigation, Pagination } from "swiper";
import { useEffect } from "react";

import ReactMarkdown from "react-markdown";
import { useLocation, useParams } from "react-router";
import { Select } from 'antd';
const { Option } = Select;


const ShowDetailProductsHelper = () => {

  const params = useLocation();
  console.log(params.state.product.title);
  console.log(params.state.product);



  // const { id } = useParams();
  // console.log("parametrs => ", id);

  // const [test, setTest] = useState("");
  // useEffect(()=>{
  //   setTest(products.find(item => item.id.toString() === id.toString())) 
  // },[])



  //   export const getWeeklyById = id =>{
  //     const data =  Store.getState().Weekly;
  //     return data.find(item => item.id.toString() === id.toString());
  // }

  // useEffect(() => {

  //   async function fetchMyAPI() {

  //     var myHeaders = new Headers();
  //     myHeaders.append("Content-Type", "application/json");
  //     myHeaders.append("Access-Control-Request-Headers", "*");
  //     myHeaders.append("Access-Control-Request-Method", "*");
  //     myHeaders.append("accept", "*/*");
  //     var requestOptions = {
  //       method: 'GET',
  //       headers: myHeaders,
  //       redirect: 'follow'
  //     };

  //     fetch("http://localhost:1337/ring-sleeves", requestOptions)
  //       .then(response => response.json())
  //       .then(result => { setTest(result.find(item => item.id.toString() === id.toString())) })

  //   }

  //   fetchMyAPI();



  // }, [])

  // if (!item) {
  //   return <p>
  //     please wait...
  //   </p>
  // }



  // console.log("item title after => ", item.title);


  return (
    <>

      <div className="show-detail-pro-helper-container row   ">

        <div className="showproductshelper-carousel col-6  ml-5">
          <Swiper
            spaceBetween={30}
            effect={"fade"}
            navigation={true}
            pagination={{
              clickable: true,
            }}
            modules={[EffectFade, Navigation, Pagination]}
            className="mySwiper "
          >

            {params.state.product.images.map((img) => (
              <SwiperSlide>
                <img src={`http://localhost:1337${img.url}`} />
              </SwiperSlide>
            ))}

          </Swiper>
        </div>

        <div className="showproductshelper-detail">
          <div className="text-right font-weight-bold">
            <h5 className="mt-5 mr-3 ">
              {params.state.product.title}
            </h5>
            <h4 className="showproductshelper-price mt-3 mr-3">
              {params.state.product.price}
            </h4>
            <ReactMarkdown className="font-weight-bold mt-3">{params.state.product.attr}</ReactMarkdown>
            <h6 className="font-weight-bold">
              سایز لباس :
              <Select
              className="mr-3"
                defaultValue="یک گزینه را انتخاب کنید"
                style={{
                  width: 200,
                }}
              >
                <Option value="jack">یک گزینه را انتخاب کنید</Option>
                <Option value="lucy">XL</Option>
                <Option value="Yiminghe">۲XL</Option>
              </Select>

            </h6>
          </div>

        </div>


      </div>
    </>
  );
}

export default ShowDetailProductsHelper; 
