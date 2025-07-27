export default [
  'strapi::logger',
  'strapi::errors',
  //'strapi::security',
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          'script-src': ['https://cdn.ckeditor.com',"'self'", "'unsafe-inline'", 'https:', '*.tinymce.com', '*.tiny.cloud'],
          'connect-src': ['https://proxy-event.ckeditor.com',"'self'", 'https:', '*.tinymce.com', '*.tiny.cloud', 'blob:', '*.strapi.io'],
          'img-src': ["'self'", 'data:', 'blob:', '*.tinymce.com', '*.tiny.cloud',],
          'style-src': ["'self'", "'unsafe-inline'", 'https:', '*.tinymce.com', '*.tiny.cloud'],
          "font-src": ["'self'", "*.tinymce.com", "*.tiny.cloud"],
        },
      },
    },
  },
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::query',
  //'strapi::body',
  {
    name: "strapi::body",
    config: {
      formLimit: "25mb", // Modify form body limit (e.g., 256mb)
      jsonLimit: "25mb", // Modify JSON body limit
      textLimit: "25mb", // Modify text body limit
      formidable: {
        maxFileSize: 5 * 1024 * 1024, // Multipart data, modify here limit of uploaded file size (e.g., 250MB in bytes)
      },
    },
  },
  'strapi::session',
  'strapi::favicon',
  'strapi::public'
];

