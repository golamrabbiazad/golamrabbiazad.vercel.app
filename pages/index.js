import Head from 'next/head';

const Home = () => (
  <div className="container">
    <Head>
      <title>Simple statics site</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <main>
      <header className="showcase">
        <div className="container">
          <nav>
            <h1 className="logo">My Website</h1>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </nav>

          <div className="showcase-content">
            <div>
              <h1>Make Your Marketing Real</h1>
              <p className="my-1">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
                eaque quis et rerum maxime provident cumque blanditiis ratione
                eos, saepe deleniti aspernatur! Ratione iste unde saepe fugit
                laboriosam rem animi.
              </p>
              <a href="#" className="btn-primary">
                Learn More
              </a>
              <a href="./nodejs" className="btn-secondary">
                Sign Up
              </a>
            </div>
            <img
              src="https://themesbrand.com/zooki/layouts/images/home-2-img.png"
              alt="home-2 form zooki"
            />
          </div>
        </div>
      </header>

      <footer>
        <a
          href="https://zeit.co?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by <img src="/zeit.svg" alt="ZEIT Logo" />
        </a>
      </footer>
    </main>
    <style jsx>{`
      footer {
        width: 100%;
        height: 100px;
        border-top: 1px solid #eaeaea;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      footer img {
        margin-left: 0.5rem;
      }

      footer a {
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .title a {
        color: #0070f3;
        text-decoration: none;
      }

      .title a:hover,
      .title a:focus,
      .title a:active {
        text-decoration: underline;
      }

      .m-1 {
        margin: 1rem;
      }

      .my-1 {
        margin: 1rem 0;
      }

      .p-1 {
        padding: 1rem;
      }

      .py-1 {
        padding: 1rem 0;
      }

      .m-2 {
        margin: 2rem;
      }

      .my-2 {
        margin: 2rem 0;
      }

      .p-2 {
        padding: 2rem;
      }

      .py-2 {
        padding: 2rem 0;
      }

      .m-3 {
        margin: 3rem;
      }

      .my-3 {
        margin: 3rem 0;
      }

      .p-3 {
        padding: 3rem;
      }

      .py-3 {
        padding: 3rem 0;
      }

      .m-4 {
        margin: 4rem;
      }

      .my-4 {
        margin: 4rem 0;
      }

      .p-4 {
        padding: 4rem;
      }

      .py-4 {
        padding: 4rem 0;
      }

      .m-5 {
        margin: 5rem;
      }

      .my-5 {
        margin: 5rem 0;
      }

      .p-5 {
        padding: 5rem;
      }

      .py-5 {
        padding: 5rem 0;
      }

      .m-6 {
        margin: 6rem;
      }

      .my-6 {
        margin: 6rem 0;
      }

      .p-6 {
        padding: 6rem;
      }

      .py-6 {
        padding: 6rem 0;
      }

      .btn-secondary,
      .btn-primary {
        display: inline-block;
        border-radius: 4px;
        padding: 8px 20px;
        margin: 3px;
        -webkit-border-radius: 4px;
        -moz-border-radius: 4px;
        -ms-border-radius: 4px;
        -o-border-radius: 4px;
      }
      .btn-secondary:hover,
      .btn-primary:hover {
        transform: scale(0.98);
        -webkit-transform: scale(0.98);
        -moz-transform: scale(0.98);
        -ms-transform: scale(0.98);
        -o-transform: scale(0.98);
      }

      .btn-primary {
        background-color: white;
        color: #333333;
      }

      .btn-secondary {
        background-color: #ad62aa;
        color: #333333;
      }

      .showcase {
        background-color: #e4cbd3;
        color: #333333;
        height: 600px;
      }
      .showcase nav {
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
      .showcase ul {
        display: flex;
        list-style-type: none;
      }
      .showcase li {
        padding: 1rem;
      }
      .showcase a {
        text-decoration: none;
        cursor: pointer;
      }
      .showcase a:hover {
        color: black;
      }
      .showcase-content {
        display: flex;
        height: 100%;
        align-items: center;
        margin-top: 2rem;
      }
      .showcase-content img {
        width: 50%;
      }
      .showcase-content h1 {
        font-size: 3.125rem;
        line-height: 1.2;
      }

      .container {
        max-width: 1100px;
        padding: 0 30px;
        margin: 0 auto;
        overflow: auto;
      }

      img {
        width: 100%;
      }

      @media (max-width: 700px) {
        .showcase {
          height: 500px;
        }
        .showcase-content {
          text-align: center;
        }
        .showcase-content img {
          display: none;
        }
      }
    `}</style>

    <style jsx global>{`
      html,
      body {
        padding: 0;
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
          Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
      }

      * {
        box-sizing: border-box;
      }
    `}</style>
  </div>
);

export default Home;
