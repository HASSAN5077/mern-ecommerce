import React, { Fragment, useEffect } from "react";
import { CgMouse } from "react-icons/cg";
import "./Home.css";
import Product from "./Product.js";
import MetaData from "../layout/Metadata";
import { clearErrors, getProduct } from "../../actions/productAction";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../layout/Loader/Loader";
import {useAlert} from "react-alert"

const Home = () => {
  const alert = useAlert()
  const dispacth = useDispatch();
  const { loading, error, products } = useSelector((state) => state.products);
  useEffect(() => {
    if(error){
      alert.error(error);
      dispacth(clearErrors())
    }
    dispacth(getProduct());
  }, [dispacth], error,alert);
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          {/* <MetaData title="ECOMMERCE" /> */}

          <div className="banner">
            <p>Welcome to Ecommerce</p>
            <h1>FIND AMAZING PRODUCTS BELOW</h1>

            <a href="#container">
              <button>
                Scroll <CgMouse />
              </button>
            </a>
          </div>

          <h2 className="homeHeading">Featured Products</h2>
          <div className="container" id="container">
            {products.map((product) => (
              <Product key={product._id} product={product} />
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default Home;
