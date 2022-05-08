import { useParams } from "react-router";
import copy from 'copy-to-clipboard';
import React, { useState } from 'react';
import { FacebookShareButton, WhatsappShareButton } from 'react-share';

function ProductDetails({ product, handleAddToCart }) {
    const [Copy, setCopy] = useState('');
    const BookList = product;
    const { productId } = useParams();
    const [Book] = [...BookList.filter((e) => {
        return e.id === productId
    })]
    let x;
    if (product.related_products) {
        x = product.related_products.length
    }
    function NoProduct() {
        return (
            <div className="emptylist">
                <h1>No Related Product Found</h1>
            </div>
        )
    }
    function FilledProduct() {
        return (
            <React.Fragment>
                {product.map(item => (
                    <div key={item.id} className="related-item">
                        {product.related_products.forEach(ele => {
                            <div className="related-item-img">
                                <img src={item.image.url} width='130' height='150' alt={item.name} />
                                <div className="item-txts">
                                    <a href={`${item.id}`}>
                                        <p>{item.name}</p>
                                    </a>
                                    <a href="https://drive.google.com/file/d/1EIgDktx8gYvXDj7KYtMydrypz_SDehqv/view?usp=sharing" target={'blank'} className="btn btn-primary">قراءة و تحميل للكتاب</a>
                                    <button onClick={() => handleAddToCart(item.id)} className="btn btn-primary">أضف الى السلة</button>
                                </div>
                            </div>
                        })}
                    </div>
                ))}
            </React.Fragment>
        )
    }
    const copyToClipboard = () => {
        copy(Copy);
        setCopy(`http://localhost:3000/${productId}`);
    };
    return (
        <div className="product-details">
            <div className="container-fluid">
                {Book && (
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="product-details-content">
                                <div className="product-details-img">
                                    <img src={Book.image.url} width={200} height={300} alt={Book.alt} />
                                    <div className="product-details-txts">
                                        <h3>{Book.name}</h3>
                                        <p className="author">إسم المؤلف: {Book.variant_groups[0].options[0].name}</p>
                                        <p className="pages">عدد الصفحات: {Book.variant_groups[0].options[1].name}</p>
                                        <p className="section">القسم: {Book.variant_groups[0].options[2].name}</p>
                                        <p className="year">سنة النشر: {Book.variant_groups[0].options[3].name}</p>
                                        <p className="category">السعر: {Book.price.formatted_with_code}</p>
                                        <p className="type">صيغة الكتاب: PDF </p>
                                        <p className="desc" dangerouslySetInnerHTML={{ __html: Book.description }} />
                                        <div className="product-details-btns">
                                            <button onClick={() => handleAddToCart(Book.id)} className="btn btn-primary">إضافة الى السلة</button>
                                            <a href={Book.extra_fields[0].name} target={'blank'} className="btn btn-primary">قراءة و تحميل للكتاب</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="product-details-share">
                                    <h3>شارك:
                                        <FacebookShareButton className="btn-primary" url={`https://www.facebook.com/${productId}`} quote={`${Book.name}`} hashtag={'#'} openShareDialogOnClick={true}>
                                            <i className="fab fa-facebook-f"></i>
                                        </FacebookShareButton>
                                        <WhatsappShareButton url={`http://localhost:3000/${productId}`}>
                                            <i className="fab fa-whatsapp"></i>
                                        </WhatsappShareButton>
                                        <button className="btn btn-primary" onClick={copyToClipboard} id="copy">
                                            <i className="fas fa-link"></i>
                                        </button>
                                    </h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="related text-center">
                                <div className="related-title">
                                    <h3>ذات صلة</h3>
                                </div>
                                <div className="related-contents">
                                    {x === 0 ? <FilledProduct /> : <NoProduct />}
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div >
    );
}
export default ProductDetails;