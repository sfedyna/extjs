Ext.define("devcomApp.view.admin.Admin",{
    extend: 'Ext.grid.Panel',
    plugins: 'viewport',
    xtype: 'admin',
    controller: "admin",
    requires: [
        'devcomApp.view.admin.AdminController',
        'devcomApp.view.admin.AdminModel',
        'Ext.grid.Panel'        
    ],
    title: 'Company employees devcom',
    height: 1000,
    width: 1000,
    selType: 'cellmodel',
    plugins: [
        Ext.create('Ext.grid.plugin.CellEditing', {
            clicksToEdit: 1
        })
    ],
    store: store,
    columns: [{
        header: 'First name',
        dataIndex: 'name',
        editor: {
            xtype: 'textfield',
            allowBlank: false
       }
    }, {
        header: 'Last name',
        dataIndex: 'surname',
        editor: {
            xtype: 'textfield',
            allowBlank: false
       }
    }, {
        header: 'Date of birth',
        dataIndex: 'date',
        xtype:'datecolumn',
        editor: 'datefield',
        format: 'd/m/Y',
        flex:1
    }, {
        header: 'E-mail',
        dataIndex: 'email',
        flex:1,
        editor: {
            allowBlank: false,
            vtype: 'email'
        }
    },
    {
        xtype: 'actioncolumn',
        width: 30,
        sortable: false,
        menuDisabled: true,
        items: [{
            icon: '/devcomApp/resources/images/delete.png',
            handler: function(grid, rowIndex, colIndex) {
               store.removeAt(rowIndex);
            }
        }]
    }],
    tbar: [{
        text: 'Logout',
        handler: 'onClickButton'
    },{
        text: 'Add Employee',
        handler : function() {
            var newEmployee = Ext.create('devcomApp.model.UserModel', {
                name: 'New employee',
                email: 'new@devcom.com'
            });
            store.insert(0, newEmployee);
        }
    }],
    renderTo: Ext.getBody()
});
