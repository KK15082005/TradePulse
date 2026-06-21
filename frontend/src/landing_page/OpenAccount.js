import React from 'react';

function OpenAccount() {
    return (
        <div className="Container p-5">
            <div className="row text-center">
                <h1 className="mt-5" style={{color: "#ffffff"}}>Open a <span style={{color:"#00E676"}}>TradePulse</span> Account</h1>
                <p style={{color: "#fff"}}>Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.</p>
                <button className="p-2 btn btn-success" style={{width:" 15% " , padding :"5px" , margin:"0 auto", background:"#02dd73"} }>Sign Up for Free</button>
            </div>
        </div>
    );
}

export default OpenAccount;