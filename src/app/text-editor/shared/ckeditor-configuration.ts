
export var ckeditorConfiguration = {

  // Todo use 'divarea' to fix the error code editor-destroy-iframe
  extraPlugins: 'widget,tabletools,imageresizerowandcolumn,strinsert,richcombo,floatpanel,panel',
  toolbar: [
    { name: 'custom', items: [ 'loadButton', 'saveButton' ] },
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
    { name: 'editing', items: [ 'Scayt', 'strinsert' ] }
  ],

  customConfig: '',

  // Sometimes applications that convert HTML to PDF prefer setting image width through attributes instead of CSS styles.
  // For more information check:
  //  - About Advanced Content Filter: http://docs.ckeditor.com/ckeditor4/docs/#!/guide/dev_advanced_content_filter
  //  - About Disallowed Content: http://docs.ckeditor.com/ckeditor4/docs/#!/guide/dev_disallowed_content
  //  - About Allowed Content: http://docs.ckeditor.com/ckeditor4/docs/#!/guide/dev_allowed_content_rules
  disallowedContent: 'img{width,height,float}',
  extraAllowedContent: 'img[width,height,align]',

  /*********************** File management support ***********************/

  height: 735,
  width: '100%',

  contentsCss: ['./assets/document-editor.css'],

  bodyClass: 'document-editor',

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
