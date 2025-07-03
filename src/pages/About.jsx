const About = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 py-12">
        {/* Заголовок */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            О компании Uzum Market
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Мы — ведущий интернет-магазин в Узбекистане, предлагающий широкий
            ассортимент качественных товаров для всей семьи по доступным ценам.
          </p>
        </div>

        {/* Основная информация */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="bg-white rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Наша миссия
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Сделать качественные товары доступными для каждого жителя
              Узбекистана. Мы стремимся предоставить лучший сервис, быструю
              доставку и честные цены.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Наша цель — стать самым надежным и удобным способом покупки
              товаров онлайн, обеспечивая высокое качество обслуживания и
              широкий выбор продукции.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Почему мы?
            </h2>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-purple-600 text-xl">✓</span>
                <span className="text-gray-700">
                  Более 10,000 товаров в каталоге
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-purple-600 text-xl">✓</span>
                <span className="text-gray-700">
                  Быстрая доставка по всему Узбекистану
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-purple-600 text-xl">✓</span>
                <span className="text-gray-700">
                  Гарантия качества на все товары
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-purple-600 text-xl">✓</span>
                <span className="text-gray-700">Удобная система возврата</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-purple-600 text-xl">✓</span>
                <span className="text-gray-700">
                  Круглосуточная поддержка клиентов
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Статистика */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div className="bg-white rounded-2xl p-6 text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">10K+</div>
            <div className="text-gray-600">Товаров в каталоге</div>
          </div>
          <div className="bg-white rounded-2xl p-6 text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">50K+</div>
            <div className="text-gray-600">Довольных клиентов</div>
          </div>
          <div className="bg-white rounded-2xl p-6 text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">100+</div>
            <div className="text-gray-600">Городов доставки</div>
          </div>
          <div className="bg-white rounded-2xl p-6 text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">24/7</div>
            <div className="text-gray-600">Поддержка клиентов</div>
          </div>
        </div>

        {/* Наши преимущества */}
        <div className="bg-white rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Наши преимущества
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚚</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Быстрая доставка</h3>
              <p className="text-gray-600">
                Доставляем заказы в течение 1-2 дней по Ташкенту и 3-5 дней по
                регионам
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💰</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Лучшие цены</h3>
              <p className="text-gray-600">
                Работаем напрямую с производителями, что позволяет предлагать
                выгодные цены
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🛡️</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Гарантия качества</h3>
              <p className="text-gray-600">
                Тщательно отбираем товары и предоставляем гарантию на всю
                продукцию
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
