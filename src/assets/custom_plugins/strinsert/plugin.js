/**
 * @license Copyright © 2013 Stuart Sillitoe <stuart@vericode.co.uk>
 * This work is mine, and yours. You can modify it as you wish.
 *
 * Stuart Sillitoe
 * stuartsillitoe.co.uk
 *
 */

CKEDITOR.plugins.add('strinsert',
{
	requires : ['richcombo'],
  addMenu: function (editor, title, placeholders, grouptag) {
// add the menu to the editor
    editor.ui.addRichCombo(grouptag,
      {
        label: title,
        title: title,
        voiceLabel: title,
        className: 'cke_format',
        multiSelect: false,
        panel:
          {
            css: [editor.config.contentsCss, CKEDITOR.skin.getPath('editor')],
            voiceLabel: editor.lang.panelVoiceLabel
          },

        init: function () {
          this.startGroup(title);
          this.add('['+grouptag + '][/'+grouptag+']', '[Group]', '[Group]');
          placeholders.forEach((placeholder) => {
            console.log('placeholder', JSON.stringify(placeholder));
            this.add(placeholder.tag, placeholder.name, placeholder.name);
          });
        },

        onClick: function (value) {
          editor.focus();
          editor.fire('saveSnapshot');
          editor.insertHtml(value);
          editor.fire('saveSnapshot');
        }
      });
  }, init : function(editor )
	{
		//  array of strings to choose from that'll be inserted into the editor
    var groups = editor.config['placeholders'];

    groups.forEach((group) => {
      this.addMenu(editor, group['name'], group['placeholders'], group['tag']);
    });
  }
});
