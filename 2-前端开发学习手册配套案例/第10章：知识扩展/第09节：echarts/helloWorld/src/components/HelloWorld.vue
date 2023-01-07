<template>
    <div class="hello">
        <h1>hello world</h1>
        <div id="main"></div>
    </div>
</template>

<script>
import echarts from "echarts"
export default {
    name: "HelloWorld",
    mounted() {
        var myChart = echarts.init(document.getElementById("main"));

        // 指定图表的配置项和数据
        var option = {
            title: {
                text: "ECharts 入门示例",
            },
            tooltip: {},
            legend: {
                data: ["销量"],
            },
            xAxis: {
                data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"],
            },
            yAxis: {},
            series: [
                {
                    name: "销量",
                    type: "bar",
                    data: [5, 20, 36, 10, 10, 20],
                },
            ],
        };

        myChart.setOption(option);
    },
};
</script>
<style>
#main{
  width:500px;
  height:500px;
}
</style>

