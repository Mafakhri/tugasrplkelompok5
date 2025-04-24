export default function Judul() {
  return (
    <div className="pt-[35vh] container m-auto text-white text-center flex flex-col items-center">
      <h1
        data-aos="fade-up"
        data-aos-duration="1000"
        className="text-6xl font-semibold"
      >
        Petualangan Tak <span className="text-blue-400">Terlupakan</span> Di
        mulai
        <span className="text-blue-400">Disini!</span>
      </h1>
      <p
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="100"
        className="mt-6 text-2xl text-white-400"
      >
        Klaten sebuah surga tersembunyi di Jawa Tengah, menyimpan beragam
        destinasi wisata yang menakjubkan, mulai dari keindahan alam yang
        memukau, sejarah yang kaya, hingga kuliner khas yang menggugah selera.
        Di sini, kami menghadirkan rekomendasi tempat wisata terbaik di Klaten
        untuk Anda.
      </p>
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="200"
        className="flex mt-10 bg-white text-black items-center p-2 font-medium text-xl gap-5 rounded-xl"
      >
        <h4 className="p-4">Read More -&gt;</h4>
        <a href="#tentang" className="bg-blue-500 p-4 text-white rounded-xl">
          Tentang Website
        </a>
      </div>
    </div>
  );
}
