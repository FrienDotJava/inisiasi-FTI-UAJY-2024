import { FC } from "react";
import NavBaru from "../components/NavBaru";
import Footer from "../components/Footer";
import { Card } from "flowbite-react";

const Tugas: FC = () => {
  const tugas = [
    {
      "id": 1,
      "name": "Esai",
      "deskripsi": "Peserta Inisiasi 2024 akan diberi tugas membuat esai singkat tentang pahlawan national berdasarkan nama kelompok secara individu. Esai memuat sejarah singkat serta  mengenai masa hidup dan sifat yang ingin diteladani dari pahlawan dari masing-masing kelompok. Esai dikerjakan dengan ketentuan yang sudah ditentukan (minimal halaman, ukuran indentasi awal, kerapian penulisan dll).",
      "deadline": "29 Agustus 2024 (Day 3) sebelum apel pagi"
    },
    {
      "id": 2,
      "name": "Feeds Instagram",
      "deskripsi": "Peserta inisiasi membuat akun Instagram secara berkelompok, dengan nama akun yang sesuai dengan nama kelompok. Masing-masing anggota wajib mengunggah poster biodata dan caption sesuai dengan kriteria yang telah diberikan.  ",
      "deadline": "27 Agustus 2024 (Day 1) pukul 23:59 WIB"
    },
    {
      "id": 3,
      "name": "Infografis Digital",
      "deskripsi": "Mahasiswa baru wajib membuat infografis yang berisikan pengertian laudatosi, permasalah yang telah terjadi dan solusi terkait dengan laudatosi.",
      "deadline": "28 Agustus 2024 (Day 2) pukul 23.59 WIB"
    },
    {
      "id": 4,
      "name": "Mind Map",
      "deskripsi": "Tugas mind map merupakan tugas yang wajib dilakukan oleh setiap individu peserta inisiasi FTI 2024. Tugas ini dibuat dengan tujuan untuk mendorong mahasiswa untuk memahami empat pilar keatmajayaan. Tugas ini dikumpulkan secara fisik kepada pendamping kelompok masing-masing. ",
      "deadline": "28 Agustus 2024 (DAY 2) sebelum apel pagi"
    },
    {
      "id": 5,
      "name": "Name Tag (Kelompok)",
      "deskripsi": "Atribut Name Tag merupakan suatu tugas secara berkelompok yang perlu disiapkan oleh mahasiswa baru sebelum kegiatan inisiasi berlangsung. Atribut ini bertujuan sebagai pengenal yang berisi foto dan biodata diri.   ",
      "deadline": "27 Agustus 2024 (DAY 1) sebelum apel pagi"
    },
    {
      "id": 6,
      "name": "Pentas Seni",
      "deskripsi": "Setiap peserta inisiasi 2024 akan berkerjasama dengan kelompoknya masing-masing untuk menampilkan pentas seni. Acara pentas seni ini diadakan untuk meningkatan kerjasama dalam kelompok dan kreativitas tiap individu. Setiap kelompok memiliki hak untuk memilih tema yang berkesinambungan dengan tema inisiasi FTI UAJY 2024: Niti Nispatti Karuna Adyatama (Pemimpin berprestasi yang unggul dengan penuh kasih sayang). ",
      "deadline": "Ditampilkan tanggal 29 Agustus 2024 (Day 3)"
    },
    {
      "id": 7,
      "name": "Tanda Tangan Panitia",
      "deskripsi": "Tugas tanda tangan panitia merupakan suatu tugas individu yang dilakukan oleh mahasiswa baru selama kegiatan inisiasi berlangsung dengan tujuan untuk mendapatkan tanda tangan dari setiap anggota panitia inisiasi. Tugas ini juga bertujuan untuk memperkenalkan mahasiswa baru dengan anggota panitia inisiasi, dan agar dapat membangun interaksi sosial antara mahasiswa baru dan anggota panitia inisiasi. Untuk bisa mendapatkan tanda tangan dari para panitia, mahasiswa baru diwajibkan untuk melakukan tantangan atau menjawab pertanyaan yang diberikan oleh panitia, dan apabila gagal dalam melakukan tantangan atau tidak bisa menjawab pertanyaan maka mahasiswa baru diminta untuk mengingat dan mempelajari kembali tantangan dan pertanyaan yang dilakukan. ",
      "deadline": "-"
    },
    {
      "id": 8,
      "name": "Twibbon dan Jargon",
      "deskripsi": "Tugas twibbon dan jargon merupakan tugas yang wajib dilakukan oleh mahasiswa baru, sebelum kegiatan inisiasi dimulai. Tugas ini dibuat dengan tujuan untuk melakukan promosi kegiatan inisiasi. ",
      "deadline": "24 Agustus 2024 (Pra-Inisiasi) pukul 23:59 WIB"
    },
    {
      "id": 9,
      "name": "Video Recap",
      "deskripsi": "Mahasiswa baru Fakultas Teknologi Industri membuat video penjelasan mengenai Unit Kegiatan Fakultas (UKF) dan Laboratorium (LAB) yang ada di fakultas tersebut. Materi dalam video ini berisikan sesuai dengan informasi/materi yang diperoleh dari kegiatan Inisiasi Mahasiswa Baru pada hari pertama dan kedua. ",
      "deadline": "28 Agustus 2024 (Day 2) Pukul 23.59 WIB"
    },
  ];
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
          {tugas.map((tgs) => {
            return(
              <Card className="w-3/4 bg-[#FFFADA] border-0">
                <div className="font-sinerva text-3xl text-[#C47D8C] p-3">{tgs.name}</div>
                <div className="bg-[#C47D8C] text-white p-3 rounded-md font-montserrat">
                  <div className="text-white text-xl font-bold">Deskripsi Tugas</div>
                  <div className="text-sm">
                    {tgs.deskripsi}
                    {/* <ol className="list-decimal ml-4">
                      <li>Membuat yel-yel kelompok</li>
                      <li>Yel-yel maksimal 30 detik</li>
                    </ol> */}
                  </div>
                  <div className="text-white text-xl font-bold pt-2">Deadline Tugas</div>
                  <div className="text-sm">
                    {tgs.deadline}
                  </div>
                </div>
              </Card>
            );
          })}
        </section>

      </div>
      <Footer />
    </>
  );
}

export default Tugas;