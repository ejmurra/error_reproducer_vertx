var r = require('request'); // This line causes the error. Comment it out and it works.

// This is the hello world example from http://vertx.io/docs/vertx-web/js/#_sockjs_event_bus_bridge
var Router = require("vertx-web-js/router");
var server = vertx.createHttpServer();

var router = Router.router(vertx);

router.route().handler(function (routingContext) {

  // This handler will be called for every request
  var response = routingContext.response();
  response.putHeader("content-type", "text/plain");

  // Write to the response and end it
  response.end("Hello World from Vert.x-Web!");
});

server.requestHandler(router.accept).listen(8000);
