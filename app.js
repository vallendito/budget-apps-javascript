// BUDGET CONTROLLER

var budgetController = (function () {


})();

// UI CONTROLLER
var UIController = (function () {

    //some code

})();


// GLobal APPS Controller
var controller = (function (budgetCtrl, UICtrl) {

    var ctrlAddItem = function () {
        //    1. Get the filed input data

        //    2. Add the item to the budget controller

        //    3. Add the item to the UI

        //    4. Calculate The Budget

        //    5. Display the Budget on the UI

        console.log('Its Works')
    };

    document.querySelector('.add__btn').addEventListener('click', ctrlAddItem);

    document.addEventListener('keypress', function (event) {

        if (event.keyCode === 13 || event.which === 13) {
            ctrlAddItem();

        }

    });

})(budgetController, UIController);

