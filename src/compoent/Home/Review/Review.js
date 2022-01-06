import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import "swiper/components/effect-coverflow/effect-coverflow.min.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";
import "./Review.css";
import SwiperCore, { EffectCoverflow, Navigation, Pagination } from "swiper";
SwiperCore.use([EffectCoverflow, Navigation, Pagination]);
const Review = () => {
  const [review, setReview] = useState([]);
  useEffect(() => {
    fetch("https://powerful-hollows-26581.herokuapp.com/addSReview")
      .then((res) => res.json())
      .then((data) => setReview(data));
  }, []);
  return (
    <div className="Swiper-main" style={{ padding: "80px 0px" }}>
      <p
        style={{
          fontWeight: "bold",
          color: "#1BCBB9",
          mb: 8,
          textAlign: "center",
          fontSize: "40px",
          marginBottom: "50px",
        }}
        variant="h5"
      >
        Happy Buyers Review
      </p>
      <Swiper
        navigation={true}
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        loop={true}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{
          clickable: true,
        }}
        className="mySwiper"
      >
        {review.map((reviewI) => (
          <div>
            <SwiperSlide>
              <div style={{ height: "100%" }}>
                <img src={reviewI.image} alt="" />
                <p className="review-name">{reviewI.name}</p>
                <p className=" review-text">{reviewI.comments}</p>
              </div>
            </SwiperSlide>
          </div>
        ))}
        <SwiperSlide>
          <div style={{ height: "100%" }}>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_nxpK8hGakd69S4D2s3n16cBfebO1M3GmqxPhdQdh7QIbLWZjTU_IZu8PuytbhnNnmLE&usqp=CAU"
              alt=""
            />
            <p className="review-name">Joz Alen</p>
            <p className=" review-text">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore
              tempore debitis quo odit excepturi aut sequi voluptatum alias
              error dolor eaque aspernatur magnam quasi vel neque eos, incidunt
              illo corporis amet exercitationem eligendi ad adipisci qui
              praesentium! Necessitatibus, tenetur officiis.
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Review;
