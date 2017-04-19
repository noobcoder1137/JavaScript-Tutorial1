
// api.openweathermap.org/data/2.5/weather?q={city name}
$(function(){
    var weatherAPIKey = '5864b5fe6e4f197803c8f8fec38c8394';
    $("#submit").click(function(){
        var zip = $('#zip');
        var results = $("#results");
        $.ajax({
            type: 'GET',
            url: 'http://api.openweathermap.org/data/2.5/weather?zip=' + zip.val() + '&APPID=' + weatherAPIKey +
            '&units=metric',
            success: function(response){
                var celsius = response.main.temp;
                var fahrenheit = Math.round(celsius * (9 / 5) + 32).toFixed(2);
                results.html('').removeClass();
                results.append('Celsius: ' + celsius +
                '<br>Fahrenheit: ' + fahrenheit );
                results.addClass('well well-lg').addClass('text-center');
                $('h1').html('Results for ' + zip.val());  
                zip.val('');
            },
            error: function(XMLHttpRequest, textStatus, errorThrown) { 
                results.html('').removeClass();
                results.append('Invalid Input!!! <br>' +
                               'Please enter a valid zip');
                results.addClass('alert alert-danger').addClass('text-center');
                zip.val('');
            }       
        });
    });
    
});