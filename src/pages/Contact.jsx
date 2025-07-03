import { FiPhone, FiMail, FiMapPin, FiClock, FiSend } from "react-icons/fi";
import { FaTelegram, FaInstagram, FaFacebook } from "react-icons/fa";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Отправлена форма:", formData);
    // Здесь будет логика отправки формы
    alert("Спасибо за ваше сообщение! Мы свяжемся с вами в ближайшее время.");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 py-12">
        {/* Заголовок */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Свяжитесь с нами
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Мы всегда готовы помочь вам! Обращайтесь по любым вопросам — наша
            команда поддержки работает круглосуточно.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Контактная информация */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl p-8 h-fit">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">
                Контактная информация
              </h2>

              <div className="space-y-6">
                {/* Телефон */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FiPhone className="text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      Телефон
                    </h3>
                    <p className="text-gray-600">+998 (71) 123-45-67</p>
                    <p className="text-gray-600">+998 (90) 123-45-67</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FiMail className="text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                    <p className="text-gray-600">info@uzummarket.uz</p>
                    <p className="text-gray-600">support@uzummarket.uz</p>
                  </div>
                </div>

                {/* Адрес */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FiMapPin className="text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Адрес</h3>
                    <p className="text-gray-600">
                      г. Ташкент, ул. Мустакиллик, 1<br />
                      Торговый центр "Next", 3 этаж
                    </p>
                  </div>
                </div>

                {/* Время работы */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FiClock className="text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      Время работы
                    </h3>
                    <p className="text-gray-600">
                      Пн-Пт: 9:00 - 20:00
                      <br />
                      Сб-Вс: 10:00 - 18:00
                    </p>
                  </div>
                </div>
              </div>

              {/* Социальные сети */}
              <div className="mt-8 pt-8 border-t border-gray-100">
                <h3 className="font-semibold text-gray-900 mb-4">
                  Мы в социальных сетях
                </h3>
                <div className="flex gap-3">
                  <a
                    href="#"
                    className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center hover:bg-purple-200 transition-colors"
                  >
                    <FaTelegram className="text-purple-600" />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center hover:bg-purple-200 transition-colors"
                  >
                    <FaInstagram className="text-purple-600" />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center hover:bg-purple-200 transition-colors"
                  >
                    <FaFacebook className="text-purple-600" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Форма обратной связи */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">
                Отправить сообщение
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Ваше имя *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
                      placeholder="Введите ваше имя"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Телефон *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
                      placeholder="+998 (90) 123-45-67"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Сообщение *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors resize-none"
                    placeholder="Расскажите, чем мы можем вам помочь..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-purple-600 hover:bg-purple-700 text-white py-4 px-6 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2"
                >
                  <FiSend />
                  Отправить сообщение
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Дополнительная информация */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-2xl p-6 text-center">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">💬</span>
            </div>
            <h3 className="font-semibold mb-2">Онлайн-чат</h3>
            <p className="text-gray-600 text-sm mb-4">
              Получите мгновенную помощь через наш чат на сайте
            </p>
            <button className="text-purple-600 hover:text-purple-700 font-medium text-sm">
              Открыть чат
            </button>
          </div>

          <div className="bg-white rounded-2xl p-6 text-center">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">📞</span>
            </div>
            <h3 className="font-semibold mb-2">Колл-центр</h3>
            <p className="text-gray-600 text-sm mb-4">
              Звоните нам по любым вопросам - работаем 24/7
            </p>
            <a
              href="tel:+998711234567"
              className="text-purple-600 hover:text-purple-700 font-medium text-sm"
            >
              +998 (71) 123-45-67
            </a>
          </div>

          <div className="bg-white rounded-2xl p-6 text-center">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">❓</span>
            </div>
            <h3 className="font-semibold mb-2">FAQ</h3>
            <p className="text-gray-600 text-sm mb-4">
              Возможно, ответ на ваш вопрос уже есть в нашем FAQ
            </p>
            <button className="text-purple-600 hover:text-purple-700 font-medium text-sm">
              Посмотреть FAQ
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
