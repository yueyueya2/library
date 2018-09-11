<template>
  <div class="book_table" ref="chart"></div>
</template>

<script>
var data={
    xAxisData:['6/28', '6/29', '6/30', '7/1', '7/2'],
    yAxisData:[120, 150, 150, 80, 70],
};
export default {
  mounted(){
    this.drawLine();
  },
  methods:{
    drawLine(){
      var myChart = this.$echarts.init(this.$refs.chart);
    // 绘制图表
    myChart.setOption({
        xAxis: {
            type: 'category',
            name:'日期',
            data: data.xAxisData,
        },
        yAxis: {
            type: 'value',
            name:'人数',
        },
        series: [{
            data: data.yAxisData,
            type: 'bar',
            itemStyle: {
                        normal: {
                            //通过数组下标选择颜色
                            color: function(params) {
                                var colorList = ['#87CEEB','#87CEEB','#87CEEB','#87CEEB','#87CEEB'];
                                return colorList[params.dataIndex]
                            },
                            label : {show: true, position: 'top'},
                        }
                    }
        }],
    })
    }
  }
}
</script>

<style lang="css">
body{
  width: 22.5rem;
}
.book_table{
  position: absolute;
  width: 22.5rem;
  height: 12rem;
  left: 0;
}
</style>
