import React from 'react';

function Pricing() {
    return ( 
        <section className="container py-5">
            <div className="row align-items-center">
                
                <div className="col-6" mt-5>
                    <h2 className="head text-white">Unbeatable Pricing</h2>
                    <p style={{marginTop : "10px" , color :"#fff" ,lineHeight: "1.8"}}>
                        We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.
                    </p>
                    <a style={{color:"#00E676", textDecoration:"Underline" , textSpacing : "2px"}}>See Pricing </a>
                </div>
                <div className="col-6  mt-5">
                    <div className='row'>
                        <div className='col-6'>
                            <h2 style={{color:"#00E676"}}><i class="bi bi-currency-rupee" style={{color:"#00E676" }}></i>0</h2>
                            <p style={{color:"#fff"}}>Free account opening</p>
                        </div>
                        <div className='col-6'>
                            <h2 style={{color:"#00E676"}}><i class="bi bi-currency-rupee" style={{color:"#00E676" }}></i>0</h2>
                            <p style={{color:"#fff"}}>Free equity delivery and <br/>direct mutual funds</p>
                        </div>
                    </div>
                </div>
            </div>
            
        </section>
    );
}

export default Pricing;