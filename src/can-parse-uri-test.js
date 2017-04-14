import QUnit from 'steal-qunit';
import plugin from './can-parse-uri';

QUnit.module('can-parse-uri');

QUnit.test('Initialized the plugin', function(){
  QUnit.equal(typeof plugin, 'function');
  QUnit.equal(plugin(), 'This is the can-parse-uri plugin');
});
