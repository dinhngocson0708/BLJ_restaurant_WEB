import Layout from "../Layout";
import { Container } from 'react-bootstrap'
import { useDispatch, useSelector } from "react-redux";
import { removeCart,getCartTotal, decreaseItemQuantity, increaseItemQuantity, } from '../Component/features/shopingCardSlice'
import { useEffect } from "react";

const ShopingCardInfo = () => {

    const dispatch = useDispatch();
   
    let { items,totalPrice,totalQuantity } = useSelector((state: any) => state.shopingCarRedux);
    console.log("items------------->", items);
    // const cartDataJSON = localStorage.getItem('cart');
    // if (cartDataJSON) {
    //     const cartItems = JSON.parse(cartDataJSON);
    //     // Now you can work with the cartItems array
    //     console.log("cartitemss======777777777777777777==>",cartItems) ;
    // }
    // const cartString = localStorage.getItem('cart');
    // const cartStorage = JSON.parse(cartString|| '[]');
    useEffect(()=>{
        dispatch(getCartTotal())
    },[items])
    console.log("====>",totalPrice)
   if(!(JSON.stringify(localStorage.getItem('loggedInUsername')))){

     
   }
    const itemnew:any=[];
    let ttprice:number;
    items?.map((data:any)=>{
            
        if(data.userName===JSON.stringify(localStorage.getItem('loggedInUsername'))){
            console.log("data",data)
           itemnew.push(data);
           ttprice=data.price*dat
        }else{
            console.log("quang");
        }
    })
    console.log("new=====",itemnew)
    return (
        <Layout>
            {/* <h1>Hello</h1>
            {items?.map(function(el: any){
                return <h2>{el.name}</h2>
                
            })}
             */}

            <section className="h-100 gradient-custom">
                <h3 style={{color:'skyblue', textAlign:'center',paddingTop:'10px'}}> My Shopping cart</h3>
                <div className="container py-5">
                    <div className="row d-flex justify-content-center my-4">
                        <div className="col-md-8">
                            <div className="card mb-4">
                                <div className="card-header py-3">
                                    <div className="row pt-3">
                                        <div className="col-xl-3 col-md-12  mb-lg-0">
                                            <p>
                                                <strong>Hình ảnh</strong>
                                            </p>
                                        </div>

                                        <div className="col-xl-3 col-md-6  mb-lg-0">
                                            <p>
                                                <strong>Tên sản phẩm</strong>
                                            </p>

                                        </div>
                                        <div className="col-xl-1 col-md-6  mb-lg-0">
                                            <p >
                                                <strong>Giá</strong>
                                            </p>

                                        </div>
                                        <div className="col-xl-3 col-md-6 ">
                                            <p>
                                                <strong className="mx-7">Số lượng</strong>
                                            </p>


                                        </div>
                                        <div className="col-xl-1  mb-lg-0">
                                            <p>
                                                <strong>Tống giá</strong>
                                            </p>
                                        </div>
                                        <div className="col-xl-1  mb-4 mb-lg-0">
                                            <p >
                                                <strong>Trạng thái</strong>
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="card-body">
                                    {itemnew?.map((data:any) => (
                                        <div className="row my-7">
                                            <div className="col-xl-3 col-md-12 mb-4 mb-lg-0">
                                                <div className="bg-image hover-overlay hover-zoom ripple rounded" data-mdb-ripple-color="light">
                                                    <img src={data.image} className="w-100" alt="Blue Jeans Jacket" />
                                                </div>
                                            </div>

                                            <div className="col-xl-3 col-md-6 mb-4 mt-5 mb-lg-0">
                                                <p><strong>{data.name}</strong></p>
                                            </div>

                                            <div className="col-xl-1 col-md-6 mt-5 mb-4 mb-lg-0">
                                                <p><strong>{data.price}$</strong></p>
                                            </div>

                                            <div className="col-xl-3 col-md-6 mb-4 mt-5">
                                                <div className="d-flex">
                                                    <button className="btn btn-primary px-3 me-2" onClick={() => dispatch(decreaseItemQuantity(data.id))}>
                                                        <i className="fas fa-minus"></i>
                                                    </button>
                                                    <div className="">
                                                        <input
                                                            id="form1"
                                                            name="quantity"
                                                            value={data.quantity}
                                                            type="number"
                                                            className=""
                                                            style={{ width: '40px', border: 'none', outline: 'none' }}
                                                            onChange={() => null}
                                                        />
                                                    </div>
                                                    <button className="btn btn-primary px-3 ms-2" onClick={() => dispatch(increaseItemQuantity(data.id))}>
                                                        <i className="fas fa-plus"></i>
                                                    </button>
                                                </div>
                                            </div>

                                            <div className="col-xl-1 mt-5">
                                                <p><strong>{data.totalpriceitem}$</strong></p>
                                            </div>

                                            <div className="col-xl-1 mt-5">
                                                <button
                                                    type="button"
                                                    className="btn btn-primary  px-3 ms-2"
                                                    data-mdb-toggle="tooltip"
                                                    title="Remove item"
                                                    onClick={() => dispatch(removeCart(data.id))}
                                                >
                                                    <i className="fas fa-trash"></i>
                                                </button>
                                            </div>
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
                                             
                                               <strong> Quantity:{totalQuantity}</strong>
                                                
                                            </li>

                                            <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                                                <div>
                                                    <strong>Total amount {totalPrice}</strong>
                                                </div>
                                                <span>
                                                    { }
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

    );
                                    

}

export default ShopingCardInfo;