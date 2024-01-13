import React, {useState} from 'react'
import "./Tab.css";
import Arts from "./arts";
import Footer from './Footer'
import Navigationbar from './Navigationbar';
import Axios from 'axios';

const Artworks = () => {
    const url="http://localhost:3006/data";
    const [items, setItems] = useState(Arts);
    const[cart,setCart] =useState();
    
    const filterItem = (categItem) => {
        const updatedItems = Arts.filter((curElem) => {
            return curElem.category === categItem;
        });
        setItems(updatedItems);
    }
    
    const handleCart=(id)=>{
        const cartItems = Arts.filter((curElem) => {
            return curElem.id === id;
        });

        cartItems.map((data)=>{
            const response = Axios.post(url,data,{headers:{"Content-Type" : "application/json"}});
        })
        
    }

    return (
        <>
   <Navigationbar />

   <h1 className="mt-5 text-center main-heading">Order Your Favourite ArtWork</h1>
   <hr />
            
            <div className="Arts-tabs container">
                <div className="Arts-tab d-flex justify-content-around">
                    <button style={{backgroundColor:"#7DE5ED"}} className="btn btn-primary" onClick={() => filterItem('paintings')}>Paintings</button>
                    <button style={{backgroundColor:"#7DE5ED"}} className="btn btn-primary" onClick={() => filterItem('sketching')}>Sketching</button>
                    <button style={{backgroundColor:"#7DE5ED"}} className="btn btn-primary" onClick={() => filterItem('hooparts')}>HoopArts</button>
                    <button style={{backgroundColor:"#7DE5ED"}} className="btn btn-primary" onClick={() => filterItem('others')}>Others</button>
                    <button style={{backgroundColor:"#7DE5ED"}} className="btn btn-primary" onClick={() => setItems(Arts)}>All</button>
                </div>
            </div>

            {/* my main items section  */}
            <div className="Arts-items container-fluid mt-5">
                <div className="row">
                    <div className="col-11 mx-auto">
                        <div className="row my-5">
                            {
                                items.map((elem) => {
                                    const { id, name, image, description, price } = elem ;
                                    return (
                                        <div className="item1 col-12 col-md-6 col-lg-6 col-xl-4 my-5">
                                            <div className="row Item-inside">
                                                {/* for images */}
                                                <div className="col-12 col-md-12 col-lg-4 img-div">
                                                    <img src={image} alt={name} className="img-fluid"/>
                                                </div>

                                                {/* Arts items description */}
                                                <div className="col-12 col-md-12 col-lg-8">
                                                    <div className="main-title pt-4 pb-3">
                                                        <h1>{name}</h1>
                                                        <p>{description }</p>
                                                    </div>
                                                    <div className="Arts-price-book">
                                                        <div className="price-book-divide d-flex justify-content-between ">
                                                            <h2>Price : {price}</h2>
                                                            <a href="#">
                                                                <button className="btn btn-primary" onClick={()=>handleCart(id)}>Order Now</button>
                                                            </a>
                                                        </div>
                                                        <p>*Prices may vary</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                                
                        </div>
                    </div>
                </div>
            </div>


        <Footer />

        </>
    )
}

export default Artworks