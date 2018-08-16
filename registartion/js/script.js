$(document).ready(function() {
	var current_tab = 0; // new
	//slider
	if ($('div').is('.slider') && $(window).width() >= 400) {
		$('.slider').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: false,
			autoplay: true
		});
	}

	if ($('div').is('.response-slider')) {
		$('.response-slider').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			autoplay: true,
			autoplaySpeed: 9000
		});
	}


	//Select
	$('select').each(function() {
		$(this).siblings('p').text($(this).children('option:selected').text());
	});
	$('select').change(function() {
		$(this).siblings('p').text($(this).children('option:selected').text());
	});
	//pop-up
	$('#pop-up').click(function(e) {
		if (e.target.className == 'poup')
			$('#pop-up').fadeOut();

		return;
	});
	$('.login').click(function() {
		$('#pop-up').fadeIn();
		$('#pop-up div.login-form').show();
		$('#pop-up form.login-form').hide();
		return false;
	});
	//lang
	$('#selected').toggle(function() {
			$('.list_lang').slideDown();
		},
		function() {
			$('.list_lang').slideUp();
		}
	);
	$('.list_lang li').click(function() {
		var current = $('#selected').html();
		$('#selected').html($(this).children().html());
		$(this).children().html(current);
		$('.list_lang').slideUp();
	});
	//nav
	$('.navbar-toggle').toggle(function() {
			$('ul.header_nav').slideDown();
		}, function() {
			$('ul.header_nav').slideUp();
		})


	$('.circle-list li, .attach-list li').toggle(function() {
		$(this).addClass('active');
		$('.hide',$(this)).slideDown();
	}, function() {
		$('.hide',$(this)).slideUp();
		$(this).removeClass('active');
	});
	$('#login').click(function() {
		$('#pop-up div.login-form').hide();
		$('#pop-up form.login-form').show();
		return false;
	});

	function correct_Host_Family()
	{
		var count = $( ".Host_Family" ).val() - 1;
  		for (var i = 10; i >= 0; i--) {
  			var obj = $('.bordered-list_Host_Family li').eq(i);
  			if (i > count) {
  				obj.fadeOut();
  			}
  			if (i <= count) {
  				obj.fadeIn();
  			}
  		};
  		var count = $( ".Number_of_children" ).val() - 1;
  		for (var i = 10; i >= 0; i--) {
  			var obj = $('.bordered-list_Host_children li').eq(i);
  			if (i > count) {
  				obj.fadeOut();
  			}
  			if (i <= count) {
  				obj.fadeIn();
  			}
  		};
	}



	//Tabs

	$('.tabs').on('click', 'article:not(.current)', function() {
		$(this).addClass('current').siblings().removeClass('current')
		.parents('div.tabs').find('div.box').eq($(this).index()).fadeIn(150).siblings('div.box').hide();
	});
	$('.aside-list').on('click', 'li:not(.current)', function() {
		$(this).addClass('current').siblings().removeClass('current');
		$('div.inner').find('div.box').eq($(this).index()).fadeIn(150).siblings('div.box').hide();
		current_tab =  $(this).index(); // new
		if(current_tab == 4) setResultPage();
		console.log(current_tab);
		if(current_tab == 2) {
			correct_Host_Family();
		}

	})

	// Continue / back buttons
	$('.continuebutton').on('click', function() {
		$('div.inner').find('div.box').eq(current_tab+1).fadeIn(150).siblings('div.box').hide();
		$('.aside-list').find('li').eq(current_tab+1).addClass('current').siblings().removeClass('current');
		current_tab = current_tab +1;
		return false;
	})
	$('.backbutton').on('click', function() {
		$('div.inner').find('div.box').eq(current_tab-1).fadeIn(150).siblings('div.box').hide();
		$('.aside-list').find('li').eq(current_tab-1).addClass('current').siblings().removeClass('current');
		current_tab = current_tab -1;
		return false;
	})


	// Change count peoples.
	$( ".Host_Family" ).change(function() {
  		var count = $(this).val() - 1;
  		console.log('adult');
  		for (var i = 10; i >= 0; i--) {
  			var obj = $('.bordered-list_Host_Family li').eq(i);
  			if (i > count) {
  				obj.fadeOut();
  			}
  			if (i <= count) {
  				obj.fadeIn();
  			}
  		};
	});
	$( ".Number_of_children" ).change(function() {
  		var count = $(this).val() - 1;
  		console.log('children');
  		for (var i = 10; i >= 0; i--) {
  			var obj = $('.bordered-list_Host_children li').eq(i);
  			if (i > count) {
  				obj.fadeOut();
  			}
  			if (i <= count) {
  				obj.fadeIn();
  			}
  		};
	});

});

function setResultPage(){

$('#for_form_First_name').html($('#form_First_name').val());
$('#for_form_Last_name').html($('#form_Last_name').val());
$('#for_sex').html($('input:radio[name=sex]:checked').val());
$('#for_form_Age').html($('#form_Age').val());
$('#for_form_Occupation').html($('#form_Occupation').val());
$('#for_form_native_language').html($('#form_native_language').val());
$('#for_form_secondary_language').html($('#form_secondary_language').val());
$('#for_form_Phone').html($('#form_Phone').val());
$('#for_form_Email').html($('#form_Email').val());
$('#for_live').html($('input:radio[name=live]:checked').val());
$('#for_form_Home_address').html($('#form_Home_address').val());
$('#for_bathroom').html($('input:radio[name=bathroom]:checked').val());

var property_details = '';
if($('#essentials').attr('checked')) property_details = property_details + ' essentials ';
if($('#iron').attr('checked')) property_details = property_details + ' iron ';
if($('#hair').attr('checked')) property_details = property_details + ' hair ';
if($('#tub').attr('checked')) property_details = property_details + ' tub ';
if($('#conditioning').attr('checked')) property_details = property_details + ' conditioning ';
if($('#washer').attr('checked')) property_details = property_details + ' washer ';
if($('#heating').attr('checked')) property_details = property_details + ' heating ';
if($('#dryer').attr('checked')) property_details = property_details + ' dryer ';
if($('#tv').attr('checked')) property_details = property_details + ' tv ';
if($('#pool').attr('checked')) property_details = property_details + ' pool ';
if($('#internet').attr('checked')) property_details = property_details + ' internet ';
if($('#parking').attr('checked')) property_details = property_details + ' parking ';
if($('#hangers').attr('checked')) property_details = property_details + ' hangers ';
	if(property_details.length>0) {$('#for_prefer_to_host_age').text(property_details);}
	else {
		$('#for_property_details').text('No prefer');
	}


// Host_Family
//
// Number_of_children
//
$('#for_pets').html($('input:radio[name=pets]:checked').val());
$('#for_Pets_desc').text($('#form_Pets_desc').val());
$('#for_smoke').text($('input:radio[name=smoke]:checked').val());
//
var prefer_to_host = '';
if($('#prefer_to_host_male').attr('checked')) prefer_to_host = prefer_to_host + ' Male ';
if($('#prefer_to_host_female').attr('checked')) prefer_to_host = prefer_to_host + ' Female';
	if(prefer_to_host.length>0) {$('#for_prefer_to_host_sex').text(prefer_to_host);}
	else {
		$('#for_prefer_to_host_sex').text('No prefer');
	}

var prefer_to_host = '';
if($('#prefer_to_host_14').attr('checked')) prefer_to_host = prefer_to_host + ' Under 14';
if($('#prefer_to_host_15-21').attr('checked')) prefer_to_host = prefer_to_host + ' 15-21';
if($('#prefer_to_host_21-30').attr('checked')) prefer_to_host = prefer_to_host + ' 21-30';
if($('#prefer_to_host_30-40').attr('checked')) prefer_to_host = prefer_to_host + ' 30-40';
if($('#prefer_to_host_50').attr('checked')) prefer_to_host = prefer_to_host + ' 50+';
	if(prefer_to_host.length>0) {$('#for_prefer_to_host_age').text(prefer_to_host);}
	else {
		$('#for_prefer_to_host_age').text('No prefer');
	}


$('#for_Expected_payment').text($('#form_Expected_payment').val());
$('#for_Preferred_length').text($('#form_Preferred_length').val());
$('#for_Preferred_length_min').text($('#form_Preferred_length_min').val());
$('#for_Preferred_length_max').text($('#form_Preferred_length_max').val());
$('#for_Any_limitations').text($('#form_Any_limitations').val());

$('#for_meal_plan').html($('input:radio[name=meal_plan]:checked').val());
$('#for_stay_plan').html($('input:radio[name=stay_plan]:checked').val());
$('#for_airport').text($('input:radio[name=airport]:checked').val());
$('#for_payment_airport').text($('#form_payment_airport').val());

$('#for_111111').html($('#111111').val());
$('#for_111111').html($('#111111').val());
}

// geolocate
//
