$(document).ready(function() {
  // All jQuery/JavaScript code will go in here
  console.log('jquery ready')

  // Generate keypair
  $('.keypair-btn--generate').on('click', function(event) {
    event.preventDefault();
    console.log('Generate Key Pair button clicked');
    $.ajax({
      method: 'GET',
      url: '/keypair/generate'
    }).done(function(data) {
      console.log('Generated key pair ', data);
      $('.keypair-generated').text('Key Pair generated!');
    })
  });

  // Retrieve keypair
  $('.keypair-btn--retrieve').on('click', function(event) {
    event.preventDefault();
    console.log('Retrieve Key Pair button clicked');
    $.ajax({
      method: 'GET',
      url: '/keypair/retrieve'
    }).done(function(data) {
      console.log('Key pair(s) retrieved', data);
      if (data.length <= 0) {
        $('.keypair-retrieved').html('No keys retrieved')
      } else {
        data.forEach(function(datum) {
          const keyItem = document.createElement('li');
          $(keyItem).text(datum.key);
          $('.keypair-public').append(keyItem);
        });
      }
    });
  });

});
