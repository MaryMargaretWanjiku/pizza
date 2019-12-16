$(document).ready(function () {
    $('#checkout').click(function (event) {
        event.preventDefault();
        var flavour = parseInt($("#flavours :selected").val())
        var size = parseInt($("#sizes :selected").val())
        var crust = parseInt($("#crusts :selected").val())
        var toppings = parseInt($("#toppings :selected").val())
        var number = parseInt($("#number").val())

        var total = flavour + size + crust + toppings;
        var grandTotal = total * number;

        $("ul#list").append(
            "<li>" + "Your pizza flavour is : " + $("#flavours option:selected").text() + "</li>" +
            "<li>" + "Your pizza size is : " + $("#sizes option:selected").text() + "</li>" +
            "<li>" + "Your pizza crust is : " + $("#crusts option:selected").text() + "</li>" +
            "<li>" + "Your pizza topping is : " + $("#toppings option:selected").text() + "</li>" +
            "<li>" + "Number of pizza ordered is : " + number + "</li>" +
            "<li>" + "Total amount to be paid is : Ksh" + grandTotal + "</li>");

    })
    $(".deliver").click(function () {
        var fields = prompt("Enter your address")
        prompt("Enter your name")
        prompt("Enter your location")
        alert("Your order will be delivered at" + fields)
    })
    $(".delivernot").click(function () {
        alert("Pick your order in our nearest shop")
    })
});