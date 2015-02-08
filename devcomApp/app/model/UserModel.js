Ext.define('devcomApp.model.UserModel', {
        extend: 'Ext.data.Model',         
        idProperty: 'userID',
        fields: [{
            name: 'userID',
            type: 'int'
        }, {
            name: 'name',
            type: 'string'
        }, {
            name: 'surname',
            type: 'string'
        }, {
            name: 'date',
            type: 'date'
        }, {
            name: 'email',
            type: 'string'
        }]
});
                 
var store = Ext.create('Ext.data.Store', {
    model: 'devcomApp.model.UserModel',
    autoLoad: true,
    proxy: {
            type: 'ajax',
            url: 'app/data/users.json',
            /*api: {
                create: 'app/data/users.json?action=create',
                update: 'app/data/users.json?action=update',
                destroy: 'app/data/users.json?action=destroy'
            },*/
            reader: {
                type: 'json',
                rootProperty: 'users'
            }
    }
 });

var rowEditing = Ext.create('Ext.grid.plugin.CellEditing', {
    clicksToEdit: 1
});
