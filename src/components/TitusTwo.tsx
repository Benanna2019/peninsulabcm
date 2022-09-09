import Image from "next/future/image";
import WomenGathering from "/public/women-group2.jpeg";

export default function TitusTwo() {
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
                  src={WomenGathering}
                  alt="Journey of Hope"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-purple-100 to-indigo-200 mix-blend-multiply" />
                <div className="absolute inset-0 " />
              </div>
              <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
                <h1 className="text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                  <span className="block text-indigo-100">
                    Titus 2 - Womens Ministry
                  </span>
                </h1>

                <div className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
                  <div className="space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative py-16 overflow-hidden">
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
              <p className="mt-16 max-w-lg mx-auto text-center text-xl text-gray-500 sm:max-w-3xl">
                It is our passion at Peninsula Biblical Counseling Ministries
                (PBCM) to minister to all women of faith, to teach and equip
                women of faith to live out their Christian faith in ways that
                honors and glorifies God. We believe that the Holy Scriptures
                exalts the Holy Gospel of our Lord and Savior Jesus Christ. The
                Scriptures are where all the answers pertaining to lifes
                struggles and problems, and provides the way for change,
                healing, and reconciliation in our relationship through Christ,
                with God.
              </p>
              <p className="mt-6 max-w-lg mx-auto text-center text-xl text-gray-500 sm:max-w-3xl">
                When women are continually transformed into the image of Christ,
                their families may also be drawn to the transforming power of
                God through His Word. Therefore, PBCM not only offers training
                and seminars for equipping women, but men as well.
              </p>

              <h1 className="mt-10">
                <span className="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                  Purpose and Goal of Titus 2 Womens Ministry:
                </span>
              </h1>

              <p className="mt-8 text-xl text-gray-500 leading-8">
                Though we are all on the journey, many women (young and older)
                struggle with their{" "}
                <span className="underline">
                  biblical identity, roles, and callings.
                </span>
                These three topics have been the bedrock for heated discussions
                among the various churches. The PBCM desires, through teaching
                and equipping, to live out and walk alongside women (e.g.
                discipleship), encouraging women to fulfill Gods purposes for
                her life and for His glory.
              </p>
              <p className="mt-8 text-xl text-gray-900 leading-8 font-bold">
                Audience:
              </p>
              <p className="mt-8 text-xl text-gray-500 leading-8">
                The PBCM desires to support, teach, and equip women in
                leadership within the local church (e.g., pastors and elders
                wives). It is the PBCMs belief that when older women (e.g.,
                women in leadership roles) biblically understand and accept her
                identity, role(s), and callings, she then, in turn, will be able
                to teach the younger women in her congregation the qualities and
                life giving truths of Titus 2.
              </p>
              <p className="mt-8 text-xl text-gray-900 leading-8 font-bold">
                What We Teach:
              </p>
              <ol className="list-disc mt-8 text-xl text-gray-500 leading-8 max-w-2xl mx-auto">
                <li>Your Identity</li>
                <li>Your Role</li>
                <li>Your Call</li>
                <li>Your Walk</li>
                <li>Your Attributes</li>
                <li>Proper Focus</li>
              </ol>
              <p className="mt-8 text-xl text-gray-900 leading-8 font-bold">
                Women Must Be Commited To:
              </p>
              <ol className="list-disc mt-8 text-xl text-gray-500 leading-8 max-w-2xl mx-auto">
                <li>
                  Having a continually strong and intimate relationship with
                  Christ as a result of having knowledge of Gods Word and a
                  consistent prayer life.
                </li>
                <li>
                  Embracing Scripture as the only foundational truth for her
                  life.
                </li>
              </ol>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
