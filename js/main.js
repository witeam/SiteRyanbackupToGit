var bannerwidth = 0;
var slidesCount = 0;
var currSlide = 1;
var slideCounter = 0;
var selectedFeat = 'feat_hot';

$(document).ready(function() {
	$('#topbarArea .inner > ul > li > ul > li').click(function() {
		$('#topbarArea .inner > ul > li:first-child > span').html($(this).text());
	});
	$('#bannerArea img:nth-child(1)').click(function() {
		var prevSlide = currSlide-1;
		if(prevSlide < 1) {
			currSlide = slidesCount;
		} else {
			currSlide = currSlide-1;
		}
		selectSlide(currSlide);
	});
	$('#bannerArea img:nth-child(2)').click(function() {
		var nextSlide = currSlide+1;
		if(nextSlide > slidesCount) {
			currSlide = 1;
		} else {
			currSlide = currSlide+1;
		}
		selectSlide(currSlide);
	});
	$('#feature > .inner ul:first-child > li').click(function() {
		var idx = $(this).index()+1;
		switch(idx) {
			case 1: selectedFeat = 'feat_hot'; break;
			case 2: selectedFeat = 'feat_des'; break;
			case 3: selectedFeat = 'feat_feat'; break;
			case 4: selectedFeat = 'feat_lst'; break;
		}
		$('#feature > .inner ul:first-child > li').removeAttr('class');
		$('#feature > .inner ul:first-child > li:nth-child('+idx+')').attr('class','active');
		$('#feature .wrapper ul').hide();
		$('#feature .wrapper .'+selectedFeat).show();
	});
	$('#feature > .inner ul:last-child li:first-child').click(function() {
		var featW = $('#feature .'+selectedFeat).width();
		var position = $('#feature .'+selectedFeat).position();
		var posLeft = 0;
		if(position.left < 0) {
			posLeft = position.left*-1;
		} else {
			posLeft = position.left;
		}
		var newW = (featW - posLeft) - 250;
		if(newW >= 1000) {
			$('#feature .'+selectedFeat).animate({
				left: (position.left-250)+'px'
			},250);
		}
	});
	$('#feature > .inner ul:last-child li:last-child').click(function() {
		var featW = $('#feature .'+selectedFeat).width();
		var position = $('#feature .'+selectedFeat).position();
		console.log(position.left);
		if(position.left < 0) {
			$('#feature .'+selectedFeat).animate({
				left: (position.left+250)+'px'
			},250);
		} else {
			$('#feature .'+selectedFeat).css('left','0');
		}
	});
});

$(window).resize(function() {
	setSlider();
});

function setSlider() {
	var bannerwidth = $('#bannerArea').width();
	var sh = $('#slider li').height();
	$('#slider > li > div').css('width',bannerwidth+'px');
	$('#slider > li > div').css('height',sh+'px');
	$('#bannerArea').height(sh+'px');
	$('#slider li').css('opacity','0');
	$('#slider li:nth-child(1)').css('opacity','1');
	$('#bannerArea .nav').html('');
	for(var x=0; x<slidesCount; x++) {
		$('#bannerArea .nav').append('<li class="normal"></li>');
	}
	$('#bannerArea .nav li:first-child').attr('class','active');
	var bannerNavWidth = slidesCount*30;
	$('#bannerArea .nav').css('width',bannerNavWidth+'px');
	$('#bannerArea .nav').css('margin-top',(sh+23)+'px');
	$('#bannerArea .nav').css('margin-left',((bannerwidth-(slidesCount*30))/2)+'px');
}
function playSlide() {
  var slideCount = $('#slider > li').size();
  var t = setTimeout("playSlide()", 1000);
  slideCounter++;
  if(slideCounter == 10) {
    currSlide++;
    if(currSlide > slideCount) {
      currSlide = 1;
    }
    selectSlide(currSlide);
  }
}
function selectSlide(idx) {
	var slideSpeed = 500;
	slideCounter = 0;
	currSlide = idx;
	$('#bannerArea .nav > li').attr('class','normal');
	$('#bannerArea .nav > li:nth-child('+currSlide+')').attr('class','active');
	$('#slider > li').css('z-index','1');
	$('#slider > li:nth-child('+currSlide+')').css('z-index','2');
	$('#slider > li:nth-child('+currSlide+')').animate({
		opacity: 1
	},slideSpeed,function() {
		$('#slider > li').css('opacity',0);
		$('#slider > li:nth-child('+currSlide+')').css('opacity',1);
	});
}

var feat_hot = [
	{ "id":"1", "name":"Mimosa Lace Dress", "price":"76.95", "photo":"1.jpg", "sale":"no" },
	{ "id":"2", "name":"Feel Ztank", "price":"59.95", "photo":"2.jpg", "sale":"yes" },
	{ "id":"3", "name":"Petrol Sweater", "price":"21.50", "photo":"3.jpg", "sale":"no" },
	{ "id":"2", "name":"Feel Ztank", "price":"59.95", "photo":"2.jpg", "sale":"yes" },
	{ "id":"3", "name":"Petrol Sweater", "price":"21.50", "photo":"3.jpg", "sale":"no" },
	{ "id":"1", "name":"Mimosa Lace Dress", "price":"76.95", "photo":"1.jpg", "sale":"no" },
	{ "id":"2", "name":"Feel Ztank", "price":"59.95", "photo":"2.jpg", "sale":"yes" }
];
var feat_des = [
	{ "id":"1", "name":"Mimosa Lace Dress", "price":"76.95", "photo":"1.jpg", "sale":"no" },
	{ "id":"2", "name":"Feel Ztank", "price":"59.95", "photo":"2.jpg", "sale":"yes" },
	{ "id":"3", "name":"Petrol Sweater", "price":"21.50", "photo":"3.jpg", "sale":"no" },
	{ "id":"2", "name":"Feel Ztank", "price":"59.95", "photo":"2.jpg", "sale":"yes" },
	{ "id":"3", "name":"Petrol Sweater", "price":"21.50", "photo":"3.jpg", "sale":"no" },
	{ "id":"1", "name":"Mimosa Lace Dress", "price":"76.95", "photo":"1.jpg", "sale":"no" },
	{ "id":"2", "name":"Feel Ztank", "price":"59.95", "photo":"2.jpg", "sale":"yes" },
	{ "id":"3", "name":"Petrol Sweater", "price":"21.50", "photo":"3.jpg", "sale":"no" },
	{ "id":"1", "name":"Mimosa Lace Dress", "price":"76.95", "photo":"1.jpg", "sale":"no" },
	{ "id":"2", "name":"Feel Ztank", "price":"59.95", "photo":"2.jpg", "sale":"yes" }
];
var feat_feat = [
	{ "id":"1", "name":"Mimosa Lace Dress", "price":"76.95", "photo":"1.jpg", "sale":"no" },
	{ "id":"2", "name":"Feel Ztank", "price":"59.95", "photo":"2.jpg", "sale":"yes" },
	{ "id":"3", "name":"Petrol Sweater", "price":"21.50", "photo":"3.jpg", "sale":"no" },
	{ "id":"2", "name":"Feel Ztank", "price":"59.95", "photo":"2.jpg", "sale":"yes" },
	{ "id":"3", "name":"Petrol Sweater", "price":"21.50", "photo":"3.jpg", "sale":"no" }
];
var feat_lst = [
	{ "id":"1", "name":"Mimosa Lace Dress", "price":"76.95", "photo":"1.jpg", "sale":"no" },
	{ "id":"2", "name":"Feel Ztank", "price":"59.95", "photo":"2.jpg", "sale":"yes" },
	{ "id":"3", "name":"Petrol Sweater", "price":"21.50", "photo":"3.jpg", "sale":"no" },
	{ "id":"2", "name":"Feel Ztank", "price":"59.95", "photo":"2.jpg", "sale":"yes" },
	{ "id":"3", "name":"Petrol Sweater", "price":"21.50", "photo":"3.jpg", "sale":"no" },
	{ "id":"1", "name":"Mimosa Lace Dress", "price":"76.95", "photo":"1.jpg", "sale":"no" },
	{ "id":"2", "name":"Feel Ztank", "price":"59.95", "photo":"2.jpg", "sale":"yes" },
	{ "id":"2", "name":"Feel Ztank", "price":"59.95", "photo":"2.jpg", "sale":"yes" },
	{ "id":"3", "name":"Petrol Sweater", "price":"21.50", "photo":"3.jpg", "sale":"no" },
	{ "id":"2", "name":"Feel Ztank", "price":"59.95", "photo":"2.jpg", "sale":"yes" },
	{ "id":"3", "name":"Petrol Sweater", "price":"21.50", "photo":"3.jpg", "sale":"no" },
	{ "id":"1", "name":"Mimosa Lace Dress", "price":"76.95", "photo":"1.jpg", "sale":"no" },
	{ "id":"2", "name":"Feel Ztank", "price":"59.95", "photo":"2.jpg", "sale":"yes" }
];
var clearance_items = [
	{ "id":"1", "name":"Nadia Dress", "price":"64.95", "photo":"6.jpg", "sale":"no" },
	{ "id":"2", "name":"Sofi Blouse", "price":"26.95", "photo":"7.jpg", "sale":"yes" },
	{ "id":"3", "name":"Gooding Shorts", "price":"79.95", "photo":"8.jpg", "sale":"no" },
	{ "id":"2", "name":"Mimosa Lace Dress", "price":"76", "photo":"9.jpg", "sale":"yes" }
];
function renderFeatItems(a, b, c, d, e) {
	renderFeat(a,'feat_hot');
	renderFeat(b,'feat_des');
	renderFeat(c,'feat_feat');
	renderFeat(d,'feat_lst');
	renderFeat(e,'clearance_items');
}
function renderFeat(feat,featName) {
	if(featName == 'clearance_items') {
		for(var x=0; x<feat.length; x++) {
			$('.clearance_items').append('<li>\
					<div>\
						<div><div>SHOP IT</div></div>\
						<div>' + (feat[x].sale == "yes" ? '<img src="images/img_icon_sale.png" alt="SALE" class="sale" />': '') + '<img src="images/items/'+feat[x].photo+'" alt="'+feat[x].name+'" /></div>\
						<div>'+feat[x].name+'</div>\
						<div>$ '+feat[x].price+'</div>\
						<a href="#" class="addToCart">Add To Cart</a>\
					</div>\
				</li>\
			');
		}
	} else {
		for(var x=0; x<feat.length; x++) {
			$('#feature .'+featName).append('<li>\
					<div>\
						<div><div>SHOP IT</div></div>\
						<div>' + (feat[x].sale == "yes" ? '<img src="images/img_icon_sale.png" alt="SALE" class="sale" />': '') + '<img src="images/items/'+feat[x].photo+'" alt="'+feat[x].name+'" /></div>\
						<div>'+feat[x].name+'</div>\
						<div>$ '+feat[x].price+'</div>\
						<a href="#" class="addToCart">Add To Cart</a>\
					</div>\
				</li>\
			');
		}
		$('#feature .'+featName).width(feat.length*250+'px');
		var initLeft = (Math.floor(feat.length/2)-2)*-250;
		$('#feature .'+featName).css('left',initLeft+'px');

	}	
}