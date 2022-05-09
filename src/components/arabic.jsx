import React from 'react';
// import Pagination from './pagination';
import ReactPaginate from 'react-paginate';
import { useState } from 'react';

function Arabic({ product, onAddToCart, categories }) {
    let ar;
    if (categories[3]) {
        ar = categories[3].categoriesData
    }
    const [books, setBooks] = useState([ar && ar.slice(0, 20)]);
    const [pageNumber, setPageNumber] = useState(0);
    const userPerPage = 20;
    const pagesVisited = pageNumber * userPerPage;
    const displayUsers = ar && ar.slice(pagesVisited, pagesVisited + userPerPage).map(product => (
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
    ))
    const pageCount = Math.ceil(books.length / userPerPage);
    function changePage({ selected }) {
        setPageNumber(selected);
    };
    return (
        <section className="arabic-cat">
            <div className="container">
                <div className="row">
                    {displayUsers}
                    <ReactPaginate
                        previousLabel={"السابق"}
                        nextLabel={"التالي"}
                        pageCount={pageCount}
                        onPageChange={changePage}
                        containerClassName={"paginationBttns"}
                        previousLinkClassName={"previousBttn btn btn-primary"}
                        nextLinkClassName={"nextBttn btn btn-primary"}
                        disabledLinkClassName={"paginationDisabled"}
                        activeClassName={"paginationActive"}
                        pageLinkClassName={"pagenumber"} pageClassName={"pagelistnumber"} />
                </div>
            </div>
        </section >
    );
}
export default Arabic;