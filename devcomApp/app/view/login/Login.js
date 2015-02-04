Ext.define("devcomApp.view.login.Login",{
    extend: 'Ext.window.Window',
    xtype: 'login',

    requires: [
        'devcomApp.view.login.LoginController',
        'Ext.form.Panel'
    ],
    controller: 'login',
    bodyPadding: 10,
    title: 'Login devCom aplication',
    closable: false,
    autoShow: true,
    items: {
        xtype: 'form',
        reference: 'form',
        items: [{
            xtype: 'textfield',
            name: 'username',
            id:   'username',
            fieldLabel: 'Username',
            minLength : 4,
            maxLength : 12,
            allowBlank: false
        }, {
            xtype: 'textfield',
            name: 'password',
            id: 'password',
            inputType: 'password',
            fieldLabel: 'Password',
            minLength : 4,
            maxLength : 12,
            allowBlank: false
        }, {
            xtype: 'displayfield',
            hideEmptyLabel: false,
            value: 'Enter any non-blank password'
        }],
        buttons: [{
            text: 'Login',
            formBind: true,
            listeners: {
                click: 'onLoginClick'
            }
        }]
    }
});