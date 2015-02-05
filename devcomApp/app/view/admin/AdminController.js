Ext.define('devcomApp.view.admin.AdminController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.admin',
    onClickButton: function () {
        localStorage.removeItem('sessionUser');
        this.getView().destroy();
        Ext.widget('login');
    }
});
