import Anchor from "/public/Hope_Anchors_Event_Image.jpeg";
import EdWelch from "/public/Ed_Welch_CCEF_Image.png";
import GiftGiveaway from "/public/Pastor_As_Counselor_Book.jpeg";
import Image from "next/future/image";

export default function CelebrationEvent() {
  return (
    <div>
      <main>
        {/* Hero section */}
        <div className="relative">
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gray-100" />
          <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div className="relative shadow-xl sm:rounded-2xl sm:overflow-hidden">
              <div className="absolute inset-0">
                <Image
                  className="h-full w-full object-cover"
                  src={Anchor}
                  alt="Hope Anchors The Soul"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-gray-400 to-gray-700 mix-blend-multiply" />
              </div>
              <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
                <h1 className="text-center text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
                  <span className="block text-white">
                    Hope Anchors The Soul,
                  </span>
                  <span className="block text-white">In Christ</span>
                </h1>
                <p className="mt-6 max-w-lg mx-auto text-center text-3xl text-white sm:max-w-3xl">
                  Hebrews 6:16-20
                </p>
                <div className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
                  <div className="space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-1 sm:gap-5">
                    <a
                      href="https://docs.google.com/forms/d/e/1FAIpQLSeJzdZ2Gj75B_TLk7vOweujaCO4IzeBL9Gfu9zRVQYxmJEWIQ/viewform"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-tyrianPurple-500 bg-opacity-90 hover:bg-opacity-70 sm:px-8"
                    >
                      RSVP
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Event Information */}

        <div className="relative py-16 overflow-hidden">
          <div className="relative px-4 sm:px-6 lg:px-8">
            <div className="text-lg max-w-prose mx-auto">
              <h1>
                <span className="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                  Join Us For a Celebration
                </span>
              </h1>
              <p className="mt-4 text-center text-xl text-gray-500 leading-8 font-bold">
                <span className="text-gray-900">
                  Peninsula Biblical Counseling Ministries has received
                </span>{" "}
                its
                <a
                  href="https://biblicalcounseling.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-blue-500"
                >
                  {" "}
                  Association of Certified Biblical Counseling (ACBC)
                </a>
                Training Center Certification
              </p>
              <p className="mt-8 text-xl text-gray-500 leading-8">
                <strong className="text-gray-900 pr-2">When:</strong>
              </p>
              <p className="mt-2 text-xl text-gray-500 leading-8">
                November 12th - 14th
              </p>
              <p className="mt-8 text-xl text-gray-500 leading-8">
                <strong className="text-gray-900 pr-2">Where:</strong>
              </p>
              <p className="mt-2 text-xl text-gray-500 leading-8">
                Citadel Square Baptist Church
              </p>
              <p className="mt-2 text-xl text-gray-500 leading-8">
                328 Meeting St.
              </p>
              <p className="mt-2 text-xl text-gray-500 leading-8">
                Charleston, SC 29414
              </p>
              <p className="mt-8 text-xl text-gray-500 leading-8">
                <strong className="text-gray-900 pr-2">Schedule:</strong>
              </p>
              <p className="mt-2 text-xl text-gray-500 leading-8">
                Starts @ 6:30pm
              </p>
              <p className="mt-2 text-xl text-gray-500 leading-8 italic">
                ***Dinner will be served and COVID protocols will be followed***
              </p>
            </div>
          </div>
        </div>

        {/* About The Speaker */}
        <div className="relative pt-16 pb-32 overflow-hidden">
          <div
            aria-hidden="true"
            className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-gray-100"
          />
          <div className="mt-24">
            <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
              <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-32 lg:max-w-none lg:mx-0 lg:px-0 lg:col-start-2">
                <div>
                  <div className="mt-6">
                    <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
                      Our Speaker Will Be
                    </h2>
                    <p className="mt-4 text-lg text-gray-500">
                      Dr. Edward T. Welch, M.Div., Ph.D., faculty member at
                      Christian Counseling and Educational Foundation (CCEF) and
                      a unique and very special friend of the PBCM.
                    </p>
                    <p className="mt-4 text-lg text-gray-500">
                      Dr. Welch is the author of numerous books, e.g. Side By
                      Side, Caring For One Another, and When People Are Big and
                      God is Small.
                    </p>
                    <div className="mt-6">
                      <a
                        href="https://www.ccef.org/people/ed-welch/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex bg-gradient-to-r from-tyrianPurple-400 to-tyrianPurple-700 bg-origin-border px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white hover:from-purple-700 hover:to-indigo-700"
                      >
                        More About Ed Welch
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-12 sm:mt-16 lg:mt-0 lg:col-start-1">
                <div className="pr-4 sm:pr-6 lg:px-0 lg:m-0 lg:relative lg:h-full">
                  <Image
                    className="w-full rounded-full shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none"
                    src={EdWelch}
                    alt="Ed Welch CCEF Image"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Gift Section */}

        <div className="bg-white">
          <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:gap-x-8">
            {/* Product details */}
            <div className="mt-4">
              <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                A Special Gift For You
              </h1>
              <section aria-labelledby="information-heading" className="mt-4">
                <h2 className="text-1xl font-bold tracking-tight text-gray-900 sm:text-2xl">
                  The Pastor As Counselor: The Call To Soul Care
                </h2>
                <div className="mt-4 space-y-6">
                  <p className="text-base text-gray-500">
                    As a guest of this event, you will receive a copy of The
                    Pastor as Counselor: The Call for Soul Care by Dr. David
                    Powlison and Dr. Edward Welch (forward).
                  </p>
                  <p className="text-base text-gray-500 mt-4">
                    David Powlison Examines the Unique Role of the Pastor as
                    Counselor A pastor inhabits multiple roles―teacher,
                    preacher, youth leader, and counselor. Yet many church
                    leaders feel unprepared to counsel church members who are
                    struggling with difficult, multifaceted problems. David
                    Powlison reminds pastors of their unique role as the
                    shepherds of God&apos;s people, equipping them to apply
                    biblical wisdom to the thoughts, values, moods,
                    expectations, and decisions of those under their care.
                  </p>
                </div>
              </section>
            </div>
            {/* Product image */}
            <div className="mt-10 lg:mt-0 lg:col-start-2 lg:row-span-2 lg:self-center">
              <div className="aspect-w-1 aspect-h-1 rounded-lg overflow-hidden">
                <Image
                  src={GiftGiveaway}
                  alt="Pastor As Counselor Book"
                  className="w-full h-full object-center object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Stats section */}

        {/* CTA Section */}
      </main>
    </div>
  );
}
