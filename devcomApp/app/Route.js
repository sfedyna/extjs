/**
 * The main application class. An instance of this class is created by app.js when it calls
 * Ext.application(). This is the ideal place to handle application launch and initialization
 * details.
 */
Ext.define('devcomApp.Application', {
    extend: 'Ext.app.Application',
    
    name: 'devcomApp',

    views: [
      'devcomApp.view.login.Login',
      'devcomApp.view.frontend.Frontend',
      'devcomApp.view.admin.Admin',
      'devcomApp.Route'
    ],
    init: function() {
        var supportsLocalStorage = Ext.supports.LocalStorage, 
            loggedIn;
        if (!supportsLocalStorage) {
            Ext.Msg.alert('Your Browser Does Not Support Local Storage');
            return;
        }
        loggedIn = localStorage.getItem("sessionUser");
        if(!loggedIn){
             Ext.widget('login');
        }
    },
    routes : {
       'frontend' : 'onFrontend',
       'admin' : 'onAdmin',
    },
    listen : {
        controller : {
            '*' : {
                unmatchedroute : 'onUnmatchedRoute'
            }
        }
    },
    onUnmatchedRoute : function(hash) {
      alert( 'Sorry, the ' + hash + ' route is not correct' );
      this.redirectTo('frontend');
    },
    onFrontend : function() {
        if(localStorage.getItem("sessionUser")){
            Ext.widget('frontend');
        }
    },
    onAdmin : function() {
        if(localStorage.getItem("sessionUser")){
            Ext.widget('admin');
        }
    }
});
