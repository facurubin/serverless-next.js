module.exports = {
  eslint: {
    ignoreDuringBuilds: true
  },
  trailingSlash: true,
  async redirects() {
    return [
      {
        source: "/permanent-redirect/",
        destination: "/ssr-page/",
        permanent: true
      },
      {
        source: "/temporary-redirect/",
        destination: "/ssg-page/",
        permanent: false
      },
      {
        source: "/custom-status-code-redirect/",
        destination: "/ssr-page/",
        statusCode: 302
      },
      {
        source: "/wildcard-redirect-1/:slug*/",
        destination: "/ssg-page/",
        permanent: true
      },
      {
        source: "/wildcard-redirect-2/:slug*/",
        destination: "/wildcard-redirect-2-dest/:slug*/",
        permanent: true
      },
      {
        source: "/regex-redirect-1/:slug(\\d{1,})/",
        destination: "/ssg-page/",
        permanent: true
      },
      {
        source: "/regex-redirect-2/:slug(\\d{1,})/",
        destination: "/regex-redirect-2-dest/:slug/",
        permanent: true
      },
      {
        // No trailing slash for API yet
        source: "/api/deprecated-basic-api",
        destination: "/api/basic-api",
        permanent: true
      },
      {
        source: "/external-redirect-1/",
        destination: "https://api.github.com",
        permanent: true
      },
      {
        source: "/external-redirect-2/:id/",
        destination: "https://api.github.com/:id",
        permanent: true
      },
      {
        source: "/external-redirect-3/:id/",
        destination: "https://api.github.com/:id/",
        permanent: true
      },
      {
        source: "/query-string-destination-redirect/",
        destination: "/ssg-page/?a=1234&b=1?",
        permanent: true
      }
    ];
  },
  async rewrites() {
    return [
      {
        source: "/rewrite/",
        destination: "/ssr-page/"
      },
      {
        source: "/path-rewrite/:slug/",
        destination: "/ssr-page/"
      },
      {
        source: "/wildcard-rewrite/:slug*/",
        destination: "/ssr-page/"
      },
      {
        source: "/regex-rewrite-1/:slug(\\d{1,})/",
        destination: "/ssr-page/"
      },
      {
        source: "/regex-rewrite-2/:slug(\\d{1,})/",
        destination: "/regex-rewrite-2-dest/:slug/"
      },
      {
        // Per https://nextjs.org/docs/api-reference/next.config.js/rewrites, this has no effect as non-dynamic routes cannot be rewritten
        source: "/ssg-page/",
        destination: "/"
      },
      {
        // Per https://nextjs.org/docs/api-reference/next.config.js/rewrites, this has no effect as non-dynamic routes cannot be rewritten
        source: "/ssr-page/",
        destination: "/"
      },
      {
        // Per https://nextjs.org/docs/api-reference/next.config.js/rewrites, this has no effect as non-dynamic routes cannot be rewritten
        source: "/app-store-badge.png",
        destination: "/"
      },
      // No trailing slash for API yet
      {
        source: "/api/rewrite-basic-api",
        destination: "/api/basic-api"
      }
    ];
  },
  async headers() {
    return [
      {
        source: "/:path*/",
        headers: [
          {
            key: "x-custom-header-all",
            value: "custom"
          }
        ]
      },
      {
        source: "/ssr-page/",
        headers: [
          {
            key: "x-custom-header-ssr-page",
            value: "custom"
          }
        ]
      },
      {
        source: "/ssg-page",
        headers: [
          {
            key: "x-custom-header-ssg-page",
            value: "custom"
          }
        ]
      },
      {
        // For public files, the original path matches the S3 key
        source: "/app-store-badge.png",
        headers: [
          {
            key: "x-custom-header-public-file",
            value: "custom"
          }
        ]
      },
      {
        // No trailing slash for APIs yet
        source: "/api/basic-api",
        headers: [
          {
            key: "x-custom-header-api",
            value: "custom"
          }
        ]
      }
    ];
  }
};
