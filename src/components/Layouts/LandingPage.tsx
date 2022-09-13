import Link from "next/link";
import chsfountain from "/public/Pineapple_Fountain.jpeg";
import BibleStudy from "/public/Bible_study.jpeg";
import CovidPic from "/public/covid-pic.jpeg";
import Award from "/public/ACBC_Certificate.jpg";
// import Banner from "../Banner";
import Image from "next/future/image";
import FeaturedArticle from "../BlogRenderers/FeaturedArticle";
import FeaturedEvent from "../Events/FeaturedEvent";
import { LoadingSpinner } from "../LoadingSpinner";

export default function LandingPage({ featuredEvent }: any) {
  console.log("featured event: ", featuredEvent);
  return (
    <div className="bg-white">
      {/* <Banner /> */}
      <main>
        {/* Hero section */}
        <div className="relative">
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gray-100" />
          <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div className="relative shadow-xl sm:rounded-2xl sm:overflow-hidden">
              <div className="absolute inset-0">
                <Image
                  className="h-full w-full object-cover"
                  src={chsfountain}
                  alt="Pineapple Fountain in Downtown Charleston South Carolina"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-purple-300 to-indigo-400 mix-blend-multiply" />
              </div>
              <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
                <h1 className="text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                  <span className="block text-white">Peninsula Biblical</span>
                  <span className="block text-indigo-100">
                    Counseling Ministries
                  </span>
                </h1>
                <p className="mt-6 max-w-lg mx-auto text-center text-xl text-indigo-100 sm:max-w-3xl">
                  &quot;…impacting the Peninsula of Charleston, South Carolina
                  through the Great Commandment (Matthew 22:34-40) and Great
                  Commission (Matthew 28:16-20)&quot;
                </p>
                <div className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
                  <div className="space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Alternating Feature Sections */}
        <div className="relative pt-16 pb-32 overflow-hidden">
          <div
            aria-hidden="true"
            className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-gray-100"
          />
          <div className="relative">
            <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
              <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0">
                <div>
                  <div className="mt-6">
                    <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
                      Welcome
                    </h2>
                    <p className="mt-4 text-m text-gray-500">
                      On behalf of our President and Board of Directors of the
                      Peninsula Biblical Counseling Ministries it is our
                      pleasure to greet and welcome you. The Peninsula Biblical
                      Counseling Ministries (PBCM) is a 501 (c)(3) nonprofit
                      organization created to equip women for Biblical
                      Leadership within their church, within their home, within
                      their community and on their job.
                    </p>
                    <p className="mt-4 text-m text-gray-500">
                      We accomplish this through &quot;the scripture only&quot;.
                      PBCM working in concert with and within the local church
                      uses the scripture in building our understanding of
                      humanity, and how we minister to a &quot;broken
                      humanity&quot;. PBCM augments the local church in
                      promoting love (Matthew 22:37-40) and discipleship
                      (Matthew 18-20) providing counseling, seminars, and
                      training through the lens of a Biblical Worldview.
                    </p>
                  </div>
                </div>
                <div className="mt-8 border-t border-gray-200 pt-6">
                  <blockquote>
                    <div>
                      <p className="text-base text-gray-500">
                        &quot;Jesus is our Hope, Dwell in HIM ~ Psalms
                        91:1-2&quot;
                      </p>
                    </div>
                    <footer className="mt-3">
                      <div className="flex items-center space-x-3">
                        <div className="text-base font-medium text-gray-700">
                          ~ <em>Dr. Janie D. Wilson</em>, PBCM Founder &
                          President
                        </div>
                      </div>
                    </footer>
                  </blockquote>
                </div>
              </div>
              <div className="mt-12 sm:mt-16 lg:mt-0">
                <div className="pl-4 -mr-48 sm:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
                  <Image
                    className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                    src={BibleStudy}
                    alt="Bible Study"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* ACBC Award section */}
          <div className="relative bg-gray-900 mt-24">
            <div className="relative h-56 bg-indigo-600 sm:h-72 md:absolute md:left-0 md:h-full md:w-1/2">
              <Image
                className="w-full h-full object-cover"
                src={Award}
                alt="ACBC Award"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-r from-purple-200 to-indigo-300 mix-blend-multiply"
              />
            </div>
            <div className="relative mx-auto max-w-md px-4 py-12 sm:max-w-7xl sm:px-6 sm:py-20 md:py-28 lg:px-8 lg:py-32">
              <div className="md:ml-auto md:w-1/2 md:pl-10">
                <h2 className="text-base font-semibold uppercase tracking-wider text-gray-300">
                  PBCM is ACBC Certified!
                </h2>
                <p className="mt-2 text-white text-3xl font-extrabold tracking-tight sm:text-4xl">
                  We&apos;re here to help
                </p>
                <p className="mt-3 text-lg text-gray-300">
                  Biblical counseling is <em>counseling</em> (Colossians 3:16).
                  It is simply personal ministry, the ministry by one person to
                  another person. It helps specific individuals, couples, or
                  families in their specific situations to know Christ better
                  and handle life in God-pleasing ways.
                </p>
                {/* <div className="mt-8">
                  <div className="inline-flex rounded-md shadow">
                    <Link
                      to="/acbc-certified"
                      className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-gray-900 bg-white hover:bg-gray-50"
                    >
                      Read More
                      <ExternalLinkIcon
                        className="-mr-1 ml-3 h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                    </Link>
                  </div>
                </div> */}
              </div>
            </div>
          </div>

          {/* Featured Blog Article Section */}
          <FeaturedArticle />

          {/* Event Section */}
          <FeaturedEvent />

          {/* <div
            id="celebration-event"
            className="relative bg-gray-800 py-32 px-6 sm:py-40 sm:px-12 lg:px-16 mt-24"
          >
            <div className="absolute inset-0 overflow-hidden">
              <img
                src={Anchor}
                alt="Hope Anchors the Soul"
                className="w-full h-full object-center object-cover"
              />
            </div>
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gray-900 bg-opacity-80"
            />
            <div className="relative max-w-3xl mx-auto flex flex-col items-center text-center">
              <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                Your Invited
              </h2>
              <p className="mt-3 text-xl text-white">
                The Peninsula Biblical Counseling Ministries (PBCM) has received
                it's Association of Certified Biblical Counseling (ACBC)
                Training Center Certification!{" "}
              </p>
              <p className="mt-3 text-xl text-white">
                <em>
                  Dinner will be served and Covid Protocols will be followed
                </em>
              </p>
              <div className="relative px-4 py-8 sm:px-6 sm:py-8 lg:py-12 lg:px-8">
                <div className="mt-4 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
                  <div className="space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5">
                    <Link
                      to="acbc-celebration"
                      className="flex items-center justify-center w-full bg-white border border-transparent rounded-md py-3 px-8 text-base font-medium text-gray-900 hover:bg-gray-100 sm:px-8"
                    >
                      Event Info
                    </Link>
                    <a
                      href="https://docs.google.com/forms/d/e/1FAIpQLSeJzdZ2Gj75B_TLk7vOweujaCO4IzeBL9Gfu9zRVQYxmJEWIQ/viewform"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-full bg-white border border-transparent rounded-md py-3 px-8 text-base font-medium text-gray-900 hover:bg-gray-100 sm:px-8"
                    >
                      RSVP
                    </a> 
                  </div>
                </div>
              </div>
            </div>
          </div> */}

          {/* Covid Response */}
          <div className="mt-24">
            <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
              <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-32 lg:max-w-none lg:mx-0 lg:px-0 lg:col-start-2">
                <div>
                  <div className="mt-6">
                    <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
                      PBCM Covid-19 Response
                    </h2>
                    <p className="mt-4 text-lg text-gray-500">
                      AT PENINSULA BIBLICAL COUNSELING MINISTRIES (PBCM), we are
                      determined to keep our eyes and heart on the Lord.
                      Deuteronomy 31:6 instructs believers on what to be and
                      what we are not to be! God has promised His children that
                      HE is and will FOREVER be our &quot;true&quot; source of
                      protection, strength, and peace during unknown times.
                    </p>
                    <div className="mt-6">
                      <Link href="/covid">
                        <a className="inline-flex bg-gradient-to-r from-tyrianPurple-300 to-tyrianPurple-600 bg-origin-border px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white hover:from-emerald-600 hover:to-emerald-800">
                          Read More
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-12 sm:mt-16 lg:mt-0 lg:col-start-1">
                <div className="pr-4 lg:px-0 lg:m-0 lg:relative lg:h-full">
                  <Image
                    className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none"
                    src={CovidPic}
                    alt="Customer profile user interface"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Gradient Feature Section */}

        {/*  */}

        {/* CTA Section */}
        <div className="bg-white">
          <div className="max-w-4xl mx-auto py-16 px-4 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 lg:flex lg:items-center lg:justify-between">
            <h2 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              <span className="block">Interested In Learning More?</span>
              <span className="block bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                Get in touch
              </span>
            </h2>
            <div className="mt-6 space-y-4 sm:space-y-0 sm:flex sm:space-x-5">
              <Link href="/about">
                <a className="flex items-center justify-center bg-gradient-to-r from-tyrianPurple-300 to-tyrianPurple-600 bg-origin-border px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white hover:from-emerald-600 hover:to-emerald-800">
                  Learn more
                </a>
              </Link>
              <Link href="/biblical-counseling">
                <a className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-indigo-800 bg-indigo-50 hover:bg-indigo-100">
                  Get started
                </a>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
