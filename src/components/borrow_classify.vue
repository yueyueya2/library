<template>
  <div class="book_table" ref="chart"></div>
</template>

<script>
var data=[{value:33, name:'计算机'},
          {value:31, name:'艺术'},
          {value:23, name:'法律'},
          {value:13, name:'政治'},
          {value:154, name:'文学'}
          ];
export default {
  mounted(){
    this.drawLine();
  },
  methods:{
    drawLine(){
      var myChart = this.$echarts.init(this.$refs.chart);
    // 绘制图表
    myChart.setOption({
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    series : [{
            name: '书籍类别',
            type: 'pie',
            radius : '55%',
            center: ['50%', '50%'],
            data:[{value:33, name:'计算机'},
          {value:31, name:'艺术'},
          {value:23, name:'法律'},
          {value:13, name:'政治'},
          {value:154, name:'文学'}
          ],
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            },
            labelLine: {
                normal: {
                    smooth: 0.2,
                    length2: 70
                }
            },
        }]
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
