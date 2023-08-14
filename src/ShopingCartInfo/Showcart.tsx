import React from 'react';
import Table from 'react-bootstrap/Table';
import Layout from "../Layout";
import { Container } from 'react-bootstrap'
import { useDispatch, useSelector } from "react-redux";
import { removeCart, decreaseItemQuantity, increaseItemQuantity } from '../Component/features/shopingCardSlice'

const Showcart = () => {

  const dispatch = useDispatch();

  const { items } = useSelector((state: any) => state.shopingCarRedux);
  return (
    <Layout>
      <section className="vh-100">
  <div className="container h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col">
        <p><span className="h2">Shopping Cart </span><span className="h4">(1 item in your cart)</span></p>

        <div className="card mb-4">
          <div className="card-body p-4">
          {items?.map((el:any)=>(
            <div className="row align-items-center">
             
              <div className="col-md-2">
                <img src={el.image}
                  className="img-fluid" alt="Generic placeholder image"/>
              </div>
              <div className="col-md-2 d-flex justify-content-center">
                <div>
                  <p className="small text-muted mb-4 pb-2">Name</p>
                  <p className="lead fw-normal mb-0">{el.name}</p>
                </div>
              </div>
              <div className="col-md-2 d-flex justify-content-center">
                <div>
                  <p className="small text-muted mb-4 pb-2">Color</p>
                  <p className="lead fw-normal mb-0"><i className="fas fa-circle me-2" ></i>
                    pink rose</p>
                </div>
              </div>
              <div className="col-md-2 d-flex justify-content-center">
                <div>
                  <p className="small text-muted mb-4 pb-2">Quantity</p>
                  <p className="lead fw-normal mb-0">1</p>
                </div>
              </div>
              <div className="col-md-2 d-flex justify-content-center">
                <div>
                  <p className="small text-muted mb-4 pb-2">Price</p>
                  <p className="lead fw-normal mb-0">$799</p>
                </div>
              </div>
              <div className="col-md-2 d-flex justify-content-center">
                <div>
                  <p className="small text-muted mb-4 pb-2">Total</p>
                  <p className="lead fw-normal mb-0">$799</p>
                </div>
              </div>
             
            </div>
          ))}

          </div>
        </div>

        <div className="card mb-5">
          <div className="card-body p-4">

            <div className="float-end">
              <p className="mb-0 me-5 d-flex align-items-center">
                <span className="small text-muted me-2">Order total:</span> <span
                  className="lead fw-normal">$799</span>
              </p>
            </div>

          </div>
        </div>

        <div className="d-flex justify-content-end">
          <button type="button" className="btn btn-light btn-lg me-2">Continue shopping</button>
          <button type="button" className="btn btn-primary btn-lg">Add to cart</button>
        </div>

      </div>
    </div>
  </div>
</section>
    </Layout>
  );
};

export default Showcart;