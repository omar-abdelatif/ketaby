import { useParams } from "react-router";
import copy from 'copy-to-clipboard';
import React, { useState } from 'react';
import { FacebookShareButton, WhatsappShareButton } from 'react-share';
import NewsLetter from './newsletter';

function ProductDetails({ product, handleAddToCart }) {
    console.log(product);
    const [Copy, setCopy] = useState('');
    const BookList = product;
    const { productId } = useParams();
    const [Book] = [...BookList.filter((e) => {
        return e.id === productId
    })]
    let x;
    if (product[0]) {
        x = product[0].related_products
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
                                        <FacebookShareButton className="btn-primary" url={`https://omar-abdelatif.github.io/ketaby/${Book.id}`} quote={`${Book.name}`} hashtag={'#'} openShareDialogOnClick={true}>
                                            <i className="fab fa-facebook-f"></i>
                                        </FacebookShareButton>
                                        <WhatsappShareButton url={`https://omar-abdelatif.github.io/ketaby/${Book.id}`}>
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
                                    {x && x.map(e => (
                                        <div className="related-item" key={e.id}>
                                            <div className="related-item-img">
                                                <img src={e.image.url} width='130' height='150' alt={e.name} />
                                                <div className="item-txts">
                                                    <a href={`${e.id}`}>
                                                        <p>{e.name}</p>
                                                    </a>
                                                    <a href={process.env.PUBLIC_URL + '/pdf/في قلبي أنثى عبرية.pdf'} className="btn btn-primary">download test</a>
                                                    <a href="https://drive.google.com/file/d/1EIgDktx8gYvXDj7KYtMydrypz_SDehqv/view?usp=sharing" target={'blank'} className="btn btn-primary">قراءة و تحميل للكتاب</a>
                                                    <button onClick={() => handleAddToCart(e.id)} className="btn btn-primary">أضف الى السلة</button>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
            <NewsLetter />
        </div>
    );
}
export default ProductDetails;