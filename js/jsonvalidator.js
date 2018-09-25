$(document).ready(()=>{

	function isJSONValid(json){
		try{
	  	let obj = JSON.parse(json);
	    if(obj && typeof obj === 'object' && obj !== null){
	      return true;
	    }
	    return false;
	  }catch(error){
	  	return false;
	  }
	}

	$('#validate').on('click',()=>{

		let json = $('#jsonvalidator').val();
		console.log(typeof json);
		isJSONValid(json) ? $("#valid").html(JSON.stringify(JSON.parse(json),undefined,2)) : $("#valid").text('INVALID');

	});

	$('#clear').on('click',()=>{
		$('#jsonvalidator').val("");
	});

	$('textarea').autoResize();
});
