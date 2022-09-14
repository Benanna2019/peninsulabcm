import image from "/public/PBCM_Purple.png";
import Link from "next/link";
import Image from "next/future/image";
import { useForm, ValidationError } from "@formspree/react";

const footerNavigation = {
  about: [
    { name: "Who We Are", href: "/about" },
    { name: "Founder & President", href: "/founder" },
    { name: "PBCM Board", href: "/board" },
    { name: "Mission & Vision", href: "/mission" },
    { name: "Calendar", href: "/calendar" },
  ],
  equipping: [
    { name: "Equipping", href: "/equipping" },
    { name: "PBCM 2022 Vision", href: "/pbcm-2022-vision" },
    { name: "Cancer Care Ministry", href: "/cancer-care" },
    { name: "Titus 2 - Womens Ministry", href: "/titus-2" },
    { name: "Blog", href: "/blog" },
  ],
  social: [
    {
      name: "Facebook",
      href: "https://www.facebook.com/peninsulabiblicalcounselingministries",
      icon: (props: any) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
  ],
};

export default function Footer() {
  const [state, handleSubmit] = useForm(
    `${process.env.NEXT_PUBLIC_SUBSCRIBE_FORM_ID}`
  );

  return (
    <footer className=" bg-gray-50" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="max-w-7xl mx-auto pt-16 pb-8 px-4 sm:px-6 lg:pt-24 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="grid grid-cols-2 gap-8 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div className="flex flex-col">
                <h3 className="font-semibold text-gray-400 tracking-wider uppercase">
                  <Link href="/biblical-counseling">
                    <a className="text-base text-gray-900 hover:text-blue-500">
                      Counseling
                    </a>
                  </Link>
                </h3>
                <h3 className="font-semibold pt-4 text-gray-400 tracking-wider uppercase">
                  <a
                    href="https://forms.gle/gKBugphandQFcEUV9"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-gray-900 hover:text-blue-500"
                  >
                    Speaker Request
                  </a>
                </h3>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-base font-semibold text-gray-500 tracking-wider uppercase">
                  About
                </h3>
                <ul role="list" className="mt-4 space-y-4">
                  {footerNavigation.about.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href}>
                        <a className="text-base text-gray-900 hover:text-blue-500">
                          {item.name}
                        </a>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-base font-semibold text-gray-500 tracking-wider uppercase">
                  Equipping
                </h3>
                <ul role="list" className="mt-4 space-y-4">
                  {footerNavigation.equipping.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href}>
                        <a className="text-base text-gray-900 hover:text-blue-500">
                          {item.name}
                        </a>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-12 md:mt-0"></div>
            </div>
          </div>
          <div className="mt-12 xl:mt-0">
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
              Subscribe to our newsletter
            </h3>
            <p className="mt-4 text-base text-gray-500">
              The latest news, articles, and resources, sent to your inbox.
            </p>
            <form onSubmit={handleSubmit} className="mt-4 sm:flex sm:max-w-md">
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                type="email"
                name="email"
                id="email-address"
                autoComplete="email"
                required
                className="appearance-none min-w-0 w-full bg-white border border-gray-300 rounded-md shadow-sm py-2 px-4 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:placeholder-gray-400"
                placeholder="Enter your email"
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
              <div className="mt-3 rounded-md sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                <button
                  type="submit"
                  disabled={state.submitting}
                  className="w-full flex items-center justify-center bg-gradient-to-r from-tyrianPurple-300 to-tyrianPurple-600 bg-origin-border px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white hover:from-emerald-600 hover:to-emerald-800"
                >
                  Subscribe
                </button>
              </div>
            </form>{" "}
          </div>
        </div>
        <div className="mt-12 border-t border-gray-200 pt-8 md:flex md:items-center md:justify-between lg:mt-16">
          <div className="flex space-x-6 md:order-2">
            <Link href="/">
              <a>
                <Image className="w-auto h-24" src={image} alt="" />
              </a>
            </Link>
          </div>
          <div className="flex flex-col justify-around">
            <p className="mt-8 text-base text-gray-400 md:mt-0 md:order-1">
              &copy; 2022 Peninsula Biblical Counseling Ministries: Charleston,
              SC. All rights reserved.
            </p>
          </div>
        </div>
        <div className="xl:grid mt-8 pt-8">
          <div className="grid grid-cols-2 gap-8">
            {/* Needs to be a single 'column' for footer text */}
            <div>
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                Location:
              </h3>
              <p className="text-base text-gray-400 md:mt-0 md:order-1">
                328 Meeting Street, Charleston, SC 29403
              </p>
              <p className="text-base text-gray-400 md:mt-0 md:order-1">
                (843)822.9988
              </p>
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase mt-2 pt-2">
                Mailing Address:
              </h3>
              <p className="text-base text-gray-400 md:mt-0 md:order-1">
                P.O. Box 21505, Charleston, SC 29413
              </p>
              <p className="text-base text-gray-400 md:mt-0 md:order-1">
                info@peninsulabcm.org
              </p>
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase mt-2 pt-2">
                Disclaimer:{" "}
              </h3>
              <p className="text-base text-gray-400 md:mt-0 md:order-1">
                <em>
                  We are not a licensed counseling agency, nor are we
                  psychologically or medically trained therapists. We offer
                  &quot;pastoral/biblical&quot; counseling intended to bring
                  life change through heart change.
                </em>
              </p>
            </div>
            <div className="justify-self-end mr-8">
              {footerNavigation.social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-600"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
