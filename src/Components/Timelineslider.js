import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


const TimelineSlider = () => {
  const timelineData = [
    {
      year: "2020",
      description: "First UK company to be granted automated vehicle permit recommendation by TÜV SÜD to conduct live trials in Germany.",
      icon: "https://via.placeholder.com/80?text=TUV",
    },
    {
      year: "2019",
      description: "First autonomous passenger rides as part of the DRIVEN project.",
      icon: "https://via.placeholder.com/80?text=Car",
    },
    {
      year: "2018",
      description: "First autonomous trial airside at Heathrow Airport, UK.",
      icon: "https://via.placeholder.com/80?text=Plane",
    },
    {
      year: "2017",
      description: "Ocado Technology conducts its first autonomous trial.",
      icon: "https://via.placeholder.com/80?text=Tech",
    },
    {
      year: "2020",
      description: "First UK company to be granted automated vehicle permit recommendation by TÜV SÜD to conduct live trials in Germany.",
      icon: "https://via.placeholder.com/80?text=TUV",
    },
    {
      year: "2019",
      description: "First autonomous passenger rides as part of the DRIVEN project.",
      icon: "https://via.placeholder.com/80?text=Car",
    },
    {
      year: "2018",
      description: "First autonomous trial airside at Heathrow Airport, UK.",
      icon: "https://via.placeholder.com/80?text=Plane",
    },
    {
      year: "2017",
      description: "Ocado Technology conducts its first autonomous trial.",
      icon: "https://via.placeholder.com/80?text=Tech",
    },
  ];

  return (
    <div className="timeline-slider-container">
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        slidesPerView={3}
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
      >
        {timelineData.map((item, index) => (
          <SwiperSlide key={index} className="timeline-card">
            <div className="timeline-slide-content text-center">
              <img src={item.icon} alt={item.year} className="timeline-icon mb-3" />
              <h3>{item.year}</h3>
              <p>{item.description}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TimelineSlider;
