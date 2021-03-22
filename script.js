console.log("Test")

// set endpoint and your access key
var access_key = '2e078988a7a23a4ead312ccefe24fb3a';
var query = 'Hello my friend, how are you?';

// AJAX call
$.ajax({
    url: 'http://api.languagelayer.com/detect?access_key=2e078988a7a23a4ead312ccefe24fb3a' + access_key + '&query=' + encodeURIComponent(query),
    dataType: 'jsonp',
    success: function(json) {

    // Access and use your preferred validation result objects
    console.log(json.success);
                
    }
});
