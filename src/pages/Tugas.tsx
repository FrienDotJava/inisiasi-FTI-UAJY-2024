import { FC } from "react";
import NavBaru from "../components/NavBaru";
import Footer from "../components/Footer";
import { Card } from "flowbite-react";

const Tugas: FC = () => {
  return(
    <>
      <div className="bg-gradient-to-b from-[#9C9CFF] to-[#FFFADA]">
        <div className="flex flex-col justify-center items-center h-fit">
          <NavBaru />
          <div className="flex flex-row gap-10 w-3/4 justify-center items-center mt-32">
            <h1 className="font-astrid text-5xl lg:text-7xl text-[#531C9C] [text-shadow:_3px_3px_3px_rgb(255_255_255_/_40%)]">TUGAS</h1>
          </div>
        </div>
        <section className="flex flex-col gap-7 justify-center items-center h-center lg:px-32 py-10">
          <Card className="w-3/4 bg-[#FFFADA] border-0">
            <div className="font-sinerva text-3xl text-[#C47D8C] p-3">TUGAS 1</div>
            <div className="bg-[#C47D8C] text-white p-3 rounded-md font-montserrat">
              <div className="text-white text-xl font-bold">Deskripsi Tugas</div>
              <div>
                <ol className="list-decimal ml-4">
                  <li>Membuat yel-yel kelompok</li>
                  <li>Yel-yel maksimal 30 detik</li>
                </ol>
              </div>
            </div>
          </Card>
        </section>

      </div>
      <Footer />
    </>
  );
}

export default Tugas;