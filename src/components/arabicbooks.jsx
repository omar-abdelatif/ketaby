import { Link } from 'react-router-dom';
import React from 'react';
function ArabicBooks({ onAddToCart, categories }) {
    return (
        <>
            {categories.map(category => (
                <section className={category.slug} key={category.id}>
                    <div className="sec-title">
                        <h1 className="shap">{category.name}</h1>
                    </div>
                    <div className="container">
                        <div className="row">
                            {category.categoriesData.map(product => (
                                <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12" key={product.id}>
                                    <div className="book-item">
                                        <div className="book-img">
                                            <img src={product.image.url} width='245' height='300' alt={product.name} />
                                            <div className="book-cart">
                                                <button className='btn' onClick={() => onAddToCart(product.id, 1)}>
                                                    <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                                                </button>
                                            </div>
                                        </div>
                                        <div className="book-info">
                                            <Link to={`${product.id}`}>
                                                <h5>{product.name}</h5>
                                            </Link>
                                            <p dangerouslySetInnerHTML={{ __html: product.description }} />
                                        </div>
                                    </div>
                                </div>
                            ))}
                            <div className="col-12" >
                                <div className="more-btn">
                                    <Link to={category.slug} id="btn" className="btn btn-primary">المزيد</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            )
            )}
        </>

    );
}
export default ArabicBooks;