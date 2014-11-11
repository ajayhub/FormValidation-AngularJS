var app = angular.module("formValidate",[]);



//----------------
// after validation, display the form user details in a seperate page  in subscription/userdetails.html

// var app = angular.module("formValidate",['ngRoute']);
// app.config(function($routeProvider) {
//         $routeProvider

//             // route for the home page
//             .when('/validate', {
//                 templateUrl : 'Subscription/userdetails.html',
//                 controller  : 'validateController'
//             });
// };


// app.controller('validateController',['$scope','$http', function($scope, $http){

// }]);




// Validate Controller -  form validation
app.controller('validateController', ['$scope','$http', function($scope,$http) {
      $scope.submitted = false;

      $scope.signupForm = function() {  // after clicking the submit button

       if ($scope.signup_form.$valid) {
          // Submit the form details 
              
              // address of the user
          $scope.User_address={};   
          $scope.user_address = {
            "doorno": $scope.signup.doorno,
            "street": $scope.signup.street,
            "city": $scope.signup.city,
            "zipcode": $scope.signup.zipcode
           };

           // User - name, gender, email, contact details
           var user = {
                    "name":$scope.signup.name,
                    "gender":$scope.gender,
                    "email" : $scope.signup.email,
                    "contactno": $scope.signup.contactno,
                    "address" : [$scope.user_address]
                  };

          console.log(JSON.stringify(user)); //-------------------------------- to check the user detials

          var res = $http.post('', user);  // -------------------------------specfiy the loaction where you want to post the data
                  res.success(function(data, status, headers, config){
                    $scope.userdetails =  data;
                  });

          res.error(function(data, staus, headers, config){
                      alert(" failed");
                  });

          alert("form successfully submitted");  //------------------------------ form submitted
          // alert('form posted successfully -  '+ JSON.stringify(user));

          //     server to post the data
          //     $http({
          //     method: 'POST',
          //     url: '/post',
          //     data: "message=" + user,
          //     headers: {'Content-Type': 'application/x-www-form-urlencoded'}
          // });

          } else {
            $scope.signup_form.submitted = true;
            }
      };

}]);

