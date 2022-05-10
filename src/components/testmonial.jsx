import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function Testmonial() {
    const testmonial = [
        {
            id: 1,
            img: "/ketaby/imgs/testmonials/1.webp",
            text: "Auto Flow makes it easy to draw stunning flows for creating WireFrame, UserFlows, FlowCharts and Design guide. With AutoFlow Get Closer to your users ",
            name: "Joseph Jackson",
            position: "Product Manager",
            width: "230",
            height: "300",
        },
        {
            id: 2,
            img: "/ketaby/imgs/testmonials/2.webp",
            text: "Auto Flow makes it easy to draw stunning flows for creating WireFrame, UserFlows, FlowCharts and Design guide. With AutoFlow Get Closer to your users ",
            name: "Louisa Stewart",
            position: "Director",
            width: "230",
            height: "300",
        },
        {
            id: 3,
            img: "/ketaby/imgs/testmonials/3.webp",
            text: "Auto Flow makes it easy to draw stunning flows for creating WireFrame, UserFlows, FlowCharts and Design guide. With AutoFlow Get Closer to your users ",
            name: "Alice Elliot",
            position: "Assistant manager",
            width: "230",
            height: "300",
        },
    ];
    const settings = {
        dots: false,
        infinite: true,
        speed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        arrows: false,
        autoplaySpeed: 2000,
        pauseOnHover: true,
    }
    return (
        <section className="testmonials">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12">
                        <div className="slider">
                            <Slider {...settings}>
                                {testmonial.map(testimonial => (
                                    <div className="slider-item d-flex justify-content-evenly align-items-center" key={testimonial.id}>
                                        <div className="testmonial-img">
                                            <img src={testimonial.img} width={testimonial.width} height={testimonial.height} alt="" />
                                        </div>
                                        <div className="testmonial-text">
                                            <div className="quote-left">
                                                <i className="fa-solid fa-quote-left"></i>
                                            </div>
                                            <div className="txt">
                                                <p>{testimonial.text}</p>
                                            </div>
                                            <div className="quote-right">
                                                <i className="fa-solid fa-quote-right"></i>
                                            </div>
                                            <div className="testmonial-name">
                                                <h4>{testimonial.name}</h4>
                                                <p>{testimonial.position}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default Testmonial;