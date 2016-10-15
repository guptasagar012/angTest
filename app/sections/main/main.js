(function() {
	angular.module('mobcox', [ 'ui.router', 'oc.lazyLoad', 'ui.bootstrap',
			'blockUI', 'smart-table', 'angular-cache', 'ngResource',
			"ngSanitize", "ngRoute", 'highcharts-ng', 'localytics.directives',
			'dateRangePicker', 'uiSwitch', 'ui.select',
			'ui.bootstrap.datetimepicker', 'xeditable', 'angular-img-cropper',
			'filters', 'uiGmapgoogle-maps' ])
})();

function config($stateProvider, $urlRouterProvider, $ocLazyLoadProvider,
		uiGmapGoogleMapApiProvider) {
	// Tell blockUI not to mark the body element as the main block scope.
	uiGmapGoogleMapApiProvider.configure({
		// key: 'AIzaSyC2uhT_tTDeGXPPZyRp_C2eql2YxbLvUzc',
		v : '3.20', // defaults to latest 3.X anyhow
		libraries : 'places' // Required for SearchBox.
	});

	$urlRouterProvider.otherwise("/dashboard");
	$ocLazyLoadProvider.config({
		debug : false
	});
	templateUrl:
			"res/views/common/content.html",
			$stateProvider
					.state(
							'index',
							{
								abstract : true,
								templateUrl : "res/views/common/content.html"
							})
					
							.state(
									'index.dasdboard',
									{
										
										url : "/dashboard",
										controller : "dashboardCtrl",
										templateUrl : "res/views/dashboard/dashboard.html"
									})
									
									
									.state(
									'index.departments',
									{
										
										url : "/department",
										templateUrl : "res/views/department/department_template.html"
									})
									.state(
									'index.departments.list',
									{
										
										url : "/list",
										templateUrl : "res/views/department/department_list_template.html"
									})
									
										.state(
									'index.departments.detail',
									{
										url : "/detail/:department",
										controller : "departmentDetailCtrl",
										templateUrl : "res/views/department/department_detail_template.html"
									})
									
									.state(
									'index.appointments',
									{
										url : "/appointment",
										controller : "appointmentCtrl",
										templateUrl : "res/views/appointment/appointment_template.html"
									})
							
									.state(
									'index.appointments.detail',
									{
										url : "/appointment/detail",
										controller : "appointmentCtrl",
										templateUrl : "res/views/dashboard/dashboard.html"
									})
}
angular.module('mobcox').config(config).run(function($rootScope, $state) {
	$rootScope.$state = $state;
	$rootScope.globalVariable = contextPath;
});
// angular.module('mobcox').run( function($rootScope,
// $location,SharedProperties) {
// $rootScope.$watch(function() {
// return $location.path();
// },
// function(a){
// SharedProperties.setCurrentNav('OFFERS');
// console.log('url has changed: ' + a);
// });
// });

angular.module('mobcox').run(function($rootScope, $route, $location) {
	$rootScope.$on('$locationChangeSuccess', function() {
		$rootScope.actualLocation = $location.path();
	});

	$rootScope.$watch(function() {
		return $location.path()
	}, function(newLocation, oldLocation) {
		if ($rootScope.actualLocation === newLocation) {
			$rootScope.$broadcast('back-pressed');
		}
	});
});
angular.module('mobcox').run(function(editableOptions) {
	editableOptions.theme = 'bs3'; // bootstrap3 theme. Can be also 'bs2',
	// 'default'
});

angular.module('mobcox').config(function($httpProvider) {
	$httpProvider.interceptors.push('Interceptor');
});

angular.module('mobcox').config(function(blockUIConfig) {
	// Tell blockUI not to mark the body element as the main block scope.
	blockUIConfig.autoInjectBodyBlock = false;
});

angular.module('mobcox').config(function(CacheFactoryProvider) {
	angular.extend(CacheFactoryProvider.defaults, {
		maxAge : 989 * 60 * 1000,
		deleteOnExpire : 'passive',
		storageMode : 'localStorage'
	});

});

angular
		.module('mobcox')
		.factory(
				'Interceptor',
				function($rootScope, $window, $location) {

					var Interceptor = {
						responseError : function(response) {
							$rootScope.status = response.status;
							$rootScope.online = false;
							return response;
						},
						response : function(response) {
							if (response.data.rc != '500') {
								if (response.data.rc == '90003'
										|| response.data.rc == '99999') {
									$location.path("/error/pagenotexist");
								}
								if (typeof response.data == 'string'
										&& response.data
												.indexOf("MobCox | Login") > -1) {
									$window.location.reload();
								} else {
									$rootScope.status = response.status;
									$rootScope.online = true;
									return response;
								}
							} else {
								$location.path("/secure/notauthorised");
							}
						}
					};
					return Interceptor;

				});

$(document).ready(function() {

	// Full height of sidebar
	function fix_height() {
		var heightWithoutNavbar = $("body > #wrapper").height() - 61;
		$(".sidebard-panel").css("min-height", heightWithoutNavbar + "px");
		var windowHeight = $(window).height();
		$("#page-wrapper").css("min-height", windowHeight + "px");
	}
	$(window).bind("load resize click scroll", function() {
		if (!$("body").hasClass("body-small")) {
			fix_height();
		}
	})
	fix_height();

});
// Minimalize menu when screen is less than 768px
$(function() {
	$(window).bind("load resize", function() {
		if ($(this).width() < 769) {
			$('body').addClass('body-small')
		} else {
			$('body').removeClass('body-small')
		}
	})
})