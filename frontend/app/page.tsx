import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* خلفية متدرجة */}
        <div className="absolute inset-0 bg-gradient-to-br from-axom-black via-axom-dark to-axom-black" />

        {/* دوائر مضيئة في الخلفية */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-axom-gold/10 rounded-full blur-3xl animate-pulse-gold" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-axom-gold/5 rounded-full blur-3xl animate-float" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-5xl mx-auto">
            {/* الشعار */}
            <div className="mb-8 animate-fade-in">
              <div className="inline-flex items-center gap-3 glass-effect px-6 py-3 rounded-full border border-axom-gold/30">
                <div className="w-3 h-3 bg-axom-gold rounded-full animate-pulse-gold" />
                <span className="text-axom-gold font-medium">
                  بروتوكول القارة السمراء
                </span>
              </div>
            </div>

            {/* العنوان الرئيسي */}
            <h1 className="font-playfair text-5xl md:text-7xl lg:text-8xl font-bold mb-6 animate-slide-up">
              <span className="text-gradient">AXOM</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 mb-4 animate-slide-up font-light">
              بوابتك نحو{" "}
              <span className="text-axom-gold font-semibold">
                الاستثمار الذكي
              </span>{" "}
              في أفريقيا
            </p>

            <p className="text-lg text-gray-400 max-w-3xl mx-auto mb-12 animate-fade-in leading-relaxed">
              منصة متكاملة تجمع بين قوة التقنية اللامركزية وثروات القارة
              السمراء، نقدم لك فرصاً استثمارية استثنائية مدعومة بتقنية
              البلوكتشين.
            </p>

            {/* أزرار CTA */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up">
              <button className="group relative px-8 py-4 bg-gradient-to-r from-axom-gold to-axom-gold-light text-axom-black font-bold rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-axom-gold/30">
                <span className="relative z-10 flex items-center gap-2">
                  ابدأ الاستثمار الآن
                  <svg
                    className="w-5 h-5 group-hover:-translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </button>

              <button className="px-8 py-4 glass-effect border border-axom-gold/50 text-axom-gold font-semibold rounded-xl hover:bg-axom-gold/10 transition-all duration-300 hover:border-axom-gold">
                اكتشف المزيد
              </button>
            </div>
          </div>
        </div>

        {/* سهم التمرير */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <svg
            className="w-6 h-6 text-axom-gold/60"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-4">
              لماذا <span className="text-gradient">AXOM</span>؟
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              نقدم لك منظومة متكاملة من الخدمات والمزايا الاستثنائية
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="group glass-effect p-8 rounded-2xl border border-white/10 hover:border-axom-gold/50 transition-all duration-500 hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-axom-gold to-axom-gold-dark rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg
                  className="w-8 h-8 text-axom-black"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-axom-gold">
                أمان مطلق
              </h3>
              <p className="text-gray-400 leading-relaxed">
                حماية متقدمة بتقنية البلوكتشين مع تشفير من الدرجة العسكرية
                لضمان سلامة استثماراتك.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="group glass-effect p-8 rounded-2xl border border-white/10 hover:border-axom-gold/50 transition-all duration-500 hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-axom-gold to-axom-gold-dark rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg
                  className="w-8 h-8 text-axom-black"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-axom-gold">
                عوائد مميزة
              </h3>
              <p className="text-gray-400 leading-relaxed">
                فرص استثمارية حصرية في أسرع الأسواق نمواً في العالم مع عوائد
                تنافسية.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="group glass-effect p-8 rounded-2xl border border-white/10 hover:border-axom-gold/50 transition-all duration-500 hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-axom-gold to-axom-gold-dark rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg
                  className="w-8 h-8 text-axom-black"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-axom-gold">
                وصول عالمي
              </h3>
              <p className="text-gray-400 leading-relaxed">
                استثمر في أي مكان من العالم مع وصول مباشر لأسواق القارة
                الأفريقية.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-axom-gold/5 via-transparent to-axom-gold/5" />
        <div className="container mx-auto px-6 relative">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="font-playfair text-4xl md:text-5xl font-bold text-gradient mb-2">
                $50M+
              </div>
              <p className="text-gray-400">حجم الاستثمارات</p>
            </div>
            <div className="text-center">
              <div className="font-playfair text-4xl md:text-5xl font-bold text-gradient mb-2">
                15K+
              </div>
              <p className="text-gray-400">مستثمر نشط</p>
            </div>
            <div className="text-center">
              <div className="font-playfair text-4xl md:text-5xl font-bold text-gradient mb-2">
                25+
              </div>
              <p className="text-gray-400">دولة أفريقية</p>
            </div>
            <div className="text-center">
              <div className="font-playfair text-4xl md:text-5xl font-bold text-gradient mb-2">
                99.9%
              </div>
              <p className="text-gray-400">وقت التشغيل</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative">
        <div className="container mx-auto px-6">
          <div className="glass-effect rounded-3xl p-12 md:p-16 text-center border border-axom-gold/20 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-axom-gold to-transparent" />

            <h2 className="font-playfair text-3xl md:text-5xl font-bold mb-6">
              انضم إلى <span className="text-gradient">مستقبل الاستثمار</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-10">
              كن جزءاً من الثورة المالية في أفريقيا واستفد من الفرص الاستثنائية
              التي تقدمها AXOM
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-10 py-4 bg-gradient-to-r from-axom-gold to-axom-gold-light text-axom-black font-bold rounded-xl hover:scale-105 transition-transform duration-300 shadow-lg shadow-axom-gold/20">
                سجّل الآن مجاناً
              </button>
              <button className="px-10 py-4 border-2 border-axom-gold/50 text-axom-gold font-semibold rounded-xl hover:bg-axom-gold/10 transition-all duration-300">
                تواصل معنا
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
