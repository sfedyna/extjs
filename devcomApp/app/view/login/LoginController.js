Ext.define('devcomApp.view.login.LoginController', {
    
    extend: 'Ext.app.ViewController',
    alias: 'controller.login',
    requires: ['devcomApp.view.login.LoginModel'],
    onLoginClick: function(){
        var username = devcomApp.view.login.LoginModel.username;
        var password = devcomApp.view.login.LoginModel.password;
        if(Ext.getCmp('username').value == username && Ext.getCmp('password').value == password ){
            localStorage.setItem("sessionUser", true);
            this.getView().destroy();
            var route = window.location.hash.substr(1);
            Ext.widget(route);
        }else{
            alert('You entered an incorrect username or password');
            return;
        }
    }
});