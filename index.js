var container = document.getElementById('excel');
var data = [
    ['Java', 1, '降', '-0.01%'],
    ['C', 2, '升', '+2.44%'],
    ['Python', 3, '升', '+1.41%'],
    ['C++', 4, '降', '-2.58%'],
    ['C#', 5, '升', '+2.07%'],
    ['Visual Basic .NET', 6, '降', '-1.17%'],
    ['JavaScript', 7, '降', '-0.85%'],
  ];
var exc = new Handsontable(container, {
  data: data,
  rowHeaders: false,
  colHeaders: ['语言名称', '排名', '升或降', '变化幅度'],
  rowHeights: 35,
  colWidths:150,
  filters: true,
  dropdownMenu: false,
  autoColumnSize:true,
  manualRowMove: true,  
  manualColumnMove: true, 
  manualRowResize:true,  
  manualColumnResize:true,  
  className: 'htCenter htMiddle',
});

var myChart = echarts.init(document.getElementById('container'));
var option = {
    title: {
      text: "JavaScript语言排名变化",
      left:'5%',
      
  },
  tooltip: {
      trigger: 'axis',
      axisPointer: {
          type: 'cross',
          crossStyle: {
              color: '#999'
          }
      },
      formatter: function (params) {
          let firstParams = params[0];
          let sndParams = params[1];
          return '排名'+'<br/>'+firstParams.name + ' ： ' +firstParams.data;
      }
  },
  xAxis: {
      data: [2000, 2005, 2010, 2015, 2020]
  },
  yAxis: {
      
  },
  series: [{
    name:'排名',
    type: 'line',
    data: [6,9,8,8,7]
  }]
};
myChart.setOption(option);