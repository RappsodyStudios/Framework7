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

//Remove Items 
$$(".fa-times").on('click', function () {
	$$(this).parent().remove();
});

//Camera Basic UI
$$(".viewport").addClass("hide");

$$("#scan_btn").on('click', function() {
	$$(".viewport").removeClass("show");
	$$(this).hide();
});
	
//Hides notification bubble
$$(".empty-message").hide();

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
	
	var randomScalingFactor = function(){ return Math.round(Math.random()*12)};
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
    var lineChartData = {
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

    var ctxLine = document.getElementById("line_chart").getContext("2d");
    window.myLine = new Chart(ctxLine).Line(lineChartData, {responsive: true});
	
	var ctxDoughnut = document.getElementById("chart_area").getContext("2d");
	window.myDoughnut = new Chart(ctxDoughnut).Doughnut(doughnutData, {responsive : true});
});

//Particular function for the recipes screen
myApp.onPageInit('recipes', function(page){
	
});