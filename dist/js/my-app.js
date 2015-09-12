// Initialize your app
var myApp = new Framework7();

// Export selectors engine
var $$ = Dom7;

// Add view
var mainView = myApp.addView('.view-main', {
    // Because we use fixed-through navbar we can enable dynamic navbar
    dynamicNavbar: true
});

//Push Notifications 
/*$$(this).on('load', function () {
	myApp.addNotification({
		title: 'Spilt Milk',
		message: 'This is a simple notification message with custom icon and subtitle',
		media: '<i class="fa fa-cloud fa-2x" style="color: orange;"></i>'
	});
});*/

//Variable for notifications
var notices = 2;

//Remove Items 
$$(".fa-times").on('click', function() {
	'use strict';
	$$(this).parent().remove();
	$$('.num-notices').hide();
});

//Notification functions
if(notices < 1) {
	alert('Heyo');
	$$('.navbar-inner .right .num-notices').hide();
}

//Camera Basic UI
$$(".viewport").addClass("hide");

$$("#scan_btn").on('click', function() {
	$$(".viewport").removeClass("show");
	$$(this).hide();
});


//Interaction for the list items
$$(".checkbox").click(function(){
	if ($$(".checkbox").is(":checked")) {
		$$("#item").remove();
	} else {
		$$("#item").show();
	}
});
	

//Particular function for the item details screen
myApp.onPageInit('details', function(page){
	
	var randomScalingFactor = function(){ return Math.round(Math.random()*5)};
    var purchaseChartData = {
        labels : ["Oct", "Nov"],
        datasets : [
            {
                label: "Activity for: ",
                fillColor : "rgba(250,221,153,0.2)",
                strokeColor : "rgba(224,143,80,1)",
                pointColor : "rgba(220,220,220,1)",
                pointStrokeColor : "#e08f50",
                pointHighlightFill : "#fff",
                pointHighlightStroke : "rgba(220,220,220,1)",
                data : [randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor()]
            }
        ]
    }

    var ctxPurchase = document.getElementById("purchase_chart").getContext("2d");
    window.myLine = new Chart(ctxPurchase).Line(purchaseChartData, {responsive: true});
	
});

//UI Functionality for the grocery list
myApp.onPageInit('list', function(page){
	$$('.add-btn').hide();
	
	$$('#add_item').focus(function() {
		$$('.camera-activate').hide();
		$$('.add-btn').show();
	});
	
	$$('#add_item').focusout(function() {
		$$('.add-btn').hide();
		$$('.camera-activate').show();
		
		$$(this).value = "";
	});
	
	$$('.add-btn').on('click', function(e) {
		e.preventDefault();
		
		var listItem = innerHTML = '<li id="item"> <label class="label-checkbox item-content"> <input type="checkbox" name="my-checkbox" value="Milk"> <div class="item-media"> <i class="icon icon-form-checkbox"></i> </div> <div class="item-inner">'+ $$('#add_item').val(); +'</div> </label> </li>';
		
		if($$('#add_item').val().length === 0){
			myApp.alert('It appears you forgot to add your item', 'Item not Added');
		} else {
			$$('ul.grocery-list').append(listItem);
		}
	});
	
	$$('#item input[type=checkbox]').change(function(){
		$$(this).each(function() {
			if($$(this).is(':checked')) {
				$$(this).parent().addClass('checked');
			} else {
				$$(this).parent().removeClass('checked');
			}
		});
	});
	
	$$('.coupon-alert').on('click', function() {
		myApp.alert('Please share this mobile coupon with your cashier upon checkout', 'Coupon Applied Like a Boss');
		$$(this).css({'opacity':'0.3'});
	});
	
	$$('.schedule').on('click', function() {
  		myApp.popup('.schedule-delivery');
	});  
	
	$$('button.close-popup').on('click', function() {
		$$('#item input[type=checkbox]').attr('checked', true);
		$$('#item input[type=checkbox]').parent().addClass('checked');
		myApp.alert('Your card will not be charged until the groceries are picked up', 'Groceries are on Their Way');
	});
});

//Initializes the charts on the analytics page
myApp.onPageInit('anayltics', function(page){
	
	var doughnutData = [
				{
					value: 300,
					color:"#6aa9d4"
				},
				{
					value: 50,
					color: "#46BFBD"
				},
				{
					value: 100,
					color: "#f1e786"
				},
				{
					value: 40,
					color: "#e08f50"
				},
				{
					value: 120,
					color: "#dc5655"
				}

			];
			

    var randomScalingFactor = function(){ return Math.round(Math.random()*12)};
	
    var lineChartData1 = {
        labels : ["8am","10am","12pm","2pm","4pm","6pm","8pm"],
        datasets : [
            {
                label: "Activity for: ",
                fillColor : "rgba(250,221,153,0.2)",
                strokeColor : "rgba(224,143,80,1)",
                pointColor : "rgba(220,220,220,1)",
                pointStrokeColor : "#e08f50",
                pointHighlightFill : "#fff",
                pointHighlightStroke : "rgba(220,220,220,1)",
                data : [randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor()]
            }
        ]
    }
	
	var lineChartData2 = {
        labels : ['Sun','Mon','Tues','Wed','Thurs','Fri','Sat'],
        datasets : [
            {
                label: "Activity for: ",
                fillColor : "rgba(250,221,153,0.2)",
                strokeColor : "rgba(224,143,80,1)",
                pointColor : "rgba(220,220,220,1)",
                pointStrokeColor : "#e08f50",
                pointHighlightFill : "#fff",
                pointHighlightStroke : "rgba(220,220,220,1)",
                data : [randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor()]
            }
        ]
    }
	
	var lineChartData3 = {
        labels : ['08/2015','09/2015'],
        datasets : [
            {
                label: "Activity for: ",
                fillColor : "rgba(250,221,153,0.2)",
                strokeColor : "rgba(224,143,80,1)",
                pointColor : "rgba(220,220,220,1)",
                pointStrokeColor : "#e08f50",
                pointHighlightFill : "#fff",
                pointHighlightStroke : "rgba(220,220,220,1)",
                data : [randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor()]
            }
        ]
    }

    var ctxLine1 = document.getElementById("line_chart_day").getContext("2d");
    window.myLine1 = new Chart(ctxLine1).Line(lineChartData1, {responsive: true});
	
	var ctxLine2 = document.getElementById("line_chart_week").getContext("2d");
    window.myLine2 = new Chart(ctxLine2).Line(lineChartData2, {responsive: true});
	
	var ctxLine3 = document.getElementById("line_chart_month").getContext("2d");
    window.myLine3 = new Chart(ctxLine3).Line(lineChartData3, {responsive: true});
	
	var ctxDoughnut = document.getElementById("chart_area").getContext("2d");
	window.myDoughnut = new Chart(ctxDoughnut).Doughnut(doughnutData, {responsive : true});
	
	$$('#line_chart_week').hide();
	$$('#line_chart_month').hide();
	
	$$('.timeline').on('change', function(){
		//Updates the information
		if (this.value == 'day') {
			$$('#line_chart_day').show();
			$$('#line_chart_week').hide();
			$$('#line_chart_month').hide();
			$$('p.amount').html('$18<sup>.23</sup>');
			$$('.cost small').html('A Day');
			$$('span.consumed').html('21%');
			
		} else if (this.value == 'week') {
			$$('#line_chart_day').hide();
			$$('#line_chart_week').show();
			$$('#line_chart_month').hide();
			$$('p.amount').html('$36<sup>.15</sup>');
			$$('.cost small').html('A Week');
			$$('span.consumed').html('42%');
			
		} else if (this.value == 'month') {
			$$('#line_chart_day').hide();
			$$('#line_chart_week').hide();
			$$('#line_chart_month').show();
			$$('p.amount').html('$82<sup>.75</sup>');
			$$('.cost small').html('A Month');
			$$('span.consumed').html('77%');
		}
	});
});

//Particular function for the recipes screen
myApp.onPageInit('recipes', function(page){
	$$('.vocal-search .activate').on('click', function(e) {
		e.preventDefault();
		myApp.popup('.voice-search');
	});
});

//Particular function for the recipe details screen
myApp.onPageInit('recipe-details', function(page){
	  //Hidden Objects and Elements
	  $$('.added').hide();
	  $$('.comments').hide();
	  
	  // Social Sharing Feature
	  $$('.fa-share-alt').on('click', function () {
		var buttons = [
			{
				text: innerHTML = '<i class="fa fa-twitter"></i> Tweet This',
				onClick: function () {
					myApp.alert('Button1 clicked');
				}
			},
			{
				text: innerHTML = '<i class="fa fa-facebook"></i> Share of Facebook',
				onClick: function () {
					myApp.alert('Button2 clicked');
				}
			},
			{
				text: innerHTML = '<i class="fa fa-pinterest"></i> Pin This',
				color: 'red',
				onClick: function () {
					myApp.alert('Cancel clicked');
				}
			},
		];
		myApp.actions(buttons);
	});
	
	//Missing Ingridients
	if ($$('li.item .item-inner span.absent').hasClass('absent')) {  
      	$$('button.missing').show();
   	} else {
		$$('button.missing').hide();
	};
   
	$$('.missing').on('click', function() {
		myApp.alert('Missing ingredients have been added to your shopping list', 'Experience Points Earned!'); 
	});
	
	//Adding a Favorite
	$$('.favorite, .popularity').on('click', function() {
		var favorites = 32;
		
		$$('.pre-add').hide();
		$$('.added').show();
		
		favorites++;
		$$('.popularity').text(' ' + favorites);
	});
		
	//Meal Planning
	$$('.plan').on('click', function() {
		myApp.popup('.schedule-meal');
	});
});

//Interactions for the Sign-up Page
myApp.onPageInit('sign-up', function(page){
	$$('.password-modal').on('click', function () {
    	myApp.modalPassword('Enter a new password please:', 'Lets change things', function (password) {
    		myApp.alert('Your new password is: ' + password + '. An email has been forwarded to you. Keep it somewhere safe.', 'Nice!');
   		});
	});
	
	$$('.sign-up').on('click', function(e) {
		e.preventDefault();
		
		myApp.popup('.signing-up');
	});
});

//Interactions for the Signed In User
myApp.onPageInit('signed-in', function(page){
	$$('.password-modal').on('click', function () {
    	myApp.modalPassword('Enter a new password please:', 'Lets change things', function (password) {
    		myApp.alert('Your new password is: ' + password + '. An email has been forwarded to you. Keep it somewhere safe.', 'Nice!');
   		});
	});
});

//Paid versus Free Diets
myApp.onPageInit('dietary', function(page){
	$$('label.inactive').on('click', function() {
		myApp.modal({
		title:  'Sorry Chef',
		text: 'To this diet requires an in-app purchase of $.99',
		buttons: [
		  {
			text: 'Cancel',
			onClick: function() {
				//$$('label.inactive checkbox').attr('checked', false);
			}
		  },
		  {
			text: 'Buy',
			onClick: function() {
				//$$('label.inactive checkbox').attr('checked', true);
			  	$$('label[for="$(this)"]').removeClass('inactive');
			}
		  },
		]
	  });
	});
});

//Capturing barcodes with the native camera
myApp.onPageInit('camera', function(page){
	window.onload = function() {
		if (navigator.getUserMedia) {
			navigator.getUserMedia(
				{
				  video: true
				},
			
				function(localMediaStream) {
					var vid = document.getElementById('camera-stream');
					vid.src = window.URL.createObjectURL(localMediaStream);
				}
			);
		}
	}
});