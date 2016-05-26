// The angular app.
var app = angular.module('layoutApp', []);

// The layout controller.
app.controller('LayoutController', function LayoutController($scope) {

    // The object with the state of the layout.
    $scope.layout = {
        sidebar: {
            collapsed: false
        },
        panel: {
            left: {
                name: 'left',
                expanded: true,
                collapsed: false
            },
            right: {
                name: 'right',
                expanded: false,
                collapsed: true
            }
        }
    };

    $scope.functions = {

    };


    // A small trick to block transitions on page load.
    // Because we use a renderer we are a little late when rendering and
    // because of that transitions kick in on initial page load.
    setTimeout(function () {
        angular.element(document).find('body').addClass('transitions-enabled');
    }, 0);
});