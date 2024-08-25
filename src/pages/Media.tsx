import { FC } from "react";
import NavBaru from "../components/NavBaru";
import Footer from "../components/Footer";

const Media: FC = () => {
  return(
    <div>
      <div className="flex flex-col justify-center items-center h-fit pt-32 pb-10 bg-gradient-to-b from-[#9C9CFF] to-[#FFFADA]">
        <NavBaru />
        <div className="font-astrid text-7xl text-[#531C9C] [text-shadow:_3px_3px_3px_rgb(255_255_255_/_40%)]">MEDIA</div>
        <div className="flex flex-col lg:flex-row p-10 gap-9 justify-between w-3/4">
          <div className="flex flex-col items-center gap-3 lg:gap-6">
            <div className="font-sinerva text-[#9C9CFF] text-2xl p-4 rounded-full bg-[#FFFADA]">TEASER</div>
            <iframe src="https://youtube.com/embed/o1xUr-5RWM0"></iframe>
          </div>
          <div className="flex flex-col items-center gap-3 lg:gap-6">
            <div className="font-sinerva text-[#9C9CFF] text-2xl p-4 rounded-full bg-[#FFFADA]">DANCE JINGGLE</div>
            <iframe src="https://youtube.com/embed/sxADIafjVAc"></iframe>
          </div>
        </div>
        <div className="flex flex-col items-center gap-6">
          {/* <div className="font-sinerva text-[#9C9CFF] text-2xl p-4 rounded-full bg-[#FFFADA]">TWIBBON</div> */}
          <a href="https://twb.nz/inisiasifti2024" target="_blank" rel="noopener noreferrer" className="p-5 border-2 border-[#9C9CFF] rounded-full font-sinerva text-xl font-bold bg-[#6868C8] hover:bg-white hover:text-[#6868C8] text-white">Link Twibbon</a>
        </div>
        <div className="flex flex-col lg:flex-row p-10 gap-9 justify-between w-3/4">
          <div className="flex flex-col items-center gap-3 lg:gap-6">
            {/* <div className="font-sinerva text-[#9C9CFF] text-2xl p-4 rounded-full bg-[#FFFADA]">YEL-YEL</div> */}
            <a href="https://www.instagram.com/stories/highlights/18034773605321291/" target="_blank" rel="noopener noreferrer" className="p-5 border-2 border-[#9C9CFF] rounded-full font-sinerva text-xl font-bold bg-[#6868C8] hover:bg-white hover:text-[#6868C8] text-white">Link Yel-yel</a>
          </div>
          <div className="flex flex-col items-center gap-3 lg:gap-6">
            {/* <div className="font-sinerva text-[#9C9CFF] text-2xl p-4 rounded-full bg-[#FFFADA]">JARGON</div> */}
            <a href="https://www.instagram.com/stories/highlights/18069831871577640/" target="_blank" rel="noopener noreferrer" className="p-5 border-2 border-[#9C9CFF] rounded-full font-sinerva text-xl font-bold bg-[#6868C8] hover:bg-white hover:text-[#6868C8] text-white">Link Jargon</a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Media;