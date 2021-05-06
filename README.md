# real-time-weather
1. 通过已封装好的API实现实时数据请求
  - 找了极速数据的API，简单可用，且数据多，符合需求，
    - 一个API就可以请求到七天，当天每小时，温馨小tips等
    - 在找的时候还是免费的，现在去看已经要收费了
  - 找了高德地图的JS API，需先引入高德的JS，然后初始化，然后加载插件
    - 但是因为数据只有实时天气和近三天的天气，所以最后没用到
    ```
    <script type="text/javascript">
    window.init = function(){
        // var map = new AMap.Map('container', {
        //    center:[117.000923,36.675807],
        //    zoom:11
        // });
        
        // 加载天气查询插件
        AMap.plugin('AMap.Weather', function() {
            // 创建天气查询实例
            var weather = new AMap.Weather();
        
            // 执行实时天气信息查询
            weather.getLive('杭州市', function(err, data) {
                console.log(err, data);
            });
        });
    }
    </script>
    <script src="https://webapi.amap.com/maps?v=1.4.15&key=您申请的key值&callback=init"></script>
    ```
    
2. 通过eCharts实现数据的可视化
  - eCharts的使用方法
    - 下载并引入eCahrts.min.js文件
    - 准备一个具备大小的DOM容器
    - 初始化echarts实例对象（var mychart = echarts.init(DOM容器)）
    - 指定配置项和数据（可到官网的社区里找到想要的样式，设置option）
    - 将配置项设置给eCharts实例对象（mychart.setOption(option)）
  - 引入中国地图
    - 先下载并引入china.js文件
    - 找到适合的样式，复制option [狗头]

3. 因为是先请求数据再加载图表，所以在请求数据的函数内加了个回调函数作为参数，该回调函数就进行数据渲染
   ```
    getData(draw, city);
   ```
