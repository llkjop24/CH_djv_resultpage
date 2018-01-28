
var movies = [];
 ch = [];
 title =[];
 count=[];


$.getJSON('data.json', function (data) {
    movies = data;
    for(var i=0; i<movies.length ; i++){
        ch[i] = movies[i].채널;
        title[i] = movies[i].제목;
        count[i] = movies[i].횟수;
    ;}
});






