import React from "react";
import Ai from "./Ai";

const Home = () => {
  return (
    <>
      <Ai />
      <div className="bg" id="beranda">
        <nav className="bg-gray-900 fixed tinggi text-white font-medium w-full p-4">
          <div className="container justify-between flex m-auto">
            <h1 className="text-2xl">🌊Kelompok 5</h1>
            <div className="flex font-normal gap-5 items-center">
              <a
                className="opacity-[0.6] hover:opacity-[1] p-2"
                href="#beranda"
              >
                Beranda 🏠︎
              </a>
              <a
                className="opacity-[0.6] hover:opacity-[1] p-2"
                href="#tentang"
              >
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
        <div className="pt-[35vh] container m-auto text-white text-center flex flex-col items-center">
          <h1
            data-aos="fade-up"
            data-aos-duration="1000"
            className="text-7xl font-semibold"
          >
            Petualangan Tak <span className="text-blue-400">Terlupakan</span> Di
            mulai
            <span className="text-blue-600">Disini!</span>
          </h1>
          <p
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="100"
            className="mt-6 text-2xl text-gray-400"
          >
            Klaten sebuah surga tersembunyi di Jawa Tengah, menyimpan beragam
            destinasi wisata yang menakjubkan, mulai dari keindahan alam yang
            memukau, sejarah yang kaya, hingga kuliner khas yang menggugah
            selera. Di sini, kami menghadirkan rekomendasi tempat wisata terbaik
            di Klaten untuk Anda.
          </p>
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="200"
            className="flex mt-10 bg-white text-black items-center p-2 font-medium text-xl gap-5 rounded-xl"
          >
            <h4 className="p-4">Read More -&gt;</h4>
            <a
              href="#tentang"
              className="bg-blue-500 p-4 text-white rounded-xl"
            >
              Tentang Website
            </a>
          </div>
        </div>
      </div>
      <div className="container mt-[-15vh] mx-auto">
        <div className="grid grid-cols-4 gap-4 p-4">
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="100"
            className="w-full"
          >
            <figure
              className="flex flex-col items-center text-center cursor-pointer transition-transform duration-300 hover:scale-105 active:scale-95"
              onClick={() =>
                window.open(
                  "https://jadesta.kemenparekraf.go.id/desa/ponggok",
                  "_blank"
                )
              }
            >
              <img
                className="w-full h-64 object-cover rounded-lg shadow-lg"
                src="img/umbulponggok.jpg"
                alt="Umbul Ponggok"
              />
              <figcaption className="mt-5 text-black-600 text-lg font-bold">
                Umbul Ponggok
              </figcaption>
            </figure>
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="400"
            className="w-full"
          >
            <figure
              className="flex flex-col items-center text-center cursor-pointer transition-transform duration-300 hover:scale-105 active:scale-95"
              onClick={() =>
                window.open("https://www.newrivermoon.com/", "_blank")
              }
            >
              <img
                className="w-full h-64 object-cover rounded-lg shadow-lg"
                src="img/rivermoon.webp"
                alt="Rivermoon"
              />
              <figcaption className="mt-5 text-black-600 text-lg font-bold">
                Rivermoon
              </figcaption>
            </figure>
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="800"
            className="w-full"
          >
            <figure
              className="flex flex-col items-center text-center cursor-pointer transition-transform duration-300 hover:scale-105 active:scale-95"
              onClick={() =>
                window.open(
                  "https://id.wikipedia.org/wiki/Rowo_Jombor",
                  "_blank"
                )
              }
            >
              <img
                className="w-full h-64 object-cover rounded-lg shadow-lg"
                src="img/rowojombor.jpg"
                alt="Rowo Jombor"
              />
              <figcaption className="mt-5 text-black-600 text-lg font-bold">
                Rowo Jombor
              </figcaption>
            </figure>
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="1200"
            className="w-full"
          >
            <figure
              className="flex flex-col items-center text-center cursor-pointer transition-transform duration-300 hover:scale-105 active:scale-95"
              onClick={() =>
                window.open(
                  "https://disporapar.jatengprov.go.id/post/105/CANDI-PLAOSAN-LAMBANG-LOYALITAS-DAN-KEHARMONISAN",
                  "_blank"
                )
              }
            >
              <img
                className="w-full h-64 object-cover rounded-lg shadow-lg"
                src="img/candi.webp"
                alt="Candi Plaosan"
              />
              <figcaption className="mt-5 text-black-600 text-lg font-bold">
                Candi Plaosan
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
      <div className="container py-[10vh] m-auto" id="tentang">
        <div className="flex justify-between gap-10">
          <div
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-delay="100"
            className="flex text-lg gap-6 w-full flex-col"
          >
            <h1 className="text-4xl">Tentang Kami</h1>
            <p>
              Halo! Selamat datang di Jelajah Klaten, tempat terbaik buat kamu
              yang mau tahu serunya wisata di Klaten. Di sini, kamu bisa
              menemukan keindahan alam, kekayaan budaya, dan semua hal seru yang
              bikin Klaten layak jadi tujuan piknik kamu. Kami juga mendukung
              upaya pemerintah daerah untuk memajukan pariwisata dan
              menggerakkan ekonomi kreatif lokal.
            </p>
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="100"
            className="w-[7px] bg-gray-300"
          ></div>
          <div
            data-aos="fade-left"
            data-aos-duration="1000"
            data-aos-delay="100"
            className="flex flex-col gap-6 w-full text-lg"
          >
            <h1 className="text-4xl">Visi</h1>
            <p>
              Menjadikan Klaten sebagai destinasi wisata unggulan dengan
              menghadirkan informasi yang akurat, menarik, dan inspiratif bagi
              wisatawan lokal maupun mancanegara. Serta menjadikan Klaten
              sebagai destinasi wisata favorit dengan menghadirkan pengalaman
              digital yang informatif, interaktif, dan inspiratif bagi
              wisatawan.
            </p>
          </div>
        </div>
      </div>
      <div className="container pb-[10vh] m-auto">
        <div className="flex justify-between gap-10">
          <div
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-delay="100"
            className="flex text-lg gap-6 w-full flex-col"
          >
            <h1 className="text-4xl">Prinsip Kami</h1>
            <ol className="list-decimal ml-5 space-y-2">
              <li>
                Informasi Akurat & Terpercaya, Menyajikan informasi yang valid,
                terbaru, dan dapat dipercaya mengenai destinasi wisata di
                Klaten.
              </li>
              <li>
                {" "}
                Interaktif & Inspiratif, Memberikan pengalaman interaktif
                melalui foto, video, dan ulasan yang menginspirasi wisatawan.
              </li>
              <li>
                Berorientasi pada Wisata Berkelanjutan, Mendorong pariwisata
                yang ramah lingkungan, budaya, dan sosial.
              </li>
              <li>
                Kolaboratif, Bekerja sama dengan komunitas, pemerintah, dan
                pelaku wisata untuk mengembangkan potensi wisata Klaten.
              </li>
              <li>
                Keamanan & Kenyamanan, Memberikan informasi tentang tips
                perjalanan aman dan fasilitas yang tersedia di setiap destinasi.
              </li>
            </ol>
          </div>
          <div className="w-[5px] bg-gray-300"></div>
          <div
            data-aos="fade-left"
            data-aos-duration="1000"
            data-aos-delay="100"
            className="flex flex-col gap-6 w-full text-lg"
          >
            <h1 className="text-4xl">Misi</h1>
            <ol className="list-decimal ml-5 space-y-2">
              <li>
                Menyediakan informasi lengkap dan terpercaya tentang destinasi
                wisata di Klaten, termasuk wisata alam, budaya, sejarah, dan
                kuliner.
              </li>
              <li>
                Memudahkan wisatawan dalam merencanakan perjalanan dengan fitur
                panduan perjalanan, rekomendasi tempat, dan peta interaktif.
              </li>
              <li>
                Mempromosikan usaha lokal, seperti penginapan, kuliner khas, dan
                oleh-oleh khas Klaten.
              </li>
              <li>
                Meningkatkan kesadaran masyarakat tentang potensi wisata Klaten
                melalui artikel, foto, dan video berkualitas.
              </li>
              <li>
                Berkolaborasi dengan komunitas lokal dan pemerintah daerah untuk
                mendukung pengembangan pariwisata yang berkelanjutan.
              </li>
            </ol>
          </div>
        </div>
      </div>
      {/* <div className="bg2"></div> */}
      <section>
        <div className="container mx-auto">
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="500"
            className="flex flex-col items-center p-4 rounded-1xl"
          >
            <div className="grid grid-cols-1 gap-1 p-9">
              <img src="img/rekomendasi.png" alt="hell nah" />
            </div>
          </div>
        </div>
      </section>
      <div className="bg2 flex items-center justify-center">
        <iframe
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="400"
          width="80%"
          height="100%"
          src="https://www.youtube.com/embed/pw5jL2xav2A?si=VM1pw1ic5cPgJt4j"
          title="YouTube video"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>

      <div className="container mx-auto">
        <div className="grid grid-cols-4 gap-4 p-4">
          <div
            className="w-full"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <figure
              className="flex flex-col items-center text-center cursor-pointer transition-transform duration-300 hover:scale-105 active:scale-95"
              onClick={() => window.open("https://umbulpelem.com/", "_blank")}
            >
              <img
                className="w-full h-64 object-cover rounded-lg shadow-lg"
                src="img/umbulpelem.jpg"
                alt="Umbul Pelem"
              />
              <figcaption className="mt-5 text-black-600 text-lg font-bold">
                Umbul Pelem
              </figcaption>
            </figure>
          </div>

          <div
            className="w-full"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="200"
          >
            <figure
              className="flex flex-col items-center text-center cursor-pointer transition-transform duration-300 hover:scale-105 active:scale-95"
              onClick={() =>
                window.open(
                  "https://bob.kemenparekraf.go.id/307673-taman-lampion-klaten/",
                  "_blank"
                )
              }
            >
              <img
                className="w-full h-64 object-cover rounded-lg shadow-lg"
                src="img/lampion.jpg"
                alt="Lampion"
              />
              <figcaption className="mt-5 text-black-600 text-lg font-bold">
                Taman Lampion
              </figcaption>
            </figure>
          </div>

          <div
            className="w-full"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="200"
          >
            <figure
              className="flex flex-col items-center text-center cursor-pointer transition-transform duration-300 hover:scale-105 active:scale-95"
              onClick={() =>
                window.open(
                  "https://id.wikipedia.org/wiki/Deles_Indah",
                  "_blank"
                )
              }
            >
              <img
                className="w-full h-64 object-cover rounded-lg shadow-lg"
                src="img/deles.jpg"
                alt="Deles Indah"
              />
              <figcaption className="mt-5 text-black-600 text-lg font-bold">
                Deles Indah
              </figcaption>
            </figure>
          </div>

          <div className="w-full" data-aos="fade-left" data-aos-duration="1000">
            <figure
              className="flex flex-col items-center text-center cursor-pointer transition-transform duration-300 hover:scale-105 active:scale-95"
              onClick={() =>
                window.open(
                  "https://apik.klaten.go.id/tempat-wisata/bukit-sidoguro",
                  "_blank"
                )
              }
            >
              <img
                className="w-full h-64 object-cover rounded-lg shadow-lg"
                src="img/sidoguro.jpg"
                alt="Sidoguro"
              />
              <figcaption className="mt-5 text-black-600 text-lg font-bold">
                Bukit Sidoguro
              </figcaption>
            </figure>
          </div>
        </div>
      </div>

      <div className="container m-auto my-[25vh]" id="sosmed">
        <div className="flex gap-15 items-center">
          <div className="w-full flex gap-5 items-center">
            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="1000"
              className="flex flex-col items-center border border-black p-10 rounded-2xl"
            >
              <img src="ig2.svg" alt="Instagram" />
              <h1 className="mt-3">INSTAGRAM</h1>
              <a href="https://www.instagram.com/">@instagram</a>
            </div>
            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="1000"
              className="flex flex-col items-center border border-black p-10 rounded-2xl"
            >
              <img src="fb.svg" alt="Facebook" />
              <h1 className="mt-3">Facebook</h1>
              <a href="https://www.facebook.com/?locale=id_ID">@facebokk</a>
            </div>
            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="1000"
              className="flex flex-col items-center border border-black p-10 rounded-2xl"
            >
              <img src="tiktok.svg" alt="TikTok" />
              <h1 className="mt-3">Tiktok</h1>
              <a href="https://www.tiktok.com/?kuid=31b6d78a-c086-437f-9ab0-df56eaf7fd8b&kref=vGWRdzLJnjYf">
                @tiktok
              </a>
            </div>
          </div>
          <h1
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="150"
            className="text-5xl w-full"
          >
            𝚈𝚞𝚔𝚔, 𝚒𝚔𝚞𝚝𝚒 𝚜𝚘𝚜𝚖𝚎𝚍 𝚔𝚊𝚖𝚒 𝚞𝚗𝚝𝚞𝚔 𝚒𝚗𝚏𝚘 𝚢𝚊𝚗𝚐 𝚕𝚎𝚋𝚒𝚑 𝚄𝚙𝚍𝚊𝚝𝚎😉!!
          </h1>
        </div>
      </div>
      <div className="container m-auto mb-[35vh]" id="kontak">
        <div className="flex gap-10 items-start">
          <div className="flex w-full flex-col">
            <h1
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="100"
              className="text-4xl"
            >
              𝗛𝘂𝗯𝘂𝗻𝗴𝗶 𝗞𝗮𝗺𝗶
            </h1>
            <p
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="400"
              className="text-2xl"
            >
              Terimakasih telah mengunjungi website kami, jika anda memiliki
              kritik, saran, atau masukan, silahkan hubungi kami melalui email
              kami yang sudah kami sediakan dikanan
            </p>
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="200"
            className="flex w-full gap-5 flex-col"
          >
            <input
              className="border border-gray-400 p-4 text-xl rounded-2xl"
              type="text"
              placeholder="𝙄𝙣𝙥𝙪𝙩 𝙀𝙢𝙖𝙞𝙡"
            />
            <input
              className="border border-gray-400 p-4 text-xl rounded-2xl"
              type="text"
              placeholder="𝙄𝙣𝙥𝙪𝙩 𝙉𝙤𝙩𝙚𝙨"
            />
            <button className="bg-blue-500 p-4 text-white text-xl font-medium rounded-xl">
              Submit
            </button>
          </div>
        </div>
      </div>
      <footer className="bg-gray-900 text-center text-white text-xl p-10">
        <p>
          © 2025 Kelompok 5 | Tempat Wisata di Klaten
          <br />
          Anggota kelompok : Jasmine(16), Fakhri(25), Samudra(34)
        </p>
      </footer>
    </>
  );
};

export default Home;
