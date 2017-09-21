function takeorder(orderNumber) {
    console.log("Order number: " + orderNumber);

    deliverOrder(function () {
        console.log("Order number " + orderNumber + " delivered");
    });
}

function deliverOrder(callback) {
    setTimeout(callback, 5000);
}

takeorder(1);
takeorder(2);
takeorder(3);
takeorder(4);
takeorder(5);
takeorder(6);

