var windowheight = $(window).height() - $("#header").innerHeight();
windowheight-= 13;
$(".editor").height(windowheight + "px");

//init call
$(window).resize( function(){
     $(".PanelName").width(($(window).width()/length) -1 + "px");
    $(".editor").width(($(window).width()/length) -1 + "px");
})

$("#htmlPanel").html("<!DOCTYPE html>\n<html>\n\t<head>\n\t\t<title>My doc<\/title>\n\t</head>\n\n\t<body>\n\t\t<p id=\"test\">Click me</p>\n\t</body>\n</html>");


$("#cssPanel").html("p\t{\n\tbackground-color : blue;\n\tcolor : white;\n\tfont-size:25px;\n\ttext-align : center;\n}\n\np:hover\t{\nbackground-color:pink;\n}");

$("#jsPanel").html("document.getElementById(\"test\").onclick = function(){\ndocument.getElementById(\"test\").innerHTML = \"You have clicked me\"}");
$(".editor").hide();
        $(".PanelName").hide();
        $(".editor").removeClass("shown");

$(".toggleButton").click(function () {
    $(this).toggleClass("normal");
    $(this).toggleClass("selected");
        var panelId = $(this).attr("id");
    if ($(this).hasClass("selected")) {
        $('#' + panelId + "Panel").show();
        $('#' + panelId + "PanelName").show();
        $('#' + panelId + "PanelName").addClass("shown");
    } else {
        $('#' + panelId + "Panel").hide();
        $('#' + panelId + "PanelName").hide();
        $('#' + panelId + "PanelName").removeClass("shown");
    }
    var length = $(".shown").length;
  
    $(".PanelName").width(($(window).width()/length) -1 + "px");
    $(".editor").width(($(window).width()/length) -1 + "px");

});

$("#runCode").click(function () {
    var htmlCode = $("#htmlPanel").val();
    var cssCode = $("#cssPanel").val();
    var jsCode = $("#jsPanel").val();
    var finalCode = "";

    console.log(document.cookie);
    finalCode += htmlCode;
    document.cookie = "username=" +htmlCode+"; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    finalCode += "<style type=\"text/css\" >" + cssCode + "</style>";
    // finalCode += "<script type=\"text/javascript\">" + jsCode +"</script>"
    $("#outputPanel").contents().find("html").html(finalCode);
    
    document.getElementById("outputPanel").contentWindow.eval($("#jsPanel").val());
    
    
    
    
   

});
