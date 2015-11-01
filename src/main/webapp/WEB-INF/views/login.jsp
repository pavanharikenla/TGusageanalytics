<%@page import="com.vz.tg.model.HomeBean"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%@ page session="false" %>
<!DOCTYPE html>
<html lang="en">
<!-- home page changes commited test for travis-->
<head>

    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">

    <title>Top Guns - Usage Analytics</title>

    <!-- Bootstrap Core CSS -->
    <link href="<%= request.getContextPath() %>/resources/css/bootstrap.min.css" rel="stylesheet">

    <!-- Custom CSS -->
    <link href="<%= request.getContextPath() %>/resources/css/sb-admin.css" rel="stylesheet">

    <!-- Morris Charts CSS -->
    <link href="<%= request.getContextPath() %>/resources/css/plugins/morris.css" rel="stylesheet">

    <!-- Custom Fonts -->
    <link href="<%= request.getContextPath() %>/resources/font-awesome/css/font-awesome.min.css" rel="stylesheet" type="text/css">
    <script src="<%= request.getContextPath() %>/resources/js/angular/angular.min.js"></script>
    <script src="<%= request.getContextPath() %>/resources/js/app/common.js"></script>

    <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
        <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
        <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->
	<script type="text/javascript">
	var contextpath = "<%= request.getContextPath() %>";
	//var dataUsageVal = 0;
	</script>
</head>

<body>

    <div id="wrapper" ng-app="topguns">

        <!-- Navigation -->
        <nav class="navbar navbar-inverse navbar-fixed-top" role="navigation">
            <!-- Brand and toggle get grouped for better mobile display -->
            <div class="navbar-header">
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand" href="#" onclick="requestHome();"><i class="fa fa-icon-cloud"></i>Usage Analysis</a>
            </div>
            <ul class="nav navbar-right top-nav">
            	<li class="message-preview">
            	<div class="media-body">
                       <h5 class="media-heading"><strong>TOP GUNS</strong>
                       </h5>
                 </div>
                </li>
            </ul>
            
        </nav>

        <div id="page-wrapper" ng-controller = "homecontroller">

            <div class="container-fluid">

                
                <div class="loginDiv">
					<form action="javascript:void(0);" method="get">
						<fieldset>
							<p>
								<input id="username" type="text" required value="Mobile Number"
									onBlur="if(this.value=='')this.value='Mobile Number'"
									onFocus="if(this.value=='Mobile Number')this.value='' ">
							</p>
							<p>
								<input id="password" type="password" required value="Password"
									onBlur="if(this.value=='')this.value='Password'"
									onFocus="if(this.value=='Password')this.value='' ">
							</p>
							<p>
								<a href="#">Forgot Password?</a>
							</p>
							<p>
								<input type="button" value="Login" onclick="validateUser();">
							</p>
						</fieldset>
					</form>
				</div>
				


            </div>
            <!-- /.container-fluid -->

        </div>
        <!-- /#page-wrapper -->

    </div>
    <!-- /#wrapper -->

    <!-- jQuery -->
    <script src="<%= request.getContextPath() %>/resources/js/jquery.js"></script>

    <!-- Bootstrap Core JavaScript -->
    <script src="<%= request.getContextPath() %>/resources/js/bootstrap.min.js"></script>

    

</body>

</html>
<style>
div#page-wrapper{background: none!important;}
.fr{float: right;}
.navbar-right{margin-top:20px;color:white !important;}

div.loginDiv {
    width: 350px;
    height: 250px;
    /*background-color: white;*/

    position: absolute;
    top:0;
    bottom: 0;
    left: 0;
    right: 0;

    margin: auto;
}

 form fieldset input[type="text"], input[type="password"] {
background-color: #e5e5e5;
border: none;
border-radius: 3px;
-moz-border-radius: 3px;
-webkit-border-radius: 3px;
color: #5a5656;
font-family: 'Open Sans', Arial, Helvetica, sans-serif;
font-size: 14px;
height: 50px;
outline: none;
padding: 0px 10px;
width: 280px;
-webkit-appearance:none;
}
form fieldset input[type="button"] {
background-color: #008dde;
border: none;
border-radius: 3px;
-moz-border-radius: 3px;
-webkit-border-radius: 3px;
color: #f4f4f4;
cursor: pointer;
font-family: 'Open Sans', Arial, Helvetica, sans-serif;
height: 50px;
text-transform: uppercase;
width: 280px;
-webkit-appearance:none;
}
form fieldset a {
color: #5a5656;
font-size: 10px;
}
</style>

