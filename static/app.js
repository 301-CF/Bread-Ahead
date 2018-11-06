function gramToPercent(grams, flour) {
  return +((grams / flour) * 100).toFixed(2);
}

function percentToGram(percent, flour) {
  return +((percent * flour) / 100).toFixed(2);
}

const masterBread = 1000;

// Water
$('#hydro-g').keyup(function () {
  let dynamicNumber = Number($(this).val());
  $("#hydro-p").val(gramToPercent(dynamicNumber, masterBread))
});

$('#hydro-p').keyup(function () {
  let dynamicNumber = Number($(this).val());
  $("#hydro-g").val(percentToGram(dynamicNumber, masterBread))
});


// Salt
$('#salt-g').keyup(function () {
  let dynamicNumber = Number($(this).val());
  $("#salt-p").val(gramToPercent(dynamicNumber, masterBread))
});

$('#salt-p').keyup(function () {
  let dynamicNumber = Number($(this).val());
  $("#salt-g").val(percentToGram(dynamicNumber, masterBread))
});

// Rise/Yeast
$('#rise-g').keyup(function () {
  let dynamicNumber = Number($(this).val());
  $("#rise-p").val(gramToPercent(dynamicNumber, masterBread))
});

$('#rise-p').keyup(function () {
  let dynamicNumber = Number($(this).val());
  $("#rise-g").val(percentToGram(dynamicNumber, masterBread));
});

$("#one-dough-total").keyup(function () {
  let singleDough = Number($(this).val());

  $("#one-flour-gram").val(singleDough);

  $("#one-hydro-g").val(percentToGram($("#hydro-p").val(), singleDough));

  $("#one-salt-g").val(percentToGram($("#salt-p").val(), singleDough));

  $("#one-rise-g").val(percentToGram($("#rise-p").val(), singleDough));

  $("#one-flour-percent").val(100);

  $("#one-hydro-p, #multi-hydro-p").val(gramToPercent($("#one-hydro-g").val(), singleDough));

  $("#one-salt-p, #multi-salt-p").val(gramToPercent($("#one-salt-g").val(), singleDough));

  $("#one-rise-p, #multi-rise-p").val(gramToPercent($("#one-rise-g").val(), singleDough));

});

$("#multi-dough-total").keyup(function () {
  let xDough = Number($(this).val());

  $("#multi-flour-g").val(+(xDough * $("#one-dough-total").val()).toFixed(2));

  $("#multi-hydro-g").val(+(xDough * $("#one-hydro-g").val()).toFixed(2));

  $("#multi-salt-g").val(+(xDough * $("#one-salt-g").val()).toFixed(2));

  $("#multi-rise-g").val(+(xDough * $("#one-rise-g").val()).toFixed(2));

  $("#multi-flour-percent").val(100);

});
