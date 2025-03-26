angular.module('sportsShopApp', [])
.controller('MainController', function($scope) {
    
    $scope.products = [
        {
            id: 1,
            name: 'Basketball',
            price: '₱ 3550',
            image: 'https://images.unsplash.com/photo-1494199505258-5f95387f933c?w=500&h=500&fit=crop'
        },
        {
            id: 2,
            name: 'Football',
            price: '₱ 999.99',
            image: 'https://images.unsplash.com/photo-1552318965-6e6be7484ada?w=500&h=500&fit=crop'
        },
        {
            id: 3,
            name: 'Running Shoes',
            price: '₱ 6500',
            image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&h=500&fit=crop'
        },
        {
            id: 4,
            name: 'Tennis Racket',
            price: '₱ 1500',
            image: 'https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?w=500&h=500&fit=crop'
        }
    ];

   
    $scope.cart = [];
    $scope.isCartOpen = false;
    $scope.isAccountOpen = false;
    $scope.isCheckoutOpen = false;

    
    $scope.loginData = {
        email: '',
        password: ''
    };

    $scope.checkoutData = {
        fullName: '',
        email: '',
        address: '',
        phone: ''
    };

    
    $scope.addToCart = function(product) {
        var existingItem = $scope.cart.find(item => item.id === product.id);
        if (existingItem) {
            existingItem.quantity++;
        } else {
            $scope.cart.push({
                ...product,
                quantity: 1
            });
        }
    };

    $scope.removeFromCart = function(item) {
        var index = $scope.cart.indexOf(item);
        if (index > -1) {
            $scope.cart.splice(index, 1);
        }
    };

    $scope.cartCount = function() {
        return $scope.cart.reduce((sum, item) => sum + item.quantity, 0);
    };

    $scope.cartTotal = function() {
        return $scope.cart.reduce((sum, item) => {
            var price = parseFloat(item.price.replace('₱', '').replace(',', ''));
            return sum + (price * item.quantity);
        }, 0).toFixed(2);
    };

    
    $scope.toggleCart = function() {
        $scope.isCartOpen = !$scope.isCartOpen;
        $scope.isAccountOpen = false;
        $scope.isCheckoutOpen = false;
    };

    $scope.toggleAccount = function() {
        $scope.isAccountOpen = !$scope.isAccountOpen;
        $scope.isCartOpen = false;
        $scope.isCheckoutOpen = false;
    };

    $scope.toggleCheckout = function() {
        $scope.isCheckoutOpen = !$scope.isCheckoutOpen;
        $scope.isCartOpen = false;
        $scope.isAccountOpen = false;
    };

    
    $scope.login = function() {
        alert('Login successful!');
        $scope.isAccountOpen = false;
        $scope.loginData = { email: '', password: '' };
    };

    $scope.proceedToCheckout = function() {
        $scope.toggleCheckout();
    };

    $scope.placeOrder = function() {
        alert('Order placed successfully!');
        $scope.cart = [];
        $scope.isCheckoutOpen = false;
        $scope.checkoutData = {
            fullName: '',
            email: '',
            address: '',
            phone: ''
        };
    };
});
