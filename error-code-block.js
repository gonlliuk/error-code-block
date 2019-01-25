'use strict';

/**
 * Initial code block
 */
const team = {
	members:['Superman','Batman','Wonder Woman'],
	teamName: 'Justice league',
	teamSummary: function() {
		return this.members.map(function(member)  {
			this
			return `${member} is on team ${this.teamName}`;
		});
	}
};
team.teamSummary();

/**
 *  Fixed code block
 */
const team = {
	members:['Superman','Batman','Wonder Woman'],
	teamName: 'Justice league',
	teamSummary: function() {
		return this.members.map(member => {
			return `${member} is on team ${this.teamName}`;
		});
	}
};

team.teamSummary();

/*
This code will not throw an error in runtime, but it won't work correctly.
Explanation is below.

"fucntion" keyword, used for creating a map callback, creates new context for function scope.
"this" keyword is no longer a reference to "team" object inside "map" callback.
So, there will be "undefined" instead of team name from "team" object in returned strings.
To fix this error needs to replace fucntion expression with arrow function.
Arrow function don't have it's own "this" and gets it from parent scope.

As we see, "teamSummary" property uses "function" keyword to be declared as a method.
But in this case "this" keyword (inside method) have reference to "team" object.
So why context is different in these two cases?
It's because "this" keyword is always a reference to object that owns currently executing code.
Context is mostly about how function is called.
When a fucntion is invoked as a object method, "this" keyword will be a reference to the method's object.
When function is called as unbound, "this" keyword will be a reference to global context (window object in a browser).
*/
