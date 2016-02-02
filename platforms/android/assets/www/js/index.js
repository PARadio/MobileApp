$( document ).on( "pageinit", "#pageone", function() {
    $( document ).on( "swipeleft swiperight", "#pageone", function( e ) {
        // We check if there is no open panel on the page because otherwise
        // a swipe to close the left panel would also open the right panel (and v.v.).
        // We do this by checking the data that the framework stores on the page element (panel: open).
        if ( $.mobile.activePage.jqmData( "panel" ) !== "open" ) {
            if ( e.type === "swiperight" ) {
                $( "#myPanel" ).panel( "open" );
            }
        }
    });
});

function swapPage(page){
    $(".pages").hide();
    $("#" + page).show();
    $("#myPanel").panel("close");
}

function toggleFooter(){
    if($("#footer").css("height") == "0px"){
        $("#footer").animate({height:"15%"}, 500);
    }
    else{
        $("#footer").animate({height:"0px"}, 500);
    }
}

function loadDataTest(){
    jQuery.getJSON("testData/items.json", function(data){
       var obs = data.obs;
       console.log(obs[0].title);
    });
}

function testPage(){
    $.mobile.changePage("#pagetwo", {transition:"slide"});
}
function backToHome(){
    $.mobile.changePage("#pageone", {transition:"slide", reverse:true});
}

function localTest(){
    localStorage.setItem("testItem", $("#testInput").val());
}


$(function(){
    
    //testing local storage:
    $("#localP").html(localStorage.getItem("testItem"));
    
    //Loading main page content:
    jQuery.getJSON("testData/items.json", function(data){
        
        var obsList = data.obs;
        
        for(var i=0; i<obsList.length; i++){
            $("#homePage").html($("#homePage").html() + "<div class='itemDivs'> <img class='logo' src='img/logo.png'/><center><p class='title'>" + obsList[i].title + "</p></center><center><p class='artist'>" + obsList[i].artist +"</p></center></div>");    
            //Styling the right height:
            var theDivWidth = $(".itemDivs").css("width");
            var picHeight = theDivWidth.substring(0, theDivWidth.length-2);
            picHeight = (parseInt(picHeight) * 3) / 5;
            picHeight = picHeight.toString() + "px";
            
            var picMargin = (parseInt(theDivWidth.substring(0, theDivWidth.length-2)/5).toString() + "px");
            
            $(".itemDivs").css("height", theDivWidth);
            $(".logo").css("height", picHeight);
            $(".logo").css("margin-left", picMargin);
            $(".logo").css("margin-top", picMargin);
        }
        
    });
    
    var easterCount = 0;
    
    //Removes the bullshit parent div the input field got    
    $("#searchInp").closest('div').remove();
    
    //Hides pages
        $(".pages").hide();
        $("#homePage").show();

    
    $("html").click(function(event){
        if(event.target.id == "myHeader"){
            easterCount += 1;
            if(easterCount == 10){
                //Easter Egg Here:
                if($("#myHeader").html()[0] == "P"){
                    $("#myHeaderBar").css("background-color", "blue");
                    $("#myHeader").html("Londonderry Radio")
                    $("#sideMenuLink").css("background-color", "blue");
                    $("#myHeaderBar").css("border", "blue");
                }
                else if($("#myHeader").html()[0] == "L"){
                    $("#myHeaderBar").css("background-color", "blue");
                    $("#myHeader").html("HMS Radio")
                    $("#sideMenuLink").css("background-color", "blue");
                    $("#myHeaderBar").css("border", "solid #FFD700 2px");
                    $("#myHeader").css("color", "#FFD700");
                    $("#sideMenuButton").css("color", "#FFD700");
                }
                else if($("#myHeader").html()[2] == "S"){
                    $("#myHeaderBar").css("background-color", "#C90016");
                    $("#myHeader").html("Harvard Radio")
                    $("#sideMenuLink").css("background-color", "#C90016");
                    $("#myHeaderBar").css("border", "solid #C90016 2px");
                    $("#myHeader").css("color", "white");
                    $("#sideMenuButton").css("color", "white");
                }
                else if($("#myHeader").html()[3] == "v"){
                    $("#myHeaderBar").css("background-color", "#458B00");
                    $("#myHeader").html("Kush Radio")
                    $("#sideMenuLink").css("background-color", "#458B00");
                    $("#myHeaderBar").css("border", "solid #458B00 2px");
                    $("#myHeader").css("color", "white");
                    $("#sideMenuButton").css("color", "white");
                }
                else if($("#myHeader").html()[0] == "K"){
                    $("#myHeaderBar").css("background-color", "#EDC233");
                    $("#myHeader").html("Batman Radio <img src='lib/images/batman.png' id='bat'>")
                    $("#sideMenuLink").css("background-color", "#EDC233");
                    $("#myHeaderBar").css("border", "solid black 2px");
                    $("#myHeader").css("color", "black");
                    $("#sideMenuButton").css("color", "black");
                    $("#bat").css("height", "15px");
                    $("#bat").css("margin-left", "20px");
                    $("#bat").css("margin-top", "10px");
                }
                
                easterCount = 0;
            }
        }
        
        else{
            easterCount = 0;
        }
    });
    
    
    //Temporary Testing:

    
});