import React from 'react';

function Hero() {
    return (
        <div>
            <h1 className="text-center mt-5" style={{color : "#00E676" , }}>Charges</h1>
            <h4 className="text-center text-white mt-3">List of all charges and taxes.</h4>
            <div className='Container'>
                <div className='row '>
                    <div className='col-4 ml-2'>
                        <img src='media/pricing-eq.svg'alt='price-1' style={{width:"80%"}}/>
                        <h3 className='text-center text-white'>Free Equity Delivery</h3>
                        <p style={{color : "#ffffff83", textAlign:"center"}}>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
                    </div>
                    <div className='col-4'>
                        <img src='media/price2.svg' alt='price-2' style={{width:"80%"}}/>
                        <h3 className='text-center text-white'>Intraday and F&O trades</h3>
                        <p style={{color :" #ffffff83" , textAlign:"center"}}>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
                    </div>
                    <div className='col-4'>
                        <img src='media/price3.svg' alt='price-3' style={{width:"80%"}}/>
                        <h3 className='text-center text-white'>Free direct MF</h3>
                        <p style={{color :" #ffffff83" , textAlign:"center"}}>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
                    </div>
                </div>
            </div>
            </div>
    );
}

export default Hero;