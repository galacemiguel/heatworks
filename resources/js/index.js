var oldShow;
var newShow;
var i = 0;

var update = function() {
	// $('#info').css('opacity', '1');
	$('.content').removeClass('active');
	oldShow.css('z-index', '0');
	window.setTimeout(function() {
		oldShow.removeClass('show');
	}, 500);

	/*switch (newShow.prop('id')) {
		case 'mar10':
			$('#info').html('<a href="https://farm6.staticflickr.com/5231/14205693564_593ac62c5f_o_d.jpg"><img src="Resources/download.png" class="download" id="mar10" /></a><b>"This is My House"</b><br /><small>by galacemiguel</small>');

			$('#works').scrollTop(0);
			break;
		case 'mar25':
			$('#info').html('<a href="https://farm8.staticflickr.com/7330/14184981405_f217ef0430_o_d.jpg"><img src="Resources/download.png" class="download" id="mar25" /></a><b>"27"</b><br /><small>by galacemiguel</small>');
			if ($('#works').scrollTop() > 120) {
				$('#works').scrollTop(120);
			} 
			break;
		case 'mar31':
			$('#info').html('<a href="https://farm3.staticflickr.com/2921/14205178536_5eb27a51c2_k_d.jpg"><img src="Resources/download.png" class="download" id="mar31" /></a><b>"KA-BOSH"</b><br /><small>by galacemiguel</small>');

			if ($('#works').scrollTop() > 240) {
				$('#works').scrollTop(240);
			}
			break;
		case 'jun9':
			$('#info').html('<a href="https://farm3.staticflickr.com/2852/13374433513_b4b05a9c9b_o_d.jpg"><img src="Resources/download.png" class="download" id="jun9" /></a><b>"NOT TONIGHT."</b><br /><small>by galacemiguel</small>');

			if ($('#works').scrollTop() < 120) {
				$('#works').scrollTop(120);
			}
			break;
		case 'jun18':
			$('#info').html('<a href="https://farm8.staticflickr.com/7361/12948629634_3275ebd683_k_d.jpg"><img src="Resources/download.png" class="download" id="jun18" /></a><b>"Ropes"</b><br /><small>by galacemiguel</small>');

			if ($('#works').scrollTop() < 240) {
				$('#works').scrollTop(240);
			}
			break;
		case 'mar3':
			$('#info').html('<a href="https://farm8.staticflickr.com/7353/12948713374_0261db62ed_o_d.jpg"><img src="Resources/download.png" class="download" id="mar3" /></a><b>"SIXTY-ONE"</b><br /><small>by galacemiguel</small>');

			$('#works').scrollTop(360);
			break;
	}*/
}

$('#overflow').scroll(function() {
	console.log($(this).scrollTop());
});

$('.frame').click(function() {
	var cycle = function() {
		if (!($('#' + $('.frame.' + i).prop('id')).hasClass('show'))) {
			$('.content.' + i).addClass('active');
			oldShow = $('.frame.show');
			newShow = $('#' + $('.frame.' + i).prop('id'));
			newShow.css('z-index', '1').addClass('show');
			update();
			$('.content.' + i).addClass('active');
			i++;
		}
	}
	if (i < $('.frame').length - 1) {
		cycle();
	} else {
		i = 0;
		cycle();
	}
});

$('.content').click(function() {
	if (!($('#' + $(this).prop('id')).hasClass('show'))) {
		oldShow = $('.frame.show');
		newShow = $('#' + $(this).prop('id'));
		newShow.css('z-index', '1').addClass('show');
		update();
		$(this).addClass('active');
		i = newShow.prop('class').split(' ')[1] * 1 + 1;
	}
});

/*$('.content, #info').mouseenter(function() {
	$('.download').css('opacity', '1');
	$('.download').hover(function() {
		$(this).css('opacity', '0.8');
	});
});
$('.content, #info').mouseleave(function() {
	$('.download').css('opacity', '0');
});*/