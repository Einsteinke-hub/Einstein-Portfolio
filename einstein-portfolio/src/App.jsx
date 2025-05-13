// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.
import React, { useState, useEffect } from 'react';
// Add CDN links to the document head
if (typeof document !== 'undefined') {
const tailwindLink = document.createElement('script');
tailwindLink.src = 'https://cdn.tailwindcss.com';
document.head.appendChild(tailwindLink);
const fontAwesomeLink = document.createElement('link');
fontAwesomeLink.rel = 'stylesheet';
fontAwesomeLink.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css';
document.head.appendChild(fontAwesomeLink);
}
const App= () => {
const [isMenuOpen, setIsMenuOpen] = useState(false);
const toggleMenu = () => {
setIsMenuOpen(!isMenuOpen);
};
useEffect(() => {
const handleScroll = () => {
const scrollPosition = window.scrollY;
const sections = document.querySelectorAll('section');
sections.forEach(section => {
const sectionTop = section.offsetTop - 100;
const sectionHeight = section.offsetHeight;
const sectionId = section.getAttribute('id');
if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
document.querySelectorAll('.nav-link').forEach(link => {
link.classList.remove('text-blue-600', 'dark:text-blue-400');
link.classList.add('text-gray-600', 'dark:text-gray-300');
});
const activeLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
if (activeLink) {
activeLink.classList.remove('text-gray-600', 'dark:text-gray-300');
activeLink.classList.add('text-blue-600', 'dark:text-blue-400');
}
}
});
};
window.addEventListener('scroll', handleScroll);
return () => window.removeEventListener('scroll', handleScroll);
}, []);
return (
<div className={`min-h-screen transition-colors duration-300 dark bg-gray-900 text-white`}>
<header className="fixed w-full bg-white dark:bg-gray-900 shadow-md z-50 transition-colors duration-300">
<div className="container mx-auto px-6 py-4 flex justify-between items-center">
<a href="#" className="text-2xl font-bold text-blue-600 dark:text-blue-400">
<span className="font-extrabold">Einstein</span>
<span className="font-light">Dipondo</span>
</a>
<div className="hidden md:flex items-center space-x-8">
<nav className="flex items-center space-x-8">
<a href="#portfolio" className="nav-link text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">Portfolio</a>
<a href="#skills" className="nav-link text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">Skills</a>
<a href="#about" className="nav-link text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">About</a>
<a href="#contact" className="nav-link text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">Contact</a>
</nav>
</div>
<button
className="md:hidden p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300 cursor-pointer !rounded-button whitespace-nowrap"
onClick={toggleMenu}
aria-label="Toggle menu"
>
<i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
</button>
</div>
{/* Mobile Menu */}
<div className={`md:hidden transition-all duration-300 overflow-hidden ${isMenuOpen ? 'max-h-60' : 'max-h-0'}`}>
<nav className="flex flex-col space-y-4 px-6 pb-6">
<a href="#portfolio" className="nav-link text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300" onClick={() => setIsMenuOpen(false)}>Portfolio</a>
<a href="#skills" className="nav-link text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300" onClick={() => setIsMenuOpen(false)}>Skills</a>
<a href="#about" className="nav-link text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300" onClick={() => setIsMenuOpen(false)}>About</a>
<a href="#contact" className="nav-link text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300" onClick={() => setIsMenuOpen(false)}>Contact</a>
</nav>
</div>
</header>
<main>
{/* Hero Section */}
<section className="relative min-h-screen flex items-center" style={{
backgroundSize: 'cover',
backgroundPosition: 'center'
}}>
<div className="absolute inset-0 bg-gradient-to-r from-white/90 dark:from-gray-900/90 to-white/50 dark:to-gray-900/50"></div>
<div className="container mx-auto px-6 z-10 flex flex-col md:flex-row items-center">
<div className="w-full md:w-1/2 text-center md:text-left mb-12 md:mb-0">
<h1 className="text-4xl md:text-6xl font-bold mb-4">
<span className="block">Hi, I'm Einstein Dipondo</span>
<span className="text-blue-600">Frontend Developer</span>
</h1>
<p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8">
Crafting beautiful and responsive user interfaces with modern frontend technologies. Specializing in creating engaging web experiences that users love.
</p>
<div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center md:justify-start">
<a
href="#portfolio"
className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition-colors duration-300 shadow-lg hover:shadow-xl cursor-pointer !rounded-button whitespace-nowrap"
>
View My Work
</a>
<a
href="#contact"
className="px-8 py-3 bg-transparent border-2 border-blue-800 dark:border-blue-600 text-blue-600 dark:text-blue-600 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 dark:hover:text-gray-900 font-medium rounded-md transition-all duration-300 cursor-pointer !rounded-button whitespace-nowrap"
>
Contact Me
</a>
</div>
</div>
<div className="w-full md:w-1/2 flex justify-center md:justify-end">
<div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-2xl">
<img src="./WhatsApp Image 2025-05-13 at 11.00.49_b386706b.jpg" className="w-full h-full object-cover object-top"/>
</div>
</div>
</div>
<div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
<a href="#portfolio" className="text-blue-600 dark:text-blue-400 text-3xl cursor-pointer">
<i className="fas fa-chevron-down"></i>
</a>
</div>
</section>
{/* Portfolio Section */}
<section id="portfolio" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
<div className="container mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-bold mb-4">My Portfolio</h2>
<div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto"></div>
<p className="text-gray-600 dark:text-gray-300 mt-6 max-w-2xl mx-auto">
Explore some of my recent projects that showcase my skills and expertise in web development.
</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
{/* Project 1 */}
<div className="bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
<div className="relative h-60 overflow-hidden">
<img
src="https://readdy.ai/api/search-image?query=Modern%20e-commerce%20website%20interface%20with%20clean%20design%2C%20product%20grid%20layout%2C%20shopping%20cart%2C%20payment%20system%2C%20responsive%20design%2C%20professional%20UI%2FUX%2C%20blue%20and%20white%20color%20scheme&width=600&height=400&seq=3&orientation=landscape"
alt="E-Commerce Platform"
className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-110"
/>
<div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
<div className="p-4">
<a
href="#"
className="px-4 py-2 bg-blue-600 text-white rounded-md inline-block cursor-pointer !rounded-button whitespace-nowrap"
>
View Project
</a>
</div>
</div>
</div>
<div className="p-6">
<h3 className="text-xl font-bold mb-2">E-Commerce Platform</h3>
<p className="text-gray-600 dark:text-gray-400 mb-4">
A full-featured online store with product management, cart functionality, and secure checkout.
</p>
<div className="flex flex-wrap gap-2">
<span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm">React</span>
<span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm">Node.js</span>
<span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full text-sm">MongoDB</span>
</div>
</div>
</div>
{/* Project 2 */}
<div className="bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
<div className="relative h-60 overflow-hidden">
<img
src="https://readdy.ai/api/search-image?query=Task%20management%20application%20interface%20with%20kanban%20board%2C%20task%20cards%2C%20calendar%20view%2C%20progress%20tracking%2C%20clean%20modern%20UI%2C%20productivity%20app%20dashboard%2C%20blue%20and%20white%20color%20scheme&width=600&height=400&seq=4&orientation=landscape"
alt="Task Management App"
className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-110"
/>
<div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
<div className="p-4">
<a
href="#"
className="px-4 py-2 bg-blue-600 text-white rounded-md inline-block cursor-pointer !rounded-button whitespace-nowrap"
>
View Project
</a>
</div>
</div>
</div>
<div className="p-6">
<h3 className="text-xl font-bold mb-2">Task Management App</h3>
<p className="text-gray-600 dark:text-gray-400 mb-4">
A collaborative task management tool with real-time updates and progress tracking.
</p>
<div className="flex flex-wrap gap-2">
<span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm">Vue.js</span>
<span className="px-3 py-1 bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 rounded-full text-sm">Firebase</span>
<span className="px-3 py-1 bg-pink-100 dark:bg-pink-900 text-pink-800 dark:text-pink-200 rounded-full text-sm">Sass</span>
</div>
</div>
</div>
{/* Project 3 */}
<div className="bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
<div className="relative h-60 overflow-hidden">
<img
src="https://readdy.ai/api/search-image?query=Financial%20dashboard%20with%20data%20visualization%2C%20charts%2C%20graphs%2C%20analytics%20panels%2C%20modern%20UI%20design%2C%20business%20intelligence%20interface%2C%20blue%20and%20white%20color%20scheme%2C%20professional%20financial%20app&width=600&height=400&seq=5&orientation=landscape"
alt="Financial Dashboard"
className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-110"
/>
<div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
<div className="p-4">
<a
href="#"
className="px-4 py-2 bg-blue-600 text-white rounded-md inline-block cursor-pointer !rounded-button whitespace-nowrap"
>
View Project
</a>
</div>
</div>
</div>
<div className="p-6">
<h3 className="text-xl font-bold mb-2">Financial Dashboard</h3>
<p className="text-gray-600 dark:text-gray-400 mb-4">
An interactive dashboard for financial data visualization and analysis.
</p>
<div className="flex flex-wrap gap-2">
<span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm">React</span>
<span className="px-3 py-1 bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 rounded-full text-sm">D3.js</span>
<span className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 rounded-full text-sm">TypeScript</span>
</div>
</div>
</div>
</div>
<div className="text-center mt-12">
<a
href="#"
className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition-colors duration-300 shadow-lg hover:shadow-xl inline-block cursor-pointer !rounded-button whitespace-nowrap"
>
View All Projects
</a>
</div>
</div>
</section>
{/* Skills Section */}
<section id="skills" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
<div className="container mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-bold mb-4">Skills & Expertise</h2>
<div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto"></div>
<p className="text-gray-600 dark:text-gray-300 mt-6 max-w-2xl mx-auto">
My technical toolkit and areas of expertise in web development.
</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
{/* Frontend Skills */}
<div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg shadow-lg">
<div className="text-center mb-6">
<div className="inline-block p-4 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 mb-4">
<i className="fas fa-code text-3xl"></i>
</div>
<h3 className="text-xl font-bold">Core Technologies</h3>
</div>
<div className="space-y-4">
<div>
<div className="flex justify-between mb-1">
<span className="font-medium">HTML5/CSS3</span>
<span>98%</span>
</div>
<div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
<div className="bg-blue-600 dark:bg-blue-400 h-2 rounded-full" style={{ width: '98%' }}></div>
</div>
</div>
<div>
<div className="flex justify-between mb-1">
<span className="font-medium">JavaScript</span>
<span>90%</span>
</div>
<div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
<div className="bg-blue-600 dark:bg-blue-400 h-2 rounded-full" style={{ width: '90%' }}></div>
</div>
</div>
<div>
<div className="flex justify-between mb-1">
<span className="font-medium">React</span>
<span>85%</span>
</div>
<div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
<div className="bg-blue-600 dark:bg-blue-400 h-2 rounded-full" style={{ width: '85%' }}></div>
</div>
</div>
<div>
<div className="flex justify-between mb-1">
<span className="font-medium">Vue.js</span>
<span>80%</span>
</div>
<div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
<div className="bg-blue-600 dark:bg-blue-400 h-2 rounded-full" style={{ width: '80%' }}></div>
</div>
</div>
<div>
<div className="flex justify-between mb-1">
<span className="font-medium">Tailwind CSS</span>
<span>90%</span>
</div>
<div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
<div className="bg-blue-600 dark:bg-blue-400 h-2 rounded-full" style={{ width: '90%' }}></div>
</div>
</div>
</div>
</div>
{/* Backend Skills */}
<div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg shadow-lg">
<div className="text-center mb-6">
<div className="inline-block p-4 rounded-full bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400 mb-4">
<i className="fas fa-paint-brush text-3xl"></i>
</div>
<h3 className="text-xl font-bold">Design & Frameworks</h3>
</div>
<div className="space-y-4">
<div>
<div className="flex justify-between mb-1">
<span className="font-medium">React</span>
<span>95%</span>
</div>
<div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
<div className="bg-green-600 dark:bg-green-400 h-2 rounded-full" style={{ width: '95%' }}></div>
</div>
</div>
<div>
<div className="flex justify-between mb-1">
<span className="font-medium">Tailwind CSS</span>
<span>90%</span>
</div>
<div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
<div className="bg-green-600 dark:bg-green-400 h-2 rounded-full" style={{ width: '90%' }}></div>
</div>
</div>
<div>
<div className="flex justify-between mb-1">
<span className="font-medium">Sass/SCSS</span>
<span>92%</span>
</div>
<div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
<div className="bg-green-600 dark:bg-green-400 h-2 rounded-full" style={{ width: '92%' }}></div>
</div>
</div>
<div>
<div className="flex justify-between mb-1">
<span className="font-medium">Figma</span>
<span>85%</span>
</div>
<div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
<div className="bg-green-600 dark:bg-green-400 h-2 rounded-full" style={{ width: '85%' }}></div>
</div>
</div>
<div>
<div className="flex justify-between mb-1">
<span className="font-medium">UI/UX Design</span>
<span>88%</span>
</div>
<div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
<div className="bg-green-600 dark:bg-green-400 h-2 rounded-full" style={{ width: '88%' }}></div>
</div>
</div>
</div>
</div>
{/* Tools & Others */}
<div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg shadow-lg">
<div className="text-center mb-6">
<div className="inline-block p-4 rounded-full bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-400 mb-4">
<i className="fas fa-tools text-3xl"></i>
</div>
<h3 className="text-xl font-bold">Tools & Others</h3>
</div>
<div className="space-y-4">
<div>
<div className="flex justify-between mb-1">
<span className="font-medium">Git & GitHub</span>
<span>90%</span>
</div>
<div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
<div className="bg-purple-600 dark:bg-purple-400 h-2 rounded-full" style={{ width: '90%' }}></div>
</div>
</div>
<div>
<div className="flex justify-between mb-1">
<span className="font-medium">Docker</span>
<span>75%</span>
</div>
<div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
<div className="bg-purple-600 dark:bg-purple-400 h-2 rounded-full" style={{ width: '75%' }}></div>
</div>
</div>
<div>
<div className="flex justify-between mb-1">
<span className="font-medium">AWS</span>
<span>70%</span>
</div>
<div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
<div className="bg-purple-600 dark:bg-purple-400 h-2 rounded-full" style={{ width: '70%' }}></div>
</div>
</div>
<div>
<div className="flex justify-between mb-1">
<span className="font-medium">UI/UX Design</span>
<span>80%</span>
</div>
<div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
<div className="bg-purple-600 dark:bg-purple-400 h-2 rounded-full" style={{ width: '80%' }}></div>
</div>
</div>
<div>
<div className="flex justify-between mb-1">
<span className="font-medium">Agile/Scrum</span>
<span>85%</span>
</div>
<div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
<div className="bg-purple-600 dark:bg-purple-400 h-2 rounded-full" style={{ width: '85%' }}></div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
{/* About Section */}
<section id="about" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
<div className="container mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
<div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto"></div>
<p className="text-gray-600 dark:text-gray-300 mt-6 max-w-2xl mx-auto">
Get to know more about me, my background, and what drives me as a developer.
</p>
</div>
<div className="flex flex-col md:flex-row items-center gap-12">
<div className="w-full md:w-2/5">
<div className="rounded-lg overflow-hidden shadow-xl">
<img
src="./Webi.jpg"
alt="Alex Walker - About Me"
className="w-full h-full object-cover object-top"
/>
</div>
</div>
<div className="w-full md:w-3/5">
<h3 className="text-2xl font-bold mb-4">My Journey</h3>
<p className="text-gray-600 dark:text-gray-300 mb-6">
I'm a passionate frontend developer with over 1 year of experience crafting beautiful user interfaces. My journey in web development began with a deep fascination for creating visually stunning and intuitive web experiences that make a real impact.
</p>
<p className="text-gray-600 dark:text-gray-300 mb-6">
I specialize in translating design concepts into responsive, pixel-perfect websites using modern frontend technologies. My approach combines creative design thinking with technical expertise in HTML, CSS, and JavaScript frameworks to deliver exceptional user experiences.
</p>
<div className="mb-8">
<h4 className="text-xl font-semibold mb-3">Experience</h4>
<div className="space-y-4">
<div className="flex">
<div className="mr-4 text-blue-600 dark:text-blue-400">
<i className="fas fa-briefcase text-xl"></i>
</div>
<div>
<h5 className="font-bold">Senior Frontend Developer</h5>
<p className="text-sm text-gray-500 dark:text-gray-400">Einstein Digital | 2024 - Present</p>
</div>
</div>
<div className="flex">
<div className="mr-4 text-blue-600 dark:text-blue-400">
<i className="fas fa-briefcase text-xl"></i>
</div>
<div>
<h5 className="font-bold">UI Developer</h5>
<p className="text-sm text-gray-500 dark:text-gray-400">Einstein Digital | 2025 - Present </p>
</div>
</div>
</div>
</div>
<div className="mb-8">
<h4 className="text-xl font-semibold mb-3">Education</h4>
<div className="space-y-4">
<div className="flex">
<div className="mr-4 text-blue-600 dark:text-blue-400">
<i className="fas fa-graduation-cap text-xl"></i>
</div>
<div>
<h5 className="font-bold">Diploma in web development using HTML and CSS</h5>
<p className="text-sm text-gray-500 dark:text-gray-400">Alison | 2023</p>
</div>
</div>
<div className="flex">
<div className="mr-4 text-blue-600 dark:text-blue-400">
<i className="fas fa-graduation-cap text-xl"></i>
</div>
<div>
<h5 className="font-bold">Responsive Web Design</h5>
<p className="text-sm text-gray-500 dark:text-gray-400">Freecodecamp | 2023</p>
</div>
</div>
<div className="flex">
<div className="mr-4 text-blue-600 dark:text-blue-400">
<i className="fas fa-graduation-cap text-xl"></i>
</div>
<div>
<h5 className="font-bold">Software Engineering</h5>
<p className="text-sm text-gray-500 dark:text-gray-400">ALX | Present</p>
</div>
</div>
</div>
</div>
<a
href="#"
className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition-colors duration-300 inline-flex items-center cursor-pointer !rounded-button whitespace-nowrap"
>
<i className="fas fa-download mr-2"></i>
Download Resume
</a>
</div>
</div>
</div>
</section>
{/* Contact Section */}
<section id="contact" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
<div className="container mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
<div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto"></div>
<p className="text-gray-600 dark:text-gray-300 mt-6 max-w-2xl mx-auto">
Have a project in mind or want to discuss potential opportunities? I'd love to hear from you!
</p>
</div>
<div className="flex flex-col md:flex-row gap-12">
<div className="w-full md:w-1/2">
<form className="space-y-6">
<div>
<label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
Your Name
</label>
<input
type="text"
id="name"
className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 dark:focus:ring-blue-400 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
placeholder="Einstein"
/>
</div>
<div>
<label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
Email Address
</label>
<input
type="email"
id="email"
className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 dark:focus:ring-blue-400 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
placeholder="einstein@gmail.com"
/>
</div>
<div>
<label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
Subject
</label>
<input
type="text"
id="subject"
className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 dark:focus:ring-blue-400 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
placeholder="Project Inquiry"
/>
</div>
<div>
<label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
Your Message
</label>
<textarea
id="message"
rows={5}
className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 dark:focus:ring-blue-400 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white resize-none"
placeholder="Tell me about your project..."
></textarea>
</div>
<button
type="submit"
className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition-colors duration-300 cursor-pointer !rounded-button whitespace-nowrap"
>
Send Message
</button>
</form>
</div>
<div className="w-full md:w-1/2">
<div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg shadow-lg h-full">
<h3 className="text-xl font-bold mb-6">Contact Information</h3>
<div className="space-y-6">
<div className="flex items-start">
<div className="mr-4 p-3 bg-blue-100 dark:bg-blue-900 rounded-full text-blue-600 dark:text-blue-400">
<i className="fas fa-envelope"></i>
</div>
<div>
<h4 className="font-semibold">Email</h4>
<p className="text-gray-600 dark:text-gray-300">einstenmarto30@gmail.com</p>
</div>
</div>
<div className="flex items-start">
<div className="mr-4 p-3 bg-blue-100 dark:bg-blue-900 rounded-full text-blue-600 dark:text-blue-400">
<i className="fas fa-map-marker-alt"></i>
</div>
<div>
<h4 className="font-semibold">Location</h4>
<p className="text-gray-600 dark:text-gray-300">Komarock, Nairobi</p>
</div>
</div>
<div className="flex items-start">
<div className="mr-4 p-3 bg-blue-100 dark:bg-blue-900 rounded-full text-blue-600 dark:text-blue-400">
<i className="fas fa-clock"></i>
</div>
<div>
<h4 className="font-semibold">Working Hours</h4>
<p className="text-gray-600 dark:text-gray-300">Monday - Saturday, 9AM - 6PM EAT</p>
</div>
</div>
</div>
<div className="mt-8">
<h4 className="font-semibold mb-4">Connect With Me</h4>
<div className="flex space-x-4">
<a href="https://github.com/Einsteinke-hub" className="p-3 bg-gray-200 dark:bg-gray-700 rounded-full text-gray-700 dark:text-gray-300 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 transition-colors duration-300 cursor-pointer">
<i className="fab fa-github"></i>
</a>
<a href="https://www.linkedin.com/in/einstein-dipondo-13b322362?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="p-3 bg-gray-200 dark:bg-gray-700 rounded-full text-gray-700 dark:text-gray-300 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 transition-colors duration-300 cursor-pointer">
<i className="fab fa-linkedin-in"></i>
</a>
<a href="https://x.com/cfc_Einstein?t=gTgSijSYiV_gYvHS1MmQog&s=09" className="p-3 bg-gray-200 dark:bg-gray-700 rounded-full text-gray-700 dark:text-gray-300 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 transition-colors duration-300 cursor-pointer">
<i className="fab fa-twitter"></i>
</a>
<a href="https://www.instagram.com/einsteinmusundi/profilecard/?igsh=MWs3YXFqMDZmZWw1" className="p-3 bg-gray-200 dark:bg-gray-700 rounded-full text-gray-700 dark:text-gray-300 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 transition-colors duration-300 cursor-pointer">
<i class="fa-brands fa-instagram"></i>
</a>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
</main>
<footer className="bg-gray-900 text-white py-12">
<div className="container mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-center">
<div className="mb-8 md:mb-0">
<a href="#" className="text-2xl font-bold text-blue-400">
<span className="font-extrabold">Einstein</span>
<span className="font-light">Dipondo</span>
</a>
<p className="mt-2 text-gray-400">Frontend Developer</p>
</div>
<div className="flex flex-wrap justify-center gap-6 mb-8 md:mb-0">
<a href="#portfolio" className="hover:text-blue-400 transition-colors duration-300">Portfolio</a>
<a href="#skills" className="hover:text-blue-400 transition-colors duration-300">Skills</a>
<a href="#about" className="hover:text-blue-400 transition-colors duration-300">About</a>
<a href="#contact" className="hover:text-blue-400 transition-colors duration-300">Contact</a>
</div>
<div className="flex space-x-4">
<a href="https://github.com/Einsteinke-hub" className="p-2 rounded-full bg-gray-800 hover:bg-blue-600 transition-colors duration-300 cursor-pointer">
<i className="fab fa-github"></i>
</a>
<a href="https://www.linkedin.com/in/einstein-dipondo-13b322362?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="p-2 rounded-full bg-gray-800 hover:bg-blue-600 transition-colors duration-300 cursor-pointer">
<i className="fab fa-linkedin-in"></i>
</a>
<a href="https://x.com/cfc_Einstein?t=gTgSijSYiV_gYvHS1MmQog&s=09" className="p-2 rounded-full bg-gray-800 hover:bg-blue-600 transition-colors duration-300 cursor-pointer">
<i className="fab fa-twitter"></i>
</a>
<a href="https://www.instagram.com/einsteinmusundi/profilecard/?igsh=MWs3YXFqMDZmZWw1" className="p-2 rounded-full bg-gray-800 hover:bg-blue-600 transition-colors duration-300 cursor-pointer">
<i class="fa-brands fa-instagram"></i>
</a>
</div>
</div>
<div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
<p className="text-gray-400">© {new Date().getFullYear()} Einstein Dipondo. All rights reserved.</p>
<a
href="#"
className="mt-4 md:mt-0 p-2 rounded-full bg-blue-600 hover:bg-blue-700 transition-colors duration-300 cursor-pointer"
onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
aria-label="Back to top"
>
<i className="fas fa-arrow-up"></i>
</a>
</div>
</div>
</footer>
</div>
);
};
export default App