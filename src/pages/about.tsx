import type { NextPage } from "next";
import AboutLayout from "../components/Layouts/AboutLayout";

const About: NextPage = () => {
  return (
    <>
      <AboutLayout>
        <div className="relative py-16 overflow-hidden">
          <div className="hidden lg:block lg:absolute lg:inset-y-0 lg:h-full lg:w-full">
            <div
              className="relative h-full text-lg max-w-prose mx-auto"
              aria-hidden="true"
            ></div>
          </div>
          <div className="relative px-4 sm:px-6 lg:px-8">
            <div className="text-lg max-w-prose mx-auto">
              <h1>
                <span className="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                  Welcome to the Peninsula Biblical Counseling Ministries (PBCM)
                </span>
              </h1>
              <p className="mt-8 text-xl text-gray-500 leading-8">
                The PBCM is a counseling ministry devoted to the Glory of God
                and the furtherance of His kingdom by working in partnership and
                fellowship with the local churches of Charleston, South
                Carolina. PBCM exists to support and encourage the local church
                in promoting discipleship through biblical counseling, seminars,
                and training.
              </p>
            </div>
            <div className="mt-6 px-10 prose prose-indigo prose-lg text-gray-500 mx-auto">
              <p className="mb-4">
                PBCM is a biblical counseling ministry. The ministry of Biblical
                counseling is committed to the orthodox belief that Scripture
                provides the only trustworthy, dependable, and authoritative
                guide for what Christians are to believe and how we are to live
                (2 Timothy 3:16-17).
              </p>
              <p className="mb-4">
                A biblical counselor is trained in the use of Scripture and the
                principles of Biblical counseling. This counseling is not
                dependent on or does it consider mans wisdom, opinions,
                experience, or concepts of behavior (Isaiah 55:8-11), to
                distinguish it from fallible human thoughts and plans. Biblical
                counseling seeks to bring the full range of Biblical truth to
                focus on the counselees need (Hebrews 4:12-16). It stresses the
                power of Gods word to enter the deepest recesses of a persons
                being.
              </p>
              <p className="mb-4">
                PBCM stresses the importance of real change that happens in the
                heart of man. When an individual has a saving relationship with
                Jesus Christ, are indwelt with the Holy Spirit, who convicts of
                sins, and words with the revealing truth of Scripture to equip a
                person.
              </p>
              <p className="mb-4">
                The main objective in the ministry of Biblical counseling is
                culminated in, &quot;change of the heart&quot;. God's word (Holy
                Scripture) contains all we need for life and godliness (2 Peter
                1:3-4). The word of God must be applied to the heart of man,
                resulting in being transformed that happens by the renewing of
                our minds and these internal changes result in life changes!
                This is not behavior modification. It is a complete
                transformation that brings glory to God by the power of the Holy
                Spirit.
              </p>
              <p className="mb-4">
                The PBCM is committed to assisting local churches by providing
                sound, biblical, Christ-centered discipleship counseling
                ministering God's complete truth as found in the Scriptures.
                Through the guidance of the Holy Spirit, we seek to bring the
                love, healing, and wholeness of Jesus Christ to those suffering
                emotional, mental, and spiritual pain. We also provide resources
                and ongoing support services such as discipleship, mentoring,
                spiritual life coaching, training, seminars and workshops.
              </p>
              <p className="mb-4">
                This is why PBCM not only offers ministry training and seminars
                for equipping women, but men as well. Our Pastoral Counseling
                Ministry component makes our ministry to men (particularly
                pastors and men in leadership), families and their churches
                complete and comprehensive.
              </p>
              <p className="mb-4 italic text-gray-900">
                Mrs. Janie D. Wilson, PhD
              </p>
              <p className="mb-4 italic text-gray-900">
                PBCM Founder & President
              </p>
            </div>
          </div>
        </div>
      </AboutLayout>
    </>
  );
};

export default About;
