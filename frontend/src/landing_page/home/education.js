import React from "react" ;
function Education (){
    return(
        <section className="container py-5">
            <div className="row align-items-center">
                <div className="col-6">
                    <img src="media/education.svg" alt="education"/>
                </div>
                <div className="col-6" mt-5>
                    <h2 className="head text-white">Free and open market education</h2>
                    <p style={{marginTop : "10px" , color :"#fff"}}>
                        Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.
                    </p>
                    <a style={{color:"#00E676", textDecoration:"Underline" , textSpacing : "2px"}}>Varsity </a>
                    <p style={{marginTop : "10px" , color :"#fff"}}>
                        TradingQ&A, the most active trading and investment community in India for all your market related queries.
                    </p>
                    <a style={{color:"#00E676", textDecoration:"Underline" , textSpacing : "2px"}}>TradingQ&A </a>
                </div>
            </div>
            
        </section>
    );
}
export default Education;