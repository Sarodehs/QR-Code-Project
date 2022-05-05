
import React from "react";
import SettingNav from "../SettingNav";
const ChangeTheme = ({ children }) => {
    return (
        <>
           <div className="container-fluid displayflex ">
                <div className="row px-2">
                    {/* <!-- Content area start --> */}
                    <div className=" col-md-12 col-xl-12 col-sm-12 bg-light contantfixwh  justify-content-center " >
                        <div className=" displayflex ">
                        <div className="row">
                             <div className="col-xl-2 col-md-4 col-sm-8">
                                 <SettingNav/>
                             </div>
                             <div className="col-xl-10 col-md-12 col-sm-12">
                             <div className="row ">
                                       
                                       <div className=" col-md-12 col-xl-4  col-sm-12 p-4" >
                                       <h3 className="text-center">Select Theme</h3>
                                           <div className="mx-5 card p-4">
                                           <img src="/assets/images/theme.png" className="img-fluid" alt="img" />

                                            <div className="d-grid gap-2 col-xl-3 col-md-3 col-sm-3 mx-auto ">
                                               <button className="btn buttonfocuscolor" type="button" >SAVE</button>
                                           </div>
                                           </div>
                                           
                                       </div>
                                      
                                        <div className=" col-md-12 col-xl-6 col-sm-12 mb-5 p-4" >
                                       <h3 className="text-center">Preview</h3>
                                           <div className="mx-5 p-5 card w-75">
                                           <img src="/assets/images/previewtheme.png" className="img-fluid" alt="img" />
                                           </div>
                                       </div> 
                                   </div>
                                
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
export default ChangeTheme;



