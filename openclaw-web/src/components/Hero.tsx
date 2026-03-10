export default function Hero() {
  return (
    <section id="home" className="pt-32 pb-20 bg-gradient-to-br from-primary-600 via-primary-700 to-accent-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
          照亮未来 科技无限
        </h1>
        <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
          我们致力于为企业提供创新的数字化解决方案，助力业务腾飞
        </p>
        <div className="flex justify-center gap-4">
          <button className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-primary-50 transition shadow-lg">
            开始合作
          </button>
          <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition">
            了解更多
          </button>
        </div>
        
        {/* Statistics */}
        <div className="grid grid-cols-3 gap-8 mt-16 max-w-3xl mx-auto">
          <div>
            <div className="text-4xl font-bold text-white">500+</div>
            <div className="text-primary-200 mt-2">服务客户</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-white">98%</div>
            <div className="text-primary-200 mt-2">客户满意度</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-white">10+</div>
            <div className="text-primary-200 mt-2">行业经验</div>
          </div>
        </div>
      </div>
    </section>
  );
}
