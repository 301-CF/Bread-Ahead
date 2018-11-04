
function gramToPercent(grams){
  return  +((grams / 1000) * 100).toFixed(2);
}

function percentToGram(percent){
  return  +((percent * 1000) / 100).toFixed(2);
}


// Water
$('.hydro-g').keyup(function(){
  let dynamicNumber = Number($(this).val());
  $("#hydro-p").val(gramToPercent(dynamicNumber))
});

 $('#hydro-p').keyup(function(){
   let dynamicNumber = Number($(this).val());
   $(".hydro-g").val(percentToGram(dynamicNumber))
 });


 // Salt
 $('.salt-g').keyup(function(){
   let dynamicNumber = Number($(this).val());
   $("#salt-p").val(gramToPercent(dynamicNumber))
 });

 $('#salt-p').keyup(function(){
   let dynamicNumber = Number($(this).val());
   $(".salt-g").val(percentToGram(dynamicNumber))
 });

 // Rise/Yeast
 $('#rise-g').keyup(function(){
   let dynamicNumber = Number($(this).val());
   $("#rise-p").val(gramToPercent(dynamicNumber))
 });

 $('#rise-p').keyup(function(){
   let dynamicNumber = Number($(this).val());
   $("#rise-g").val(percentToGram(dynamicNumber));
 });

