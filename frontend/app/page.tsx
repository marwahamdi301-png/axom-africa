import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen">
      <section className="relative flex items-center justify-center min-h-screen overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,160,23,0.08)_0%,transparent_70%)]" />
        <div className="text-center z-10 px-6 max-w-5xl mx-auto">
          <div className="inline-block bg-gold/10 border border-gold/30 rounded-full px-6 py-2 mb-8">
            <span className="text-gold text-sm font-semibold">🌍 The Brown Continent Protocol</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-bold gold-text mb-6 leading-tight">
            القارة السمراء
          </h1>
          <p className="text-2xl md:text-3xl text-gray-300 mb-6 font-light">
            AXOM Protocol
          </p>
          <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            منصة تقنية عالمية لإنهاض شمال أفريقيا والقارة الأفريقية من خلال الذكاء الاصطناعي، التعليم، والتمويل التأثيري.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/dashboard" className="btn-primary text-xl">
              🚀 دخول المنصة
            </Link>
            <Link href="/whitepaper" className="btn-outline text-xl">
              📄 الوايت بيبر
            </Link>
          </div>
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
            {[
              { label: "إجمالي المستخدمين", value: "12,450+" },
              { label: "مشاريع ممولة", value: "18" },
              { label: "إيرادات المنصة", value: "$124K" },
              { label: "دول أفريقية", value: "12" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-3xl font-bold gold-text">{stat.value}</p>
                <p className="text-gray-500 text-sm mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
