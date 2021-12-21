import Script from "next/script";
import Image from "next/image";
import Head from "next/head";

const Home = () => {
  return (
    <div id="imagemSlide">
      <Head>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
          crossOrigin="anonymous"
          
        />
      </Head>
      <div
        id="carouselExampleFade"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="3000">
            <Image
              src="/baners/img2.png"
              className="d-block w-100"
              alt="mk3 representações"
              width={1600}
              height={500}
            />
          </div>
          <div className="carousel-item" data-bs-interval="3000">
            <Image
              src="/baners/img3.png"
              className="d-block w-100"
              alt="mk3 representações"
              width={1600}
              height={500}
            />
          </div>
          <div className="carousel-item" data-bs-interval="3000">
            <Image
              src="/baners/img4.png"
              className="d-block w-100"
              alt="mk3 representações"
              width={1600}
              height={500}
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
        crossOrigin="anonymous"
        
      />
    </div>
  );
};

export default Home;
