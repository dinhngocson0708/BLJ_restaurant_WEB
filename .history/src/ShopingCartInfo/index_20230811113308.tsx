import Layout from "../Layout";
import { Container } from 'react-bootstrap'
import { useDispatch, useSelector } from "react-redux";
import {removeCart} from '../Component/features/shopingCardSlice'

const ShopingCardInfo = () => {
    const dispatch=useDispatch();
    const {items} = useSelector((state:any) => state.shopingCarRedux);
    return (
        <Layout>
            {/* <h1>Hello</h1>
            {items?.map(function(el: any){
                return <h2>{el.name}</h2>
                
            })}
             */}

    <section className="h-100 gradient-custom">
        <div className="container py-5">
          <div className="row d-flex justify-content-center my-4">
            <div className="col-md-8">
              <div className="card mb-4">
                <div className="card-header py-3">
                  <h5 className="mb-0">Cart - {items.length} items</h5>
                </div>
                <div className="card-body">
                  {items?.map((data:any) => (
                    <div className="row">
                      <div className="col-lg-3 col-md-12 mb-4 mb-lg-0">
                        <div
                          className="bg-image hover-overlay hover-zoom ripple rounded"
                          data-mdb-ripple-color="light"
                        >
                          <img
                            src={data.image}
                            className="w-100"
                            alt="Blue Jeans Jacket"
                          />
                        </div>
                      </div>

                      <div className="col-lg-5 col-md-6 mb-4 mb-lg-0">
                        <p>
                          <strong>{data.name}</strong>
                        </p>

                        <button
                          type="button"
                          className="btn btn-primary btn-sm me-1 mb-2"
                          data-mdb-toggle="tooltip"
                          title="Remove item"
                          onClick={() => dispatch(removeCart(data.id))}
                        >
                          <i className="fas fa-trash"></i>
                        </button>
                      </div>

                      <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                        <div
                          className="d-flex mb-4"
                          style={{ maxWidth: "300px" }}
                        >
                          <button
                            className="btn btn-primary px-3 me-2"
                            onClick={() =>
                              dispatch(decreaseItemQuantity(data.id))
                            }
                          >
                            <i className="fas fa-minus"></i>
                          </button>

                          <div className="form-outline">
                            <input
                              id="form1"
                              min="0"
                              name="quantity"
                              value={data.quantity}
                              type="number"
                              className="form-control"
                              onChange={() => null}
                            />
                           
                          </div>

                          <button
                            className="btn btn-primary px-3 ms-2"
                            onClick={() =>
                              dispatch(increaseItemQuantity(data.id))
                            }
                          >
                            <i className="fas fa-plus"></i>
                          </button>
                        </div>

                        <p className="text-start text-md-center">
                          <strong>{data.price}</strong>
                        </p>
                      </div>
                      <hr className="my-4" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card mb-4">
                <div className="card-header py-3">
                  <h5 className="mb-0">Summary</h5>
                </div>
                <div className="card-body">
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                      Total Quantity
                      {/* <span>{totalQuantity}</span> */}
                    </li>

                    <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                      <div>
                        <strong>Total amount</strong>
                      </div>
                      <span>
                        {/* <strong>{totalPrice}</strong> */}
                      </span>
                    </li>
                  </ul>

                  <button
                    type="button"
                    className="btn btn-primary btn-lg btn-block"
                  >
                    Go to checkout
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

        </Layout>

    )
}

export default ShopingCardInfo;