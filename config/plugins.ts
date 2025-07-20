export default () => ({
    meilisearch: {
    config: {
      // Your meili host
      host: 'https://search.admin.duhochappytime.edu.vn',
      // Your master key or private key
      apiKey: 'MTj1RK5WnhlQqkP0Z4PrtIKnQF8Xo_xwx2pH8-rDE3U',
    },
 tinymce: {
    enabled: true,
    config: {
      editor: {
        outputFormat: 'html',
        tinymceSrc: '/tinymce/tinymce.min.js', // Your self-hosted path
        editorConfig: {
          // Your TinyMCE init configuration goes here
          plugins: 'advlist autolink lists link image charmap print preview anchor searchreplace visualblocks code fullscreen insertdatetime media table paste code help wordcount',
          toolbar: 'undo redo | formatselect | bold italic backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | help | table',
          menubar: 'file edit view insert format tools table help',
          extended_valid_elements: 'span[style],img[style],small[style],table[border|cellpadding|cellspacing|width|height|class|style],tbody,thead,tfoot,tr,td,th', // Ensure table elements are allowed
          // ... other TinyMCE settings like height, menubar, etc.
        },
      },
    },
  },
    ckeditor: {
      enabled: true,
      resolve: "./src/plugins/strapi-plugin-ckeditor"
    },
    // ckeditor: {
    //   enabled: true,
    //   config: {
    //     editor : {
    //       plugins: [
    //         'Alignment',
    //         'Autoformat',
    //         'BlockQuote',
    //         'Bold',
    //         'Code',
    //         'CodeBlock',
    //         'Essentials',
    //         'FontBackgroundColor',
    //         'FontColor',
    //         'FontFamily',
    //         'FontSize',
    //         'Heading',
    //         'Highlight',
    //         'HorizontalLine',
    //         'Image',
    //         'Indent',
    //         'Italic',
    //         'Link',
    //         'ListStyle',
    //         'MediaEmbed',
    //         'Paragraph',
    //         'PasteFromOffice',
    //         'Table',
    //         'SourceEditing',
    //       ],
    //       toolbar: [
    //         'heading',
    //         '|',
    //         'bold',
    //         'italic',
    //         'link',
    //         '|',
    //         'bulletedList',
    //         'numberedList',
    //         'blockQuote',
    //         '|',
    //         'insertTable',
    //         'mediaEmbed',
    //         '|',
    //         'undo',
    //         'redo',
    //         '|',
    //         'alignment',
    //         'fontBackgroundColor',
    //         'fontColor',
    //         'fontFamily',
    //         'fontSize',
    //         'highlight',
    //         'horizontalLine',
    //         'sourceEditing',
    //       ],
    //     },
    //   },
    // },
  },
});
