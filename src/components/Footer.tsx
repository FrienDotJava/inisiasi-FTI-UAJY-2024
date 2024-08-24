import { FC } from "react";
import { motion } from "framer-motion";
import { SiInstagram, SiLine, SiGmail } from "react-icons/si";

const Footer: FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      viewport={{ once: true }}
      whileInView={{ opacity: 1 }}
    >
      <footer className="hidden lg:block pt-20 flex flex-col items-center justify-center w-full bg-[#FFFADA]">
        <div className="flex flex-col gap-10">
          <div className="grid grid-cols-3 gap-20 justify-center px-20">
            <div className="flex flex-col gap-2">
              <div className="font-sinerva text-3xl">
                INISIASI FTI UAJY 2024
              </div>
              <div className="font-montserrat text-sm">
                FAKULTAS TEKNOLOGI INDUSTRI
              </div>
              <div className="font-montserrat text-sm">
                UNIVERSITAS ATMA JAYA YOGYAKARTA
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <div className="font-sinerva text-3xl">Sosial Media</div>
              <a
                href="https://www.instagram.com/inisiasi_ftiuajy/"
                className="flex w-fit items-center gap-2 font-montserrat transition hover:text-gray-700"
              >
                <SiInstagram />
                Instagram
              </a>
              <a
                href="#"
                className="flex w-fit items-center gap-2 font-montserrat transition hover:text-gray-700"
              >
                <SiLine />
                Line
              </a>
              <a
                href="#"
                className="flex w-fit items-center gap-2 font-montserrat transition hover:text-gray-700"
              >
                <SiGmail />
                Gmail
              </a>
            </div>
            <div className="flex flex-col gap-2 ">
              {/* <img src="/images/map.png" alt="peta-img" className="w-1/2" /> */}
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2518.0363955702587!2d110.41538147578562!3d-7.7792569304790415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a59f1fb2f2b45%3A0x20986e2fe9c79cdd!2sUniversitas%20Atma%20Jaya%20Yogyakarta%20-%20Kampus%203%20Gedung%20Bonaventura%20Babarsari!5e0!3m2!1sen!2sid!4v1692112640253!5m2!1sen!2sid" 
                className="w-full rounded-xl border-4 border-sky-600"
                loading="lazy" 
                
              />
              <div className="font-montserrat text-sm">Jl. Babarsari No.44, Janti, Caturtunggal, Kec. Depok, Kabupaten Sleman, Daerah Istimewa Yogyakarta 55281</div>
            </div>
          </div>
          <div className="col-span-full border-t-2 border-black/20" />
          <div className="col-span-full text-center font-montserrat text-sm opacity-80">
            ©2023 by Muldok & IT Inisiasi FTI UAJY 2023. All rights reserved.
          </div>
        </div>
      </footer>
      <div className="lg:hidden">
        <footer className="relative flex flex-col items-center justify-center w-full bg-[#FFFADA]">
        </footer>
        <div className="bg-[#FFFADA] pt-10">
          <div className="flex flex-col gap-10 justify-center px-10">
            <div className="flex flex-col gap-2">
              <div className="font-sinerva text-3xl tracking-wider">
                INISIASI FTI UAJY 2024
              </div>
              <div className="font-montserrat text-sm">
                FAKULTAS TEKNOLOGI INDUSTRI
              </div>
              <div className="font-montserrat text-sm">
                UNIVERSITAS ATMA JAYA YOGYAKARTA
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <div className="font-sinerva text-3xl tracking-wider">Sosial Media</div>
              <a
                href="https://www.instagram.com/inisiasi_ftiuajy/"
                className="flex w-fit items-center gap-2 font-montserrat transition hover:text-gray-700"
              >
                <SiInstagram />
                Instagram
              </a>
              <a
                href="#"
                className="flex w-fit items-center gap-2 font-montserrat transition hover:text-gray-700"
              >
                <SiLine />
                Line
              </a>
              <a
                href="#"
                className="flex w-fit items-center gap-2 font-montserrat transition hover:text-gray-700"
              >
                <SiGmail />
                Gmail
              </a>
            </div>
            <div className="flex flex-col gap-2 ">
              {/* <img src="/images/map.png" alt="peta-img" className="w-1/2 mx-auto" /> */}
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2518.0363955702587!2d110.41538147578562!3d-7.7792569304790415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a59f1fb2f2b45%3A0x20986e2fe9c79cdd!2sUniversitas%20Atma%20Jaya%20Yogyakarta%20-%20Kampus%203%20Gedung%20Bonaventura%20Babarsari!5e0!3m2!1sen!2sid!4v1692112640253!5m2!1sen!2sid" 
                className="w-full rounded-xl border-4 border-sky-600"
                loading="lazy" 
                
              />
              <div className="font-montserrat text-sm">Jl. Babarsari No.44, Janti, Caturtunggal, Kec. Depok, Kabupaten Sleman, Daerah Istimewa Yogyakarta 55281</div>
            </div>
          </div>
          <div className="col-span-full my-4 border-t-2 border-black/20" />
          <div className="col-span-full text-center font-montserrat text-sm opacity-80">
            ©2024 by Muldok & IT Inisiasi FTI UAJY 2024. All rights reserved.
          </div>
        </div>
      </div>

    </motion.div>
  );
};

export default Footer;