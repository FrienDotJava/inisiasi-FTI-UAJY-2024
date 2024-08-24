import { FC } from "react";
import NavBaru from "../components/NavBaru";
import Footer from "../components/Footer";

const Peserta: FC = () => {
  return(
    <>
      <div className="bg-gradient-to-b from-[#9C9CFF] to-[#FFFADA]">
        <div className="flex flex-col gap-6 justify-center h-fit">
          <NavBaru />
          <div className="font-astrid text-5xl lg:text-7xl text-[#531C9C] text-center mt-32 [text-shadow:_3px_3px_3px_rgb(255_255_255_/_40%)]">PEMBAGIAN KELOMPOK</div>
          {/* <div className="font-festivalBudaya text-7xl text-white text-center">&</div>
          <div className="font-festivalBudaya text-7xl text-white text-center">Kelulusan</div> */}
        </div>
        <div className="flex justify-center items-center py-20">
          <a href="http://" target="_blank" rel="noopener noreferrer" className="p-5 border-2 border-[#9C9CFF] rounded-full font-sinerva text-xl font-bold bg-[#6868C8] text-white">CEK PEMBAGIAN KELOMPOK</a>
        </div>
        {/* <div className="flex flex-col justify-center items-center h-screen bg-[#83AF97] gap-10">
          <div className="font-poppins text-5xl font-bold text-white">PENGUMUMAN KELULUSAN INISIASI</div>
          <Button gradientDuoTone="greenToBlue" size="xl"><span className="font-poppins text-xl font-bold text-white">CEK DI SINI</span></Button>
        </div> */}
      </div>
      <Footer />
    </>
  );
}

export default Peserta;