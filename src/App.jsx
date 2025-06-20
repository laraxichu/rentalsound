import React, { useState } from 'react';
import { Home, Headphones, Mic, Sparkles, PhoneCall, Mail, MapPin, Menu, X } from 'lucide-react';

// Componente de Navegación
const Navbar = ({ setCurrentPage }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Inicio', icon: Home, page: 'home' },
    { name: 'Equipo', icon: Headphones, page: 'equipment' },
    { name: 'Servicios', icon: Sparkles, page: 'services' },
    { name: 'Contacto', icon: PhoneCall, page: 'contact' },
  ];

  return (
    <nav className="bg-gradient-to-r from-blue-700 to-indigo-800 p-4 shadow-lg sticky top-0 z-50 rounded-b-lg">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-3xl font-bold tracking-wide">
          SoundRentals <span className="text-blue-200 text-xl">Pro</span>
        </h1>
        <div className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => setCurrentPage(item.page)}
              className="text-white hover:text-blue-200 transition duration-300 flex items-center space-x-2 text-lg font-medium py-2 px-3 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
            >
              <item.icon size={20} />
              <span>{item.name}</span>
            </button>
          ))}
        </div>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none focus:ring-2 focus:ring-blue-300 rounded-md p-2">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden mt-4 bg-blue-700 rounded-lg shadow-lg">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => {
                setCurrentPage(item.page);
                setIsOpen(false);
              }}
              className="block w-full text-left py-3 px-6 text-white hover:bg-blue-600 transition duration-300 flex items-center space-x-3 text-lg font-medium rounded-md"
            >
              <item.icon size={20} />
              <span>{item.name}</span>
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

// Componente de Pie de Página
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 mt-12 rounded-t-lg shadow-inner">
      <div className="container mx-auto px-4 text-center">
        <p className="text-lg mb-4">
          © {new Date().getFullYear()} SoundRentals Pro. Todos los derechos reservados.
        </p>
        <div className="flex justify-center space-x-6 text-gray-400">
          <a href="#" className="hover:text-blue-400 transition duration-300">
            Aviso de Privacidad
          </a>
          <a href="#" className="hover:text-blue-400 transition duration-300">
            Términos y Condiciones
          </a>
        </div>
        <p className="mt-4 text-gray-500 text-sm">
          Desarrollado con pasión por la música y la tecnología.
        </p>
      </div>
    </footer>
  );
};

// Componente de la Página de Inicio
const HomeSection = () => {
  return (
    <div className="container mx-auto px-4 py-16 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl shadow-xl mt-8">
      <div className="text-center mb-12">
        <h2 className="text-5xl font-extrabold text-gray-900 leading-tight mb-6">
          Tu Evento, Nuestro Sonido Perfecto
        </h2>
        <p className="text-xl text-gray-700 max-w-3xl mx-auto">
          En <span className="font-semibold text-blue-700">SoundRentals Pro</span>, entendemos que cada evento es único. Ofrecemos soluciones de audio de alta calidad y atención personalizada para garantizar el éxito de tu celebración o producción.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 text-center">
        <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
          <Headphones className="text-blue-600 mx-auto mb-4" size={50} strokeWidth={1.5} />
          <h3 className="text-2xl font-semibold text-gray-800 mb-3">Equipo de Vanguardia</h3>
          <p className="text-gray-600">
            Contamos con la última tecnología en equipos de sonido, iluminación y producción audiovisual para cualquier tipo de evento.
          </p>
        </div>
        <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
          <Sparkles className="text-green-600 mx-auto mb-4" size={50} strokeWidth={1.5} />
          <h3 className="text-2xl font-semibold text-gray-800 mb-3">Atención Personalizada</h3>
          <p className="text-gray-600">
            Te asesoramos desde el primer momento para encontrar la solución que mejor se adapte a tus necesidades y presupuesto.
          </p>
        </div>
        <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
          <Mic className="text-purple-600 mx-auto mb-4" size={50} strokeWidth={1.5} />
          <h3 className="text-2xl font-semibold text-gray-800 mb-3">Eventos Inolvidables</h3>
          <p className="text-gray-600">
            Desde conciertos y conferencias hasta bodas y fiestas privadas, hacemos que tu evento suene espectacular.
          </p>
        </div>
      </div>

      <div className="text-center mt-16">
        <button
          onClick={() => document.querySelector('#contact-section')?.scrollIntoView({ behavior: 'smooth' })}
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-full text-xl shadow-lg transform hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-300"
        >
          ¡Cotiza tu Evento Ahora!
        </button>
      </div>
    </div>
  );
};

// Componente de la Sección de Equipo
const EquipmentSection = () => {
  const equipmentList = [
    {
      name: 'Sistema de Audio Profesional Line Array',
      description: 'Ideal para eventos grandes y conciertos al aire libre. Potencia y claridad inigualables.',
      image: 'https://placehold.co/400x300/e0e7ff/3f51b5?text=Line+Array',
      features: ['20,000W RMS', 'Cobertura 180°', 'Procesadores DSP'],
    },
    {
      name: 'Bocinas Autoamplificadas de 15"',
      description: 'Versátiles y fáciles de instalar, perfectas para eventos medianos o como monitores.',
      image: 'https://placehold.co/400x300/e0e7ff/3f51b5?text=Bocinas+15"',
      features: ['1,200W Pico', 'Respuesta de 45Hz-20kHz', 'Entradas XLR/Jack'],
    },
    {
      name: 'Mezcladora Digital Behringer X32',
      description: 'Control total de tu sonido con efectos integrados y control remoto vía tablet.',
      image: 'https://placehold.co/400x300/e0e7ff/3f51b5?text=Mezcladora+X32',
      features: ['32 Canales', '16 Buses Auxiliares', 'Efectos Klark Teknik'],
    },
    {
      name: 'Micrófonos Inalámbricos Shure SM58',
      description: 'Estándar de la industria para voces, ofrecen claridad y fiabilidad.',
      image: 'https://placehold.co/400x300/e0e7ff/3f51b5?text=Micrófonos+SM58',
      features: ['Rango UHF', 'Cápsula Dinámica', 'Antena Doble'],
    },
    {
      name: 'Sets de Iluminación LED Par',
      description: 'Crea ambientes vibrantes con luces LED programables y bajo consumo energético.',
      image: 'https://placehold.co/400x300/e0e7ff/3f51b5?text=Iluminación+LED',
      features: ['RGBW Full Color', 'Control DMX', 'Modo Audiorítmico'],
    },
    {
      name: 'Proyector Epson de Alta Definición',
      description: 'Ideal para presentaciones, videos o proyecciones de fondos en eventos.',
      image: 'https://placehold.co/400x300/e0e7ff/3f51b5?text=Proyector',
      features: ['4,000 Lúmenes', 'Full HD 1080p', 'Conexión HDMI'],
    },
  ];

  return (
    <div className="container mx-auto px-4 py-16 bg-white rounded-xl shadow-xl mt-8">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
          Nuestro Equipo de Audio Profesional
        </h2>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          Ofrecemos una amplia gama de equipos de sonido, iluminación y audiovisuales de las mejores marcas, garantizando la máxima calidad y rendimiento para tu evento.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {equipmentList.map((item, index) => (
          <div key={index} className="bg-gray-50 rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition-transform duration-300">
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-48 object-cover object-center rounded-t-lg"
              onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/400x300/cccccc/333333?text=Imagen+No+Disponible"; }}
            />
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">{item.name}</h3>
              <p className="text-gray-600 mb-4">{item.description}</p>
              <ul className="list-disc list-inside text-gray-700 text-sm">
                {item.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Componente de la Sección de Servicios
const ServicesSection = () => {
  const services = [
    {
      title: 'Asesoría Personalizada',
      description: 'Te ayudamos a elegir el equipo ideal y la configuración perfecta para tu tipo de evento, tamaño de audiencia y presupuesto.',
      icon: Sparkles,
      color: 'text-purple-600'
    },
    {
      title: 'Diseño y Planificación de Audio',
      description: 'Elaboramos un plan detallado de audio para tu evento, optimizando la acústica del espacio y la distribución del sonido.',
      icon: Mic,
      color: 'text-red-600'
    },
    {
      title: 'Montaje y Desmontaje Profesional',
      description: 'Nuestro equipo técnico se encarga de la instalación y desinstalación completa del equipo, asegurando un funcionamiento impecable.',
      icon: Headphones,
      color: 'text-yellow-600'
    },
    {
      title: 'Operación Técnica Durante el Evento',
      description: 'Ofrecemos personal técnico cualificado para operar el equipo de sonido y asegurar que todo funcione sin contratiempos.',
      icon: PhoneCall,
      color: 'text-teal-600'
    },
    {
      title: 'Logística y Transporte',
      description: 'Nos encargamos de la entrega y recogida del equipo en el lugar de tu evento, de manera puntual y segura.',
      icon: MapPin,
      color: 'text-orange-600'
    },
    {
      title: 'Soluciones Integrales de Eventos',
      description: 'Desde sonido e iluminación hasta escenarios y pantallas, ofrecemos paquetes completos para tu producción.',
      icon: Home,
      color: 'text-blue-600'
    },
  ];

  return (
    <div className="container mx-auto px-4 py-16 bg-gradient-to-br from-indigo-50 to-blue-50 rounded-xl shadow-xl mt-8">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
          Nuestros Servicios Exclusivos
        </h2>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          Más allá de la renta de equipo, ofrecemos una gama completa de servicios para garantizar que tu evento sea un éxito rotundo.
        </p>
      </div>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div key={index} className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col items-center text-center">
            <service.icon className={`${service.color} mx-auto mb-4`} size={50} strokeWidth={1.5} />
            <h3 className="text-2xl font-semibold text-gray-800 mb-3">{service.title}</h3>
            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

// Componente de la Sección de Contacto y Cotización
const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: '',
    eventDate: '',
    location: '',
    equipmentNeeded: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí podrías enviar los datos del formulario a un backend o servicio de correo
    console.log('Formulario de cotización enviado:', formData);
    alert('¡Tu solicitud de cotización ha sido enviada con éxito! Nos pondremos en contacto contigo a la brevedad.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      eventType: '',
      eventDate: '',
      location: '',
      equipmentNeeded: '',
      message: '',
    });
  };

  return (
    <div id="contact-section" className="container mx-auto px-4 py-16 bg-white rounded-xl shadow-xl mt-8">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
          Contáctanos y Solicita tu Cotización
        </h2>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          Estamos listos para hacer sonar tu evento. Envíanos un mensaje o llena el formulario para obtener una cotización personalizada sin compromiso.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Información de Contacto */}
        <div className="bg-blue-50 p-8 rounded-lg shadow-inner">
          <h3 className="text-2xl font-bold text-blue-800 mb-6 flex items-center">
            <PhoneCall className="mr-3" size={28} />
            Información de Contacto
          </h3>
          <p className="flex items-center text-gray-700 text-lg mb-4">
            <PhoneCall className="mr-3 text-blue-600" size={20} />
            +52 55 1234 5678
          </p>
          <p className="flex items-center text-gray-700 text-lg mb-4">
            <Mail className="mr-3 text-blue-600" size={20} />
            contacto@soundrentalspro.com
          </p>
          <p className="flex items-start text-gray-700 text-lg mb-4">
            <MapPin className="mr-3 mt-1 text-blue-600" size={20} />
            Calle del Sonido 123, Colonia Armonía, Ciudad Vibrante, CP 76000, Querétaro, México
          </p>
          <div className="mt-8">
            <h4 className="text-xl font-semibold text-blue-800 mb-3">Horario de Atención:</h4>
            <p className="text-gray-700 text-lg">
              Lunes a Viernes: 9:00 AM - 6:00 PM
            </p>
            <p className="text-gray-700 text-lg">
              Sábados: 10:00 AM - 2:00 PM
            </p>
          </div>
        </div>

        {/* Formulario de Cotización */}
        <div className="bg-gray-50 p-8 rounded-lg shadow-inner">
          <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
            <Sparkles className="mr-3" size={28} />
            Formulario de Cotización
          </h3>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
                Nombre Completo
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="shadow appearance-none border rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                placeholder="Tu nombre"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                Correo Electrónico
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="shadow appearance-none border rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                placeholder="tu.correo@ejemplo.com"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-gray-700 text-sm font-bold mb-2">
                Teléfono (opcional)
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="shadow appearance-none border rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                placeholder="+52 123 456 7890"
              />
            </div>
            <div>
              <label htmlFor="eventType" className="block text-gray-700 text-sm font-bold mb-2">
                Tipo de Evento
              </label>
              <select
                id="eventType"
                name="eventType"
                value={formData.eventType}
                onChange={handleChange}
                required
                className="shadow appearance-none border rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent bg-white"
              >
                <option value="">Selecciona una opción</option>
                <option value="boda">Boda</option>
                <option value="conferencia">Conferencia</option>
                <option value="concierto">Concierto</option>
                <option value="fiesta_privada">Fiesta Privada</option>
                <option value="evento_corporativo">Evento Corporativo</option>
                <option value="otro">Otro</option>
              </select>
            </div>
            <div>
              <label htmlFor="eventDate" className="block text-gray-700 text-sm font-bold mb-2">
                Fecha del Evento
              </label>
              <input
                type="date"
                id="eventDate"
                name="eventDate"
                value={formData.eventDate}
                onChange={handleChange}
                required
                className="shadow appearance-none border rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
              />
            </div>
            <div>
              <label htmlFor="location" className="block text-gray-700 text-sm font-bold mb-2">
                Ubicación del Evento
              </label>
              <input
                type="text"
                id="location"
                name="location"
                value={formData.location}
                onChange={handleChange}
                required
                className="shadow appearance-none border rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                placeholder="Ej. Salón de Eventos El Sol"
              />
            </div>
            <div>
              <label htmlFor="equipmentNeeded" className="block text-gray-700 text-sm font-bold mb-2">
                Equipo Necesario (detalles o preferencias)
              </label>
              <textarea
                id="equipmentNeeded"
                name="equipmentNeeded"
                value={formData.equipmentNeeded}
                onChange={handleChange}
                rows="4"
                className="shadow appearance-none border rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                placeholder="Ej. Sistema de audio para 200 personas, 4 micrófonos, iluminación básica..."
              ></textarea>
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">
                Mensaje Adicional
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                className="shadow appearance-none border rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                placeholder="Cualquier otro detalle que consideres importante..."
              ></textarea>
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-full text-xl shadow-lg transform hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-green-300"
              >
                Enviar Solicitud
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};


// Componente Principal de la Aplicación
const App = () => {
  const [currentPage, setCurrentPage] = useState('home');

  const renderSection = () => {
    switch (currentPage) {
      case 'home':
        return <HomeSection />;
      case 'equipment':
        return <EquipmentSection />;
      case 'services':
        return <ServicesSection />;
      case 'contact':
        return <ContactSection />;
      default:
        return <HomeSection />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 font-sans antialiased">
      <Navbar setCurrentPage={setCurrentPage} />
      <main className="py-8">
        {renderSection()}
      </main>
      <Footer />
    </div>
  );
};

export default App;
