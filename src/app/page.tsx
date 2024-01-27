'use client';

import Slider from './ui/home/slider/slider';
import Testimonial from './ui/home/testimonial/testimonial';
import Features from './ui/home/features/features';
import Footer from './ui/footer';

export default function Home() {
  return (
    <main className='bg-gradient-to-y from-red-500'>
      <section className="w-full h-screen">
        <div id="home" className="w-full h-3/4">
          <div className="w-full h-full opacity-75 bg-black">
            <div
              className="w-full h-full flex flex-col absolute space-y-96 py-4 items-center lg:space-y-0 lg:items-start lg:pt-48 lg:justify-start">
              <div className="hidden h-auto lg:w-3/5 lg:flex pb-6 text-black text-center mx-auto">
                <p className="text-5xl font-bold">Aprende a invertir en el mercado forex</p>
              </div>
              <div className='text-right pt-56'>
                <p className="text-3xl ml-16 font-bold">¿Quieres saber más?</p>
                <button
                  className="bg-white text-principal text-lg font-semibold p-4 w-52 rounded-full shadow-sm transition-all duration-500 ease-in-out hover:bg-principal hover:text-white transform hover:translate-y-1 hover:scale-110 lg:ml-16">
                  Agendá una llamada
                </button>
              </div>
            </div>
            <div className="w-full h-full lg:h-full bg-slide4 lg:bg-cover lg:bg-center">
            </div>
          </div>
        </div>
        <div id="cursos" className="p-6">
          <p className="text-3xl font-semibold text-principal">Nuestro curso</p>
          <div
            className="w-auto h-96 mt-6 items-center overflow-x-auto overscroll-x-contain flex space-x-6 overflow-y-hidden lg:justify-center">
            <div className="Card">
              <div className="w-full h-3/5 bg-slide1 bg-cover rounded-t-lg"></div>
              <div className="bg-secondary h-2/5 w-full rounded-b-lg">
                <p className="text-white font-bold text-xl px-4 py-2">Curso 1</p>
                <p className="text-white text-sm px-4">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </div>
            </div>
            <div className="Card">
              <div className="w-full h-3/5 bg-slide3 bg-cover rounded-t-lg"></div>
              <div className="bg-white h-2/5 w-full rounded-b-lg">
                <p className="text-tertiary font-bold text-xl px-4 py-2">Curso 2</p>
                <p className="text-tertiary text-sm px-4">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </div>
            </div>
            <div className="Card">
              <div className="w-full h-3/5 bg-slide4 bg-cover rounded-t-lg"></div>
              <div className="bg-secondary h-2/5 w-full rounded-b-lg">
                <p className="text-white font-bold text-xl px-4 py-2">Curso 3</p>
                <p className="text-white text-sm px-4">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </div>
            </div>
          </div>
        </div>
        <div id="precios" className="py-6">
          <div className="w-auto h-full mt-6 items-center overflow-x-auto overscroll-x-contain flex space-x-6 overflow-y-hidden lg:justify-center">
            <div className='w-full flex flex-col space-y-4'>
              <div className="group text-white rounded-r-full bg-gray-900 w-2/12 h-48 py-6 px-10 hover:w-4/12 transition-all ease-in-out duration-700">
                <p className='text-3xl font-semibold'>Plan Lite</p>
                <p className='transition delay-1000 duration-300 ease-in-out hidden group-hover:block pl-5'>Acceso a los indicadores MNL</p>
                {/* <p className='transition-all ease-in-out duration-500 group-hover:delay-300 hidden group-hover:block pl-10'>Acceso a todas lecciones en video</p>
                <p className='transition-all ease-in-out duration-500 group-hover:delay-700 hidden group-hover:block pl-20'>Membresía Gold por 30 días</p> agregar un botón de membresias explicando que son */}
              </div>
              <div className="text-white rounded-r-full bg-gray-600 w-3/12 h-48 py-6 px-14 hover:w-5/12 transition-all ease-in-out duration-500">
                <p className='text-3xl font-semibold'>Plan Basic</p>
                <p className='pl-5'>Acceso a los indicadores MNL</p>
                <p className='pl-10'>Acceso a todas lecciones en video</p>
                <p className='pl-20'>Membresía Gold por 60 días</p> {/*agregar un botón de membresias explicando que son*/}
                <p className='pl-20'>Corrección de trabajos prácticos online</p> {/*agregar un botón de membresias explicando que son*/}
              </div>
              <div className="text-gray-700 rounded-r-full bg-gray-300 w-4/12 h-48 py-6 px-14 hover:w-6/12 transition-all ease-in-out duration-500">
                <p className='text-3xl font-semibold'>Plan Premium</p>
                <p className='pl-5'>Acceso a los indicadores MNL</p>
                <p className='pl-10'>Acceso a todas lecciones en video</p>
                <p className='pl-20'>Membresía Gold por 90 días</p> {/*agregar un botón de membresias explicando que son*/}
                <p className='pl-20'>Corrección de trabajos prácticos online</p> {/*agregar un botón de membresias explicando que son*/}
                <p className='pl-20'>Video de la corrección del trabajo práctico</p> {/*agregar un botón de membresias explicando que son*/}
              </div>
            </div>
          </div>
        </div>

        <div className="p-6 bg-gray-200 text-center mx-auto" id="garantia">
          <p className="text-3xl font-semibold mb-6">Doble garantía de satisfacción</p>
          <div className="w-2/5 mx-auto">
            <p className='text-2xl font-semibold'>¡Satisfacción garantizada o te devolvemos tu dinero!</p>
            <div className='text-left'>
              <div className=' bg-white rounded-lg p-5 m-5'>
                {/* <p className='text-xl my-2 text-llef'>1ª</p> */}
                <ol className=''>
                  <li>Garantizamos que <span className='font-semibold'>el método funciona</span>, por lo que todo lo que tenés que hacer es seguirlo.</li>
                  <li>Si sigues el método y no tienes éxito, entonces tenés garantizada la devolución de tu dinero.</li>
                </ol>
              </div>
              <div className=' bg-white rounded-lg p-5 m-5'>
                {/* <p className='text-xl my-2'>Segunda garantía</p> */}
                <p>Tengas éxito o no:</p>
                <p className='leading-loose'>
                  Si encuentras algo que opere mejor en los mismos mercados,
                  muéstranos esta metodología y te devolvemos tu dinero.
                  No importa si has tenido éxito o no.
                  Aunque lo hayas tenido, si has encontrado algo mejor,
                  y que supere nuestros resultados, te devolveremos tu dinero.
                </p>
              </div>
            </div >
            <div>
              <div>
                <p className='text-md'>Somos los únicos en ofrecer estos beneficios, porque sabemos de lo que estamos hablando.</p>
                <ul>
                  <li>5 años pronosticando puntos de entrada, salidas y stop con la verificación posterior de dichas entradas, con una efectividad <span className="font-semibold">mayor al 90%</span> (todo comprobable)</li>
                  <li>Cuarto año consecutivo entre los libros más vendidos de trading. En el 2015 obtuvimos los 3 primeros lugares!</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="p-6 bg-white" id="testimonios">
          <p className="text-3xl font-semibold mb-6 text-principal text-center">Testimonios</p>
          <Testimonial />
        </div>
        <div className="p-6 mb-10" id="faqs">
          <p className="text-center text-3xl text-principal font-semibold mb-6">Preguntas frecuentes</p>
          <div className="w-5/6 mx-auto h-full flex flex-row space-x-6 leading-loose ">
            <div className='w-1/3 px-2'>
              <p className="text-2xl font-medium text-principal mb-3">¿Cuánto tiempo dura el curso?</p>
              <p className="text-lg"> El curso dura 1 año, son 192 horas. A esto se le agregan las grabaciones que se tiene con el alumno en la corrección de los trabajos prácticos.</p>
            </div>
            <div className='w-1/3 px-2'>
              <p className="text-2xl font-medium text-principal mb-3">¿Me voy a hacer rico con el trading?</p>
              <p className="text-lg"> Fundamentalmente va a depender de la capacidad para comprender los conceptos inherentes a la operativa en sí y del tamaño de la cuenta inicial. No es lo mismo comenzar con USD 100.000 que con USD 1.000. Con esto en mente, si tenemos una cuenta de USD 100.000 y con un rendimiento mensual del 2% (algo perfectamente realizable), en 10 años alcanzaríamos los USD 1.072.516,30.</p>
            </div>
            <div className='w-1/3 px-2'>
              <p className="text-2xl font-medium text-principal mb-3">Después de unos meses me di cuenta de que no me interesa. ¿Me devuelven mi dinero?</p>
              <p className="text-lg"> Las devoluciones de dinero sólamente se realizarán si crees que no cumplimos con nuestra doble garantía de satisfacción.</p>
            </div>
          </div>
        </div>
        <Footer />
      </section>
      <div className="w-full h-16 bg-white fixed flex space-x-8 items-center justify-center left-0 bottom-0 shadow-md p-4 lg:hidden"
        id="tab_bar">
        <a href="#home">
          <svg width="30" height="30" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path className="fill-current text-gray-300"
              d="M10.707 2.29303C10.5195 2.10556 10.2652 2.00024 10 2.00024C9.73488 2.00024 9.48057 2.10556 9.29304 2.29303L2.29304 9.29303C2.11088 9.48163 2.01009 9.73423 2.01237 9.99643C2.01465 10.2586 2.11981 10.5094 2.30522 10.6948C2.49063 10.8803 2.74144 10.9854 3.00364 10.9877C3.26584 10.99 3.51844 10.8892 3.70704 10.707L4.00004 10.414V17C4.00004 17.2652 4.1054 17.5196 4.29293 17.7071C4.48047 17.8947 4.73482 18 5.00004 18H7.00004C7.26526 18 7.51961 17.8947 7.70715 17.7071C7.89468 17.5196 8.00004 17.2652 8.00004 17V15C8.00004 14.7348 8.1054 14.4805 8.29293 14.2929C8.48047 14.1054 8.73482 14 9.00004 14H11C11.2653 14 11.5196 14.1054 11.7071 14.2929C11.8947 14.4805 12 14.7348 12 15V17C12 17.2652 12.1054 17.5196 12.2929 17.7071C12.4805 17.8947 12.7348 18 13 18H15C15.2653 18 15.5196 17.8947 15.7071 17.7071C15.8947 17.5196 16 17.2652 16 17V10.414L16.293 10.707C16.4816 10.8892 16.7342 10.99 16.9964 10.9877C17.2586 10.9854 17.5095 10.8803 17.6949 10.6948C17.8803 10.5094 17.9854 10.2586 17.9877 9.99643C17.99 9.73423 17.8892 9.48163 17.707 9.29303L10.707 2.29303Z"
              fill="#3F3F46" />
          </svg>
        </a>
        <a href="#garantia">
          <svg width="30" height="30" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path className="fill-current text-principal" fillRule="evenodd" clipRule="evenodd"
              d="M8 3.99997C6.93913 3.99997 5.92172 4.4214 5.17157 5.17155C4.42143 5.92169 4 6.93911 4 7.99997C4 9.06084 4.42143 10.0783 5.17157 10.8284C5.92172 11.5785 6.93913 12 8 12C9.06087 12 10.0783 11.5785 10.8284 10.8284C11.5786 10.0783 12 9.06084 12 7.99997C12 6.93911 11.5786 5.92169 10.8284 5.17155C10.0783 4.4214 9.06087 3.99997 8 3.99997ZM2 7.99997C1.99988 7.05568 2.22264 6.12468 2.65017 5.28271C3.0777 4.44074 3.69792 3.71157 4.4604 3.1545C5.22287 2.59743 6.10606 2.22819 7.03815 2.07681C7.97023 1.92543 8.92488 1.99618 9.82446 2.28332C10.724 2.57046 11.5432 3.06587 12.2152 3.72927C12.8872 4.39266 13.3931 5.20531 13.6919 6.10111C13.9906 6.9969 14.0737 7.95056 13.9343 8.88452C13.795 9.81848 13.4372 10.7064 12.89 11.476L17.707 16.293C17.8892 16.4816 17.99 16.7342 17.9877 16.9964C17.9854 17.2586 17.8802 17.5094 17.6948 17.6948C17.5094 17.8802 17.2586 17.9854 16.9964 17.9876C16.7342 17.9899 16.4816 17.8891 16.293 17.707L11.477 12.891C10.5794 13.5293 9.52335 13.9081 8.42468 13.9861C7.326 14.0641 6.22707 13.8381 5.2483 13.3329C4.26953 12.8278 3.44869 12.063 2.87572 11.1223C2.30276 10.1816 1.99979 9.10141 2 7.99997Z"
              fill="#3F3F46" />
          </svg>
        </a>
        <a href="#garantia">
          <svg width="30" height="30" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path className="fill-current text-gray-300" fillRule="evenodd" clipRule="evenodd"
              d="M3.172 5.17202C3.92211 4.42214 4.93934 4.00087 6 4.00087C7.06066 4.00087 8.07789 4.42214 8.828 5.17202L10 6.34302L11.172 5.17202C11.541 4.78998 11.9824 4.48525 12.4704 4.27561C12.9584 4.06598 13.4833 3.95563 14.0144 3.95102C14.5455 3.9464 15.0722 4.04761 15.5638 4.24873C16.0554 4.44986 16.502 4.74687 16.8776 5.12244C17.2532 5.49801 17.5502 5.94462 17.7513 6.4362C17.9524 6.92779 18.0536 7.45451 18.049 7.98562C18.0444 8.51674 17.934 9.04162 17.7244 9.52964C17.5148 10.0177 17.21 10.459 16.828 10.828L10 17.657L3.172 10.828C2.42212 10.0779 2.00085 9.06068 2.00085 8.00002C2.00085 6.93936 2.42212 5.92213 3.172 5.17202Z"
              fill="#3F3F46" />
          </svg>
        </a>·
        <button>
          <svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path className="fill-current text-gray-300"
              d="M25.0748 19.2748C22.9267 20.2465 20.5334 20.5405 18.214 20.1177C15.8945 19.6949 13.7589 18.5753 12.0918 16.9082C10.4246 15.241 9.30509 13.1055 8.88228 10.786C8.45946 8.46654 8.75347 6.0733 9.72512 3.92514C8.01494 4.69801 6.51777 5.87422 5.36208 7.35288C4.20638 8.83154 3.42666 10.5685 3.08979 12.4147C2.75293 14.261 2.86898 16.1614 3.428 17.9529C3.98702 19.7444 4.97232 21.3736 6.29935 22.7006C7.62639 24.0276 9.25556 25.0129 11.0471 25.572C12.8386 26.131 14.739 26.247 16.5852 25.9102C18.4315 25.5733 20.1684 24.7936 21.6471 23.6379C23.1257 22.4822 24.302 20.985 25.0748 19.2748V19.2748Z"
              fill="#CC2D4A" />
          </svg>
        </button>
        <a href="">
          <svg width="30" height="30" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path className="fill-current text-gray-300" fillRule="evenodd" clipRule="evenodd"
              d="M10 9C10.7956 9 11.5587 8.68393 12.1213 8.12132C12.6839 7.55871 13 6.79565 13 6C13 5.20435 12.6839 4.44129 12.1213 3.87868C11.5587 3.31607 10.7956 3 10 3C9.20435 3 8.44129 3.31607 7.87868 3.87868C7.31607 4.44129 7 5.20435 7 6C7 6.79565 7.31607 7.55871 7.87868 8.12132C8.44129 8.68393 9.20435 9 10 9ZM3 18C3 17.0807 3.18106 16.1705 3.53284 15.3212C3.88463 14.4719 4.40024 13.7003 5.05025 13.0503C5.70026 12.4002 6.47194 11.8846 7.32122 11.5328C8.1705 11.1811 9.08075 11 10 11C10.9193 11 11.8295 11.1811 12.6788 11.5328C13.5281 11.8846 14.2997 12.4002 14.9497 13.0503C15.5998 13.7003 16.1154 14.4719 16.4672 15.3212C16.8189 16.1705 17 17.0807 17 18H3Z"
              fill="#3F3F46" />
          </svg>
        </a>
      </div>
    </main>
  )
}
