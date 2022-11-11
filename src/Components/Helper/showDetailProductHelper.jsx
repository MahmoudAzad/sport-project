import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { HeartOutlined } from "@ant-design/icons";
import { EffectFade, Navigation, Pagination } from "swiper";
import ReactMarkdown from "react-markdown";
import { useLocation } from "react-router";
import { Select } from 'antd';
import { connect, useDispatch } from "react-redux";
import { addToCart } from "../../Redux/usefulActions";
const { Option } = Select;

const ShowDetailProductsHelper = () => {

  const params = useLocation();
  const dispatch = useDispatch();

  const addToCartDispatches = (params) => {
    try {
      dispatch(addToCart(params));
    } catch (errors) {
      console.log('Err dispatch addToCart.jsx=>', errors);
    }
  }

  const addToCartHandler = (params) => {
    addToCartDispatches(params);
  }

  return (
    <>

      <div className="row m-5 border-bottom">

        <div className="col-6 ml-5">
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

            {params.state.product.img && (
              <SwiperSlide>
                <img src={`http://localhost:1337${params.state.product.img.url}`} />
              </SwiperSlide>
            )}

            {params.state.product.orgImg && (
              <SwiperSlide>
                <img src={`http://localhost:1337${params.state.product.orgImg.url}`} />
              </SwiperSlide>
            )}

            {params.state.product.images && (
              params.state.product.images.map((img) => (
                <SwiperSlide>
                  <img src={`http://localhost:1337${img.url}`} />
                </SwiperSlide>
              ))
            )}

          </Swiper>
        </div>

        <div >
          <div className="text-right font-weight-bold border-bottom">
            <h5 className="mt-5 mr-3 ">
              {params.state.product.title}
            </h5>

            <h4 className="font-weight-bold mt-3 mr-3" style={{ color: "rgb(254, 116, 11)" }}>
              {params.state.product.price || params.state.product.orginalPrice}
            </h4>

            <ReactMarkdown className="font-weight-bold mt-3">{params.state.product.attr}</ReactMarkdown>

            <h6 className="font-weight-bold mr-3">
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

            <button type="button" class="btn btn-success mt-3 mr-3" onClick={() => addToCartHandler(params.state.product)}>افزودن به سبد خرید</button>

            <p className="m-3"> <HeartOutlined /> افزودن به علاقه مندی</p>
          </div>
          <div className="text-right font-weight-bold mt-3 mr-3">
            <p >شناسه محصول :‌ {params.state.product.id}</p>

          </div>
        </div>


      </div>
    </>
  );
}

function mapStateToProps(state) {
  return { state };
}

export default connect(mapStateToProps)(ShowDetailProductsHelper); 
