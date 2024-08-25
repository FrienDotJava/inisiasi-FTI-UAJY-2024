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

const day1 = new Date("2024-08-27");
const day2 = new Date("2024-08-28");
const day3 = new Date("2024-08-29");
const end = new Date("2024-08-30");
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
          <header className="flex flex-col items-center justify-center text-center h-screen overflow-x-hidden">
            <img src="/images/awan1.png" alt="" className="hidden lg:absolute -left-60 top-12 w-2/5 z-9" />
            <img src="/images/awan2.png" alt="" className="hidden lg:absolute right-0 bottom-20 w-2/5 z-9" />
            <img src="/images/ornamen-atas.png" alt="" />
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
            <img src="/images/ornamen-bawah.png" alt="" />
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
                        27 Agustus 2024
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
                        28 Agustus 2024
                      </Timeline.Body>
                    </Timeline.Content>
                  </Timeline.Item>
                  <Timeline.Item className={'w-2/3 ' + (day3.getTime() < current.getTime() && current.getTime() < end.getTime() ? 'animate-pulse' : '') }>
                    <Timeline.Point icon={HiCalendar} />
                    <Timeline.Content className="mt-6">
                      <Timeline.Title className="font-astrid text-5xl text-[#531C9C]">
                        Day 3
                      </Timeline.Title>
                      <Timeline.Body className="font-montserrat text-xl text-[#531C9C] pt-2">
                        29 Agustus 2024
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
                      <Timeline.Title className="font-astrid text-5xl text-[#531C9C]">
                        Day 1
                      </Timeline.Title>
                      <Timeline.Body className="font-montserrat text-xl text-[#531C9C]">
                        27 Agustus 2024
                      </Timeline.Body>
                    </Timeline.Content>
                  </Timeline.Item>
                  <Timeline.Item className={'w-2/3 mb-20' + (day2.getTime() < current.getTime() && current.getTime() < day3.getTime() ? 'animate-pulse' : '') }>
                    <Timeline.Point icon={HiCalendar} />
                    <Timeline.Content className="mt-6">
                      <Timeline.Title className="font-astrid text-5xl text-[#531C9C]">
                        Day 2
                      </Timeline.Title>
                      <Timeline.Body className="font-montserrat text-xl text-[#531C9C]">
                        28 Agustus 2024
                      </Timeline.Body>
                    </Timeline.Content>
                  </Timeline.Item>
                  <Timeline.Item className={'w-2/3 mb-20' + (day3.getTime() < current.getTime() && current.getTime() < end.getTime() ? 'animate-pulse' : '') }>
                    <Timeline.Point icon={HiCalendar} />
                    <Timeline.Content className="mt-6">
                      <Timeline.Title className="font-astrid text-5xl text-[#531C9C]">
                        Day 3
                      </Timeline.Title>
                      <Timeline.Body className="font-montserrat text-xl text-[#531C9C]">
                        29 Agustus 2024
                      </Timeline.Body>
                    </Timeline.Content>
                  </Timeline.Item>
                </Timeline>
              </Flowbite>
            </div>
          </AnimateShow>
        </section>
        <section className="h-fit">
          <AnimateShow className="flex flex-col h-screen items-center justify-center text-center">
            <h2 className="font-sinerva text-5xl text-[#531C9C] [text-shadow:_3px_3px_3px_rgb(255_255_255_/_40%)]">TUGAS DAN PERATURAN</h2>
            <div className="flex gap-10 justify-center items-center py-20">
              <a href="/documents/Peraturan-dan-Poin-Inisiasi.pdf" target="_blank" download className="p-5 border-2 border-[#9C9CFF] rounded-full font-sinerva text-xl font-bold bg-[#6868C8] text-white hover:bg-white hover:text-[#6868C8]">Download Aturan dan Poin Inisiasi</a>
              <a href="/tugas" target="_blank" className="p-5 border-2 border-[#9C9CFF] rounded-full font-sinerva text-xl font-bold bg-[#6868C8] text-white hover:bg-white hover:text-[#6868C8]">Cek Tugas</a>
            </div>
          </AnimateShow>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Home;
