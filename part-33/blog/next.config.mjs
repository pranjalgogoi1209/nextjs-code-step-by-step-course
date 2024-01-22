/** @type {import('next').NextConfig} */
const nextConfig = {
  redirects: async function () {
    return [
      {
        source: "/users",
        destination: "/",
        permanent: false,
      },
      {
        source: "/users/:userDetials",
        destination: "/",
        permanent: false,
      },
      {
        source: "/admin",
        destination: "/",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
// permanent is for seo
