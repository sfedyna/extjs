Ext.application({
    name   : 'MyApp',

    launch : function() {
    Ext.create('Ext.form.Panel', {
        renderTo: Ext.getBody(),
        title: 'Login  Form',
        height: 150,
        width: 300,
        bodyPadding: 10,
        defaultType: 'textfield',
        items: [
            {
                fieldLabel: 'username',
                name: 'username'
            },
            {
                fieldLabel: 'password',
                name: 'password'
            },
        ]
    });

    }
});
