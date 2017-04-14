var parseURI = require('./can-parse-uri');
var QUnit = require('steal-qunit');

QUnit.module("can-parse-uri");

QUnit.test("basics", function(){
	QUnit.deepEqual(parseURI("http://foo:8080/bar.html#change"), {
    authority: "//foo:8080",
    hash: "#change",
    host: "foo:8080",
    hostname: "foo",
    href: "http://foo:8080/bar.html#change",
    pathname: "/bar.html",
    port: "8080",
    protocol: "http:",
    search: ""
  });
});