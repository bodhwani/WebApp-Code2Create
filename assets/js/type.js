
var type = document.getElementById('type_text');
// var tyno = document.getElementById('type_no');
var type_text;
// var type_no;
// type_text.rerun();type_no.rerun();
function type_str(){
	type_text = new Typewriter(type, {
		loop: true
	});
	type_text.typeString('  36 Hours Hack')
	.pauseFor(2500)
	.deleteChars(3)
	.typeString('ack')
	.pauseFor(2500)
	.deleteAll()
	.pauseFor(1000)
	.typeString('300+ Participants')
	.pauseFor(2500)
	.deleteChars(4)
	.typeString('ants')
	.pauseFor(2500)
	.deleteAll()
	.pauseFor(1000)
	.typeString('₹30k Prize Money')
	.pauseFor(2500)
	.deleteChars(5)
	.typeString('Money')
	.pauseFor(2500)
	.start();
}
type_str();