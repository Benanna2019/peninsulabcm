import visionImage from "/public/paul-skorupskas-unsplash.jpeg";
import Image from "next/future/image";

export default function Vision() {
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
                  src={visionImage}
                  alt="Lens Focusing Mountains"
                />
                <div>
                  <figcaption className="mt-3 flex text-sm text-gray-500">
                    <p>
                      Photo by{" "}
                      <a
                        href="https://unsplash.com/@pawelskor?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Paul Skorupskas
                      </a>
                      on{" "}
                      <a
                        href="https://unsplash.com/s/photos/lens?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Unsplash
                      </a>
                    </p>
                  </figcaption>
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-200 to-indigo-200 mix-blend-multiply" />
                <div className="absolute inset-0 " />
              </div>
              <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
                <h1 className="text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                  <span className="block text-indigo-100">
                    PBCM 2022 Vision
                  </span>
                </h1>

                <div className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
                  <div className="space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative py-16  overflow-hidden">
          <div className="hidden lg:block lg:absolute lg:inset-y-0 lg:h-full lg:w-full"></div>
          <div className="relative px-4 sm:px-6 lg:px-8">
            <div className="text-lg max-w-prose mx-auto">
              {/* <h1>
                <span className="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                  Coming Soon ...
                </span>
              </h1>
              <p className="mt-8 text-xl text-gray-500 leading-8">
                The Journey of Hope, Charleston, SC will provide pastors and
                ministry leaders with the tools, training and support to raise
                up cancer care ministries in our local churches and surrounding
                communities.
              </p> */}

              <p className="mt-8 text-xl text-gray-500 leading-8">
                The Peninsula Biblical Counseling Ministries (PBCM) is in the
                inaugural stages of launching its 20/20 Vision.
              </p>
              <p className="mt-8 text-xl text-gray-500 leading-8">
                20/20 represents an impactful ministry effort of introducing,
                teaching, and establishing the ministry of biblical counseling
                within local churches, specifically on the Peninsula of
                Charleston, South Carolina. The core of this effort will be
                introducing, teaching, and establishing the ministry of biblical
                counseling within 20 local churches for the year 2022.
              </p>
              <p className="mt-8 text-xl text-gray-500 leading-8">
                We view this great work within the biblical context of the
                furtherance of Gospel of Christ through the lens of two specific
                Scriptures in Matthew 22:34-40 (the Great Commandment and
                Matthew 28:19-20 (the Great Commission).
              </p>
              <p className="mt-8 text-xl text-gray-500 leading-8">
                These two &quot;Great Covenants&quot; have their foundation in
                intimate relationship with the Lord Jesus Christ. When we are in
                an intimate relationship with Him, we are overwhelmed in His
                love for us and have a deep desire to share God&apos;s love with
                others as well.
              </p>
              <p className="mt-8 text-xl text-gray-500 leading-8">
                Being obedient to the Great Commandment and the Great Commission
                is also parallel to living out the Scriptures, &quot;Love the
                Lord your God with all your heart and with all your soul and
                with all your mind&quot; (Matthew 22:37). This love is expressed
                as we obey the Great Commission and the Great Commandment,
                sharing God&apos;s love in word and deed, summed up in Galatians
                5:14.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
