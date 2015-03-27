$("#PictureBtn").click(function(){
    var userName = $("#username").val().toLowerCase();
    console.log(userName);
    var photoHTML = "<ul class='flex-container'>"
$.getJSON("https://api.instagram.com/v1/users/search?q=" + userName + "&access_token=1726136215.a0b9446.733d63f25cd04b6fa0d0f953bf73b299&callback=?", function(instagram){
    if(instagram.meta.code == 200 && instagram.data.length > 0)
    {
    $.each(instagram.data, function(i, data){
    if(userName === data.username)
    {

    $.getJSON("https://api.instagram.com/v1/users/" + data.id + "/media/recent/?access_token=1726136215.a0b9446.733d63f25cd04b6fa0d0f953bf73b299&count=50&callback=?", function(userFeedObj){
        if(userFeedObj.meta.code == 200)
        {
            
            $.each(userFeedObj.data, function(i, userFeed)
            {
                photoHTML += "<li><img src=" + userFeed.images.low_resolution.url + "></li>";
                
            })
            $("#StatBtn").removeClass("button active");
            $("#StatBtn").addClass("button orange");
            $("#PictureBtn").addClass("button active")
            photoHTML += "</ul>"
            $("#photoList").html(photoHTML);
            $("#user").html(data.username);
            }
        else
        {
            alert("Användarens profil är privat!");
        }
    })
    }
})
}
else
{
    alert("Fanns ingen användare vid det namnet!");
}
})
})


$("#StatBtn").click(function(){
    var userName = $("#username").val().toLowerCase();
    var photoHTML = "<div class='center-text'>"
    var likescount = 0;
    var followers = 0;
    var likesbild = 0;
    $.getJSON("https://api.instagram.com/v1/users/search?q=" + userName + "&access_token=1726136215.a0b9446.733d63f25cd04b6fa0d0f953bf73b299&callback=?", function(instagram){
        console.log(instagram);
    if(instagram.meta.code == 200 && instagram.data.length > 0)
    {
        
    $.each(instagram.data, function(i, data){
    if(userName === data.username)
    {
        
    $.getJSON("https://api.instagram.com/v1/users/" + data.id + "/media/recent/?access_token=1726136215.a0b9446.733d63f25cd04b6fa0d0f953bf73b299&count=33&callback=?", function(userFeedObj){

        if(userFeedObj.meta.code == 200)
        {
            $.each(userFeedObj.data, function(i, userFeed)
            {
                likescount += userFeed.likes.count;
                
            })

            if(userFeedObj.data.length < 1)
            {
                likesbild = 0;
            }
            else{
                likesbild = Math.floor(likescount/userFeedObj.data.length);
            }
            
$.getJSON("https://api.instagram.com/v1/users/" + data.id + "/?access_token=1726136215.a0b9446.733d63f25cd04b6fa0d0f953bf73b299&callback=?", function(userObj){
    followers += userObj.data.counts.followed_by;
            $("#PictureBtn").removeClass("button active");
            $("#PictureBtn").addClass("button orange");
            $("#StatBtn").addClass("button active");
            photoHTML += "<h2>Namn: <span class='orangetxt'>" + data.full_name + "</span></h2><br> <img class='instaprofil' src=" + data.profile_picture + "><br> <h2>Antal bilder: <span class='orangetxt'>" + userFeedObj.data.length + "</span></h2> <br> <h2>Totala likes: <span class='orangetxt'>" + likescount +  "</span></h2> <br> <h2>Ungefärligt antal likes per bild: <span class='orangetxt'>" + likesbild + "</span></h2> <br> <h2>Antal följare: <span class='orangetxt'>" + followers + "</span></h2>";
            photoHTML +="</div>"
            $("#photoList").html(photoHTML);
            $("#user").html(data.username);
    })
}
        else
        {
            alert("Användarens profil är privat!");
        }
    })
    }
              
})
    }
        else
        {
            alert("Fanns ingen användare vid det namnet!");
        }
})
})
//ACCESS-TOKEN: 1726136215.a0b9446.733d63f25cd04b6fa0d0f953bf73b299