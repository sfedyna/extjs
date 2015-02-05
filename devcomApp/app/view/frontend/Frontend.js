/**
 * This class is the main view for the application. It is specified in app.js as the
 * "autoCreateViewport" property. That setting automatically applies the "viewport"
 * plugin to promote that instance of this class to the body element.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('devcomApp.view.frontend.Frontend', {
    extend: 'Ext.container.Container',
    plugins: 'viewport',
    xtype: 'frontend',
    requires: [
        'devcomApp.view.frontend.FrontendController',
        'devcomApp.view.frontend.FrontendModel'
    ],

    controller: 'frontend',
    viewModel: {
        type: 'frontend'
    },
    layout : 'fit',
    flex: 1,
    items: [{
        xtype: 'panel',
        bind: {
            title: '{name}'
        },
        region: 'west',
        split: true,
        tbar: [{
            text: 'Logout',
            handler: 'onClickButton'
        }]
    }]
});
