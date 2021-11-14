{
  let payment = function () {
    let donateForm = $('#donate-form');

    donateForm.submit(function (e) {
      e.preventDefault();
      $.ajax({
        type: 'post',
        url: '/donate/confirm',
        data: donateForm.serialize(),
        success: function (data) {
          console.log(data);

          var options = {
            key: 'rzp_test_hrFJLo653yF6jU', // Enter the Key ID generated from the Dashboard
            amount: `${data.data.order.amount}`, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
            currency: 'INR',
            name: 'Gst Donation',
            description: 'Test Transaction',
            image: `/images/GST.png`,
            order_id: `${data.data.order.id}`, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
            callback_url: '/donate/thankyou',
            theme: {
              color: '#3399cc',
            },
          };
          $('#payment-container').append(
            ` <h1> You are Going to pay ${data.data.order.amount} Rs <h1><br><button class = "btn btn-primary" id ="pay-btn"> Confirm </button> `
          );
          var rzp1 = new Razorpay(options);
          document.getElementById('pay-btn').onclick = function (e) {
            rzp1.open();
            e.preventDefault();
          };
        },
        error: function (error) {
          console.log(error.responseText);
        },
      });
    });
  };
  payment();
}
