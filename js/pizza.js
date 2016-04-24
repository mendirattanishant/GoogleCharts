$('#build').click(function() {
    if (Modernizr.localstorage) {
        allVals = [];
        $("input:checked").each(function() {
            console.log($(this).attr('name'));
            console.log($(this).val());
            allVals.push([$(this).attr('name'), parseInt($(this).val())]);
            localStorage.setItem($(this).attr('name'), parseInt($(this).val()));
        });

        //console.log(JSON.stringify(allVals));
        localStorage.setItem("toppings", JSON.stringify(allVals));
        $(location).attr('href', 'pizzachart.html');
    } else {
        alert("The browser does not support localStorage");
    }

});


$('#setCheeseSauce').click(function() {
    if (Modernizr.localstorage) {
        allVals = [];
        $("input:checked").each(function() {
            console.log($(this).attr('name'));
            console.log($(this).val());
            localStorage.setItem($(this).attr('name'), $(this).val());
        });

        localStorage.setItem("cheesesauce", JSON.stringify(allVals));
    } else {
        alert("The browser does not support localStorage");
    }

});