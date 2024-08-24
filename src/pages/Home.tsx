import { FC } from "react";
import type { CustomFlowbiteTheme } from 'flowbite-react';
import { Flowbite, Timeline } from "flowbite-react";
// import { Autoplay, EffectCoverflow } from "swiper/modules";
// import { Swiper, SwiperSlide} from "swiper/react";
import "swiper/css/bundle";
import { HiCalendar } from "react-icons/hi";
import Footer from "../components/Footer";
// import Nav from "../components/Nav";
import NavBaru from "../components/NavBaru";
import { motion } from "framer-motion";
import AnimateShow from "../components/AnimateShow";

const customTheme: CustomFlowbiteTheme = {
  timeline: {
    item: {
      point: {
        line: "h-0.5 w-full bg-[#531C9C] sm:flex",
        marker:{
          icon: {
              base: 'h-3 w-3 text-[#531C9C] dark:text-cyan-300',
              wrapper: 'absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-[#9C9CFF] ring-8 ring-[#531C9C] dark:bg-cyan-900 dark:ring-gray-900',
          },
        },
        vertical: ""
      },
    },
  },
};

const day1 = new Date("2023-08-31");
const day2 = new Date("2023-09-01");
const day3 = new Date("2023-09-02");
const end = new Date("2023-09-03");
const current = new Date();

const line1 = "NITI NISPATTI"
const line2 = "KARUNA ADYATAMA"

const sentence = {
  hidden: { opacity: 1},
  visible: {
    opacity: 1,
    transition: {
      delay: 0.5,
      staggerChildren: 0.22,
    },
  },
}
const letter = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
  },
}

const Home: FC = () => {
  return (
    <>
      <div className="overflow-x-hidden overflow-y-hidden bg-gradient-to-b from-[#9C9CFF] to-[#FFFADA]">
        <motion.div 
          className="h-screen w-full "
          initial={{ opacity: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1 }}>
          <NavBaru />
          <header className="flex flex-col items-center justify-center text-center h-screen">
            <motion.h1
              className="font-astrid text-7xl text-[#531C9C] [text-shadow:_3px_3px_3px_rgb(255_255_255_/_40%)]"
              variants={sentence}
              initial="hidden"
              animate="visible"
            >
              {line1.split("").map((char, index) => {
                return (
                  <motion.span key={char + "-" + index} variants={letter}>
                    {char}
                  </motion.span>
                )
              })}
              <br />
              {line2.split("").map((char, index) => {
                return (
                  <motion.span key={char + "-" + index} variants={letter}>
                    {char}
                  </motion.span>
                )
              })}

            </motion.h1>
          </header>
        </motion.div>
        <section className="h-fit">
          <AnimateShow className="flex flex-col h-screen items-center justify-center text-center">
            <h2 className="font-sinerva text-5xl text-[#531C9C] [text-shadow:_3px_3px_3px_rgb(255_255_255_/_40%)]">TIMELINE</h2>
            <div className="w-3/4 h-fit mx-auto mt-20 hidden lg:block">
              <Flowbite theme={{ theme: customTheme }}>
                <Timeline horizontal>
                  <Timeline.Item className={'w-2/3 ' + (day1.getTime() < current.getTime() && current.getTime() < day2.getTime() ? 'animate-pulse' : '') }>
                    <Timeline.Point icon={HiCalendar} />
                    <Timeline.Content className="mt-6">
                      <Timeline.Title className="font-astrid text-5xl text-[#531C9C]">
                        Day 1
                      </Timeline.Title>
                      <Timeline.Body className="font-montserrat text-xl text-[#531C9C] pt-2">
                        31 Agustus 2023
                      </Timeline.Body>
                    </Timeline.Content>
                  </Timeline.Item>
                  <Timeline.Item className={'w-2/3 ' + (day2.getTime() < current.getTime() && current.getTime() < day3.getTime() ? 'animate-pulse' : '') }>
                    <Timeline.Point icon={HiCalendar} />
                    <Timeline.Content className="mt-6">
                      <Timeline.Title className="font-astrid text-5xl text-[#531C9C]">
                        Day 2
                      </Timeline.Title>
                      <Timeline.Body className="font-montserrat text-xl text-[#531C9C] pt-2">
                        01 September 2023
                      </Timeline.Body>
                    </Timeline.Content>
                  </Timeline.Item>
                  <Timeline.Item className={'w-2/3 ' + (day3.getTime() < current.getTime() && current.getTime() < end.getTime() ? 'animate-pulse' : '') }>
                    <Timeline.Point icon={HiCalendar} />
                    <Timeline.Content className="mt-6">
                      <Timeline.Title className="font-astrid text-5xl text-[#531C9C]">
                        Day 3
                      </Timeline.Title>
                      <Timeline.Body className="font-montserrat text-2xl text-[#531C9C] pt-2">
                        02 September 2023
                      </Timeline.Body>
                    </Timeline.Content>
                  </Timeline.Item>
                </Timeline>
              </Flowbite>
            </div>
            <div className="w-3/4 h-fit ml-32 mt-20 lg:hidden">
              <Flowbite theme={{ theme: customTheme }}>
                <Timeline>
                  <Timeline.Item className={'w-2/3 mb-20' + (day1.getTime() < current.getTime() && current.getTime() < day2.getTime() ? 'animate-pulse' : '') }>
                    <Timeline.Point icon={HiCalendar} />
                    <Timeline.Content className="mt-6">
                      <Timeline.Title className="font-festivalBudaya text-5xl text-[#531C9C]">
                        Day 1
                      </Timeline.Title>
                      <Timeline.Body className="font-montserrat text-2xl text-[#531C9C]">
                        31 Agustus 2023
                      </Timeline.Body>
                    </Timeline.Content>
                  </Timeline.Item>
                  <Timeline.Item className={'w-2/3 mb-20' + (day2.getTime() < current.getTime() && current.getTime() < day3.getTime() ? 'animate-pulse' : '') }>
                    <Timeline.Point icon={HiCalendar} />
                    <Timeline.Content className="mt-6">
                      <Timeline.Title className="font-festivalBudaya text-5xl text-[#531C9C]">
                        Day 2
                      </Timeline.Title>
                      <Timeline.Body className="font-montserrat text-2xl text-[#531C9C]">
                        01 September 2023
                      </Timeline.Body>
                    </Timeline.Content>
                  </Timeline.Item>
                  <Timeline.Item className={'w-2/3 mb-20' + (day3.getTime() < current.getTime() && current.getTime() < end.getTime() ? 'animate-pulse' : '') }>
                    <Timeline.Point icon={HiCalendar} />
                    <Timeline.Content className="mt-6">
                      <Timeline.Title className="font-festivalBudaya text-5xl text-[#531C9C]">
                        Day 3
                      </Timeline.Title>
                      <Timeline.Body className="font-montserrat text-2xl text-[#531C9C]">
                        02 September 2023
                      </Timeline.Body>
                    </Timeline.Content>
                  </Timeline.Item>
                </Timeline>
              </Flowbite>
            </div>
          </AnimateShow>
        </section>
        {/* <section className="">
          <AnimateShow className="flex flex-col h-fit lg:h-screen items-center justify-start text-center">
            <h2 className="font-lemonMilk text-7xl text-[#f1eac3]">MATERI</h2>
            <Swiper
              slidesPerView="auto"
              breakpoints={{
                1024:{
                  slidesPerView: 3,
                }
              }}
              autoplay={{ delay: 2000 }}
              centeredSlides
              className="mySwiper w-3/4 my-12"
              coverflowEffect={{
                rotate: 0,
                stretch: -50,
                depth: 100,
                modifier: 1,
                slideShadows: false,
              }}
              effect="coverflow"
              grabCursor={false}
              modules={[EffectCoverflow, Autoplay]}
              
            >
              <SwiperSlide>
                <img src="images/materi1.jpg" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="images/materi1.jpg" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="images/materi1.jpg" />
              </SwiperSlide>
            </Swiper>
          </AnimateShow>
        </section> */}
      </div>
      <Footer />
    </>
  );
};

export default Home;
