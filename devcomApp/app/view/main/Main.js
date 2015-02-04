/**
 * This class is the main view for the application. It is specified in app.js as the
 * "autoCreateViewport" property. That setting automatically applies the "viewport"
 * plugin to promote that instance of this class to the body element.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('devcomApp.view.main.Main', {
    extend: 'Ext.container.Container',
    plugins: 'viewport',
    requires: [
        'devcomApp.view.main.MainController',
        'devcomApp.view.main.MainModel'
    ],

    
    controller: 'main',
    viewModel: {
        type: 'main'
    },

    layout : 'fit',
    flex: 1,

    items: [{
        xtype: 'panel',
        bind: {
            title: '{name}'
        },
        region: 'west',
        html: '<h1>DevCom aplication</h1>',
        split: true,
        tbar: [{
            text: 'Logout',
            handler: 'onClickButton'
        }]
    }]
});
