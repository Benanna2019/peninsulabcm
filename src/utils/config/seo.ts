export const baseUrl =
  process.env.NODE_ENV === "production" ? "https://peninsulabcm.org" : "";
export const baseEmail = "janiedwilson@peninsulabcm.org";

export const defaultSEO = {
  title: "PeninsulaBCM",
  description: "Peninsula Biblical Counseling Ministries",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: baseUrl,
    site_name: "PeninsulaBCM",
    images: [
      {
        url: `${baseUrl}/static/og/default.png`,
        alt: "PeninsulaBCM",
      },
    ],
  },
};
