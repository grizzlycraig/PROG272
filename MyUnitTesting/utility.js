/**
 * @author Craig Mills
 */
/*jshint devel: true, browser: true, jquery: true, strict: true */

var CGMApp = {};

CGMApp.Utility = (function() {'use strict';

    function Utility() {}
    
	// Multiply a number by itself
	Utility.prototype.square = function(a) {
		return a*a;
	};

	// Multiply a BY b
	Utility.prototype.multiply = function(a,b) {
		return a*b;
	};

	// Add b TO a
	Utility.prototype.add = function(a,b) {
		return a+b;
	};
	
	// Subtract b FROM a
	Utility.prototype.subtract = function(a,b) {
		return a-b;
	};
	
	// Divide a BY b
	// If b == 0, return some arbitrary number???  
	Utility.prototype.divide = function(a,b) {
		if (0 != b)
			return a/b;
		else
			return -9999;	// ??? some sort of an error code??
	}

/*    Utility.prototype.zeroFill = function(number, width) {
        console.log("debug: zeroFill called");
        width -= number.toString().length;
        if (width > 0) {
            return new Array(width + (/\./.test(number) ? 2 : 1)).join('0') + number;
        }
        return number + "";
        // always return a string
    };

    Utility.prototype.getToday = function() {
        console.log("debug: getToday called");
        var today = new Date();
        var day = today.getDate();        
        
        var month = today.getMonth() + 1;        
        var year = today.getFullYear();
        day = this.zeroFill(day, 2);
        month = this.zeroFill(month, 2);
        
        return month + '/' + day + '/' + year;
    };
*/
    
    return Utility;    
})();
