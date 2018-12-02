function gramToPercent(grams, flour) {
    return +((grams / flour) * 100).toFixed(2);
}

function percentToGram(percent, flour) {
    return +((percent * flour) / 100).toFixed(2);
}

const masterBread = 1000;
let hydro = 0;
let salt = 0;
let rise = 0;


function updateTotal(hydro, salt, rise) {
    hydro = Number(document.getElementById('hydro-g').value);
    salt = Number(document.getElementById('salt-g').value);
    rise = Number(document.getElementById('rise-g').value);
    let gramTotal = hydro + salt + rise + masterBread;

    if (gramTotal <= 10000) {
        return document.getElementById('master-total').innerHTML = (`TOTAL ${gramTotal}g`);

    } else if (gramTotal <= 1000000) {
        return document.getElementById('master-total').innerHTML = (`TOTAL ${gramTotal / 1000}kg`);

    } else if (gramTotal > 1000000 && gramTotal < 100000000) {
        return document.getElementById('master-total').innerHTML = (`TOTAL ${gramTotal / 1000000}Mg`);

    } else {
        return document.getElementById('master-total').innerHTML = (`WOAH THERE!`);
    }
}

// Hydration
$('#hydro-g').on('input', function() {
    $("#hydro-p").val(gramToPercent(Number($(this).val()), masterBread))
});

$('#hydro-p').on('input', function() {
    $("#hydro-g").val(percentToGram(Number($(this).val()), masterBread))
});


// Salt
$('#salt-g').on('input', function() {
    $("#salt-p").val(gramToPercent(Number($(this).val()), masterBread))
});

$('#salt-p').on('input', function() {
    $("#salt-g").val(percentToGram(Number($(this).val()), masterBread))
});

// Rise/Yeast
$('#rise-g').on('input', function() {
    $("#rise-p").val(gramToPercent(Number($(this).val()), masterBread))
});

$('#rise-p').on('input', function() {
    $("#rise-g").val(percentToGram(Number($(this).val()), masterBread));
});
