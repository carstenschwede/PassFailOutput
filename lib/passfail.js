var colors = require('colors'); var util = require('util');

var passfail = {
	icons: {
		"pass": "✓".green,
		"fail": "✖".red,
		"debug": "d".blue,
		"info": "i".cyan,
		"warn": "!".red,
		"repeat": "."

	},
	lastOutput: false,
	repeating: false,
	

	output: function(prefix,args) {
		var allArgs = [prefix];
		for(var i=0;i<args.length;i++) {
			allArgs.push(args[i]);
		}

		var jsonStr = JSON.stringify(allArgs);
		if (jsonStr === passfail.lastOutput) {
			util.print(passfail.icons.repeat);
			passfail.repeating = true;
		} else {
			if (passfail.lastOutput !== false) console.log();
			util.print(util.format.apply({}, allArgs));
			passfail.repeating = false;
		}
		passfail.lastOutput = jsonStr;
	}
};
Object.keys(passfail.icons).forEach(function(evt) {
	var icon = passfail.icons[evt];
	passfail[evt] = function() {
		passfail.output(icon,arguments);
	};
});


module.exports = passfail;