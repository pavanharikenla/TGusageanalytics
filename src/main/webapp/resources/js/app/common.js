/**
 * Author: H Pavan Kumar
 */



function generateDonut(resObject){
	var appList = resObject.appUsageList;
	//var temp = '[{"label":"whatsapp","value":1435676},{"label":"whatsapp1","value":143566}]';
	//var appList = JSON.parse(temp);
	//alert(JSON.stringify(appList));
	Morris.Donut({
	        element: 'morris-donut-chart-tg',
	        data: appList,
	        colors:["#9CC4E4", "#3A89C9"],
	        resize: true
	    });
}

/*function generateAreaChart(resObject){
	var categoryList = resObject.categoryData;
	//alert(JSON.stringify(categoryList));
	// Area Chart
    Morris.Area({
        element: 'morris-area-chart-tg',
        data: categoryList,
        xkey: 'period',
        ykeys: ['Smartphones', 'Tablets', 'Products'],
        labels: ['Smartphones', 'Tablets', 'Products'],
        pointSize: 2,
        hideHover: 'auto',
        parseTime: false,
        resize: true
    });
}*/



function generatePieChartProduct(responseObj){
	var productData = responseObj.productList;
	//alert(JSON.stringify(productData));
	// Flot Pie Chart with Tooltips
	

	    var data = productData;
	    //alert(data);
	    var options = {
	            series: {
	                pie: {show: true}
	            },grid: {
		            hoverable: true
		        },tooltip: true,
		        tooltipOpts: {
		            content: "%p.0%, %s", // show percentages, rounding to 2 decimal places
		            shifts: {
		                x: 20,
		                y: 0
		            },
		            defaultTheme: false
		        }
	         };

	    $.plot($("#morris-donut-chart-tg"), data, options);
}
function generatepieChartSmartPh(responseObj){
	var productData = responseObj.phonesAndTablets;
	//alert(JSON.stringify(productData));
	// Flot Pie Chart with Tooltips
	

	    var data = productData;
	    //alert(data);
	    var options = {
	            series: {
	                pie: {show: true}
	            },grid: {
		            hoverable: true
		        },tooltip: true,
		        tooltipOpts: {
		            content: "%p.0%, %s", // show percentages, rounding to 2 decimal places
		            shifts: {
		                x: 20,
		                y: 0
		            },
		            defaultTheme: false
		        }
	         };

	    $.plot($("#flot-pie-chart-tg-sm"), data, options);
}

function generateLineChart(responseObj){
		//alert(responseObj);
	var dataObj = responseObj.sentimentData;
	//alert(JSON.stringify(dataObj));
	Morris.Line({
		  element: 'flot-line-chart-tg',
		  data: dataObj,
		  xkey: 'period',
		  ykeys: ['negative', 'neutral','positive'],
		  labels: ['negative', 'neutral','positive'],
		  lineColors: ['red','orange' ,'green'],
		  parseTime: false
	});
}

function requestCharts(){
	window.location.href = contextpath + "/charts";
}
function requestHome(){
	window.location.href = contextpath + "/home?userMobile=";
}
function requestSearch(){
	window.location.href = contextpath + "/recom";
}

function generateDataPageBarChart(responseObj){
	//alert(JSON.stringify(responseObj));
	$('#morris-bar-chart-dataVol').empty();
	var dataObj = responseObj.dataListByDate;
	//alert(JSON.stringify(dataObj));
    Morris.Bar({
        element: 'morris-bar-chart-dataVol',
        data: dataObj,
        xkey: 'date',
        ykeys: ['bytes'],
        labels: ['Data Used (byes)'],
        barRatio: 0.4,
        xLabelAngle: 35,
        hideHover: 'true',
        resize: true
    }).on('click', function(i, row){
    	  console.log(i, row);
    	  var ddDateObj = row;
    	  //alert(ddDateObj.date);
    	  getDataUsageByDate(ddDateObj.date);
    });
}

function generateCallPageBarChart(responseObj){
	//alert(JSON.stringify(responseObj));
	$('#morris-bar-chart-dataVol').empty();
	var dataObj = responseObj.dataListByDate;
	//alert(JSON.stringify(dataObj));
    Morris.Bar({
        element: 'morris-bar-chart-dataVol',
        data: dataObj,
        xkey: 'date',
        ykeys: ['duration'],
        labels: ['Call Duration'],
        barRatio: 0.4,
        xLabelAngle: 35,
        hideHover: 'true',
        resize: true
    }).on('click', function(i, row){
  	  console.log(i, row);
	  var ddDateObj = row;
	  getCallUsageByDate(ddDateObj.date);
    });
}

function generateRecomPageBarChart(responseObj){
	//alert(JSON.stringify(responseObj));
	$('#morris-bar-chart-dataVol').empty();
	var dataObj = responseObj.dataListByDate;
	//alert(JSON.stringify(dataObj));
    Morris.Bar({
        element: 'morris-bar-chart-dataVol',
        data: dataObj,
        xkey: 'date',
        ykeys: ['duration'],
        labels: ['Data Usage'],
        barRatio: 0.4,
        xLabelAngle: 35,
        hideHover: 'true',
        resize: true
    });
}

function generateCallRecomPageBarChart(responseObj){
	//alert(JSON.stringify(responseObj));
	$('#morris-bar-chart-dataVol-call').empty();
	var dataObj = responseObj.calldataListByDate;
	//alert(JSON.stringify(dataObj));
    Morris.Bar({
        element: 'morris-bar-chart-dataVol-call',
        data: dataObj,
        xkey: 'date',
        ykeys: ['duration'],
        labels: ['call duration (hrs)'],
        barRatio: 0.4,
        xLabelAngle: 35,
        hideHover: 'true',
        resize: true
    });
}

function generatePieChartByNetwork(responseObj){
	var productData = responseObj.networkListPast;
	//alert(JSON.stringify(productData));
	// Flot Pie Chart with Tooltips
	
	/*var data = [
	            { label: "Verizon",  data: 25.5, color: "#4572A7"},
	            { label: "TMobile",  data: 14.5, color: "#80699B"},
	            { label: "AT&T",  data: 30.6, color: "#AA4643"},
	            { label: "CenturyLink",  data: 32.3, color: "#89A54E"},
	            { label: "Other",  data: 10.8, color: "#3D96AE"}
	        ];*/
	var data = productData;
	var options = {
            series: {
                pie: {show: true}
            },grid: {
	            hoverable: true
	        },tooltip: true,
	        tooltipOpts: {
	            content: "%p.0%, %s", // show percentages, rounding to 2 decimal places
	            shifts: {
	                x: 20,
	                y: 0
	            },
	            defaultTheme: false
	        }
         };

    $.plot($("#flot-pie-chart-tg"), data, options);
}

var getBytesWithUnit = function( bytes ){
	//alert(bytes);
	if( isNaN( bytes ) ){ return; }
	var units = [ ' bytes', ' KB', ' MB', ' GB', ' TB', ' PB', ' EB', ' ZB', ' YB' ];
	var amountOf2s = Math.floor( Math.log( +bytes )/Math.log(2) );
	if( amountOf2s < 1 ){
		amountOf2s = 0;
	}
	var i = Math.floor( amountOf2s / 10 );
	bytes = +bytes / Math.pow( 2, 10*i );
 
	// Rounds to 3 decimals places.
        if( bytes.toString().length > bytes.toFixed(3).toString().length ){
            bytes = bytes.toFixed(3);
        }
	return bytes + units[i];
};




function generateAreaChart(resObject){
	//var categoryList = resObject.categoryData;
	//var hoursdata = '[{"time":"1AM","24-10-2015":123134,"25-10-2015":345623,"26-10-2015":12234},{"time":"2AM","24-10-2015":123134,"25-10-2015":12234,"26-10-2015":345623},'+
	//'{"time":"3AM","24-10-2015":345623,"25-10-2015":123134,"26-10-2015":12234}]';
	//alert(JSON.stringify(categoryList));
	// Area Chart
	//var hoursList = JSON.parse(hoursdata);
	//var hoursList = JSON.parse(resObject);
	var hoursList = resObject;
	//alert(JSON.stringify(hoursList))
	$('#morris-bar-chart-dialyVol').empty();
	$('#morris-bar-chart-dialyVol').css('min-height','250px');
	var xaxisList = [];
	for(var i=0;i<hoursList.length;i++){
		var hoursCurrent = hoursList[i];
		//alert(hoursCurrent);
		$.each(hoursCurrent, function(k, v) {
		    //display the key and value pair
			if(k!='time' && !xaxisList.contains(k)){
				xaxisList.push(k);
				//alert(k);
			}
		});
	}
	
	
	
    Morris.Line({
        element: 'morris-bar-chart-dialyVol',
        data: hoursList,
        xkey: 'time',
        ykeys: xaxisList,
        labels: xaxisList,
        pointSize: 2,
        hideHover: 'auto',
        parseTime: false,
        resize: true
    });
}

Array.prototype.contains = function(obj) {
    var i = this.length;
    while (i--) {
        if (this[i] === obj) {
            return true;
        }
    }
    return false;
}

function validateUser(){
	var user = $('#username').val();
	var pass = $('#password').val();
	if((user == '9052100567' || user=='9052567567' || user == '9052567567' || user=='7702303254')&& pass == 'test'){
		window.location.href=contextpath + "/home?userMobile="+user;
		$('#errorMsg').html('Loading plase wait...');
		$('#errorMsg').css("background","white");
	}else{
		//alert('Authentication failed! Please enter the correct credentials.');
		$('#errorMsg').html('Authentication failed!');
		$('#errorMsg').css("background","white");
	}
	//alert($('#password').val());
}

