//Creating variable that contains four different pictures
var myKitties = [{
    title: "First Project",
    pic: "http://blog.timesunion.com/fiberarts/files/2011/03/coming-soon.jpg"
}, {
    title: "Second Project",
    pic: "http://blog.timesunion.com/fiberarts/files/2011/03/coming-soon.jpg"
}, {
    title: "Third Project",
    pic: "http://blog.timesunion.com/fiberarts/files/2011/03/coming-soon.jpg"
}, {
    title: "Fourth Project",
    pic: "http://blog.timesunion.com/fiberarts/files/2011/03/coming-soon.jpg"
}];
//Code for different pictures before read function ends here

$(document).ready(function() {
    // code for submit button contact field starts here 
    $("#textarea").css("background-color", "red");
    $("#submitbutton").on("click", function() {
        console.log("clicked");
        var comment = $("#textarea").val(); //val allows you to capture the input from the textarea 
        console.log(comment);
        $("#visible-comment").html(comment).css("text-transform", "uppercase");
        return false;
    });
    // code for submit button contact field ends here 
    //code for key count starts here  
    $("#textarea").on("keyup", function() {
        console.log("keyup happened");
        var charCount = $("#textarea").val().length;
        console.log(charCount);
        $("#char-count").html(charCount);
        if (charCount > 50) {
            $("#char-count").css("color", "red");
        } else {
            $("#char-count").css("color", "white");
        };
    });
    //end code for key count

    //code for skill table starts here 
    var rows = $(".my-row");
    console.log(rows)
    for (var i = 0; i < rows.length; ++i) {
        if (i % 2 === 0) {
            $(rows[i]).css("background-color", "white");
        } else {
            $(rows[i]).css("background-color", "grey");
        };
    };
    //code for table ends here
    //code for object with images starts here 

    for (var i = 0; i < myKitties.length; ++i) {
        $("#" + i).css("background-image", "url(" + myKitties[i].pic + ")");
    };

    $(".image").mouseenter(function() {
        console.log(this);
        $(this).html("<p class='info'><span class='proj-title'>Title:</span> " + myKitties[this.id].title + "</p>");
    }).mouseleave(function() {
        $("p.info").html("");
    });
    //code for object with images ends here
    //code for initialize function for Gmaps starts here 
    function initialize() {
        var mapOptions = {
            center: new google.maps.LatLng(52.49185, 13.42727, 17),
            zoom: 8
        };
        var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
        var marker = new google.maps.Marker({
            position: map.getCenter(),
            map: map,
            title: 'Click to zoom'
        });
        google.maps.event.addListener(marker, 'click', function() {
            map.setZoom(15);
            map.setCenter(marker.getPosition());
        });
    };
    google.maps.event.addDomListener(window, 'load', initialize);
     //code for initialize function for Gmaps ends here 
});