import './App.css';
import logo from './assets/img/logowolf.png';
import person from './assets/img/Crowd.png';
import phone from './assets/img/iphone.png';
import star from './assets/img/estrella.png';
import ScrollReveal from 'scrollreveal'; // Importar ScrollReveal
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    const sr = ScrollReveal({
      distance: '50px',
      duration: 1000,
      easing: 'ease-in-out',
      origin: 'bottom',
    });

    // Revelar los elementos con la clase 'reveal'
    sr.reveal('.reveal', {
      interval: 200, // Intervalo entre animaciones
    });
  }, []);

  return (
    <>
      <div className='home'>
        <section className='info1 reveal'> {/* Añadir clase 'reveal' */}
          <h3><span className="grande">ApuGo</span> in development</h3>
          <img src={logo} alt=""/>
          <h1 className='apugo'>APUGO</h1>
          <h5>Explora con nosotros un sin fin de nuevos paisajes nunca antes vistos</h5>
          <button>
            <img src="https://c.clc2l.com/t/g/o/google-playstore-Iauj7q.png" alt="" />
            <section>
              <p>Descargalo</p>
              <p style={{fontSize:12, fontWeight:'bold', marginTop:-10, marginLeft:5}}>Play Store</p>
            </section>
          </button>
          <div className="contenedor">
            <div className="circulo circulo1"></div>
            <div className="circulo circulo2"></div>
            <div className="circulo circulo3"></div>
            <div className="circulo circulo4"></div>
            <h4>Usuarios <br /> 50+</h4>
          </div>
        </section>

        <section className='image1 reveal'> {/* Añadir clase 'reveal' */}
          <img src="https://upload.wikimedia.org/wikipedia/commons/d/d1/Puente_Colonial_de_Pachachaca.jpg" />
        </section>

        <section className='reseñas'>
          <div className='r1 reveal'> {/* Añadir clase 'reveal' */}
            <img style={{width:80, height:80, borderRadius:150}} src="https://pymstatic.com/5844/conversions/personas-emocionales-wide_webp.webp" alt="" />
            <h3>Marta</h3>
            <p>Recientemente visité el Santuario Nacional del Ampay y fue una experiencia inolvidable. Me sentí rodeado de una belleza natural impresionante desde el primer momento.</p>
            <img src={star} className='star' alt="" />
            <img src={star} className='star' alt="" />
            <img src={star} className='star' alt="" />
            <img src={star} className='star' alt="" />
            <img src={star} className='star' alt="" />
          </div>
        </section>

        <section className='reseñas2'>
          <div className='r1 reveal'> {/* Añadir clase 'reveal' */}
            <img style={{width:80, height:80, borderRadius:150}} src="https://pymstatic.com/5844/conversions/personas-emocionales-wide_webp.webp" alt="" />
            <h3>Marta</h3>
            <p>Recientemente visité el Santuario Nacional del Ampay y fue una experiencia inolvidable. Me sentí rodeado de una belleza natural impresionante desde el primer momento.</p>
            <img src={star} className='star' alt="" />
            <img src={star} className='star' alt="" />
            <img src={star} className='star' alt="" />
            <img src={star} className='star' alt="" />
            <img src={star} className='star' alt="" />
          </div>
        </section>

        <img src={phone} className='cel reveal' alt="" /> {/* Añadir clase 'reveal' */}

      </div>

      <div style={{alignContent:'center', alignItems:'center', textAlign:'center'}}>
        <h1 className='titleturisc reveal'>Sitios Turisticos</h1> {/* Añadir clase 'reveal' */}
        <p style={{color:'black', fontSize:15}}>Conoce los lugares más emblemáticos de Abancay</p>
        <div style={{borderBottom: '4px solid black', width:800, marginLeft:350, marginBottom:50}}></div>
      </div>

      <div className='siteTurisc'>
        <section className='site1'>
          <div className='micaela reveal'> {/* Añadir clase 'reveal' */}
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Estructura_central_de_la_Plaza_Micaela_Bastidas_Abancay.jpg/2560px-Estructura_central_de_la_Plaza_Micaela_Bastidas_Abancay.jpg" alt="" />
            <section>
              <h4>Plaza Micaela <br /> Bastidas</h4>
              <p>Visita esta hermosa plaza, ubicada a 5 min del centro de Abancay</p>
            </section>
          </div>
          <div className='ampay reveal'> {/* Añadir clase 'reveal' */}
            <img src="https://imgs.mongabay.com/wp-content/uploads/sites/25/2023/06/08204427/Laguna-Angasqocha-Angasqocha-lake.jpg" alt="" />
            <section>
              <h4>Santuario nacional <br /> del Ampay</h4>
              <p>Visita esta hermosa plaza, ubicada a 5 min del centro de Abancay</p>
            </section>
          </div>
        </section>
        <section className='site2'>
          <div className='illanya reveal'> {/* Añadir clase 'reveal' */}
            <img src="https://consultasenlinea.mincetur.gob.pe/fichaInventario/foto.aspx?cod=413498" alt="" />
            <section>
              <h4>Hacienda de <br /> illanya</h4>
              <p>Visita esta hermosa plaza, ubicada a 5 min del centro de Abancay</p>
            </section>
          </div>
        </section>
        <section className='site3'>
          <div className='pachachaca reveal'> {/* Añadir clase 'reveal' */}
            <img src="https://media-cdn.tripadvisor.com/media/photo-s/0d/4f/9c/51/vista-de-la-luz-del-puente.jpg" alt="" />
            <section>
              <h4>Puente <br /> Pachachaca</h4>
              <p>Visita esta hermosa plaza, ubicada a 5 min del centro de Abancay</p>
            </section>
          </div>
          <div className='armas reveal'> {/* Añadir clase 'reveal' */}
            <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/09/d2/7f/1d/plaza-de-armas.jpg?w=1200&h=1200&s=1" alt="" />
            <section>
              <h4>Plaza de <br /> Armas</h4>
              <p>Visita esta hermosa plaza, ubicada a 5 min del centro de Abancay</p>
            </section>
          </div>
          <div className='karkatera reveal'> {/* Añadir clase 'reveal' */}
            <img src="https://scontent-lim1-1.xx.fbcdn.net/v/t39.30808-6/442410749_754071576889020_5219546793573271551_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=cc71e4&_nc_eui2=AeFznC_xaimvtFCvjyJyf6oG9aIVLF5Ea5L1ohUsXkRrkltojgF20tcyrPWdThtwDbhAAnUAfB-71UINJXON23nt&_nc_ohc=yFsRt8DbMTwQ7kNvgFqRXa-&_nc_zt=23&_nc_ht=scontent-lim1-1.xx&_nc_gid=AUO8koCgGzGbD-jE_FML-bB&oh=00_AYCAtIVpQ57sN2n60U90b6bxi7yhgbHwZSYk-qZTmgnB4A&oe=6753A7F2" alt="" />
            <section>
              <h4>Túneles de <br /> karkatera</h4>
              <p>Visita esta hermosa plaza, ubicada a 5 min del centro de Abancay</p>
            </section>
          </div>
        </section>
      </div>

      <div className='mensaje reveal'> {/* Añadir clase 'reveal' */}
        <div className='rectangulo1'></div>
        <div className='circle1'></div>        
        <div className='circle1'></div>        
        <div className='circle1'></div>        
        <div className='circle1' style={{marginRight:10}}></div>     
        <div className='mesage'><p>Conoce nuevas formas de ver el mundo con nosotros!</p></div> 
        <div className='circle1'></div>        
        <div className='circle1'></div>        
        <div className='circle1'></div>        
        <div className='circle1' style={{marginRight:10}}></div>    
        <div className='rectangulo2'></div>
      </div>

      <div className='quiensomos reveal'> {/* Añadir clase 'reveal' */}
        <section className='somos'>
          <img src={person} alt="" />
          <h2>Quienes Somos</h2>
          <p>Somos un equipo de desarrolladores de software especializados en el sector turístico. Nos dedicamos a crear plataformas digitales, como esta página web y nuestra aplicación móvil, que facilitan la planificación y disfrute de experiencias turísticas inolvidables.</p>
          <button><img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/WhatsApp_icon.png" alt="" /><p>Whatsapp</p></button>
        </section>
        <section className='develop'>
          <h3>Equipo Desarrollador</h3>
          <div className='contentDev'>
            <div>
              <img src="https://pymstatic.com/5844/conversions/personas-emocionales-wide_webp.webp" alt="" />
              <p>Desarrollador back-end</p>
            </div>
            <div>
              <img src="https://inmofotos.es/wp-content/uploads/2021/10/foto-retrato-de-como-hacer-buenas-fotos-a-personas.jpg" alt="" />
              <p>Desarrollador front-end</p>
            </div>
          </div>
        </section>
      </div>

      <footer>
        <div className='mision reveal'> {/* Añadir clase 'reveal' */}
          <h3>Misión</h3>
          <p>Brindar a nuestros clientes aventuras auténticas que conecten con la cultura local y la biodiversidad, promoviendo un turismo sostenible y responsable.</p>
        </div>
        <div className='vision reveal'> {/* Añadir clase 'reveal' */}
          <h3>Visión</h3>
          <p>Convertirnos en líderes en el sector turístico, reconocidos por nuestra dedicación al servicio y nuestro compromiso con la conservación del medio ambiente.</p>
        </div>
        <div className='socios reveal'> {/* Añadir clase 'reveal' */}
          <h3>Socios</h3>
          <div>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDOM3ZAb12S4eFiWAcAMxiE3Kna-upfWcbpg&s" alt="" />
            <img src="https://1000marcas.net/wp-content/uploads/2019/12/Starbucks-Logo.png" alt="" />
          </div>
        </div>
        <div className='buton'>
          <button>
            <img src="https://c.clc2l.com/t/g/o/google-playstore-Iauj7q.png" alt="" />
            <section>
              <p>Descargalo</p>
              <p style={{fontSize:12, fontWeight:'bold', marginTop:-10, marginLeft:5}}>Play Store</p>
            </section>
          </button>
        </div>
      </footer>
    </>
  );
}

export default App;
