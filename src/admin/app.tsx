import type { StrapiApp } from '@strapi/strapi/admin';

// Import all necessary CKEditor 5 plugins.
// These imports assume you have installed the corresponding @ckeditor/ckeditor5-* packages
// in your Strapi project's root or within your custom plugin's node_modules.
// Note: CKEditor 5 plugins are typically named exports, not default exports from their src files.
import { Essentials } from '@ckeditor/ckeditor5-essentials/src/essentials';
import { Paragraph } from '@ckeditor/ckeditor5-paragraph/src/paragraph';
import { BlockQuote } from '@ckeditor/ckeditor5-block-quote/src/blockquote';
import { Heading } from '@ckeditor/ckeditor5-heading/src/heading';
import { Link } from '@ckeditor/ckeditor5-link/src/link';
import { List } from '@ckeditor/ckeditor5-list/src/list';
import { Image } from '@ckeditor/ckeditor5-image/src/image';
import { MediaEmbed } from '@ckeditor/ckeditor5-media-embed/src/mediaembed';
import { Table } from '@ckeditor/ckeditor5-table/src/table';
import { PasteFromOffice } from '@ckeditor/ckeditor5-paste-from-office/src/pastefromoffice';
import { Alignment } from '@ckeditor/ckeditor5-alignment/src/alignment';
import { Indent } from '@ckeditor/ckeditor5-indent/src/indent';
import { Highlight } from '@ckeditor/ckeditor5-highlight/src/highlight';
import { CodeBlock } from '@ckeditor/ckeditor5-code-block/src/codeblock';
import { HorizontalLine } from '@ckeditor/ckeditor5-horizontal-line/src/horizontalline';
import { HtmlEmbed } from '@ckeditor/ckeditor5-html-embed/src/htmlembed'; // For htmlEmbed feature

// The Source Editing plugin - your target plugin!
import { SourceEditing } from '@ckeditor/ckeditor5-source-editing/src/sourceediting';

// Note: If you are using a specific Strapi CKEditor plugin that provides
// its own integration with the Strapi Media Library (e.g., @_sh/strapi-plugin-ckeditor),
// you might need to import and include 'StrapiMediaLib' and 'StrapiUploadAdapter'
// from that plugin instead of relying solely on CKEditor's default ImageUpload.
// The presence of 'imageUpload' in your toolbar suggests you might need a custom upload adapter
// or the plugin's specific media library integration.
// For example:
// import { StrapiMediaLib, StrapiUploadAdapter } from '@_sh/strapi-plugin-ckeditor';


// Define your custom presets
const customEditorPresets = [
  {
    name: 'rich',
    editor: {
      plugins: [
        Essentials,
        Paragraph,
        BlockQuote,
        Heading,
        Link,
        List,
        Image,
        MediaEmbed,
        Table,
        PasteFromOffice,
        Alignment,
        Indent,
        Highlight,
        CodeBlock,
        HorizontalLine,
        HtmlEmbed, // Include HtmlEmbed plugin
        SourceEditing, // Your Source Editing plugin!
        // If using Strapi's media library integration from a plugin, uncomment and add them here:
        // StrapiMediaLib,
        // StrapiUploadAdapter,
      ],
      toolbar: {
        items: [
          'undo', 'redo', '|',
          'heading', '|',
          'bold', 'italic', 'underline', 'strikethrough', 'code', 'removeFormat', '|',
          'link', 'bulletedList', 'numberedList', 'blockQuote', 'codeBlock', 'htmlEmbed', '|',
          'imageUpload', // If you use StrapiMediaLib, this might be replaced or augmented
          // 'strapiMediaLib', // Uncomment if you have this plugin and want the media library button
          'insertTable', 'mediaEmbed', '|',
          'imageStyle:inline', 'imageStyle:block', 'imageStyle:side', '|',
          'alignment', '|',
          'fontFamily', 'fontSize', 'fontColor', 'highlight', '|',
          'sourceEditing', // Source Editing button in the toolbar!
        ],
        shouldNotGroupWhenFull: true,
      },
      image: {
        toolbar: [
          'imageTextAlternative', 'toggleImageCaption', 'imageStyle:inline', 'imageStyle:block', 'imageStyle:side', 'linkImage'
        ]
      },
      table: {
        contentToolbar: [
          'tableColumn', 'tableRow', 'mergeTableCells', 'tableProperties', 'tableCellProperties'
        ]
      },
      // This is CRUCIAL for Source Editing to work correctly and not strip HTML.
      // It tells CKEditor to allow all HTML elements, attributes, and classes.
      htmlSupport: {
        allow: [
          { name: /.*/, attributes: true, classes: true, styles: true },
        ],
      },
      htmlEmbed: {
        showPreviews: true,
      },
      heading: {
        options: [
            { model: 'paragraph', title: 'Paragraph', class: 'ck-heading_paragraph' },
            { model: 'heading1', view: 'h1', title: 'Heading 1', class: 'ck-heading_heading1' },
            { model: 'heading2', view: 'h2', title: 'Heading 2', class: 'ck-heading_heading2' },
            { model: 'heading3', view: 'h3', title: 'Heading 3', class: 'ck-heading_heading3' },
            { model: 'heading4', view: 'h4', title: 'Heading 4', class: 'ck-heading_heading4' },
            { model: 'heading5', view: 'h5', title: 'Heading 5', class: 'ck-heading_heading5' },
            { model: 'heading6', view: 'h6', title: 'Heading 6', class: 'ck-heading_heading6' }
        ]
      },
      fontSize: {
          options: [
            9, 10, 11, 12, 13, 'default', 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30
          ]
      },
      fontFamily: {
          options: [
            'default',
            'Arial, Helvetica, sans-serif',
            'Courier New, Courier, monospace',
            'Georgia, serif',
            'Lucida Sans Unicode, Lucida Grande, sans-serif',
            'Tahoma, Geneva, sans-serif',
            'Times New Roman, Times, serif',
            'Trebuchet MS, Helvetica, sans-serif',
            'Verdana, Geneva, sans-serif'
          ]
      },
      fontColor: {
          columns: 10,
          colors: [
            { color: 'hsl(0, 0%, 0%)', label: 'Black' },
            { color: 'hsl(0, 0%, 30%)', label: 'Dim grey' },
            { color: 'hsl(0, 0%, 60%)', label: 'Grey' },
            { color: 'hsl(0, 0%, 90%)', label: 'Light grey' },
            { color: 'hsl(0, 0%, 100%)', label: 'White', hasBorder: true },
            { color: 'hsl(0, 100%, 50%)', label: 'Red' },
            { color: 'hsl(30, 100%, 50%)', label: 'Orange' },
            { color: 'hsl(60, 100%, 50%)', label: 'Yellow' },
            { color: 'hsl(90, 100%, 50%)', label: 'Light green' },
            { color: 'hsl(120, 100%, 50%)', label: 'Green' },
            { color: 'hsl(150, 100%, 50%)', label: 'Aquamarine' },
            { color: 'hsl(180, 100%, 50%)', label: 'Cyan' },
            { color: 'hsl(210, 100%, 50%)', label: 'Light blue' },
            { color: 'hsl(240, 100%, 50%)', label: 'Blue' },
            { color: 'hsl(270, 100%, 50%)', label: 'Purple' }
          ]
      },
      highlight: {
          options: [
            { model: 'yellowMarker', class: 'marker-yellow', title: 'Yellow marker', color: 'hsl(60, 97%, 62%)' },
            { model: 'greenMarker', class: 'marker-green', title: 'Green marker', color: 'hsl(120, 92%, 60%)' },
            { model: 'pinkMarker', class: 'marker-pink', title: 'Pink marker', color: 'hsl(340, 82%, 75%)' },
            { model: 'blueMarker', class: 'marker-blue', title: 'Blue marker', color: 'hsl(200, 77%, 74%)' },
            { model: 'redPen', class: 'pen-red', title: 'Red pen', color: 'hsl(0, 80%, 45%)' },
            { model: 'greenPen', class: 'pen-green', title: 'Green pen', color: 'hsl(120, 80%, 45%)' }
          ]
      }
    },
  },
];

const config = {
  presets: customEditorPresets,
};

export default {
  config,
  bootstrap(app: StrapiApp) {
    console.log('Strapi CKEditor plugin bootstrapped:', app);
  },
};
