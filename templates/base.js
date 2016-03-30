var benchmark = require('benchmark');

var suite = new Benchmark.Suite;

// add your first test
suite.add('${TEST NAME}', function() {
  // Your Test codes goes here
})
// add more tests
//.add('ONE MORE TEST', function() {})

// add listeners
suite.on('cycle', function(event) {
  console.log(String(event.target));
})
.on('complete', function() {
  console.log('Fastest is ' + this.filter('fastest').map('name'));
})
.run({ 'async': true });