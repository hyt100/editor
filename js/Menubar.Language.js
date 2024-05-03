import { UIPanel, UIRow, UISelect, UIText, UIHorizontalRule } from './libs/ui.js';

import { AddObjectCommand } from './commands/AddObjectCommand.js';

function MenubarLanguage( editor ) {

    const config = editor.config;
	const strings = editor.strings;

	const container = new UIPanel();
	container.setClass( 'menu' );

	const title = new UIPanel();
	title.setClass( 'title' );
	title.setTextContent( strings.getKey( 'sidebar/settings/language' ) );
	container.add( title );

	const options = new UIPanel();
	options.setClass( 'options' );
	container.add( options );

	// Group

	// let option = new UIRow();
	// option.setClass( 'option' );
	// option.setTextContent( strings.getKey( 'menubar/add/group' ) );
	// option.onClick( function () {

	// 	const mesh = new THREE.Group();
	// 	mesh.name = 'Group';

	// 	editor.execute( new AddObjectCommand( editor, mesh ) );

	// } );
	// options.add( option );

    // language

	const langOptions = {
		en: 'English',
		fr: 'Français',
		zh: '中文',
		ja: '日本語',
	};

	const languageRow = new UIRow();
	const language = new UISelect().setWidth( '150px' );
	language.setOptions( langOptions );

	if ( config.getKey( 'language' ) !== undefined ) {

		language.setValue( config.getKey( 'language' ) );

	}

	language.onChange( function () {

		const value = this.getValue();

		editor.config.setKey( 'language', value );

	} );

	// languageRow.add( new UIText( strings.getKey( 'sidebar/settings/language' ) ).setClass( 'Label' ) );
	languageRow.add( language );

	options.add( languageRow );


	return container;

}

export { MenubarLanguage };
