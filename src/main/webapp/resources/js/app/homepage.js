/**
 * Author: H Pavan Kumar
 */
var start = 0;
var sentimentTypeGlobal = "";
var app= angular.module('topguns',[]);
app.controller('homecontroller', function($scope,$http) {
    	$scope.data = [];
    	$scope.data.doClick = function(item,event){
    		$('#tweetTable').focus();
    		$("#processNextPrev").append("<img id='processing' src='"+contextpath+"/resources/images/process.gif' height='50' width='50'/>");
    		var clickedId = event.currentTarget.id;
    		//alert(clickedId);
    		var sentimentType ="";
    		if(clickedId == 'positiveSentiment'){
    			sentimentType = "positive";
    			sentimentTypeGlobal = sentimentType;
    			start =0;
    		}else if(clickedId == 'neutralSentiment'){
    			sentimentType = "neutral";
    			sentimentTypeGlobal = sentimentType;
    			start =0;
    		}else if(clickedId == 'negativeSentiment'){
    			sentimentType = "negative";
    			sentimentTypeGlobal = sentimentType;
    			start=0;
    		}
    		if(sentimentType == ""){
    			sentimentType = sentimentTypeGlobal;
    		}
    		if(clickedId == 'prevNav'){
	    		start = Number(start) -10;
	    		$('#nextNav').css("display","");
	    	}else if(clickedId == 'nextNav'){
	    		start = Number(start) +10;
	    	}
    		if(Number(start)>9){
	        	$('#prevNav').css("display","");
	        }else{
	        	$('#prevNav').css("display","none");
	        }
    		var startVar = Number(start);
    		//alert(sentimentType);
    		//alert(startVar);
    		var responsePromise = $http({
    	        method: 'GET',
    	        url: contextpath+"/tweetresponse?type="+sentimentType+"&start="+startVar+"&end=10",
    	        //params: 'limit=10, sort_by=created:desc',
    	        headers: {"Content-Type": "application/json",
    	        			"Content-Type": "application/x-www-form-urlencoded",
    	        			"X-Requested-With": "XMLHttpRequest"
    	        		 }
    	     });
    	     responsePromise.success(function(data){
    	        // With the data succesfully returned, call our callback
    	    	 $("#processNextPrev").empty();
    	    	$('#endRecord').val('');
    	    	
    	    	//alert(startVar);
    	        var response = data.tweetList;
    	        //alert(response);
    	        var trData = "";
    	        for(var i in response){
    	        	trData = trData + '<tr><td>'+response[i].tweet +"</td></tr>";
    	        }
    	        if(clickedId == 'nextNav' && trData == ""){
    	        	$('#nextNav').css("display","none");
    	        	start = Number(start) -10;
    	        }else{
    	        	$('#tweetTable tbody').empty();
    	        	$('#tweetTable tbody').append(trData);
    	        }
    	        
    	    });
    	    responsePromise.error(function(data,status,headers,config){
    	    	//alert(status);
    	        alert("Exception returned from Server. Please try later.");
    	    });
    	};
});
function closeHourlyChart(){
	$('#morris-bar-chart-dialyVol').empty();
	$('#morris-bar-chart-dialyVol').css('min-height','10px');
	$('#morris-bar-chart-dialyVol-panel').removeClass('panel');
	$('#morris-bar-chart-dialyVol-panel-head').css("display","none");
	$('#hourlySpanTitle').html('');
}

function closeRecipientChart(){
	$('#flot-pie-chart-tg-sm').empty();
	$('#flot-pie-chart-tg-sm').css('min-height','10px');
	$('#flot-bar-chart-dialyVol-panel').removeClass('panel');
	$('#flot-bar-chart-dialyVol-panel-head').css("display","none");
	$('#hourlySpanTitle').html('');
}

function getDataUsageByDate(dateObj){
	var urlLnk = contextpath+"/getDataByDate?dateVal="+dateObj;
	$.ajax({url: urlLnk, success: function(result){
        var jsonObjResp = JSON.parse(result);
        var hourlyList = jsonObjResp.hourlyListByDate;
        generateDataPageHourlyChart(hourlyList);
        $('#morris-bar-chart-dialyVol-panel').addClass('panel');
    	$('#morris-bar-chart-dialyVol-panel-head').css("display","");
    	$('#hourlySpanTitle').html(dateObj);
    }});
}

function getCallUsageByDate(dateObj){
	var urlLnk = contextpath+"/getCallByDate?dateVal="+dateObj;
	$.ajax({url: urlLnk, success: function(result){
        var jsonObjResp = JSON.parse(result);
        var recipientList = jsonObjResp.recipientListByDate;
        generatePieChartProductCall(recipientList);
        $('#flot-bar-chart-dialyVol-panel').addClass('panel');
    	$('#flot-bar-chart-dialyVol-panel-head').css("display","");
    	$('#hourlySpanTitle').html(dateObj);
    }});
}

function generateDataPageHourlyChart(responseObj){
	//alert(JSON.stringify(responseObj));
	$('#morris-bar-chart-dialyVol').empty();
	$('#morris-bar-chart-dialyVol').css('min-height','250px');
	
//	var dataObj = responseObj.dataListByDate;
	//alert(JSON.stringify(dataObj));
    Morris.Bar({
        element: 'morris-bar-chart-dialyVol',
        data: responseObj,
        xkey: 'time',
        ykeys: ['bytes'],
        labels: ['Data Used (byes)'],
        barRatio: 0.4,
        xLabelAngle: 35,
        hideHover: 'true',
        resize: true
    });
}

function generatePieChartProductCall(responseObj){
	var productData = responseObj;
	//alert(JSON.stringify(productData));
	// Flot Pie Chart with Tooltips
	
	var data = [
	            { label: "Verizon",  data: 19.5, color: "#4572A7"},
	            { label: "TMobile",  data: 4.5, color: "#80699B"},
	            { label: "AT&T",  data: 36.6, color: "#AA4643"},
	            { label: "CenturyLink",  data: 36.3, color: "#89A54E"},
	            { label: "Other",  data: 0.8, color: "#3D96AE"}
	        ];
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