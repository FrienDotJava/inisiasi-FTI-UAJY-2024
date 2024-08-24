import { FC } from "react";
import { Navbar } from "flowbite-react";

const Nav: FC = () => {
  return (
    <Navbar
      fluid
      className="fixed top-0 left-0 right-0 mb-12 font-montserrat bg-[#7464D5]/50 text-white z-10"
    >
      <Navbar.Brand href="/">
        <img
          alt="Inisiasi FTI UAJY 2024"
          className="mr-1 lg:ml-32 h-6 sm:h-9"
          src="/images/logo.png"
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold">
          Inisiasi FTI UAJY 2024
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse className="lg:ml-52">
        <Navbar.Link href="/peserta">
          <p className="text-white hover:underline ">PESERTA</p>
        </Navbar.Link>
        <Navbar.Link href="/tugas">
          <p className="text-white hover:underline">TUGAS</p>
        </Navbar.Link>
        {/* <Navbar.Link href="/filosofi">
          <p className="text-white hover:underline">FILOSOFI</p>
        </Navbar.Link> */}
        <Navbar.Link href="/media">
          <p className="text-white hover:underline">MEDIA</p>
        </Navbar.Link>
        {/* <Navbar.Link href="/panitia">
          <p className="text-white hover:underline">PANITIA</p>
        </Navbar.Link> */}
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Nav;
