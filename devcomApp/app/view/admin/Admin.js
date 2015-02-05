Ext.define("devcomApp.view.admin.Admin",{
    extend: 'Ext.container.Container',
    plugins: 'viewport',
    xtype: 'admin',
    controller: "admin",
    requires: [
        'devcomApp.view.admin.AdminController',
        'devcomApp.view.admin.AdminModel',
    ],
    viewModel: {
        type: 'admin'
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
