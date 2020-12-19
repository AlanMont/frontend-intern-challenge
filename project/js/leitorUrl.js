
$( document ).ready(function() {
    var mydata = JSON.parse(data);
	console.log(mydata);

	  var items = [];
	  $.each( mydata, function( key, val ) {
	    items.push( "<li id='" + val.id + "'>" + val.shortUrl + " - " + val.hits +"</li>" );
	  });
	 
	  $( "<ul/>", {
	    "class": "my-new-list",
	    html: items.join( "" )
	  }).appendTo( ".maisvisitados" );

});