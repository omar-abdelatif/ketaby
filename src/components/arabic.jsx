import React from 'react';
import Pagination from './pagination';

function Arabic({ onAddToCart, categories }) {
    let ar;
    if (categories[3]) {
        ar = categories[3].categoriesData
    }
    return (
        <section className="arabic-cat">
            <div className="container">
                <div className="row">
                    {ar && ar.map(product => (
                        <div className="col-lg-3" key={product.id}>
                            <div className='cat-item'>
                                <div className="product-img">
                                    <img src={product.image.url} width={230} height={300} alt="" />
                                    <div className="book-cart">
                                        <button className='btn' onClick={() => onAddToCart(product.id, 1)}>
                                            <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                                        </button>
                                    </div>
                                </div>
                                <div className="product-info">
                                    <h6>
                                        <a href="/">{product.name}</a>
                                    </h6>
                                </div>
                            </div>
                        </div>
                    ))}
                    <div className="col-12">
                        <Pagination count={10} />
                    </div>
                </div>
            </div>
        </section >
    );
}
export default Arabic;