
var ctx = document.getElementById("myChart").getContext('2d');

var label = [];
for (var i = 0; i<20; i++){
    label[i] = title[i];
}


setTimeout(function() {
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            //여기서 라벨에는 영화제목 넣어주고, data에 카운트 넣어주고, background컬러랑 테두리는 일일이 넣어주어야 됩니다.
            labels: [title[0], title[1],title[2],title[3],title[4],title[5],title[6],title[7],title[8],
                title[9],title[10],title[11],title[12],title[13],title[14],title[15],title[16],title[17],title[18],title[19],title[20]],
            datasets: [{
                label: '# of Votes',
                data: [count[0], count[1],count[2],count[3],count[4],count[5],count[6],count[7],count[8],
                    count[9],count[10],count[11],count[12],count[13],count[14],count[15],count[16],count[17],count[18],count[19],count[20]],
                    backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                     'rgba(255, 99, 132, 0.2)',

                ],
                borderColor: [
                    'rgba(255,99,132,1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                    'rgba(255,99,132,1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                    'rgba(255,99,132,1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                    'rgba(255, 99, 132, 1)',


                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero:true
                    }
                }]
            }
        }
    });

}, 3000); //json파일을 읽기 전에 실행이 되버리면 내용이 나오지 않아서 시간타임을 주었습니다.
