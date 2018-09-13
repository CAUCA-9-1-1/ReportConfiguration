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
  addMenu: function (editor, title, placeholders) {
// add the menu to the editor
    editor.ui.addRichCombo('strinsert',
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
          for (var i in placeholders) {
            this.add(placeholders[i][0], placeholders[i][1], placeholders[i][2]);
          }
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
    console.log('holders', JSON.stringify(groups));
    groups.foreach((group) => {
      this.addMenu(editor, group['name'], group['placeholders']);
    });
    //this.addMenu(editor, strings);
  }
});
