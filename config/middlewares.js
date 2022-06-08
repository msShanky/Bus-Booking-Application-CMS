module.exports = [
  "strapi::errors",
  "strapi::security",
  {
    name: "strapi::cors",
    config: {
      headers: [
        "Content-Type",
        "Authorization",
        "X-Frame-Options",
        "X-Requested-With",
      ],
      origin: env(
        "CORS_ORIGIN",
        "http://localhost:3000,http://localhost:8000,http://localhost:1377"
      ).split(','),
    },
  },
  "strapi::poweredBy",
  "strapi::logger",
  "strapi::query",
  {
    name: "strapi::body",
    config: {
      formLimit: "256mb", // modify form body
      jsonLimit: "256mb", // modify JSON body
      textLimit: "256mb", // modify text body
      formidable: {
        maxFileSize: 200 * 1024 * 1024, // multipart data, modify here limit of uploaded file size
      },
    },
  },
  "strapi::session",
  "strapi::favicon",
  "strapi::public",
];
