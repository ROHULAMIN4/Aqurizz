import React from "react";
import "./FIsh.css";
import Slider from "react-slick";

const Fishs = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const fishs = [
    {
      image: "https://i.postimg.cc/tCbnSQFZ/shop-1-copyright-405x310.jpg",
      name: "VAIL TAIL BETTA FISH",
      id: "1",
    },
    {
      image: "https://i.postimg.cc/x1xk1XhM/shop-2-copyright.jpg",
      id: "2",
      name: "HALF MOON BETTA FISH",
    },
    {
      image: "https://i.postimg.cc/gkKX1SKM/shop-4-copyright-405x310.jpg",
      id: "3",
      name: "FLOWER TAIL BETTA FISH",
    },
    {
      image: "https://i.postimg.cc/qvMhrsbp/shop-5-copyright-405x310.jpg",
      id: "4",
      name: "FLOWER TAIL BETTA FISH",
    },
    {
      image: "  https://i.postimg.cc/W4ddF2cK/shop-6-copyright.jpg",
      id: "6",
      name: "FLOWER TAIL BETTA FISH",
    },
  ];

  return (
    <Slider {...settings}>
      {fishs.map((fish) => (
        <>
          <article
            type="button"
            style={{ height: "400px", width: "300px", background: "#fff" }}
          >
            <aside style={{ height: "300px", width: "300px" }}>
              <img width="300" src={fish.image} alt={fish.name} />
            </aside>

            <h6
              style={{
                width: "300px",
                textAlign: "center",
                background: "#fff",
                paddingTop: 0,
              }}
            >
              {fish.name}
            </h6>
          </article>
        </>
      ))}
    </Slider>
  );
};

export default Fishs;
