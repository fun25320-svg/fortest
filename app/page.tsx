export default function Home() {
  return (
    <main className="bg-[#0F3D3E] text-white min-h-screen">

      {/* Flag Bar */}
      <div className="flex justify-center pt-6">
        <div className="w-28 h-1 rounded-full bg-gradient-to-r from-black via-white via-green-700 to-red-800 shadow-md"></div>
      </div>

      {/* Hero */}
      <section className="text-center mt-16 px-6">
        <h1 className="text-5xl font-semibold tracking-widest text-[#C8A96A]">
          WELPCO
        </h1>

        <p className="mt-4 text-lg text-gray-300">
          فخامة بمعايير عالية
        </p>

        <p className="text-sm text-gray-400 mt-1">
          Refined by Standards
        </p>

        <button className="mt-8 px-6 py-3 bg-[#1F7A63] hover:bg-[#C8A96A] transition rounded-lg">
          اكتشف المنتجات
        </button>
      </section>

      {/* Products */}
      <section className="mt-20 px-6 grid grid-cols-2 gap-6">
        {[1,2,3,4].map((item) => (
          <div key={item} className="bg-[#0B0B0B] rounded-xl p-4 shadow-lg">

            <img
              src="https://via.placeholder.com/300"
              className="rounded-lg"
            />

            <h3 className="mt-3 text-lg">منتج فاخر</h3>
            <p className="text-sm text-gray-400">₺250</p>

            <a
              href="https://wa.me/905XXXXXXXXX?text=انا مهتم بهذا المنتج"
              target="_blank"
              className="block mt-3 text-center bg-[#1F7A63] hover:bg-[#C8A96A] py-2 rounded"
            >
              اطلب عبر واتساب
            </a>

          </div>
        ))}
      </section>

      {/* About */}
      <section className="mt-20 text-center px-6 pb-20">
        <h2 className="text-2xl text-[#C8A96A] mb-4">من نحن</h2>
        <p className="text-gray-300">
          اسعادكم هي غايتنا
        </p>
      </section>

    </main>
  );
}
