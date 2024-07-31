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
                    <br /> One <b className="text-yellow-500">Investor</b> at a
                    Time
                  </h1>
                  <p className="mt-4 text-gray-300">
                    Welcome to GoCap, your gateway to capital investments.
                    Explore, learn, and grow with our comprehensive tools and
                    community support, designed to elevate your investment
                    journey.
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
              {/* Paper Trading Simulation Tool Card */}
              <div className="w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-yellow-400">
                      <i className="fas fa-cogs"></i>
                    </div>
                    <h6 className="text-xl font-semibold">
                      Paper Trading Simulation
                    </h6>
                    <p className="mt-2 mb-4 text-gray-600">
                      Practice trading with virtual money and sharpen your
                      skills without any real-world risk.
                    </p>
                  </div>
                </div>
              </div>

              {/* LMS Feature Card */}
              <div className="w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-blue-400">
                      <i className="fas fa-book"></i>
                    </div>
                    <h6 className="text-xl font-semibold">LMS for Education</h6>
                    <p className="mt-2 mb-4 text-gray-600">
                      Explore educational content, recent case studies, and
                      market scope. Upload videos and contribute to our learning
                      community.
                    </p>
                  </div>
                </div>
              </div>

              {/* Risk Assessment Feature Card */}
              <div className="w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400">
                      <i className="fas fa-chart-line"></i>
                    </div>
                    <h6 className="text-xl font-semibold">Risk Assessment</h6>
                    <p className="mt-2 mb-4 text-gray-600">
                      Enter company details and investment preferences to
                      receive a detailed risk assessment and expected return
                      report using our ML model.
                    </p>
                  </div>
                </div>
              </div>
              {/* Multilingual Support Card */}
              <div className="w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-green-400">
                      <i className="fas fa-globe"></i>
                    </div>
                    <h6 className="text-xl font-semibold">
                      Multilingual Support
                    </h6>
                    <p className="mt-2 mb-4 text-gray-600">
                      Access our site in multiple languages to ensure a seamless
                      experience for users from around the world.
                    </p>
                  </div>
                </div>
              </div>
              {/* Search Bar Feature Card */}
              <div className="w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-purple-400">
                      <i className="fas fa-search"></i>
                    </div>
                    <h6 className="text-xl font-semibold">Smart Search</h6>
                    <p className="mt-2 mb-4 text-gray-600">
                      Find important information quickly with our integrated
                      search bar. No need to visit multiple websites.
                    </p>
                  </div>
                </div>
              </div>

              {/* Customer Detection Feature Card */}
              <div className="w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-orange-400">
                      <i className="fas fa-user-check"></i>
                    </div>
                    <h6 className="text-xl font-semibold">
                      Customer Detection
                    </h6>
                    <p className="mt-2 mb-4 text-gray-600">
                      Detect potential investors based on various parameters to
                      tailor your approach and increase engagement.
                    </p>
                  </div>
                </div>
              </div>

              {/* Comparison Tool Feature Card */}
              <div className="w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-teal-400">
                      <i className="fas fa-balance-scale"></i>
                    </div>
                    <h6 className="text-xl font-semibold">Market Comparison</h6>
                    <p className="mt-2 mb-4 text-gray-600">
                      Compare traditional investments with capital markets
                      through interactive graphs and visualizations.
                    </p>
                  </div>
                </div>
              </div>

              {/* Survey-Based Guidance Feature Card */}
              <div className="w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-indigo-400">
                      <i className="fas fa-survey"></i>
                    </div>
                    <h6 className="text-xl font-semibold">Survey Guidance</h6>
                    <p className="mt-2 mb-4 text-gray-600">
                      Fill out a survey to receive personalized guidance and
                      insights tailored to your investment interests.
                    </p>
                  </div>
                </div>
              </div>

              {/* Chatbot Feature Card */}
              <div className="w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-gray-400">
                      <i className="fas fa-comments"></i>
                    </div>
                    <h6 className="text-xl font-semibold">Chatbot</h6>
                    <p className="mt-2 mb-4 text-gray-600">
                      Get your questions answered any time with our intelligent
                      chatbot.
                    </p>
                  </div>
                </div>
              </div>

              {/* Community Forum Feature Card */}
              <div className="w-full md:w-4/12 px-4 text-center ml-auto mr-auto">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-gray-500">
                      <i className="fas fa-users"></i>
                    </div>
                    <h6 className="text-xl font-semibold">Community Forum</h6>
                    <p className="mt-2 mb-4 text-gray-600">
                      Engage with others, ask questions, and share knowledge in
                      our active community forum.
                    </p>
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
