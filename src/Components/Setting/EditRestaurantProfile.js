
import React from "react";
import SettingNav from "../SettingNav";
const EditRestaurantProfile = ({ children }) => {
    return (
        <>
           <div className="container-fluid displayflex ">
                <div className="row px-3">
                    {/* <!-- Content area start --> */}
                    <div className=" col-md-12 col-xl-12 col-sm-12 bg-light contantfixwh  justify-content-center " >
                        <div className=" displayflex ">
                        <div className="row">
                             <div className="col-xl-4 col-md-4 ">
                                 <SettingNav/>
                             </div>
                             <div className="col-xl-8 col-md-8 ">
                                <h2>Edit Restaurant Profile </h2>  
                                
                            </div>
                        </div>
                        </div>
                    </div>
                    {/* <!-- Content area start --> */}
                </div>
                <main>{children}</main>
            </div>
                
            
        </>
    );
}
export default EditRestaurantProfile;





