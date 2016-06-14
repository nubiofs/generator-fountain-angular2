var ng = require('@angular/core');

module.exports = ng.Component({
  selector: 'Home',
  template:
    '<div class="well">' +
    '  <div class="row">' +
    '    <div class="col-md-4">' +
    '      <span class="hipster img-responsive img-rounded"><img src="../images/hipster.png"></span>' +
    '    </div>' +
    '    <div class="col-md-8">' +
    '      <h1>Welcome, Java Hipster!</h1>' +
    '      <p class="lead">This is your homepage</p>' +
    '      <div>' +
    '        <div class="alert alert-warning">' +
    '          If you want to <a class="alert-link" href="">sign in</a>, you can try the default accounts:<br/>- Administrator (login="admin" and password="admin") <br/>- User (login="user" and password="user").' +
    '        </div>' +
    '        <div class="alert alert-warning">' +
    '          You don\'t have an account yet? <a class="alert-link">Register a new account</a>' +
    '        </div>' +
    '      </div>' +
    '      <p>' +
    '        If you have any question on JHipster:' +
    '      </p>' +
    '      <ul>' +
    '        <li><a href="http://jhipster.github.io/" target="_blank">JHipster homepage</a></li>' +
    '        <li><a href="http://stackoverflow.com/tags/jhipster/info" target="_blank">JHipster on Stack Overflow</a></li>' +
    '        <li><a href="https://github.com/jhipster/generator-jhipster/issues?state=open" target="_blank">JHipster bug tracker</a></li>' +
    '        <li><a href="https://gitter.im/jhipster/generator-jhipster" target="_blank">JHipster public chat room</a></li>' +
    '        <li><a href="https://twitter.com/java_hipster" target="_blank" >follow @java_hipster on Twitter</a></li>' +
    '      </ul>' +
    '      <p>' +
    '        <span>If you like JHipster, don\'t forget to give us a star on </span>&nbsp;<a href="https://github.com/jhipster/generator-jhipster" target="_blank">Github</a>!' +
    '      </p>' +
    '    </div>' +
    '  </div>' +
    '</div>'
})
.Class({
  constructor: function () {}
});
