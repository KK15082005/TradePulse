import React from 'react';
import Hero from './HeroProducts';
import ProductCards from './ProductCard';
import WhyChoose from './Why';
function ProductPage() {
    return (
        <>
            <Hero/>
            <ProductCards></ProductCards>
            <WhyChoose></WhyChoose>
        </>
    )
}

export default ProductPage;