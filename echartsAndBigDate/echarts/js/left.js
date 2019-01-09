(function(){
    var myChart = echarts.init(document.getElementById("small"));
    option = {
        toolbox: {
            show : true
        },
        calculable : true,
        series : [
            {
                name:'访问来源',
                type:'pie',
                radius : ['50%', '70%'],
                itemStyle : {
                    normal : {
                        label : {
                            show : false
                        },
                        labelLine : {
                            show : false
                        }
                    }
                },
                data:[
                    {value:335},
                    {value:1548}
                ]
            }
        ]
    };
    myChart.setOption(option);
    var myChart = echarts.init(document.getElementById('main'));
    var option = {
        xAxis: {
            type: 'category',
            show:false
        },
        yAxis: {
            type: 'value',
            show:false
        },
        series: [{
            data: [82, 93, 90, 93, 99, 83,92,89,99,80],
            type: 'line'
        }
        ]
    };
    myChart.setOption(option);
    var myChart = echarts.init(document.getElementById("small1"));
    option = {
        toolbox: {
            show : true
        },
        calculable : true,
        series : [
            {
                name:'访问来源',
                type:'pie',
                radius : ['50%', '70%'],
                itemStyle : {
                    normal : {
                        label : {
                            show : false
                        },
                        labelLine : {
                            show : false
                        }
                    }
                },
                data:[
                    {value:500},
                    {value:1000}
                ]
            }
        ]
    };
    myChart.setOption(option);
    var myChart = echarts.init(document.getElementById('main1'));
    var option = {
        xAxis: {
            type: 'category',
            show:false
        },
        yAxis: {
            type: 'value',
            show:false
        },
        series: [{
            data: [82, 93, 90, 93, 99, 83,92,89,99,80],
            type: 'line'
        }
        ]
    };
    myChart.setOption(option);
    var myChart = echarts.init(document.getElementById("small2"));
    option = {
        toolbox: {
            show : true
        },
        calculable : true,
        series : [
            {
                name:'访问来源',
                type:'pie',
                radius : ['50%', '70%'],
                itemStyle : {
                    normal : {
                        label : {
                            show : false
                        },
                        labelLine : {
                            show : false
                        }
                    }
                },
                data:[
                    {value:700},
                    {value:800}
                ]
            }
        ]
    };
    myChart.setOption(option);
    var myChart = echarts.init(document.getElementById('main2'));
    var option = {
        xAxis: {
            type: 'category',
            show:false
        },
        yAxis: {
            type: 'value',
            show:false
        },
        series: [{
            data: [82, 93, 90, 93, 99, 83,92,89,99,80],
            type: 'line'
        }
        ]
    };
    myChart.setOption(option);
    var myChart = echarts.init(document.getElementById('preview'));
})();