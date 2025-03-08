export default function Navbar() {
  return (
    <nav className="bg-gray-900 fixed tinggi text-white font-medium w-full p-4">
      <div className="container justify-between flex m-auto">
        <h1 className="text-2xl">🌊Kelompok 5</h1>
        <div className="flex font-normal gap-5 items-center">
          <a className="opacity-[0.6] hover:opacity-[1] p-2" href="#beranda">
            Beranda 🏠︎
          </a>
          <a className="opacity-[0.6] hover:opacity-[1] p-2" href="#tentang">
            Tentang ⓘ
          </a>
          <a className="opacity-[0.6] hover:opacity-[1] p-2" href="#sosmed">
            Sosmed Kami 🌐
          </a>
          <a className="opacity-[0.6] hover:opacity-[1] p-2" href="#kontak">
            Kontak ✉︎
          </a>
        </div>
      </div>
    </nav>
  );
}
