var pb = require('protobufjs'),
	builder = pb.loadProtoFile("./cat.proto");
	Demo = builder.build('demo'),
	Cat = Demo.Cat;

var getCat = function() {
	var dave = new Cat.Parent({"name": "Dave", "email": "nope@google.com"});
	var newCat = new Cat({
		"name": "Sonny",
		"age": 10,
		"parents": [dave]
	});

	return newCat.encode();
}

var run = function() {
	var cat = getCat();
	console.log(Cat.decode(cat)); // { name: 'Sonny', age: 10, parents: [ { name: 'Dave', email: 'nope@google.com' } ] }}
}

run();