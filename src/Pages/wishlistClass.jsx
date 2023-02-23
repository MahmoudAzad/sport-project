import React from "react";
import "antd/dist/antd.css";
import { Checkbox } from "antd";

import { CloseOutlined, HeartOutlined, CheckOutlined } from '@ant-design/icons';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeWishList, removeWishListChecks } from '../Redux/usefulActions';
import { Collapse, UnmountClosed } from 'react-collapse';
import { useNavigate } from 'react-router-dom';

const { Panel } = Collapse;

const CheckboxGroup = Checkbox.Group;

class WishlistClass extends React.Component {

  constructor(props) {
    super(props);
    console.log("class component Props =>" , props);
  }
  state = {
    groupKey: this.props.wishList,
    checked: {},
    output: [],
    indeterminate: true,
    checkAll: false,
    showAccordian: false
  };

  onCheckAllChange = e => {
    const { groupKey } = this.state;
    const checked = groupKey.reduce((prev, curr) => {
      return { ...prev, [curr.title]: e.target.checked };
    }, {});
    this.setState({ checked, checkAll: e.target.checked, output: groupKey });

    if (e.target.checked) {
      this.setState({ output: groupKey });
    } else {
      this.setState({ output: [], showAccordian: false });
    }
  };

  checkAll = () => { };

  onChange = (e, value) => {
    let updatedList = [...this.state.output];
    if (e.target.checked) {
      updatedList = [...this.state.output, value];
    } else {
      updatedList.splice(this.state.output.indexOf(value), 1);
    }



    this.setState(
      state => ({
        checked: { ...state.checked, [value.title]: e.target.checked },
        output: updatedList,
      }),
      () => {
        const { checked, groupKey } = this.state;
        const values = Object.values(checked);
        if (values.length === groupKey.length && values.every(v => v)) {
          this.setState({ checkAll: true });
        } else {
          this.setState({ checkAll: false });
        }


        if (this.state.output.length > 0) {
          this.setState({ showAccordian: true });
        } else {
          this.setState({ showAccordian: false });
        }

      }
    );


  };




  handleShowDetailProduct = (item) => {
    this.props.navigation.navigate('dashboard');
  }



  render() {
    const { checked, checkAll, output, showAccordian } = this.state;
    const { dispatch,navigate } = this.props;
    console.log("State => ", this.state);


    return (
      <>
        <div>
          {this.props.wishList.length > 0 ? (
            <div className='container mt-5'>
              <h5 className='text-right border-bottom pb-3'>محصولات علاقه مندی شما</h5>





              <Collapse isOpened={showAccordian}>
                <div className='text-right d-flex wishlistDeleteCollapse '>
                  <p className='ml-4 p-2' onClick={() => dispatch(removeWishListChecks(output))} ><CloseOutlined className='pl-1' />حذف</p>
                  {this.state.checkAll ? (
                    <p className=' p-2' ><CheckOutlined className='pl-1' />لغو انتخاب همه</p>
                  ) : (
                    <p className=' p-2' ><CheckOutlined className='pl-1' />انتخاب همه</p>
                  )}

                  <Checkbox
                    onChange={this.onCheckAllChange}
                    checked={checkAll}
                    className='pt-1'
                  />

                </div>
              </Collapse>



              <div className="wishList-container row ">
                {this.props.wishList.map((item) => (
                  <div key={item.title} className="item col-md-4  col-6 mt-4">
                    <div className="wishlist-top-items">
                      <p onClick={() => dispatch(removeWishList(item))} style={{ fontSize: "15px" }}><CloseOutlined style={{ fontSize: "12px" }} /> حذف</p>
                      <Checkbox
                        onChange={e => this.onChange(e, item)}
                        value={item.title}
                        checked={checked[item.title]}
                      />
                    </div>
                    <div className="images mr-5" >
                      <div >
                        <img className="org-img-showpro-helper" alt="تصاویر محصولات" width="250px" src={`http://localhost:1337${item.images[0].url}`} />
                        <div className="overlay">
                          <img className="hover-img-showpro-helper" onClick={() => navigate('showDetailProductsHelper', { name: 'Demo' })} alt="تصاویر محصولات" width="250px" height="250px" src={`http://localhost:1337${item.images[1].url}`} />
                        </div>

                        <button className="btn btn-success col-12 container" type="button" data-hover="hover"><span>انتخاب گزینه ها</span></button>

                      </div>
                    </div>

                    <h6 className="title text-center" onClick={() => this.handleShowDetailProduct(item)}>
                      {item.title}
                    </h6>
                    <h6 className="price text-center">
                      {item.price}
                    </h6>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            < div className="text-center mt-5" >
              <HeartOutlined style={{ fontSize: "200px", color: "rgb(228, 228, 228)" }} />
              <h1 className='font-weight-bold mt-3 mb-3'>این لیست علاقه مندی خالی است.</h1>
              <h6>شما هیچ محصولی به لیست علاقه مندی هایتان اظافه نکرده اید!</h6>
              <h6>برای پیدا کردن محصولات مورد علاقه یتان جهت افزودن به لیست علاقه مندی ها میتوانید از فروشگاه دیدن نمایید.</h6>

              <Link to="/">
                <button className='btn btn-success btn-lg mt-3'>بازگشت به فروشگاه</button>
              </Link>
            </div >)}
        </div>










        {/* <div>
          <div className="site-checkbox-all-wrapper">
            Select All
            <Checkbox
              indeterminate={this.state.indeterminate}
              onChange={this.onCheckAllChange}
              checked={checkAll}
            />
          </div>
          {this.state.groupKey.map(item => (
            <div className="userpermission-content" key={item.id}>
              {item.label}
              <Checkbox
                onChange={e => this.onChange(e, item.key)}
                value={item.key}
                checked={checked[item.key]}
              />{" "}
            </div>
          ))}
        </div> */}

      </>

    );
  }
}


function mapStateToProps(state) {
  return {
    wishList: state.wishList,
  }
}

export default connect(mapStateToProps)(WishlistClass);   