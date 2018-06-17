export var ckeditorConfiguration = {
  // Define the toolbar: http://docs.ckeditor.com/ckeditor4/docs/#!/guide/dev_toolbar
  // The full preset from CDN which we used as a base provides more features than we need.
  // Also by default it comes with a 3-line toolbar. Here we put all buttons in a single row.
  toolbar: [
    { name: 'document', items: [ 'Print' ] },
    { name: 'clipboard', items: [ 'Undo', 'Redo' ] },
    { name: 'styles', items: [ 'Format', 'Font', 'FontSize' ] },
    { name: 'basicstyles', items: [ 'Bold', 'Italic', 'Underline', 'Strike', 'RemoveFormat', 'CopyFormatting' ] },
    { name: 'colors', items: [ 'TextColor', 'BGColor' ] },
    { name: 'align', items: [ 'JustifyLeft', 'JustifyCenter', 'JustifyRight', 'JustifyBlock' ] },
    { name: 'links', items: [ 'Link', 'Unlink' ] },
    { name: 'paragraph', items: [ 'NumberedList', 'BulletedList', '-', 'Outdent', 'Indent', '-', 'Blockquote' ] },
    { name: 'insert', items: [ 'Image', 'Table', 'HorizontalRule' ] },
    { name: 'tools', items: [ 'Maximize' ] },
    { name: 'editing', items: [ 'Scayt' ] },
  ],

  // Since we define all configuration options here, let's instruct CKEditor to not load config.js which it does by default.
  // One HTTP request less will result in a faster startup time.
  // For more information check http://docs.ckeditor.com/ckeditor4/docs/#!/api/CKEDITOR.config-cfg-customConfig
  customConfig: '',

  // Sometimes applications that convert HTML to PDF prefer setting image width through attributes instead of CSS styles.
  // For more information check:
  //  - About Advanced Content Filter: http://docs.ckeditor.com/ckeditor4/docs/#!/guide/dev_advanced_content_filter
  //  - About Disallowed Content: http://docs.ckeditor.com/ckeditor4/docs/#!/guide/dev_disallowed_content
  //  - About Allowed Content: http://docs.ckeditor.com/ckeditor4/docs/#!/guide/dev_allowed_content_rules
  disallowedContent: 'img{width,height,float}',
  extraAllowedContent: 'img[width,height,align]',

  /*********************** File management support ***********************/
  // In order to turn on support for file uploads, CKEditor has to be configured to use some server side
  // solution with file upload/management capabilities, like for example CKFinder.
  // For more information see http://docs.ckeditor.com/ckeditor4/docs/#!/guide/dev_ckfinder_integration

  // Uncomment and correct these lines after you setup your local CKFinder instance.
  // filebrowserBrowseUrl: 'http://example.com/ckfinder/ckfinder.html',
  // filebrowserUploadUrl: 'http://example.com/ckfinder/core/connector/php/connector.php?command=QuickUpload&type=Files',
  /*********************** File management support ***********************/

  // Make the editing area bigger than default.
  height: 800,
  width: '100%',

  // An array of stylesheets to style the WYSIWYG area.
  // Note: it is recommended to keep your own styles in a separate file in order to make future updates painless.
  contentsCss: [
    "@import url('https://fonts.googleapis.com/css?family=Nunito+Sans:200,200i,400,400i,600,600i,700,700i');\n" +
    "\n" +
    "body.document-editor {\n" +
    "    width: 8.5in;\n" +
    "    min-height: 21cm;\n" +
    "    padding: 1cm 2cm 2cm;\n" +
    "    margin: 0.75in auto;\n" +
    "    border: 1px #D3D3D3 solid;\n" +
    "    border-radius: 5px;\n" +
    "    background: white;\n" +
    "    box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);\n" +
    "    margin-top: 30px;\n" +
    "    margin-bottom: 30px;\n" +
    "    font-size: 16px;\n" +
    "    line-height: 24px;\n" +
    "    font-family: \"Nunito Sans\", Verdana, Helvetica, sans-serif;\n" +
    "}\n" +
    "\n" +
    "body.document-editor td, body.document-editor th {\n" +
    "    font-size: 0.9em;\n" +
    "}\n" +
    "\n" +
    "body.document-editor h1 {\n" +
    "    margin-bottom:1cm;\n" +
    "}\n" +
    "\n" +
    "body.document-editor table {\n" +
    "    margin-top:0.5cm;\n" +
    "    margin-bottom:0.5cm;\n" +
    "}\n" +
    "\n" +
    "body.document-editor table td {\n" +
    "    border-right: 1px solid #d0d0d0;\n" +
    "    border-bottom: 1px solid #d0d0d0;\n" +
    "}\n" +
    "\n" +
    "body.document-editor table td:first-of-type {\n" +
    "    border-left: 1px solid #d0d0d0;\n" +
    "}\n" +
    "\n" +
    "body.document-editor table tr:first-of-type td {\n" +
    "    border-top: 1px solid #d0d0d0;\n" +
    "}\n" +
    "\n" +
    "body.document-editor table thead th {\n" +
    "    border-top: 1px solid #d0d0d0;\n" +
    "    border-right: 1px solid #d0d0d0;\n" +
    "}\n" +
    "\n" +
    "body.document-editor table thead th:first-of-type {\n" +
    "    border-left: 1px solid #d0d0d0;\n" +
    "}\n" +
    "\n" +
    "table {\n" +
    "    border-collapse: collapse;\n" +
    "    width: 100%;\n" +
    "}\n" +
    "\n" +
    "th, td {\n" +
    "    text-align: left;\n" +
    "    padding: 8px;\n" +
    "}\n" +
    "\n" +
    "tr:nth-child(even) {background-color: #f2f2f2;}\n" +
    "col:nth-child(even) {border-bottom: 1px solid #000000;}"
  ],

  // This is optional, but will let us define multiple different styles for multiple editors using the same CSS file.
  bodyClass: 'document-editor',

  // Reduce the list of block elements listed in the Format dropdown to the most commonly used.
  format_tags: 'p;h1;h2;h3;pre',

  // Simplify the Image and Link dialog windows. The "Advanced" tab is not needed in most cases.
  removeDialogTabs: 'image:advanced;link:advanced',

  // Define the list of styles which should be available in the Styles dropdown list.
  // If the "class" attribute is used to style an element, make sure to define the style for the class in "mystyles.css"
  // (and on your website so that it rendered in the same way).
  // Note: by default CKEditor looks for styles.js file. Defining stylesSet inline (as below) stops CKEditor from loading
  // that file, which means one HTTP request less (and a faster startup).
  // For more information see http://docs.ckeditor.com/ckeditor4/docs/#!/guide/dev_styles
  stylesSet: [
    /* Inline Styles */
    { name: 'Marker', element: 'span', attributes: { 'class': 'marker' } },
    { name: 'Cited Work', element: 'cite' },
    { name: 'Inline Quotation', element: 'q' },

    /* Object Styles */
    {
      name: 'Special Container',
      element: 'div',
      styles: {
        padding: '5px 10px',
        background: '#eee',
        border: '1px solid #ccc'
      }
    },
    {
      name: 'Compact table',
      element: 'table',
      attributes: {
        cellpadding: '5',
        cellspacing: '0',
        border: '1',
        bordercolor: '#ccc'
      },
      styles: {
        'border-collapse': 'collapse'
      }
    },
    { name: 'Borderless Table', element: 'table', styles: { 'border-style': 'hidden', 'background-color': '#E6E6FA' } },
    { name: 'Square Bulleted List', element: 'ul', styles: { 'list-style-type': 'square' } }
  ]
};
