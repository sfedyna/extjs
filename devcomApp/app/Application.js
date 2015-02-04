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
      'devcomApp.view.main.Main'
    ],
    
    
    launch: function () {

        var supportsLocalStorage = Ext.supports.LocalStorage, 
            loggedIn;

        if (!supportsLocalStorage) {

            Ext.Msg.alert('Your Browser Does Not Support Local Storage');
            return;
        }

        loggedIn = localStorage.getItem("sessionUser");
        Ext.widget(loggedIn ? 'app-main' : 'login');
    }
});
