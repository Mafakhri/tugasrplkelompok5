export default function Navbar() {
  return (
    <nav className="bg-gradient-to-b from-gray-900 fixed top-0 w-full text-white font-medium p-15 z-50">
      <div className="container justify-between flex mx-auto">
        <h1 className="text-2xl">🌊Kelompok 5</h1>
        <div className="flex font-normal gap-5 items-center">
          <a className="opacity-60 hover:opacity-100 p-2" href="#beranda">
            Beranda 🏠︎
          </a>
          <a className="opacity-60 hover:opacity-100 p-2" href="#tentang">
            Tentang ⓘ
          </a>
          <a className="opacity-60 hover:opacity-100 p-2" href="#sosmed">
            Sosmed Kami 🌐
          </a>
          <a className="opacity-60 hover:opacity-100 p-2" href="#kontak">
            Kontak ✉︎
          </a>
        </div>
      </div>
    </nav>
  );
}
