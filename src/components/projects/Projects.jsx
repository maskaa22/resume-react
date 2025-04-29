import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./Projects.css";
import { projects } from "../../constants";
import Project from "../project/Project";
import { GrLinkNext, GrLinkPrevious } from "react-icons/gr";
import { useMediaQuery } from "react-responsive";

export default function Projects() {
  const isDesktop = useMediaQuery({
    query: "(min-width: 1024px) and (max-width: 1279px)",
  });

  const grouped = isDesktop
    ? projects.reduce((acc, _, i) => {
        if (i % 2 === 0) acc.push(projects.slice(i, i + 2));
        return acc;
      }, [])
    : projects.map((p) => [p]);

  return (
    <section id="projects" className={"projects"}>
      <div className="container">
        <h2 className="title">Projects</h2>

        <Swiper
          modules={[Navigation]}
          spaceBetween={50}
          slidesPerView={1}
          navigation={{
            nextEl: ".btn-next",
            prevEl: ".btn-prev",
            disabledClass: "proj-btn-disabled",
          }}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 1,
            },
          }}
        >
          {grouped.map((group, index) => (
            <SwiperSlide key={index}>
              <div className="vertical-slide">
                {group.map((project, idx) => (
                  <Project
                    key={project.id}
                    project={project}
                    imagePosition={idx === 0 ? "rightData" : "leftData"}
                  />
                ))}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="swiper-nav-btns">
          <div className="btn-prev">
            <GrLinkPrevious className="icon-btn-prev" />
          </div>
          <div className="btn-next">
            <GrLinkNext className="icon-btn-next" />
          </div>
        </div>
      </div>
    </section>
  );
}
