# ReportConfiguration

## Installing with npm
$ npm install --save cause-report-configuration

## Initialization of the Text-Editor Component

In order to use the Text-editor, make sure to import TextEditorModule in your module and add it to the import list:
```
imports: [
    ...
    TextEditorModule
  ],
```
After that, you can call an instance with html.
```
<app-text-editor 
       #textEditor 
       id="textEditor" 
       [(documentContent)]="selectedTemplate.data" 
       [(placeholders)]="placeholders" 
       (loadDataEvent)="openDialog()" 
       (saveDataEvent)="saveTemplate()">
</app-text-editor> 
```

The editor component offers various inputs and outputs which can bind to your own components.
You can add two-way binding to the data contained within the editor.
You can send a list of placeholder options that will be embedded within the editor's menu.
You can bind callbacks to decide what to do when the load or save button is pressed.

## Customization
To see all available features of CKEditor, please visit the official website: https://ckeditor.com/ckeditor-4/

### Customization of the editor's appearance
To change how the editor looks, you need to modify the css file: 'src/assets/document-editor.css'

### Customization of the editor's menus
All settings can be tinkered with within the configuration file ('src/app/text-editor/shared/ckeditor-configuration.ts').
If you wish to add custom buttons that don't exist anywhere, please follow the following guide: https://stackoverflow.com/questions/1957156/how-to-add-a-custom-button-to-the-toolbar-that-calls-a-javascript-function

### Customization with plugins

The CKEditor community is very active and offers a wide selection of plugins: https://ckeditor.com/cke4/addons/plugins/all
These plugins can be downloaded directly and added to the directory: './src/assets/ckeditor/plugins'
To include them in the editor's instance, make sure to modify the configuration file ('./src/app/text-editor/shared/ckeditor-configuration.ts') by adding the name of the plugin to the following line: ```extraPlugins: 'widget,tabletools,imageresizerowandcolumn,NAME_OF_THE_NEW_PLUGIN',```.

You can also dynamically load a plugin from an external directory by adding ```window.CKEDITOR.plugins.addExternal(NAME_OF_THE_NEW_PLUGIN, PATH_TO_YOUR_PLUGIN_DIRECORY); ```
before ```this.editor = window.CKEDITOR.replace('editor', ckeditorConfiguration);``` is called in './src/app/text-editor/test-editor.component.ts'.

You can even design your own plugins to interact with the editor.
Find more information here: https://ckeditor.com/docs/ckeditor4/latest/guide/plugin_sdk_sample.html
When designing your own plugins, it is important to place them in the './src/assets/custom_plugins/' folder to avoid overwriting them when updating the plugins' folder within the ckeditor.
