// $(document).ready(function () {
//     $("#checkout").submit(function (event) {
//         // var flavour = $("#flavours :selected").val()
//         // var size = $("#sizes :selected").val()
//         // var crust = $("#crusts :selected").val()
//         // var toppings = $("#toppings :selected").val()
//         // var number = $("#number").val()

//         // alert(flavour)

        function getFlavour() {
            var flavour = document.getElementById("flavours").value;
            return parseInt(flavour);
      
        }
      
        function getSize(){
            var size = document.getElementById("sizes").value;
            return parseInt(size);
        }
      
        function getCrust() {
            var  crust = document.getElementById("crusts").value;
            return parseInt(crust);
        }
      
        function getToppings() {
            var topping = document.getElementById("toppings").value;
            return parseInt(topping);
        }
      
        function getQuantity() {
            var quantity = document.getElementById("number").value;
            return parseInt(quantity)
        }
      
      
        function getTotal() {
            var totals  = (getFlavour() + getSize() + getCrust() + getToppings()) * getQuantity()
            if (confirm ("You have requested for" + getQuantity("") + " pizzas" + " with" + getToppings("") + " and " + getCrust("") + " for Kshs." + (totals) + "" + " Would you like a delivery")) {
                prompt("Enter Your Name")
                prompt("Enter your phone Number")
                prompt("Enter your location")
            } else {
              return;
            }
            alert("Your order will be delivered. Delivery fee is Ksh.50")
      
        }
//     })
// })


  