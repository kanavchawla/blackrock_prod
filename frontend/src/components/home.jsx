import React from "react";
// import Chatbot from "./chatbot";
export default function Home() {
  return (
    <>
      <main>
        {/* <Chatbot /> */}
        <div
          className="relative pt-16 pb-32 flex content-center items-center justify-center"
          style={{
            minHeight: "75vh",
          }}
        >
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80')",
            }}
          >
            <span
              id="blackOverlay"
              className="w-full h-full absolute opacity-75 bg-black"
            ></span>
          </div>
          <div className="container relative mx-auto">
            <div className="items-center flex flex-wrap">
              <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                <div className="pr-12">
                  <h1 className="text-white font-semibold text-5xl">
                    Inspiring Growth,
                    <br /> One <b className="text-yellow-500">
                      Entrepreneur
                    </b>{" "}
                    at a Time
                  </h1>
                  <p className="mt-4 text-gray-300">
                    Our platform nurtures micro and nano entrepreneurs, offering
                    personalized opportunities and heartfelt support. Unlock
                    your potential with tools for promotion, market insights,
                    and secure crowdfunding, all within a caring, collaborative
                    community.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
            style={{ height: "70px" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-gray-300 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
        </div>

        <section className="pb-20 bg-gray-300 -mt-24">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap">
              <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400">
                      <i className="fas fa-share-alt"></i>
                    </div>
                    <h6 className="text-xl font-semibold">
                      AI-Powered Promotion Wizard
                    </h6>
                    <p className="mt-2 mb-4 text-gray-600">
                      Harness the power of AI to craft stunning promotional
                      content tailored for your social media platforms. Share
                      your unique story to elevate your business presence.
                    </p>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-blue-400">
                      <i className="fas fa-graduation-cap"></i>
                    </div>
                    <h6 className="text-xl font-semibold">
                      Elevate your Knowledge
                    </h6>
                    <p className="mt-2 mb-4 text-gray-600">
                      Unlock your full potential with our interactive Learning
                      Management System(LMS) featuring courses and resources in
                      business management, financial management, essential
                      skills and expert guidance to boost your professional
                      skills.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-6 w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-green-400">
                      <i className="fas fa-rocket"></i>
                    </div>
                    <h6 className="text-xl font-semibold">
                      New Venture Navigator
                    </h6>
                    <p className="mt-2 mb-4 text-gray-600">
                      Our freelancers will provide expert guidance and support
                      to help you establish a strong foundation for success.
                      With our Affordable Freelance Solutions, you can trust
                      that you're getting the best value for your money.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center mt-32">
              <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
                <div className="text-gray-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-gray-100">
                  <i className="fas fa-people-carry text-xl"></i>
                </div>
                <h3 className="text-3xl mb-2 font-bold leading-normal text-black">
                  Virtual Co-working Spaces
                </h3>
                <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700">
                  Collaborate, network, and attend virtual events in our virtual
                  co-working spaces. Connect with like-minded individuals and
                  teams from anywhere in the world.
                </p>
                <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-gray-700">
                  Our virtual spaces are designed to facilitate seamless
                  communication, innovation, and productivity. Join the
                  community of your choice today and experience the future of
                  work!
                </p>
                <a
                  href="https://www.creative-tim.com/learning-lab/tailwind-starter-kit#/presentation"
                  className="font-bold text-gray-800 mt-8"
                >
                  Get Started Today
                </a>
              </div>

              <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-gray-600">
                  <img
                    alt="..."
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80"
                    className="w-full align-middle rounded-lg shadow-lg"
                  />
                  {/* <blockquote className="relative p-8 mb-4">
                    <svg
                      preserveAspectRatio="none"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 583 95"
                      className="absolute left-0 w-full block"
                      style={{
                        height: "95px",
                        top: "-94px",
                      }}
                    >
                      <polygon
                        points="-30,95 583,95 583,65"
                        className="text-gray-600 fill-current"
                      ></polygon>
                    </svg>
                    <h4 className="text-xl font-bold text-black">
                      Top Notch Services
                    </h4>
                    <p className="text-md font-light mt-2 text-white">
                      The Arctic Ocean freezes every winter and much of the
                      sea-ice then thaws every summer, and that process will
                      continue whatever happens.
                    </p>
                  </blockquote> */}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative py-20">
          <div
            className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
            style={{ height: "80px" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-white fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>

          <div className="container mx-auto px-4">
            <div className="items-center flex flex-wrap">
              <div className="w-full md:w-4/12 ml-auto mr-auto px-4 mb-6">
                <img
                  alt="..."
                  className="max-w-full rounded-lg shadow-lg"
                  src="src\image\carlos-muza-hpjSkU2UYSU-unsplash.jpg"
                />
              </div>
              <div className="w-full md:w-5/12 ml-auto mr-auto px-4 mb-20">
                <div className="md:pr-12">
                  <div className="text-gray-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-gray-300">
                    <i className="fas fa-chart-bar text-xl"></i>
                  </div>
                  <h3 className="text-3xl font-bold text-black">
                    Market Insights Hub
                  </h3>
                  <p className="mt-4 text-lg leading-relaxed text-gray-600">
                    Unlock the power of data-driven decision-making with our
                    interactive Market Insights Hub. Analyze market size,
                    demand, and profit projections in real-time, and gain a
                    deeper understanding of your business's potential.
                  </p>
                  <ul className="list-none mt-6">
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-600 bg-gray-200 mr-3">
                            <i className="fas fa-chart-pie"></i>
                          </span>
                        </div>
                        <div>
                          <h4 className="text-gray-600">
                            Accurate Demand Forecasting
                          </h4>
                        </div>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-600 bg-gray-200 mr-3">
                            <i className="fas fa-chart-area"></i>
                          </span>
                        </div>
                        <div>
                          <h4 className="text-gray-600">
                            Real-time Market Analysis
                          </h4>
                        </div>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-600 bg-gray-200 mr-3">
                            <i className="fas fa-chart-line"></i>
                          </span>
                        </div>
                        <div>
                          <h4 className="text-gray-600">
                            Profit Projections and Optimization
                          </h4>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* added*/}
          <div className="container mx-auto px-4 my-12">
            <div className="items-center flex flex-wrap">
              <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
                <div className="md:pr-12">
                  <div className="text-gray-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-gray-300">
                    <i className="fas fa-donate text-xl"></i>
                  </div>
                  <h3 className="text-3xl font-bold text-black ">
                    FundChain Revolution
                  </h3>
                  <p className="mt-4 text-lg leading-relaxed text-gray-600">
                    Imagine a world where fundraising is transparent, secure,
                    and community-driven. Our FundChain Revolution, makes this
                    vision a reality. We provide a decentralized and
                    democratized platform for creators, innovators, and
                    entrepreneurs to raise funds from a global community of
                    supporters.
                  </p>

                  <p className="mt-4 text-lg leading-relaxed text-gray-600">
                    Our platform utilizes smart contracts to ensure that
                    transactions are secure, transparent, and tamper-proof.
                  </p>
                  <p className="mt-4 text-lg leading-relaxed text-gray-600">
                    Join the revolution and discover a new way to fund your
                    dreams.
                  </p>
                </div>
              </div>
              <div className="w-full md:w-4/12 ml-auto mr-auto px-4">
                <img
                  alt="..."
                  className="max-w-full rounded-lg shadow-lg mt-20"
                  src="src\image\fundrraise.jpg"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="pt-20 pb-48">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center text-center mb-24">
              <div className="w-full lg:w-6/12 px-4">
                <h2 className="text-4xl font-semibold">
                  The Dream Team Unleashed
                </h2>
                <p className="text-lg font-bold leading-relaxed m-4 text-gray-600">
                  "With hearts ablaze and minds afire, our team is forging a new
                  path in entrepreneurship, fueled by creativity and
                  determination."
                </p>
              </div>
            </div>
            <div className="flex flex-wrap justify-center">
              <div className="w-full md:w-6/12 lg:w-3/12 mb-12 px-4">
                <div className="px-6">
                  <img
                    alt="Shivam Verma"
                    src="src/image/shivam.jpg"
                    className="shadow-lg rounded-full w-32 h-32 object-cover mx-auto"
                    style={{ maxWidth: "120px" }}
                  />
                  <div className="pt-6 text-center">
                    <h5 className="text-xl font-bold">Shivam Verma</h5>
                    <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
                      Backend Crew
                    </p>
                    <div className="mt-6 flex justify-center">
                      <button
                        className="bg-blue-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-twitter"></i>
                      </button>
                      <button
                        className="bg-blue-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-facebook-f"></i>
                      </button>
                      <button
                        className="bg-pink-800 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-instagram"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-6/12 lg:w-3/12 mb-12 px-4">
                <div className="px-6">
                  <img
                    alt="Aditya Srivastava"
                    src="src/image/aditya.jpg"
                    className="shadow-lg rounded-full w-32 h-32 object-cover mx-auto"
                    style={{ maxWidth: "120px" }}
                  />
                  <div className="pt-6 text-center">
                    <h5 className="text-xl font-bold">Aditya Srivastava</h5>
                    <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
                      Backend Crew
                    </p>
                    <div className="mt-6 flex justify-center">
                      <button
                        className="bg-blue-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-twitter"></i>
                      </button>
                      <button
                        className="bg-blue-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-facebook-f"></i>
                      </button>
                      <button
                        className="bg-pink-800 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-instagram"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-6/12 lg:w-3/12 mb-12 px-4">
                <div className="px-6">
                  <img
                    alt="Akriti Rai"
                    src="src/image/akriti.jpg"
                    className="shadow-lg rounded-full w-32 h-32 object-cover mx-auto"
                    style={{ maxWidth: "120px" }}
                  />
                  <div className="pt-6 text-center">
                    <h5 className="text-xl font-bold">Akriti Rai</h5>
                    <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
                      Frontend Crew
                    </p>
                    <div className="mt-6 flex justify-center">
                      <button
                        className="bg-blue-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-twitter"></i>
                      </button>
                      <button
                        className="bg-blue-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-facebook-f"></i>
                      </button>
                      <button
                        className="bg-pink-800 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-instagram"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-6/12 lg:w-3/12 mb-12 px-4">
                <div className="px-6">
                  <img
                    alt="Akshita Munjal"
                    src="src/image/akshita.jpeg"
                    className="shadow-lg rounded-full w-32 h-32 object-cover mx-auto"
                    style={{ maxWidth: "120px" }}
                  />
                  <div className="pt-6 text-center">
                    <h5 className="text-xl font-bold">Akshita Munjal</h5>
                    <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
                      Frontend Crew
                    </p>
                    <div className="mt-6 flex justify-center">
                      <button
                        className="bg-red-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-google"></i>
                      </button>
                      <button
                        className="bg-blue-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-twitter"></i>
                      </button>
                      <button
                        className="bg-pink-800 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-instagram"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="pb-20 relative block bg-gray-900">
          <div
            className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
            style={{ height: "80px" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-gray-900 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>

          <div className="container mx-auto px-4 lg:pt-24 lg:pb-64">
            <div className="flex flex-wrap text-center justify-center">
              <div className="w-full lg:w-6/12 px-4">
                <h2 className="text-4xl font-semibold text-white">
                  Turn Your Passion into a Business
                </h2>
                <p className="text-lg leading-relaxed mt-4 mb-4 text-gray-500">
                  Do you have a passion or idea that you want to turn into a
                  reality? Our project is here to help! We're building a
                  community of entrepreneurs who want to turn their ideas into
                  successful businesses.
                </p>
              </div>
            </div>
            <div className="flex flex-wrap mt-12 justify-center">
              <div className="w-full lg:w-3/12 px-4 text-center">
                <div className="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                  <i className="fas fa-hammer text-xl"></i>
                </div>
                <h6 className="text-xl mt-5 font-semibold text-white">
                  Get Access to Proven Business Ideas
                </h6>
                <p className="mt-2 mb-4 text-gray-500">
                  Whether you're just starting out or looking to scale your
                  business, we've got you covered.
                </p>
              </div>
              <div className="w-full lg:w-3/12 px-4 text-center">
                <div className="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                  <i className="fas fa-users text-xl"></i>
                </div>
                <h5 className="text-xl mt-5 font-semibold text-white">
                  Find Your Target Audience
                </h5>
                <p className="mt-2 mb-4 text-gray-500">
                  Identify your target market and create a business plan that
                  resonates with them.
                </p>
              </div>
              <div className="w-full lg:w-3/12 px-4 text-center">
                <div className="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                  <i className="fas fa-lightbulb text-xl"></i>
                </div>
                <h5 className="text-xl mt-5 font-semibold text-white">
                  Turn Your Idea into a Reality
                </h5>
                <p className="mt-2 mb-4 text-gray-500">
                  From business planning to marketing and sales, we've got the
                  expertise to help you succeed.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="relative block py-24 lg:pt-0 bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center lg:-mt-64 -mt-48">
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300">
                  <div className="flex-auto p-5 lg:p-10">
                    <h4 className="text-2xl font-semibold text-black">
                      Want to work with us?
                    </h4>
                    <p className="leading-relaxed mt-1 mb-4 text-gray-600">
                      Complete this form and we will get back to you in 24
                      hours.
                    </p>
                    <div className="relative w-full mb-3 mt-8">
                      <label
                        className="block uppercase text-gray-700 text-xs font-bold mb-2"
                        htmlFor="full-name"
                      >
                        Full Name
                      </label>
                      <input
                        type="text"
                        className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                        placeholder="Full Name"
                        style={{ transition: "all .15s ease" }}
                      />
                    </div>

                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-gray-700 text-xs font-bold mb-2"
                        htmlFor="email"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                        placeholder="Email"
                        style={{ transition: "all .15s ease" }}
                      />
                    </div>

                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-gray-700 text-xs font-bold mb-2"
                        htmlFor="message"
                      >
                        Message
                      </label>
                      <textarea
                        rows="4"
                        cols="80"
                        className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                        placeholder="Type a message..."
                      />
                    </div>
                    <div className="text-center mt-6">
                      <button
                        className="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                        style={{ transition: "all .15s ease" }}
                      >
                        Send Message
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
