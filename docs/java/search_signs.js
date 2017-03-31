$(document).ready(function(){
 $.ajaxSetup({ cache: false });
 $('#search').keyup(function(){
    if (!this.value.trim()) {
            $('#result').html('');
            return;
        }
  $('#result').html('');
  $('#state').val('');
  var searchField = $('#search').val();
  var expression = new RegExp(searchField, "i");
  $.getJSON('../data/data.json', function(data) {
   $.each(data, function(key, value){
    if (value.name.search(expression) != -1 || value.link.search(expression) != -1)
    {
     $('#result').append('<li class="list-group-item link-class"><img src="'+value.image+'" height="40" width="40" class="img-thumbnail" /> '+value.name+' </li>');
    }
   });   
  });
 });
 
 $('#result').on('click', 'li', function() {
  var click_text = $(this).text().split('|');
  $('#search').val($.trim(click_text[0]));
  $("#result").html('');
 });
});
