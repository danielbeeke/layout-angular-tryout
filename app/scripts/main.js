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
        toggleSidebar: function () {
            $scope.layout.sidebar.collapsed = !$scope.layout.sidebar.collapsed;
        },
        setPanelLeftBig: function () {
            $scope.functions.setPanelBig('left');
        },
        setPanelRightBig: function () {
            $scope.functions.setPanelBig('right');
        },
        setPanelsBothMiddle: function () {
            $scope.layout.panel.left = {
                expanded: false,
                collapsed: false
            };

            $scope.layout.panel.right = {
                expanded: false,
                collapsed: false
            };
        },
        saveState: function () {
            localStorage.setItem('layoutState', JSON.stringify($scope.layout));
        },
        restoreState: function () {
            var oldState = JSON.parse(localStorage.getItem('layoutState'));
            if (oldState) {
                $scope.layout = oldState;
            }
        },
        bothPanelsAreMedium: function () {
            var a = $scope.layout.panel.left.expanded;
            var b = $scope.layout.panel.right.expanded;

            return a == b && a == false;
        },
        setPanelBig: function (panelName) {
            var oppositePanelName = panelName == 'left' ? 'right' : 'left';

            $scope.layout.panel[panelName] = {
                expanded: true,
                collapsed: false
            };

            $scope.layout.panel[oppositePanelName] = {
                expanded: false,
                collapsed: true
            };
        }
    };

    // On initial load restore the state.
    $scope.functions.restoreState();

    // A small trick to block transitions on page load.
    // Because we use a renderer we are a little late when rendering and
    // because of that transitions kick in on initial page load.
    setTimeout(function () {
        angular.element(document).find('body').addClass('transitions-enabled');
    }, 0);
});