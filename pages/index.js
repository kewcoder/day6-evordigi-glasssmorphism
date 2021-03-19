import Head from 'next/head'
import Link from 'next/link'
import { useState,useEffect, useRef } from 'react'
import VanillaTilt from 'vanilla-tilt';

function Tilt(props) {
  const { options, ...rest } = props;
  const tilt = useRef(null);

  useEffect(() => {
    VanillaTilt.init(tilt.current, options);
  }, [options]);

  return <div ref={tilt} {...rest} />;
}


export default function Home() {

  const [darkMode, setDarkMode] = useState(false)

  const options = {
    scale: 1,
    speed: 1000,
    max: 10
  };

  return (
    <div className={(darkMode)?'theme-dark':'theme-light'}>
       <div  className="bg-circle-big glass"></div>
      <div className="bg-circle-small glass"></div>
      <Head>
        <title>Evordigi | Event Organizer Digital Indonesia</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="navbar">
      <Link href="">
            <b className="logo">
             
                Evordigi.com
            </b>
          </Link>
        <nav className="menu">
          
          <Link href="">
            <span>
              About Us
            </span>
          </Link>
          <Link href="">
            <span>
              Services
            </span>
          </Link>
          <Link href="">
            <span>
              Login
            </span>
          </Link>
          <Link href="">
            <span className="glass">
              Register
            </span>
          </Link>

          <span  onClick={()=>{
            setDarkMode(!darkMode)
          }}>
              {(darkMode) ? 
              'light'
              : 
              'dark'
             }
          </span>
        </nav>
      </header>
      <main className="main">
        <nav className="filter">

          <div className="search">
            <Tilt className="box" options={options}>
              <input placeholder="Typing your City" className="input  glass" />
              </Tilt>
          </div>

          <div className="category ">
          <Tilt className="box" options={options}>

            <select className="input glass">
              <option value="">category</option>
            </select>
            </Tilt>
          </div>

          <div className="act">
          <Tilt className="box" options={options}>

            <div className="input glass">
              <span className="glass">Vendor</span>
              <span >Personal</span>
            </div>
            </Tilt>
          </div>
        </nav>

        <section className="section">
          <h1>Popular Vendor</h1>
          <div className="list">
            <article className="item ">
                <div className="item glass vendor">
                <img src="image 2.png" alt=""/>
                <h1 className="item">
                Luvisa
                </h1>
                <p className="item">
                Event planning and production, design and decoration,
lighting and sound system, stage, rigging, entertainment 
and talent, on-site management, and many more.
</p>
                <span>Jakarta Selatan</span>

                <div className="btn glass">Booking Now</div>
                </div>
            </article>
            <article className="item ">
              <div className="item glass vendor">
              <img src="image 3.png" alt=""/>

                <h1 className="item">
                Dinamika Media Promosindo
                </h1>

                <p className="item">
                Event planning and production, design and decoration,
lighting and sound system, stage, rigging, entertainment 
and talent, on-site management, and many more. </p>

                 <span>Jakarta Selatan</span>

                
                <div className="btn glass">Booking Now</div>
              </div>
            </article>
            <article className="item ">
              <div className="item glass vendor">
              <img src="image 4.png" alt=""/>

              <h1 className="item">
              Akuraksa Production
                </h1>
                <p className="item">
                Event planning and production, design and decoration,
lighting and sound system, stage, rigging, entertainment 
and talent, on-site management, and many more.</p>
                <span>Jakarta Selatan</span>
                
              <div className="btn glass">Booking Now</div>
              </div>
            </article>
          </div>
        </section>
        <section className="section">
          <h1>Popular Service</h1>
          <div className="list">
            <article className="item">
                <div className="item glass">
                Event planning and production
                </div>
            </article>
            <article className="item">
                <div className="item glass">
                design and decoration
                </div>
            </article>
            <article className="item">
                <div className="item glass">
                lighting and sound system
                </div>
            </article>
            <article className="item">
                <div className="item glass">
                Stage
                </div>
            </article>
            <article className="item">
                <div className="item glass">
                Ringging
                </div>
            </article>
            <article className="item">
                <div className="item glass">
                entertainment and talent
                </div>
            </article>
          </div>
        </section>
      </main>
    </div>
  )
}
