$('#change-color').on('click',()=>{
  $('#target').css('color','red');
});
$('#change-text').on('click',()=>{
  $('#target').text('HELLO!');
});
$('#fade-out').on('click',()=>{
  $('#target').fadeOut();
});
$('#fade-in').on('click',()=>{
  $('#target').fadeIn();
});