<template>
  <div class="book_table" ref="chart"></div>
</template>

<script>
var data={
    xAxisData:['政治','计算机','法律','艺术','文学'],
    yAxisData:[82, 32, 90, 34, 12],
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
                name:'类别',
                data:data.xAxisData,
            },
            yAxis: {
                name:'时间/小时',
                type: 'value',
            },
            series: [{
                data: data.yAxisData,
                type: 'line',
                smooth:true,
                areaStyle: {},
                itemStyle: {
                            normal: {
                                label : {show: true, position: 'top',color:'grey'},
                            }
                },
            }]
      })
    }
  }
}
</script>

<style>
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
