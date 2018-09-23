$(document).ready(()=>{

	function isJSONValid(json){
		try{
	  	var obj = JSON.parse(json);
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

		isJSONValid(json) ? $('#valid').text('VALID') : $('#valid').text('INVALID')
		
	});

	$('textarea').autoResize();
});
