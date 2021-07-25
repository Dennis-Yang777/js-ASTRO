for( var i = 0; i < 5; i++ ) {
	setTimeout(function() {
	  console.log(i);
	}, 1000);
}


for( var i = 0; i < 5; i++ ) {
	(function(x){
	  window.setTimeout(function() {
		console.log(x);
	  }, 1000 * x);
	})(i);
}