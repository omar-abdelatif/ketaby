import React from 'react';
import Hero from './hero';
import ArabicBooks from './arabicbooks';
import Hot from './hot';
import Testmonial from './testmonial';
import Counter from './counter';
import NewsLetter from './newsletter';

function Index({ product, onAddToCart, categories }) {
    return (
        <React.Fragment>
            <Hero />
            <ArabicBooks product={product} onAddToCart={onAddToCart} categories={categories} />
            <Hot product={product} onAddToCart={onAddToCart} categories={categories} />
            <Testmonial />
            <Counter />
            <NewsLetter />
        </React.Fragment>
    );
}
export default Index;