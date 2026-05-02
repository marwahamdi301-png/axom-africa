"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // 🔧 هنا سيتم ربط التسجيل بـ API أو Server Action لاحقاً
    // محاكاة عملية التسجيل
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsLoading(false);
    router.push("/dashboard");
  };

  return (
    <main className="min-h-screen flex items-center justify-center relative overflow-hidden bg-axom-black">
      {/* خلفية متدرجة */}
      <div className="absolute inset-0 bg-gradient-to-br from-axom-black via-axom-dark to-axom-black" />

      {/* تأثيرات الإضاءة الذهبية */}
      <div className="absolute top-[-20%] right-[-10%] w-96 h-96 bg-axom-gold/10 rounded-full blur-3xl animate-pulse-gold" />
      <div className="absolute bottom-[-20%] left-[-10%] w-80 h-80 bg-axom-gold/5 rounded-full blur-3xl animate-float" />

      {/* نمط خريطة أفريقيا */}
      <div className="absolute inset-0 africa-pattern opacity-5 pointer-events-none" />

      {/* المحتوى */}
      <div className="relative z-10 w-full max-w-md px-6">
        <div className="glass-effect border border-axom-gold/20 rounded-3xl p-8 md:p-10 shadow-2xl shadow-axom-gold/5 animate-fade-in">
          {/* الشعار والعنوان */}
          <div className="text-center mb-8">
            <Link href="/" className="inline-block mb-4 group">
              <div className="w-16 h-16 mx-auto bg-gradient-to-br from-axom-gold to-axom-gold-dark rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg shadow-axom-gold/20">
                <span className="font-playfair text-axom-black font-bold text-2xl">A</span>
              </div>
            </Link>
            <h1 className="font-playfair text-3xl font-bold text-gradient mb-2">
              انضم إلى AXOM
            </h1>
            <p className="text-gray-400 text-sm">
              أنشئ حسابك وابدأ رحلتك الاستثمارية في القارة السمراء
            </p>
          </div>

          {/* النموذج */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* الاسم الكامل */}
            <div className="space-y-2">
              <label htmlFor="fullName" className="block text-axom-gold text-sm font-medium">
                الاسم الكامل
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
                placeholder="أدخل اسمك الكامل"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-gray-500 focus:border-axom-gold focus:ring-1 focus:ring-axom-gold focus:bg-white/10 transition-all outline-none text-right"
              />
            </div>

            {/* البريد الإلكتروني */}
            <div className="space-y-2">
              <label htmlFor="email" className="block text-axom-gold text-sm font-medium">
                البريد الإلكتروني
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="example@axom.africa"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-gray-500 focus:border-axom-gold focus:ring-1 focus:ring-axom-gold focus:bg-white/10 transition-all outline-none text-right"
              />
            </div>

            {/* كلمة المرور */}
            <div className="space-y-2">
              <label htmlFor="password" className="block text-axom-gold text-sm font-medium">
                كلمة المرور
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  minLength={8}
                  placeholder="••••••••"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-gray-500 focus:border-axom-gold focus:ring-1 focus:ring-axom-gold focus:bg-white/10 transition-all outline-none text-right pr-12"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-axom-gold transition-colors p-1"
                  aria-label={showPassword ? "إخفاء كلمة المرور" : "إظهار كلمة المرور"}
                >
                  {showPassword ? (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                    </svg>
                  ) : (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  )}
                </button>
              </div>
            </div>

            {/* زر التسجيل */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full group relative px-6 py-4 bg-gradient-to-r from-axom-gold to-axom-gold-light text-axom-black font-bold rounded-xl overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-axom-gold/20 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                {isLoading ? (
                  <>
                    <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    جاري إنشاء الحساب...
                  </>
                ) : (
                  <>
                    إنشاء حساب مجاني
                    <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </>
                )}
              </span>
            </button>
          </form>

          {/* روابط إضافية */}
          <div className="mt-8 space-y-4">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-white/10" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-transparent text-gray-500">أو</span>
              </div>
            </div>

            <p className="text-center text-gray-400 text-sm">
              لديك حساب بالفعل؟{" "}
              <Link
                href="/auth/login"
                className="text-axom-gold hover:text-axom-gold-light font-medium transition-colors relative group"
              >
                تسجيل الدخول
                <span className="absolute -bottom-0.5 right-0 w-0 h-0.5 bg-axom-gold group-hover:w-full transition-all duration-300" />
              </Link>
            </p>
          </div>

          {/* شروط الاستخدام */}
          <p className="mt-6 text-center text-gray-500 text-xs leading-relaxed">
            بالتسجيل، أنت توافق على{" "}
            <Link href="/terms" className="text-gray-400 hover:text-axom-gold transition-colors">
              الشروط والأحكام
            </Link>{" "}
            و{" "}
            <Link href="/privacy" className="text-gray-400 hover:text-axom-gold transition-colors">
              سياسة الخصوصية
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}
