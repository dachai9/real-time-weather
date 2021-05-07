// bar1
(function () {
    function bar1(data) {
        // console.log('bar1的data: ', data.temp, data.temphigh)
        var dom = $('.bar .chart')[0];
        var mychart = echarts.init(dom);
        let angle = 0; //角度，用来做简单的动画效果的
        let value = data.temp;
        let prob = (value / data.temphigh) * 100;
        console.log('概率: ', prob);
        // let value = 30;
        var timerId;
        var option = {
            grid: {
                left: '0%',
            },
            title: {
                text: '{a|' + value + '}{c|℃}',
                x: '18%',
                y: '43%',
                textStyle: {
                    rich: {
                        a: {
                            fontSize: 22,
                            color: '#4dd0f5'
                        },
                        c: {
                            fontSize: 18,
                            color: '#4dd0f5'
                        }
                    }
                }
            },
            // polar: {},
            // angleAxis: {
            //     type: "category",
            //     min: data.templow,
            // },
            series: [
                /* // 紫色
                {
                    name: "ring5",
                    type: 'custom',
                    coordinateSystem: "none",
                    renderItem: function (params, api) {
                        return {
                            type: 'arc',
                            shape: {
                                cx: api.getWidth() / 2 * 0.5,
                                cy: api.getHeight() / 2,
                                r: Math.min(api.getWidth(), api.getHeight()) / 2 * 0.72,
                                startAngle: (0 + angle) * Math.PI / 180,
                                endAngle: (90 + angle) * Math.PI / 180
                            },
                            style: {
                                stroke: "#8383FA",
                                fill: "transparent",
                                lineWidth: 1.5
                            },
                            silent: true
                        };
                    },
                    data: [0]
                }, {
                    name: "ring5", //紫点
                    type: 'custom',
                    coordinateSystem: "none",
                    renderItem: function (params, api) {
                        let x0 = api.getWidth() / 2 * 0.5;
                        let y0 = api.getHeight() / 2;
                        let r = Math.min(api.getWidth(), api.getHeight()) / 2 * 0.72;
                        let point = getCirlPoint(x0, y0, r, (90 + angle))
                        return {
                            type: 'circle',
                            shape: {
                                cx: point.x,
                                cy: point.y,
                                r: 4
                            },
                            style: {
                                stroke: "#8450F9", //绿
                                fill: "#8450F9"
                            },
                            silent: true
                        };
                    },
                    data: [0]
                },
                // 蓝色
                {
                    name: "ring5",
                    type: 'custom',
                    coordinateSystem: "none",
                    renderItem: function (params, api) {
                        return {
                            type: 'arc',
                            shape: {
                                cx: api.getWidth() / 2 * 0.5,
                                cy: api.getHeight() / 2,
                                r: Math.min(api.getWidth(), api.getHeight()) / 2 * 0.72,
                                startAngle: (180 + angle) * Math.PI / 180,
                                endAngle: (270 + angle) * Math.PI / 180
                            },
                            style: {
                                stroke: "#4386FA",
                                fill: "transparent",
                                lineWidth: 1.5
                            },
                            silent: true
                        };
                    },
                    data: [0]
                },
                {
                    name: "ring5", // 蓝色
                    type: 'custom',
                    coordinateSystem: "none",
                    renderItem: function (params, api) {
                        let x0 = api.getWidth() / 2 * 0.5;
                        let y0 = api.getHeight() / 2;
                        let r = Math.min(api.getWidth(), api.getHeight()) / 2 * 0.72;
                        let point = getCirlPoint(x0, y0, r, (180 + angle))
                        return {
                            type: 'circle',
                            shape: {
                                cx: point.x,
                                cy: point.y,
                                r: 4
                            },
                            style: {
                                stroke: "#4386FA", //绿
                                fill: "#4386FA"
                            },
                            silent: true
                        };
                    },
                    data: [0]
                },

                // 绿色
                {
                    name: "ring5",
                    type: 'custom',
                    coordinateSystem: "none",
                    renderItem: function (params, api) {
                        return {
                            type: 'arc',
                            shape: {
                                cx: api.getWidth() / 2 * 0.5,
                                cy: api.getHeight() / 2,
                                r: Math.min(api.getWidth(), api.getHeight()) / 2 * 0.8,
                                startAngle: (270 + -angle) * Math.PI / 180,
                                endAngle: (40 + -angle) * Math.PI / 180
                            },
                            style: {
                                stroke: "#0CD3DB",
                                fill: "transparent",
                                lineWidth: 1.5
                            },
                            silent: true
                        };
                    },
                    data: [0]
                }, {
                    name: "ring5",
                    type: 'custom',
                    coordinateSystem: "none",
                    renderItem: function (params, api) {
                        let x0 = api.getWidth() / 2 * 0.5;
                        let y0 = api.getHeight() / 2;
                        let r = Math.min(api.getWidth(), api.getHeight()) / 2 * 0.8;
                        let point = getCirlPoint(x0, y0, r, (270 + -angle))
                        return {
                            type: 'circle',
                            shape: {
                                cx: point.x,
                                cy: point.y,
                                r: 4
                            },
                            style: {
                                stroke: "#0CD3DB", //绿
                                fill: "#0CD3DB"
                            },
                            silent: true
                        };
                    },
                    data: [0]
                },

                // 橘色
                {
                    name: "ring5",
                    type: 'custom',
                    coordinateSystem: "none",
                    renderItem: function (params, api) {
                        return {
                            type: 'arc',
                            shape: {
                                cx: api.getWidth() / 2 * 0.5,
                                cy: api.getHeight() / 2,
                                r: Math.min(api.getWidth(), api.getHeight()) / 2 * 0.8,
                                startAngle: (90 + -angle) * Math.PI / 180,
                                endAngle: (220 + -angle) * Math.PI / 180
                            },
                            style: {
                                stroke: "#FF8E89",
                                fill: "transparent",
                                lineWidth: 1.5
                            },
                            silent: true
                        };
                    },
                    data: [0]
                },
                {
                    name: "ring5",
                    type: 'custom',
                    coordinateSystem: "none",
                    renderItem: function (params, api) {
                        let x0 = api.getWidth() / 2 * 0.5;
                        let y0 = api.getHeight() / 2;
                        let r = Math.min(api.getWidth(), api.getHeight()) / 2 * 0.8;
                        let point = getCirlPoint(x0, y0, r, (90 + -angle))
                        return {
                            type: 'circle',
                            shape: {
                                cx: point.x,
                                cy: point.y,
                                r: 4
                            },
                            style: {
                                stroke: "#FF8E89", //粉
                                fill: "#FF8E89"
                            },
                            silent: true
                        };
                    },
                    data: [0]
                }, */
                {
                    name: '吃猪肉频率',
                    type: 'pie',
                    radius: ['70%', '60%'],
                    silent: true,
                    clockwise: true,
                    startAngle: 90,
                    z: 0,
                    zlevel: 0,
                    center: ['25%', '50%'],
                    // left: 'left',
                    label: {
                        normal: {
                            position: "center",
                        }
                    },
                    data: [{
                        value: prob,
                        name: "",
                        itemStyle: {
                            normal: {
                                color: { // 完成的圆环的颜色
                                    colorStops: [{
                                        offset: 0,
                                        color: '#A098FC' // 0% 处的颜色
                                    },
                                    {
                                        offset: 0.3,
                                        color: '#4386FA' // 30% 处的颜色
                                    },
                                    {
                                        offset: 0.6,
                                        color: '#4FADFD' // 60% 处的颜色
                                    },
                                    {
                                        offset: 0.8,
                                        color: '#0CD3DB' // 80% 处的颜色
                                    }, {
                                        offset: 1,
                                        color: '#646CF9' // 100% 处的颜色
                                    }
                                    ]
                                },
                            }
                        }
                    },
                    {
                        value: 100 - prob,
                        // value: 32 - value,
                        name: "",
                        label: {
                            normal: {
                                show: false
                            }
                        },
                        itemStyle: {
                            normal: {
                                color: "#173164"
                            }
                        }
                    }
                    ]
                },
                {
                    name: '吃猪肉频率',
                    type: 'pie',
                    radius: ['52%', '55%'],
                    silent: true,
                    clockwise: true,
                    startAngle: 270,
                    z: 0,
                    zlevel: 0,
                    center: ['25%', '50%'],
                    label: {
                        normal: {
                            position: "center",

                        }
                    },
                    data: [{
                        value: prob,
                        name: "",
                        itemStyle: {
                            normal: {
                                color: { // 完成的圆环的颜色
                                    colorStops: [{
                                        offset: 0,
                                        color: '#00EDF3' // 0% 处的颜色
                                    }, {
                                        offset: 1,
                                        color: '#646CF9' // 100% 处的颜色
                                    }]
                                },
                            }
                        }
                    },
                    {
                        value: 100 - prob,
                        name: "",
                        label: {
                            normal: {
                                show: false
                            }
                        },
                        itemStyle: {
                            normal: {
                                color: "#173164"
                            }
                        }
                    }
                    ]
                },

            ]
        };

        /* //获取圆上面某点的坐标(x0,y0表示坐标，r半径，angle角度)
        function getCirlPoint(x0, y0, r, angle) {
            let x1 = x0 + r * Math.cos(angle * Math.PI / 180)
            let y1 = y0 + r * Math.sin(angle * Math.PI / 180)
            return {
                x: x1,
                y: y1
            }
        }

        function draw() {
            // 每秒转动的角度
            angle = angle + 3
            mychart.setOption(option, true)
            //window.requestAnimationFrame(draw);
        }
        // if (timerId) {
        //     clearInterval(timerId);
        // }
        clearInterval(timerId)
        timerId = setInterval(function () {
            //用setInterval做动画感觉有问题
            draw()
        }, 100); */
        // mychart.setOption({
        //     xAxis: {
        //         data: data.time
        //     },
        //     series: [{
        //         // 根据名字对应到相应的系列
        //         name: '气温',
        //         data: data.temp
        //     }]
        // });
        mychart.setOption(option);
        window.addEventListener('resize', function () {
            mychart.resize();
        })
    }

    window.bar1 = bar1;


    /* 高德地图获取实时天气的接口 */
    /* var city = $('.city').text().slice(0, 2);
    // console.log(city);

    //加载天气查询插件
    AMap.plugin('AMap.Weather', function () {
        //创建天气查询实例
        var weather = new AMap.Weather();

        //执行实时天气信息查询
        weather.getForecast(city, function (err, data) {
            console.log(err, data);
        });
    }); */
})();

// bar2
(function () {
    // 设置不同柱子不同颜色
    function bar2() {
        var myColor = ["#1089E7", "#F57474", "#56D0E3", "#F8B448", "#8B78F6"];
        var dom = $('.bar2 .chart')[0];
        var mychart = echarts.init(dom);
        var option = {
            grid: {
                top: "10%",
                left: "10%",
                bottom: "10%",
                containLabel: true
            },
            xAxis: {
                // 不显示x轴
                show: false,
                type: 'value',
                boundaryGap: [0, 0.01]
            },
            yAxis: [
                {
                    type: 'category',
                    inverse: true,
                    data: ['印尼', '美国', '印度', '中国', '世界人口(万)'],
                    // 不显示y轴线条
                    axisLine: {
                        show: false,
                    },
                    // 不显示刻度
                    axisTick: {
                        show: false
                    },
                    // y轴文字颜色设为白色
                    axisLabel: {
                        color: '#fff',
                    }
                },
                {
                    inverse: true,
                    data: [702, 350, 610, 793, 664],
                    // 不显示y轴线条
                    axisLine: {
                        show: false,
                    },
                    // 不显示刻度
                    axisTick: {
                        show: false
                    },
                    // y轴文字颜色设为白色
                    axisLabel: {
                        color: '#fff',
                    }
                }
            ],
            series: [
                {
                    name: '条',
                    type: 'bar',
                    data: [70, 34, 60, 78, 69],
                    // 设置层叠
                    yAxisIndex: 0,
                    //  柱子之间的距离
                    barCategoryGap: 50,
                    // 柱子宽度
                    barWidth: 10,
                    // 柱子设为圆角
                    itemStyle: {
                        barBorderRadius: 20,
                        color: function (params) {
                            // console.log('params:,', params);
                            return myColor[params.dataIndex];
                        },
                    },
                    // 图形上的文本标签
                    label: {
                        normal: {
                            show: true,
                            // 图形内显示
                            position: 'inside',
                            // 文字的显示格式，显示在图形里面
                            formatter: '{c}%',
                        }
                    }
                }, {
                    name: '框',
                    type: 'bar',
                    data: [100, 100, 100, 100, 100],
                    // 设置层叠
                    yAxisIndex: 1,
                    barCategoryGap: 50,
                    barWidth: 15,
                    itemStyle: {
                        // 无填充颜色
                        color: 'none',
                        borderColor: '#00c1de',
                        borderWidth: 3,
                        barBorderRadius: 15
                    }
                }
            ]
        };
        mychart.setOption(option);
        window.addEventListener('resize', function () {
            mychart.resize();
        })
    }
    window.bar2 = bar2;
})();

// line1
(function () {
    function line1(data) {
        // console.log(data);
        /* var yearData = [
            {
                year: '气温',  // 气温
                data: [  // 两个数组是因为有两条线
                    [24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120],
                    [40, 64, 191, 324, 290, 330, 310, 213, 180, 200, 180, 79]
                ]
            },
            {
                year: '日出日落',  // 日出日落
                data: [  // 两个数组是因为有两条线
                    [123, 175, 112, 197, 121, 67, 98, 21, 43, 64, 76, 38],
                    [143, 131, 165, 123, 178, 21, 82, 64, 43, 60, 19, 34]
                ]
            }
        ]; */
        var dom = $('.line .chart')[0];
        var mychart = echarts.init(dom);
        var option = {
            tooltip: {
                // show: false,
                trigger: 'axis',
                axisPointer: {
                    type: 'cross',
                    label: {
                        backgroundColor: '#cfd1e6'
                    }
                }
            },
            dataset: {
                dimensions: ['time', 'temp'],
                source: data
            },
            toolbox: {
                feature: {
                    saveAsImage: {}
                },
                iconStyle: {
                    borderColor: '#cfd1e6',
                },
                right: '5%',
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '5%',
                containLabel: true
            },
            xAxis: [
                {
                    type: 'category',
                    axisLine: {
                        lineStyle: {
                            color: 'rgba(255,255,255,.2)',
                        }
                    },
                    axisLabel: {
                        textStyle: {
                            color: 'rgba(255,255,255,.6)',
                        }
                    },
                    axisPointer: {
                        snap: false
                    }
                }
            ],
            yAxis: [
                {
                    min: function (value) {
                        return value.min - 5;
                    },
                    axisLine: {
                        lineStyle: {
                            color: 'rgba(255,255,255,.2)',
                        }
                    },
                    axisLabel: {
                        textStyle: {
                            color: 'rgba(255,255,255,.6)',
                        }
                    },
                    splitLine: {
                        show: false,
                    }
                }
            ],
            series: [
                {
                    name: '温度',
                    type: 'line',
                    smooth: true,
                    lineStyle: {
                        width: 2
                    },
                    // 显示数据
                    // 如果 false 则只有在 tooltip hover 的时候显示
                    showSymbol: true,
                    // 渐变
                    areaStyle: {
                        opacity: 0.8,
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            // 渐变的起始颜色
                            offset: 0,
                            color: 'rgba(0, 216, 135, 0.4)'
                        }, {
                            // 渐变的终点颜色
                            offset: 1,
                            color: 'rgba(0, 216, 135, 0.1)'
                        }]),
                        // 设置阴影
                        shadowColor: 'rgba(0, 0, 0, 0.1)',
                    },
                    // 设置拐点
                    symbol: 'circle',
                    symbolSize: '5',
                    // 设置拐点样式
                    itemStyle: {
                        color: '#00d887',
                        borderColor: 'rgba(221, 220, 107, .1)',
                        borderWidth: 8
                    },
                    // data: [30, 40, 30, 40, 30, 40, 30, 60, 20, 40, 30, 40, 30, 40, 30, 40, 30, 60, 20, 40, 30, 40, 30, 40, 30, 40, 20, 60, 50, 40],
                },
            ]
        };
        mychart.setOption(option);

        window.addEventListener('resize', function () {
            mychart.resize();
        })
    }

    window.line1 = line1;
})();

// line2
(function () {
    // 数据
    function line2(data) {
        // 将时间转换为数值，进行比较
        var section = [
            [
                {
                    name: '最高温度',
                    type: 'line',
                    showSymbol: false,
                    encode: {
                        x: 'date',
                        y: 'temphigh',
                    }
                },
                {
                    name: '最低温度',
                    type: 'line',
                    showSymbol: false,
                    encode: {
                        x: 'date',
                        y: 'templow',
                    }
                }
            ],
            [
                {
                    name: '日出',
                    type: 'line',
                    showSymbol: false,
                    encode: {
                        x: 'date',
                        y: 'sunrise',
                    }
                },
                {
                    name: '日落',
                    type: 'line',
                    showSymbol: false,
                    encode: {
                        x: 'date',
                        y: 'sunset',
                    }
                }
            ]
        ]
        console.log(data);
        // 图表
        var dom = $('.line2 .chart')[0];
        var mychart = echarts.init(dom);
        var option = {
            color: ['#00f2f1', '#ed3f35'],
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                textStyle: {
                    color: '#4c9bfd',
                },
                right: '10%',
            },
            dataset: [{
                // dimensions: ['data', 'sunrise'],
                id: 'weather-daily',
                source: data,
            }],
            grid: {
                top: '20%',
                left: '3%',
                right: '4%',
                bottom: '3%',
                // 显示边框
                show: true,
                // 边框颜色
                borderColor: '#012f4a',
                containLabel: true
            },
            // 下载图片到本地
            toolbox: {
                feature: {
                    saveAsImage: {}
                },
                iconStyle: {
                    borderColor: '#fff',
                    // color: '#fff',
                },
                top: '-4%',
            },
            xAxis: {
                type: 'category',
                // 去除轴内间距
                boundaryGap: false,
                // data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
                // 文本颜色
                axisLabel: {
                    color: '#4c9bfd',
                },
                // 轴线
                axisLine: {
                    show: false,
                },
                // 刻度
                axisTick: {
                    show: false,
                },
            },
            yAxis: {
                type: 'value',
                // 文本颜色
                axisLabel: {
                    color: '#4c9bfd',
                    // formatter: '{HH}-{mm}'
                },
                // 轴线
                axisLine: {
                    show: false,
                },
                // 刻度
                axisTick: {
                    show: false,
                },
                // 设置分割线
                splitLine: {
                    lineStyle: {
                        color: '#012f4a',
                    }
                },
                min: function (value) {
                    return value.min - 5;
                },
            },
            series: [
                {
                    name: '最高温度',
                    type: 'line',
                    showSymbol: false,
                    encode: {
                        x: 'date',
                        y: 'temphigh',
                        // tooltip: ['sunrise','sunset']
                    }
                },
                {
                    name: '最低温度',
                    type: 'line',
                    showSymbol: false,
                    encode: {
                        x: 'date',
                        y: 'templow',
                        // tooltip: ['sunrise','sunset']
                    }
                },
            ]
        };
        mychart.setOption(option);

        // 点击事件
        $('.line2 h2').on('click', 'a', function () {
            console.log(section[$(this).index()]);
            option.series = section[$(this).index()];
            // var getData = yearData[$(this).index()].data;
            // console.log(getData);
            // option.series[0].data = getData[0];
            // option.series[1].data = getData[1];
            mychart.setOption(option);
        })

        window.addEventListener('resize', function () {
            mychart.resize();
        })
    }
    window.line2 = line2;
})();

// pie
(function () {
    function pie() {
        var dom = $('.pie .chart')[0];
        var mychart = echarts.init(dom);
        var option = {
            color: [
                "#065aab",
                "#066eab",
                "#0682ab",
                "#0696ab",
                "#06a0ab",
            ],
            tooltip: {
                trigger: 'item'
            },
            legend: {
                bottom: '0%',
                left: 'center',
                // 修改小图标
                itemHeight: 10,
                itemWidth: 10,
                textStyle: {
                    color: "rgba(255,255,255,.5)",
                }
            },
            series: [
                {
                    name: '访问来源',
                    type: 'pie',
                    // 内圆和外圆
                    radius: ['40%', '60%'],
                    // 默认就是水平垂直居中
                    center: ['50%', '45%'],
                    avoidLabelOverlap: false,
                    itemStyle: {
                        borderRadius: 10,
                        borderWidth: 0
                    },
                    label: {
                        show: false,
                        // 如果注释掉center会默认散开在饼周围
                        position: 'center'
                    },
                    labelLine: {
                        show: false
                    },
                    data: [
                        { value: 1, name: "0岁以下" },
                        { value: 4, name: "20-29岁" },
                        { value: 2, name: "30-39岁" },
                        { value: 2, name: "40-49岁" },
                        { value: 1, name: "50岁以上" }
                    ],
                }
            ]
        };
        mychart.setOption(option);
        window.addEventListener('resize', function () {
            mychart.resize();
        })
    }
    window.pie = pie;
})();

// pie2
(function () {
    function pie2() {
        var dom = $('.pie2 .chart')[0];
        var mychart = echarts.init(dom);
        var option = {
            legend: {
                top: 'bottom'
            },
            toolbox: {
                show: true,
                feature: {
                    mark: { show: true },
                    dataView: { show: true, readOnly: false },
                    restore: { show: true },
                    saveAsImage: { show: true }
                }
            },
            series: [
                {
                    name: '地区分布',
                    type: 'pie',
                    radius: ['10%', '70%'],
                    center: ['50%', '45%'],
                    // 把饼形图显示模式改为半径模式
                    roseType: 'radius',
                    itemStyle: {
                        borderRadius: 8
                    },
                    data: [
                        { value: 20, name: '云南' },
                        { value: 26, name: '北京' },
                        { value: 24, name: '山东' },
                        { value: 25, name: '河北' },
                        { value: 20, name: '江苏' },
                        { value: 25, name: '浙江' },
                        { value: 30, name: '四川' },
                        { value: 42, name: '湖北' }
                    ],
                    // 文字
                    label: {
                        fontSize: 10,
                    },
                    labelLine: {
                        // 斜线
                        length: 6,
                        // 平行线
                        length2: 8,
                    }
                }
            ],
            legend: {
                // show: false
                bottom: 0,
                itemHeight: 10,
                itemWidth: 10,
                textStyle: {
                    color: "rgba(255,255,255,.5)",
                }
            }
        };
        mychart.setOption(option);
        window.addEventListener('resize', function () {
            mychart.resize();
        })
    }

    window.pie2 = pie2;
})();

// 地图
(function () {
    function centerMap() {
        var dom = $('.centerbox-b .chart')[0];
        var mychart = echarts.init(dom);
        var uploadedDataURL5 = "/asset/get/s/data-1603441677365-3UIqJ9lbd.png";

        var uploadedDataURL4 = "/asset/get/s/data-1603441669918-oITOyexfa.png";

        var uploadedDataURL3 = "/asset/get/s/data-1603441660654-gt9pYtb0X.png";

        var uploadedDataURL2 = "/asset/get/s/data-1603441630339-tI6aIdCjD.png";

        var uploadedDataURL1 = "/asset/get/s/data-1603441621212-MohvEkJgA.png";

        var chinaMapOutline = {
            type: 'FeatureCollection',
            features: [{
                type: 'Feature',
                geometry: {
                    type: 'Polygon',
                    coordinates: [
                        [
                            [124.445, 40.163],
                            [124.151, 39.746],
                            [124.103, 39.823],
                            [123.821, 39.832],
                            [123.249, 39.75],
                            [123.284, 39.695],
                            [122.856, 39.607],
                            [122.339, 39.378],
                            [122.117, 39.214],
                            [122.17, 39.15],
                            [122.07, 39.061],
                            [121.853, 39.036],
                            [121.912, 38.964],
                            [121.673, 39.011],
                            [121.618, 38.947],
                            [121.719, 38.92],
                            [121.698, 38.865],
                            [121.568, 38.876],
                            [121.34, 38.819],
                            [121.138, 38.723],
                            [121.093, 38.929],
                            [121.326, 38.973],
                            [121.374, 39.062],
                            [121.668, 39.092],
                            [121.59, 39.272],
                            [121.724, 39.361],
                            [121.508, 39.292],
                            [121.262, 39.374],
                            [121.304, 39.488],
                            [121.227, 39.555],
                            [121.45, 39.625],
                            [121.475, 39.815],
                            [121.833, 39.983],
                            [122.011, 40.151],
                            [121.936, 40.238],
                            [122.279, 40.478],
                            [122.148, 40.672],
                            [121.951, 40.681],
                            [121.94, 40.795],
                            [121.813, 40.897],
                            [121.553, 40.818],
                            [121.5, 40.88],
                            [121.136, 40.874],
                            [121.077, 40.818],
                            [121.085, 40.796],
                            [120.98, 40.82],
                            [121.034, 40.71],
                            [120.837, 40.678],
                            [120.619, 40.46],
                            [120.474, 40.183],
                            [119.546, 39.893],
                            [119.537, 39.809],
                            [119.36, 39.725],
                            [119.266, 39.487],
                            [119.314, 39.411],
                            [118.946, 39.137],
                            [118.897, 39.124],
                            [118.96, 39.184],
                            [118.553, 39.146],
                            [118.527, 39.102],
                            [118.587, 38.96],
                            [118.501, 38.905],
                            [118.396, 39.02],
                            [118.222, 39.047],
                            [118.068, 39.223],
                            [117.977, 39.206],
                            [117.84, 39.074],
                            [117.899, 38.942],
                            [117.847, 38.856],
                            [117.627, 38.79],
                            [117.648, 38.509],
                            [118.075, 38.162],
                            [118.483, 38.123],
                            [118.552, 38.056],
                            [118.726, 38.154],
                            [118.958, 38.11],
                            [119.128, 37.814],
                            [119.274, 37.731],
                            [118.997, 37.633],
                            [118.94, 37.527],
                            [118.983, 37.35],
                            [119.067, 37.242],
                            [119.201, 37.255],
                            [119.275, 37.13],
                            [119.744, 37.129],
                            [119.894, 37.267],
                            [119.844, 37.377],
                            [120.247, 37.557],
                            [120.219, 37.69],
                            [120.752, 37.838],
                            [121.148, 37.72],
                            [121.216, 37.583],
                            [121.388, 37.627],
                            [121.565, 37.44],
                            [122.123, 37.568],
                            [122.178, 37.432],
                            [122.716, 37.4],
                            [122.574, 37.302],
                            [122.629, 37.194],
                            [122.485, 37.129],
                            [122.461, 37.04],
                            [122.585, 37.043],
                            [122.516, 36.89],
                            [122.181, 36.841],
                            [122.139, 36.944],
                            [122.044, 36.892],
                            [121.983, 36.958],
                            [121.632, 36.801],
                            [121.651, 36.724],
                            [121.599, 36.766],
                            [121.532, 36.731],
                            [121.481, 36.775],
                            [121.565, 36.83],
                            [121.036, 36.575],
                            [120.847, 36.619],
                            [120.983, 36.546],
                            [120.968, 36.472],
                            [120.909, 36.45],
                            [120.891, 36.373],
                            [120.833, 36.466],
                            [120.695, 36.392],
                            [120.712, 36.127],
                            [120.288, 36.043],
                            [120.362, 36.196],
                            [120.178, 36.202],
                            [120.117, 36.103],
                            [120.305, 35.972],
                            [120.071, 35.882],
                            [120.014, 35.714],
                            [119.926, 35.76],
                            [119.923, 35.635],
                            [119.662, 35.589],
                            [119.587, 35.364],
                            [119.417, 35.244],
                            [119.397, 35.092],
                            [119.211, 34.982],
                            [119.246, 34.795],
                            [119.454, 34.781],
                            [119.502, 34.754],
                            [119.376, 34.759],
                            [119.526, 34.733],
                            [119.466, 34.673],
                            [119.582, 34.599],
                            [120.312, 34.307],
                            [120.59, 33.586],
                            [120.833, 33.282],
                            [120.968, 32.758],
                            [120.902, 32.733],
                            [120.923, 32.622],
                            [121.405, 32.453],
                            [121.473, 32.138],
                            [121.759, 32.059],
                            [121.865, 31.94],
                            [121.982, 31.464],
                            [121.834, 31.434],
                            [121.434, 31.59],
                            [121.343, 31.512],
                            [121.723, 31.304],
                            [121.947, 31.066],
                            [121.989, 30.703],
                            [122.114, 30.621],
                            [121.997, 30.659],
                            [121.915, 30.813],
                            [121.681, 30.818],
                            [121.058, 30.564],
                            [121.476, 30.279],
                            [121.721, 29.993],
                            [122.14, 29.902],
                            [121.834, 29.653],
                            [122, 29.594],
                            [121.932, 29.353],
                            [121.945, 29.284],
                            [122, 29.279],
                            [121.937, 29.185],
                            [121.984, 29.087],
                            [121.608, 29.169],
                            [121.713, 29.029],
                            [121.776, 28.88],
                            [121.66, 28.87],
                            [121.685, 28.709],
                            [121.541, 28.656],
                            [121.692, 28.418],
                            [121.633, 28.353],
                            [121.649, 28.278],
                            [121.489, 28.301],
                            [121.402, 28.197],
                            [121.372, 28.131],
                            [121.289, 28.148],
                            [121.261, 28.034],
                            [121.149, 28.023],
                            [121.071, 28.111],
                            [120.992, 27.95],
                            [121.064, 27.896],
                            [121.161, 27.909],
                            [121.192, 27.823],
                            [121.134, 27.787],
                            [121.153, 27.815],
                            [120.95, 27.906],
                            [120.709, 27.683],
                            [120.635, 27.577],
                            [120.673, 27.369],
                            [120.573, 27.314],
                            [120.546, 27.157],
                            [120.286, 27.093],
                            [120.233, 26.908],
                            [120.038, 26.86],
                            [120.14, 26.8],
                            [120.143, 26.642],
                            [119.837, 26.515],
                            [120.063, 26.772],
                            [119.967, 26.787],
                            [119.877, 26.644],
                            [119.834, 26.691],
                            [119.711, 26.687],
                            [119.653, 26.745],
                            [119.576, 26.627],
                            [119.788, 26.583],
                            [119.877, 26.36],
                            [119.963, 26.371],
                            [119.604, 26.169],
                            [119.603, 26.155],
                            [119.617, 26.121],
                            [119.654, 26.091],
                            [119.669, 26.026],
                            [119.721, 26.019],
                            [119.72, 25.98],
                            [119.632, 25.883],
                            [119.603, 25.685],
                            [119.477, 25.633],
                            [119.599, 25.592],
                            [119.654, 25.47],
                            [119.726, 25.519],
                            [119.685, 25.598],
                            [119.789, 25.667],
                            [119.826, 25.574],
                            [119.865, 25.564],
                            [119.89, 25.567],
                            [119.813, 25.523],
                            [119.857, 25.452],
                            [119.77, 25.395],
                            [119.712, 25.48],
                            [119.649, 25.462],
                            [119.659, 25.354],
                            [119.599, 25.335],
                            [119.583, 25.374],
                            [119.575, 25.449],
                            [119.579, 25.401],
                            [119.552, 25.38],
                            [119.549, 25.366],
                            [119.52, 25.377],
                            [119.492, 25.36],
                            [119.451, 25.496],
                            [119.362, 25.522],
                            [119.317, 25.408],
                            [119.256, 25.489],
                            [119.163, 25.441],
                            [119.146, 25.385],
                            [119.385, 25.275],
                            [119.269, 25.16],
                            [119.118, 25.212],
                            [119.166, 25.145],
                            [119.127, 25.012],
                            [119.143, 25.103],
                            [119.029, 25.14],
                            [119.07, 25.233],
                            [118.883, 25.241],
                            [118.985, 25.172],
                            [118.868, 25.082],
                            [118.929, 25.026],
                            [119.022, 25.05],
                            [119.029, 24.957],
                            [118.918, 24.932],
                            [118.989, 24.879],
                            [118.648, 24.844],
                            [118.787, 24.776],
                            [118.658, 24.673],
                            [118.689, 24.611],
                            [118.657, 24.568],
                            [118.657, 24.553],
                            [118.562, 24.509],
                            [118.463, 24.616],
                            [118.243, 24.512],
                            [118.151, 24.584],
                            [118.121, 24.57],
                            [118.098, 24.548],
                            [118.085, 24.53],
                            [118.052, 24.445],
                            [118.049, 24.418],
                            [118.153, 24.256],
                            [118.019, 24.197],
                            [117.788, 23.9],
                            [117.672, 23.878],
                            [117.455, 23.574],
                            [116.91, 23.529],
                            [116.783, 23.314],
                            [116.815, 23.208],
                            [116.566, 23.134],
                            [116.509, 22.932],
                            [116.307, 22.953],
                            [115.819, 22.731],
                            [115.644, 22.864],
                            [115.542, 22.758],
                            [115.609, 22.753],
                            [115.574, 22.65],
                            [115.199, 22.822],
                            [115.057, 22.78],
                            [114.887, 22.539],
                            [114.745, 22.583],
                            [114.752, 22.76],
                            [114.7, 22.787],
                            [114.512, 22.659],
                            [114.603, 22.655],
                            [114.559, 22.576],
                            [114.628, 22.509],
                            [114.507, 22.439],
                            [114.464, 22.538],
                            [114.389, 22.603],
                            [114.322, 22.587],
                            [114.233, 22.54],
                            [114.231, 22.546],
                            [114.226, 22.549],
                            [114.223, 22.552],
                            [114.222, 22.553],
                            [114.218, 22.552],
                            [114.218, 22.552],
                            [114.215, 22.554],
                            [114.215, 22.554],
                            [114.212, 22.554],
                            [114.211, 22.554],
                            [114.207, 22.554],
                            [114.207, 22.554],
                            [114.207, 22.554],
                            [114.206, 22.555],
                            [114.205, 22.555],
                            [114.203, 22.554],
                            [114.203, 22.554],
                            [114.202, 22.554],
                            [114.202, 22.554],
                            [114.201, 22.554],
                            [114.201, 22.553],
                            [114.201, 22.553],
                            [114.2, 22.553],
                            [114.199, 22.553],
                            [114.197, 22.553],
                            [114.197, 22.553],
                            [114.197, 22.553],
                            [114.196, 22.552],
                            [114.196, 22.552],
                            [114.195, 22.552],
                            [114.194, 22.552],
                            [114.193, 22.553],
                            [114.193, 22.553],
                            [114.192, 22.553],
                            [114.191, 22.552],
                            [114.191, 22.552],
                            [114.187, 22.553],
                            [114.187, 22.553],
                            [114.186, 22.552],
                            [114.183, 22.553],
                            [114.181, 22.557],
                            [114.18, 22.558],
                            [114.176, 22.557],
                            [114.176, 22.557],
                            [114.174, 22.558],
                            [114.173, 22.559],
                            [114.172, 22.558],
                            [114.169, 22.557],
                            [114.168, 22.557],
                            [114.167, 22.558],
                            [114.166, 22.558],
                            [114.165, 22.558],
                            [114.163, 22.556],
                            [114.161, 22.552],
                            [114.16, 22.552],
                            [114.16, 22.552],
                            [114.158, 22.552],
                            [114.157, 22.552],
                            [114.157, 22.551],
                            [114.157, 22.551],
                            [114.157, 22.549],
                            [114.157, 22.549],
                            [114.156, 22.548],
                            [114.155, 22.548],
                            [114.155, 22.546],
                            [114.155, 22.544],
                            [114.156, 22.544],
                            [114.156, 22.544],
                            [114.156, 22.545],
                            [114.156, 22.545],
                            [114.157, 22.544],
                            [114.157, 22.544],
                            [114.155, 22.543],
                            [114.155, 22.543],
                            [114.153, 22.541],
                            [114.153, 22.541],
                            [114.154, 22.54],
                            [114.154, 22.539],
                            [114.153, 22.539],
                            [114.15, 22.539],
                            [114.15, 22.539],
                            [114.149, 22.539],
                            [114.149, 22.539],
                            [114.149, 22.539],
                            [114.148, 22.539],
                            [114.147, 22.539],
                            [114.147, 22.539],
                            [114.143, 22.541],
                            [114.142, 22.541],
                            [114.14, 22.539],
                            [114.139, 22.539],
                            [114.138, 22.539],
                            [114.136, 22.539],
                            [114.136, 22.539],
                            [114.135, 22.539],
                            [114.133, 22.537],
                            [114.133, 22.537],
                            [114.131, 22.537],
                            [114.131, 22.537],
                            [114.128, 22.536],
                            [114.122, 22.531],
                            [114.121, 22.531],
                            [114.121, 22.529],
                            [114.12, 22.528],
                            [114.117, 22.527],
                            [114.115, 22.528],
                            [114.115, 22.533],
                            [114.114, 22.534],
                            [114.113, 22.534],
                            [114.112, 22.532],
                            [114.111, 22.532],
                            [114.109, 22.532],
                            [114.108, 22.532],
                            [114.108, 22.532],
                            [114.106, 22.532],
                            [114.104, 22.531],
                            [114.103, 22.531],
                            [114.101, 22.532],
                            [114.097, 22.534],
                            [114.094, 22.534],
                            [114.093, 22.533],
                            [114.09, 22.529],
                            [114.084, 22.527],
                            [114.084, 22.525],
                            [114.088, 22.523],
                            [114.09, 22.521],
                            [114.088, 22.516],
                            [114.082, 22.512],
                            [114.081, 22.513],
                            [114.08, 22.513],
                            [114.079, 22.515],
                            [114.077, 22.515],
                            [114.076, 22.515],
                            [114.074, 22.515],
                            [114.073, 22.515],
                            [114.072, 22.514],
                            [114.071, 22.514],
                            [114.07, 22.514],
                            [114.069, 22.514],
                            [114.064, 22.51],
                            [114.063, 22.508],
                            [114.063, 22.506],
                            [114.062, 22.503],
                            [114.062, 22.502],
                            [114.057, 22.5],
                            [114.024, 22.51],
                            [113.966, 22.51],
                            [113.889, 22.443],
                            [113.856, 22.541],
                            [113.746, 22.726],
                            [113.698, 22.737],
                            [113.74, 22.534],
                            [113.569, 22.412],
                            [113.671, 22.43],
                            [113.605, 22.34],
                            [113.595, 22.231],
                            [113.573, 22.227],
                            [113.559, 22.213],
                            [113.55, 22.214],
                            [113.548, 22.213],
                            [113.546, 22.21],
                            [113.546, 22.21],
                            [113.538, 22.209],
                            [113.539, 22.195],
                            [113.532, 22.176],
                            [113.554, 22.143],
                            [113.553, 22.121],
                            [113.554, 22.111],
                            [113.554, 22.107],
                            [113.554, 22.104],
                            [113.567, 22.075],
                            [113.282, 21.878],
                            [113.087, 22.126],
                            [112.945, 21.842],
                            [112.8, 21.925],
                            [112.647, 21.759],
                            [112.439, 21.804],
                            [112.263, 21.693],
                            [112.189, 21.793],
                            [112.137, 21.794],
                            [111.956, 21.711],
                            [112.026, 21.632],
                            [111.866, 21.557],
                            [111.746, 21.613],
                            [111.65, 21.512],
                            [111.61, 21.53],
                            [111.396, 21.502],
                            [111.281, 21.416],
                            [111.283, 21.485],
                            [110.785, 21.373],
                            [110.632, 21.217],
                            [110.497, 21.217],
                            [110.424, 21.193],
                            [110.211, 21.054],
                            [110.184, 20.892],
                            [110.394, 20.817],
                            [110.392, 20.683],
                            [110.416, 20.67],
                            [110.471, 20.672],
                            [110.546, 20.428],
                            [110.34, 20.254],
                            [109.929, 20.212],
                            [109.897, 20.462],
                            [109.745, 20.621],
                            [109.655, 20.904],
                            [109.757, 21.347],
                            [109.904, 21.442],
                            [109.704, 21.463],
                            [109.602, 21.559],
                            [109.541, 21.466],
                            [109.148, 21.386],
                            [109.038, 21.443],
                            [109.139, 21.567],
                            [108.747, 21.597],
                            [108.62, 21.681],
                            [108.479, 21.547],
                            [108.223, 21.489],
                            [108.235, 21.603],
                            [108.118, 21.506],
                            [107.958, 21.534],
                            [107.861, 21.652],
                            [107.365, 21.599],
                            [107.307, 21.737],
                            [107.216, 21.71],
                            [107.018, 21.819],
                            [107.027, 21.941],
                            [106.686, 21.977],
                            [106.694, 22.274],
                            [106.562, 22.346],
                            [106.56, 22.456],
                            [106.614, 22.602],
                            [106.732, 22.591],
                            [106.832, 22.81],
                            [106.526, 22.947],
                            [106.287, 22.867],
                            [106.207, 22.978],
                            [106.086, 22.996],
                            [105.879, 22.917],
                            [105.724, 23.062],
                            [105.568, 23.069],
                            [105.559, 23.178],
                            [105.327, 23.39],
                            [105.238, 23.264],
                            [104.809, 23.116],
                            [104.865, 22.951],
                            [104.736, 22.822],
                            [104.579, 22.846],
                            [104.37, 22.689],
                            [104.272, 22.739],
                            [104.261, 22.842],
                            [104.117, 22.809],
                            [103.978, 22.503],
                            [103.643, 22.795],
                            [103.53, 22.593],
                            [103.323, 22.808],
                            [103.072, 22.445],
                            [102.495, 22.778],
                            [102.269, 22.414],
                            [102.04, 22.458],
                            [101.879, 22.384],
                            [101.774, 22.506],
                            [101.673, 22.475],
                            [101.548, 22.231],
                            [101.607, 21.964],
                            [101.774, 21.832],
                            [101.747, 21.73],
                            [101.829, 21.617],
                            [101.746, 21.576],
                            [101.73, 21.337],
                            [101.835, 21.247],
                            [101.756, 21.143],
                            [101.533, 21.252],
                            [101.29, 21.178],
                            [101.226, 21.226],
                            [101.25, 21.297],
                            [101.143, 21.409],
                            [101.225, 21.502],
                            [101.14, 21.569],
                            [101.122, 21.774],
                            [100.579, 21.452],
                            [100.423, 21.541],
                            [100.247, 21.464],
                            [100.126, 21.51],
                            [100.163, 21.674],
                            [99.985, 21.713],
                            [99.972, 22.053],
                            [99.202, 22.122],
                            [99.156, 22.161],
                            [99.25, 22.392],
                            [99.382, 22.494],
                            [99.315, 22.737],
                            [99.463, 22.845],
                            [99.443, 22.933],
                            [99.563, 22.926],
                            [99.51, 23.075],
                            [99.332, 23.134],
                            [99.107, 23.087],
                            [99.058, 23.164],
                            [98.885, 23.18],
                            [98.913, 23.426],
                            [98.803, 23.531],
                            [98.886, 23.614],
                            [98.793, 23.778],
                            [98.669, 23.801],
                            [98.673, 23.961],
                            [98.881, 24.149],
                            [98.11, 24.093],
                            [97.649, 23.841],
                            [97.528, 23.927],
                            [97.731, 24.112],
                            [97.768, 24.259],
                            [97.665, 24.296],
                            [97.67, 24.453],
                            [97.532, 24.431],
                            [97.547, 24.739],
                            [97.798, 24.846],
                            [97.72, 25.081],
                            [97.837, 25.27],
                            [97.942, 25.215],
                            [98.143, 25.384],
                            [98.171, 25.62],
                            [98.315, 25.543],
                            [98.529, 25.841],
                            [98.705, 25.852],
                            [98.575, 26.118],
                            [98.72, 26.127],
                            [98.677, 26.276],
                            [98.782, 26.619],
                            [98.705, 27.559],
                            [98.439, 27.665],
                            [98.429, 27.549],
                            [98.317, 27.52],
                            [98.138, 27.959],
                            [98.14, 28.142],
                            [97.913, 28.361],
                            [97.796, 28.328],
                            [97.664, 28.531],
                            [97.508, 28.495],
                            [97.512, 28.316],
                            [97.35, 28.235],
                            [97.306, 28.071],
                            [97.413, 28.014],
                            [97.387, 27.883],
                            [97.261, 27.895],
                            [97.094, 27.738],
                            [96.452, 28.152],
                            [96.297, 28.141],
                            [96.275, 28.228],
                            [96.014, 28.19],
                            [95.874, 28.298],
                            [95.74, 28.275],
                            [95.397, 28.142],
                            [95.287, 27.94],
                            [94.886, 27.743],
                            [94.277, 27.581],
                            [93.862, 27.187],
                            [93.83, 27.034],
                            [93.568, 26.938],
                            [93.089, 26.879],
                            [92.647, 26.953],
                            [92.109, 26.855],
                            [92.028, 27.092],
                            [92.126, 27.273],
                            [92.06, 27.402],
                            [92.01, 27.475],
                            [91.733, 27.463],
                            [91.585, 27.54],
                            [91.642, 27.767],
                            [91.544, 27.826],
                            [91.625, 27.869],
                            [91.465, 28.003],
                            [91.313, 28.06],
                            [91.078, 27.847],
                            [90.702, 28.076],
                            [90.463, 28.045],
                            [90.297, 28.154],
                            [90.033, 28.137],
                            [89.803, 28.245],
                            [89.606, 28.162],
                            [89.239, 27.797],
                            [89.096, 27.492],
                            [89.183, 27.374],
                            [88.984, 27.209],
                            [88.783, 27.463],
                            [88.888, 27.847],
                            [88.764, 28.068],
                            [88.641, 28.111],
                            [88.406, 27.977],
                            [88.144, 27.955],
                            [88.112, 27.865],
                            [87.833, 27.948],
                            [87.728, 27.803],
                            [87.569, 27.864],
                            [87.228, 27.813],
                            [86.71, 28.101],
                            [86.569, 28.103],
                            [86.415, 27.905],
                            [86.231, 27.975],
                            [86.185, 28.168],
                            [86.083, 28.086],
                            [86.126, 27.924],
                            [86.002, 27.907],
                            [85.717, 28.38],
                            [85.605, 28.252],
                            [85.505, 28.33],
                            [85.38, 28.274],
                            [85.125, 28.333],
                            [85.18, 28.642],
                            [85.057, 28.674],
                            [84.857, 28.568],
                            [84.641, 28.724],
                            [84.483, 28.735],
                            [84.408, 28.854],
                            [84.227, 28.897],
                            [84.203, 29.24],
                            [84.105, 29.293],
                            [83.917, 29.325],
                            [83.585, 29.178],
                            [83.267, 29.571],
                            [82.947, 29.709],
                            [82.831, 29.688],
                            [82.561, 29.955],
                            [82.178, 30.068],
                            [82.21, 30.151],
                            [82.105, 30.346],
                            [81.418, 30.42],
                            [81.394, 30.199],
                            [81.263, 30.15],
                            [81.256, 30.012],
                            [81.141, 30.013],
                            [81.016, 30.259],
                            [80.309, 30.569],
                            [80.103, 30.569],
                            [79.891, 30.855],
                            [79.671, 30.981],
                            [79.601, 30.923],
                            [79.405, 31.072],
                            [79.323, 30.959],
                            [79.097, 30.992],
                            [78.868, 31.313],
                            [78.755, 31.356],
                            [78.792, 31.44],
                            [78.726, 31.507],
                            [78.846, 31.61],
                            [78.654, 31.822],
                            [78.771, 31.935],
                            [78.458, 32.133],
                            [78.511, 32.308],
                            [78.396, 32.531],
                            [78.742, 32.704],
                            [78.782, 32.481],
                            [78.97, 32.332],
                            [79.103, 32.37],
                            [79.31, 32.599],
                            [79.157, 33.179],
                            [78.842, 33.425],
                            [78.685, 33.654],
                            [78.781, 33.736],
                            [78.662, 34.087],
                            [78.917, 34.146],
                            [79.046, 34.326],
                            [78.882, 34.362],
                            [78.708, 34.522],
                            [78.268, 34.635],
                            [78.202, 34.974],
                            [78.014, 35.237],
                            [78.013, 35.366],
                            [78.14, 35.495],
                            [77.817, 35.519],
                            [77.691, 35.448],
                            [77.196, 35.519],
                            [76.761, 35.656],
                            [76.594, 35.772],
                            [76.576, 35.921],
                            [76.16, 35.824],
                            [76.104, 36.019],
                            [75.95, 36.07],
                            [76.065, 36.23],
                            [75.872, 36.666],
                            [75.648, 36.771],
                            [75.458, 36.721],
                            [75.414, 36.955],
                            [75.148, 37.026],
                            [74.902, 36.934],
                            [74.847, 37.057],
                            [74.5, 37.07],
                            [74.511, 37.24],
                            [74.739, 37.286],
                            [74.866, 37.221],
                            [75.14, 37.355],
                            [75.13, 37.459],
                            [74.893, 37.661],
                            [75.008, 37.776],
                            [74.806, 38.156],
                            [74.863, 38.484],
                            [74.378, 38.655],
                            [74.148, 38.677],
                            [74.091, 38.542],
                            [74.001, 38.524],
                            [73.799, 38.611],
                            [73.699, 38.858],
                            [73.742, 38.934],
                            [73.826, 38.917],
                            [73.84, 39.008],
                            [73.743, 39.029],
                            [73.502, 39.384],
                            [73.623, 39.47],
                            [73.868, 39.483],
                            [73.948, 39.593],
                            [73.838, 39.8],
                            [73.947, 40.023],
                            [74.211, 40.121],
                            [74.357, 40.089],
                            [74.701, 40.346],
                            [74.908, 40.339],
                            [74.793, 40.448],
                            [74.837, 40.521],
                            [75.242, 40.449],
                            [75.599, 40.66],
                            [75.733, 40.474],
                            [75.701, 40.283],
                            [76.28, 40.439],
                            [76.343, 40.341],
                            [76.539, 40.464],
                            [76.762, 40.954],
                            [76.878, 41.025],
                            [77.78, 41.023],
                            [77.836, 41.153],
                            [78.129, 41.228],
                            [78.164, 41.383],
                            [78.65, 41.467],
                            [79.326, 41.809],
                            [79.777, 41.893],
                            [79.893, 42.034],
                            [80.163, 42.039],
                            [80.166, 42.197],
                            [80.292, 42.26],
                            [80.206, 42.431],
                            [80.274, 42.512],
                            [80.164, 42.628],
                            [80.26, 42.825],
                            [80.603, 42.894],
                            [80.379, 43.031],
                            [80.804, 43.178],
                            [80.777, 43.308],
                            [80.687, 43.327],
                            [80.755, 43.494],
                            [80.396, 44.119],
                            [80.35, 44.482],
                            [80.413, 44.611],
                            [80.17, 44.845],
                            [79.999, 44.794],
                            [79.888, 44.909],
                            [80.104, 45.053],
                            [80.391, 45.044],
                            [80.727, 45.177],
                            [80.898, 45.128],
                            [81.78, 45.383],
                            [81.921, 45.233],
                            [82.563, 45.205],
                            [82.547, 45.426],
                            [82.282, 45.539],
                            [82.267, 45.62],
                            [82.346, 45.944],
                            [82.462, 45.98],
                            [83.03, 47.22],
                            [83.37, 47.179],
                            [83.925, 46.97],
                            [84.748, 47.01],
                            [84.955, 46.861],
                            [85.276, 47.069],
                            [85.546, 47.058],
                            [85.701, 47.288],
                            [85.529, 48.027],
                            [85.586, 48.191],
                            [85.79, 48.419],
                            [86.226, 48.432],
                            [86.586, 48.542],
                            [86.781, 48.732],
                            [86.823, 48.846],
                            [86.732, 48.994],
                            [86.897, 49.134],
                            [87.437, 49.075],
                            [87.821, 49.174],
                            [87.912, 48.98],
                            [87.744, 48.874],
                            [88.097, 48.717],
                            [87.973, 48.576],
                            [88.514, 48.409],
                            [88.638, 48.184],
                            [88.934, 48.118],
                            [89.078, 47.987],
                            [89.569, 48.038],
                            [89.768, 47.833],
                            [90.066, 47.884],
                            [90.135, 47.723],
                            [90.385, 47.644],
                            [90.562, 47.207],
                            [90.767, 46.993],
                            [90.901, 46.961],
                            [91.054, 46.717],
                            [91.018, 46.582],
                            [91.076, 46.549],
                            [90.9, 46.312],
                            [91.028, 46.023],
                            [90.715, 45.729],
                            [90.67, 45.548],
                            [90.882, 45.192],
                            [91.13, 45.216],
                            [91.618, 45.069],
                            [93.509, 44.968],
                            [94.215, 44.668],
                            [94.359, 44.516],
                            [94.723, 44.341],
                            [94.999, 44.253],
                            [95.414, 44.299],
                            [95.327, 44.029],
                            [95.527, 44.007],
                            [95.885, 43.271],
                            [96.364, 42.901],
                            [96.386, 42.728],
                            [97.173, 42.795],
                            [99.508, 42.568],
                            [100.325, 42.69],
                            [100.863, 42.671],
                            [101.804, 42.504],
                            [102.076, 42.224],
                            [102.712, 42.153],
                            [103.419, 41.882],
                            [103.857, 41.801],
                            [104.53, 41.875],
                            [104.524, 41.662],
                            [104.923, 41.654],
                            [105.01, 41.583],
                            [105.231, 41.751],
                            [105.742, 41.949],
                            [107.466, 42.459],
                            [109.292, 42.436],
                            [110.437, 42.781],
                            [111.021, 43.33],
                            [111.951, 43.693],
                            [111.884, 43.924],
                            [111.416, 44.357],
                            [111.765, 44.969],
                            [112.003, 45.091],
                            [112.429, 45.075],
                            [112.799, 44.854],
                            [113.631, 44.745],
                            [114.117, 44.957],
                            [114.46, 45.213],
                            [114.551, 45.388],
                            [115.365, 45.392],
                            [115.7, 45.46],
                            [116.035, 45.685],
                            [116.174, 45.689],
                            [116.287, 45.775],
                            [116.272, 45.967],
                            [116.585, 46.292],
                            [116.835, 46.384],
                            [117.372, 46.36],
                            [117.42, 46.582],
                            [117.611, 46.6],
                            [117.719, 46.517],
                            [118.316, 46.74],
                            [118.788, 46.687],
                            [118.914, 46.775],
                            [119.105, 46.642],
                            [119.374, 46.603],
                            [119.678, 46.585],
                            [119.912, 46.67],
                            [119.929, 46.904],
                            [119.716, 47.196],
                            [119.322, 47.427],
                            [119.366, 47.477],
                            [119.152, 47.541],
                            [119.134, 47.664],
                            [118.773, 47.771],
                            [118.568, 47.992],
                            [117.813, 48.016],
                            [117.384, 47.641],
                            [116.818, 47.898],
                            [116.266, 47.877],
                            [115.939, 47.683],
                            [115.581, 47.922],
                            [115.529, 48.155],
                            [115.823, 48.259],
                            [115.802, 48.523],
                            [116.078, 48.822],
                            [116.049, 48.873],
                            [116.725, 49.856],
                            [117.069, 49.696],
                            [117.816, 49.521],
                            [118.573, 49.931],
                            [119.092, 49.986],
                            [119.35, 50.164],
                            [119.37, 50.35],
                            [119.126, 50.39],
                            [119.499, 50.747],
                            [119.502, 50.891],
                            [119.764, 51.092],
                            [119.76, 51.214],
                            [119.946, 51.361],
                            [120.088, 51.679],
                            [120.657, 51.926],
                            [120.787, 52.158],
                            [120.62, 52.354],
                            [120.729, 52.545],
                            [120.462, 52.645],
                            [120.066, 52.589],
                            [120.032, 52.774],
                            [120.289, 52.863],
                            [120.883, 53.295],
                            [121.235, 53.281],
                            [122.339, 53.505],
                            [122.435, 53.445],
                            [122.845, 53.457],
                            [123.28, 53.564],
                            [123.499, 53.498],
                            [123.517, 53.558],
                            [123.545, 53.498],
                            [123.613, 53.551],
                            [123.894, 53.481],
                            [124.124, 53.348],
                            [124.252, 53.376],
                            [124.436, 53.224],
                            [124.688, 53.205],
                            [124.873, 53.099],
                            [124.888, 53.164],
                            [125.142, 53.204],
                            [125.521, 53.05],
                            [125.62, 53.082],
                            [125.752, 52.985],
                            [125.671, 52.864],
                            [125.836, 52.899],
                            [125.967, 52.76],
                            [126.116, 52.768],
                            [125.979, 52.612],
                            [126.207, 52.535],
                            [126.191, 52.474],
                            [126.354, 52.389],
                            [126.328, 52.31],
                            [126.437, 52.296],
                            [126.307, 52.206],
                            [126.562, 52.132],
                            [126.462, 51.948],
                            [126.734, 51.712],
                            [126.679, 51.596],
                            [126.842, 51.533],
                            [126.791, 51.433],
                            [126.924, 51.387],
                            [126.825, 51.273],
                            [126.903, 51.245],
                            [126.877, 51.316],
                            [126.982, 51.327],
                            [126.9, 51.201],
                            [126.923, 51.062],
                            [127.301, 50.748],
                            [127.369, 50.581],
                            [127.294, 50.471],
                            [127.365, 50.428],
                            [127.337, 50.33],
                            [127.608, 50.23],
                            [127.497, 50.041],
                            [127.545, 49.809],
                            [127.828, 49.59],
                            [128.186, 49.539],
                            [128.784, 49.59],
                            [128.761, 49.482],
                            [129.014, 49.457],
                            [129.103, 49.356],
                            [129.519, 49.424],
                            [129.574, 49.288],
                            [129.73, 49.288],
                            [129.929, 49.045],
                            [130.238, 48.869],
                            [130.68, 48.881],
                            [130.539, 48.612],
                            [130.625, 48.493],
                            [130.767, 48.508],
                            [130.748, 48.404],
                            [130.846, 48.301],
                            [130.666, 48.105],
                            [130.891, 47.927],
                            [130.998, 47.705],
                            [131.456, 47.747],
                            [131.622, 47.659],
                            [132.345, 47.767],
                            [132.558, 47.718],
                            [132.672, 47.956],
                            [132.819, 47.937],
                            [133.103, 48.129],
                            [133.531, 48.116],
                            [133.741, 48.255],
                            [134.203, 48.382],
                            [134.779, 48.37],
                            [135.095, 48.441],
                            [134.679, 48.256],
                            [134.55, 47.991],
                            [134.78, 47.716],
                            [134.568, 47.478],
                            [134.178, 47.326],
                            [134.222, 47.105],
                            [134.064, 46.98],
                            [134.015, 46.644],
                            [133.85, 46.475],
                            [133.95, 46.399],
                            [133.869, 46.344],
                            [133.917, 46.266],
                            [133.694, 46.156],
                            [133.747, 46.071],
                            [133.676, 45.943],
                            [133.468, 45.835],
                            [133.476, 45.62],
                            [133.142, 45.429],
                            [133.14, 45.128],
                            [132.953, 45.018],
                            [132.003, 45.255],
                            [131.888, 45.342],
                            [131.494, 44.968],
                            [131.108, 44.938],
                            [130.967, 44.854],
                            [131.112, 44.71],
                            [131.31, 44.048],
                            [131.243, 43.987],
                            [131.194, 43.562],
                            [131.32, 43.499],
                            [131.318, 43.398],
                            [131.103, 43.024],
                            [131.145, 42.936],
                            [130.402, 42.729],
                            [130.592, 42.672],
                            [130.633, 42.591],
                            [130.565, 42.507],
                            [130.646, 42.426],
                            [130.577, 42.439],
                            [130.523, 42.622],
                            [130.442, 42.55],
                            [130.258, 42.711],
                            [130.267, 42.903],
                            [129.897, 43.002],
                            [129.711, 42.429],
                            [129.588, 42.448],
                            [129.554, 42.36],
                            [129.344, 42.452],
                            [129.204, 42.319],
                            [129.222, 42.212],
                            [128.91, 42.013],
                            [128.034, 42],
                            [128.158, 41.73],
                            [128.316, 41.604],
                            [128.208, 41.412],
                            [128.115, 41.364],
                            [128.013, 41.448],
                            [127.658, 41.406],
                            [127.264, 41.48],
                            [127.105, 41.546],
                            [127.184, 41.595],
                            [126.948, 41.809],
                            [126.796, 41.696],
                            [126.697, 41.752],
                            [126.565, 41.616],
                            [126.536, 41.358],
                            [126.438, 41.354],
                            [126.123, 41.091],
                            [125.976, 40.913],
                            [126.028, 40.902],
                            [125.717, 40.872],
                            [125.636, 40.808],
                            [125.685, 40.769],
                            [125.585, 40.788],
                            [125.421, 40.634],
                            [125.29, 40.658],
                            [125.048, 40.55],
                            [125.044, 40.466],
                            [124.903, 40.484],
                            [124.445, 40.163]
                        ],

                        [
                            [122.51865306, 23.46078502],
                            [122.51742454, 23.45790762],
                            [122.51536697, 23.45555069],
                            [122.51268178, 23.45394494],
                            [122.50963181, 23.45324755],
                            [122.5065156, 23.45352678],
                            [122.5036382, 23.45475531],
                            [122.50128127, 23.45681287],
                            [122.49967552, 23.45949807],
                            [122.49897813, 23.46254804],
                            [122.49925737, 23.46566424],
                            [122.77921829, 24.57855302],
                            [122.78044682, 24.58143041],
                            [122.78250438, 24.58378734],
                            [122.78518957, 24.5853931],
                            [122.78823955, 24.58609049],
                            [122.79135575, 24.58581125],
                            [122.79423315, 24.58458272],
                            [122.79659008, 24.58252516],
                            [122.79819583, 24.57983997],
                            [122.79889322, 24.57678999],
                            [122.79861399, 24.57367379],
                            [122.51865306, 23.46078502]
                        ],

                        [
                            [121.17202617, 20.8054593],
                            [121.16966862, 20.80340244],
                            [121.16679085, 20.80217478],
                            [121.16367457, 20.80189649],
                            [121.1606248, 20.8025948],
                            [121.1579401, 20.80420136],
                            [121.15588324, 20.80655891],
                            [121.15465558, 20.80943668],
                            [121.15437729, 20.81255297],
                            [121.1550756, 20.81560273],
                            [121.15668216, 20.81828744],
                            [121.89404403, 21.70026162],
                            [121.89640158, 21.70231847],
                            [121.89927934, 21.70354613],
                            [121.90239563, 21.70382443],
                            [121.9054454, 21.70312611],
                            [121.9081301, 21.70151955],
                            [121.91018696, 21.699162],
                            [121.91141462, 21.69628423],
                            [121.91169291, 21.69316794],
                            [121.9109946, 21.69011818],
                            [121.90938804, 21.68743347],
                            [121.17202617, 20.8054593]
                        ],

                        [
                            [119.47366172, 18.00707291],
                            [119.47175735, 18.00459056],
                            [119.46917909, 18.0028182],
                            [119.46617933, 18.0019293],
                            [119.4630517, 18.00201089],
                            [119.46010237, 18.00305497],
                            [119.45762002, 18.00495935],
                            [119.45584765, 18.00753761],
                            [119.45495876, 18.01053737],
                            [119.45504035, 18.01366499],
                            [119.45608443, 18.01661433],
                            [120.00812005, 19.0335793],
                            [120.01002443, 19.03606165],
                            [120.01260269, 19.03783401],
                            [120.01560245, 19.03872291],
                            [120.01873007, 19.03864132],
                            [120.02167941, 19.03759723],
                            [120.02416175, 19.03569286],
                            [120.02593412, 19.0331146],
                            [120.02682302, 19.03011484],
                            [120.02674143, 19.02698721],
                            [120.02569734, 19.02403788],
                            [119.47366172, 18.00707291]
                        ],

                        [
                            [119.0726757, 15.04098494],
                            [119.0726746, 15.04083704],
                            [119.07218171, 15.00751424],
                            [119.07164663, 15.00443165],
                            [119.07018516, 15.00166528],
                            [119.06794036, 14.99948592],
                            [119.06513198, 14.99810691],
                            [119.06203491, 14.99766324],
                            [119.05895232, 14.99819832],
                            [119.05618595, 14.99965979],
                            [119.05400659, 15.00190458],
                            [119.05262758, 15.00471297],
                            [119.0521839, 15.00781004],
                            [119.0526757, 15.04105889],
                            [119.0526757, 16.04388528],
                            [119.05316513, 16.04697545],
                            [119.05458553, 16.04976313],
                            [119.05679784, 16.05197545],
                            [119.05958553, 16.05339584],
                            [119.0626757, 16.05388528],
                            [119.06576587, 16.05339584],
                            [119.06855355, 16.05197545],
                            [119.07076587, 16.04976313],
                            [119.07218626, 16.04697545],
                            [119.0726757, 16.04388528],
                            [119.0726757, 15.04098494]
                        ],

                        [
                            [118.68646749, 11.18959191],
                            [118.85557939, 11.6136711],
                            [118.9698053, 11.99151854],
                            [118.97116801, 11.99433487],
                            [118.97333431, 11.99659227],
                            [118.97609216, 11.99806975],
                            [118.9791716, 11.99862269],
                            [118.98227119, 11.99819697],
                            [118.98508753, 11.99683427],
                            [118.98734492, 11.99466796],
                            [118.9888224, 11.99191011],
                            [118.98937534, 11.98883067],
                            [118.98894963, 11.98573108],
                            [118.87459939, 11.60747236],
                            [118.87431591, 11.606662],
                            [118.70476212, 11.18147468],
                            [118.70409227, 11.18010771],
                            [118.54242469, 10.9053354],
                            [118.54043581, 10.90292022],
                            [118.53779795, 10.90123786],
                            [118.53476931, 10.90045298],
                            [118.53164636, 10.90064241],
                            [118.5287348, 10.90178762],
                            [118.52631962, 10.9037765],
                            [118.52463726, 10.90641436],
                            [118.52385237, 10.909443],
                            [118.52404181, 10.91256595],
                            [118.52518702, 10.91547751],
                            [118.68646749, 11.18959191]
                        ],

                        [
                            [115.54466883, 7.14672265],
                            [115.54229721, 7.14468204],
                            [115.53941108, 7.14347417],
                            [115.53629295, 7.14321728],
                            [115.53324806, 7.14393652],
                            [115.53057445, 7.14556148],
                            [115.52853383, 7.1479331],
                            [115.52732596, 7.15081924],
                            [115.52706908, 7.15393736],
                            [115.52778832, 7.15698226],
                            [115.52941328, 7.15965587],
                            [116.23523025, 7.99221221],
                            [116.23760187, 7.99425282],
                            [116.240488, 7.99546069],
                            [116.24360613, 7.99571758],
                            [116.24665102, 7.99499834],
                            [116.24932463, 7.99337338],
                            [116.25136525, 7.99100176],
                            [116.25257312, 7.98811563],
                            [116.25283001, 7.9849975],
                            [116.25211077, 7.98195261],
                            [116.2504858, 7.979279],
                            [115.54466883, 7.14672265]
                        ],

                        [
                            [112.30705249, 3.53487257],
                            [112.51501594, 3.59753306],
                            [112.84361424, 3.7506962],
                            [112.84662187, 3.75155809],
                            [112.84974864, 3.7514484],
                            [112.85268847, 3.75037785],
                            [112.8551536, 3.74845124],
                            [112.85690272, 3.74585715],
                            [112.85776462, 3.74284952],
                            [112.85765492, 3.73972276],
                            [112.85658437, 3.73678292],
                            [112.85465776, 3.7343178],
                            [112.85206367, 3.73256867],
                            [112.52281386, 3.57910186],
                            [112.52147408, 3.5785908],
                            [112.31248917, 3.51562254],
                            [112.31181658, 3.51544515],
                            [111.79132585, 3.39736822],
                            [111.78820398, 3.39716187],
                            [111.78517113, 3.39793033],
                            [111.78252419, 3.39959839],
                            [111.78052226, 3.40200275],
                            [111.77936129, 3.40490807],
                            [111.77915495, 3.40802995],
                            [111.77992341, 3.41106279],
                            [111.78159146, 3.41370973],
                            [111.78399583, 3.41571167],
                            [111.78690114, 3.41687263],
                            [112.30705249, 3.53487257]
                        ],

                        [
                            [108.26055972, 6.08912451],
                            [108.26004031, 6.09098419],
                            [108.23638164, 6.22427602],
                            [108.23630689, 6.22476797],
                            [108.19687578, 6.53630242],
                            [108.19679674, 6.53760583],
                            [108.1987683, 6.95072469],
                            [108.19897125, 6.95268198],
                            [108.22460147, 7.07791743],
                            [108.22570055, 7.08084671],
                            [108.22765103, 7.083293],
                            [108.230262, 7.08501682],
                            [108.23327786, 7.08584944],
                            [108.23640341, 7.08570936],
                            [108.2393327, 7.08461028],
                            [108.24177899, 7.0826598],
                            [108.24350281, 7.08004883],
                            [108.24433543, 7.07703297],
                            [108.24419535, 7.07390742],
                            [108.21876335, 6.94964057],
                            [108.21679964, 6.53816468],
                            [108.25611734, 6.22752625],
                            [108.279563, 6.09543449],
                            [108.30878645, 6.01987736],
                            [108.30944469, 6.0168187],
                            [108.30912553, 6.01370633],
                            [108.30786022, 6.01084492],
                            [108.30577262, 6.00851455],
                            [108.30306706, 6.00694335],
                            [108.3000084, 6.00628511],
                            [108.29689603, 6.00660426],
                            [108.29403462, 6.00786957],
                            [108.29170425, 6.00995718],
                            [108.29013305, 6.01266273],
                            [108.26055972, 6.08912451]
                        ],

                        [
                            [110.12822847, 11.36894451],
                            [110.18898148, 11.48996382],
                            [110.23982347, 11.61066468],
                            [110.28485499, 11.78705054],
                            [110.3083549, 11.94803461],
                            [110.3142445, 12.14195265],
                            [110.312278, 12.23998238],
                            [110.31270536, 12.24308175],
                            [110.31406956, 12.24589736],
                            [110.31623706, 12.2481536],
                            [110.3189957, 12.24962962],
                            [110.32207543, 12.25018094],
                            [110.32517479, 12.24975358],
                            [110.3279904, 12.24838938],
                            [110.33024665, 12.24622187],
                            [110.33172267, 12.24346324],
                            [110.33227398, 12.24038351],
                            [110.33424553, 12.14210167],
                            [110.33424294, 12.14159753],
                            [110.32832827, 11.94685414],
                            [110.32822801, 11.94571326],
                            [110.30456934, 11.78364161],
                            [110.30436343, 11.7826124],
                            [110.25901765, 11.60499559],
                            [110.25854422, 11.60358735],
                            [110.20728377, 11.48189306],
                            [110.20700505, 11.48128846],
                            [110.14588682, 11.35954163],
                            [110.14541497, 11.35870461],
                            [110.07246741, 11.24270688],
                            [110.07040803, 11.24035153],
                            [110.0677216, 11.23874785],
                            [110.06467109, 11.23805281],
                            [110.0615551, 11.23833444],
                            [110.05867865, 11.23956519],
                            [110.05632331, 11.24162456],
                            [110.05471962, 11.24431099],
                            [110.05402458, 11.2473615],
                            [110.05430621, 11.25047749],
                            [110.05553696, 11.25335394],
                            [110.12822847, 11.36894451]
                        ],

                        [
                            [109.82951587, 15.22896754],
                            [109.77065019, 15.44468789],
                            [109.67264555, 15.66561455],
                            [109.57455994, 15.82609887],
                            [109.51574449, 15.91095759],
                            [109.29314007, 16.19491896],
                            [109.29161878, 16.19765288],
                            [109.29101677, 16.20072311],
                            [109.29139298, 16.2038291],
                            [109.29271057, 16.20666681],
                            [109.29484059, 16.20895848],
                            [109.29757451, 16.21047978],
                            [109.30064474, 16.21108179],
                            [109.30375073, 16.21070558],
                            [109.30658844, 16.20938798],
                            [109.30888011, 16.20725797],
                            [109.53166592, 15.92306523],
                            [109.53201478, 15.92259221],
                            [109.59116145, 15.8372556],
                            [109.59147511, 15.83677407],
                            [109.6900529, 15.67548445],
                            [109.69066131, 15.67432448],
                            [109.7892391, 15.45210582],
                            [109.78974541, 15.45068337],
                            [109.84889209, 15.23393326],
                            [109.84903675, 15.23333003],
                            [109.8648092, 15.15722425],
                            [109.86495704, 15.15409906],
                            [109.86413191, 15.15108113],
                            [109.86241457, 15.1484659],
                            [109.85997314, 15.14650935],
                            [109.85704658, 15.145403],
                            [109.85392139, 15.14525516],
                            [109.85090347, 15.14608029],
                            [109.84828823, 15.14779763],
                            [109.84633168, 15.15023907],
                            [109.84522534, 15.15316562],
                            [109.82951587, 15.22896754]
                        ],

                        [
                            [123.046, 39.53],
                            [123.045, 39.53],
                            [123.047, 39.531],
                            [123.049, 39.529],
                            [123.049, 39.53],
                            [123.049, 39.529],
                            [123.046, 39.53]
                        ],
                        [
                            [122.495, 39.249],
                            [122.498, 39.25],
                            [122.498, 39.249],
                            [122.497, 39.248],
                            [122.494, 39.249],
                            [122.495, 39.249]
                        ],
                        [
                            [122.597, 39.206],
                            [122.588, 39.212],
                            [122.608, 39.226],
                            [122.612, 39.216],
                            [122.598, 39.21],
                            [122.597, 39.206]
                        ],
                        [
                            [118.633, 39.044],
                            [118.632, 39.046],
                            [118.642, 39.051],
                            [118.648, 39.059],
                            [118.642, 39.049],
                            [118.633, 39.044]
                        ],
                        [
                            [122.759, 39.025],
                            [122.764, 39.015],
                            [122.758, 39.01],
                            [122.732, 39.014],
                            [122.705, 39.044],
                            [122.759, 39.025]
                        ],
                        [
                            [121.779, 31.31],
                            [121.572, 31.436],
                            [121.509, 31.49],
                            [121.562, 31.486],
                            [121.586, 31.455],
                            [121.769, 31.391],
                            [121.779, 31.31]
                        ],
                        [
                            [122.495, 30.409],
                            [122.493, 30.407],
                            [122.49, 30.409],
                            [122.492, 30.411],
                            [122.499, 30.409],
                            [122.495, 30.409]
                        ],
                        [
                            [121.981, 30.068],
                            [121.975, 30.073],
                            [121.986, 30.084],
                            [121.988, 30.078],
                            [121.991, 30.074],
                            [121.981, 30.068]
                        ],
                        [
                            [122.239, 29.658],
                            [122.233, 29.658],
                            [122.23, 29.661],
                            [122.245, 29.66],
                            [122.246, 29.654],
                            [122.239, 29.658]
                        ],
                        [
                            [119.694, 25.304],
                            [119.688, 25.328],
                            [119.702, 25.343],
                            [119.713, 25.315],
                            [119.696, 25.311],
                            [119.694, 25.304]
                        ],
                        [
                            [119.477, 25.248],
                            [119.58, 25.213],
                            [119.58, 25.195],
                            [119.559, 25.198],
                            [119.545, 25.19],
                            [119.54, 25.182],
                            [119.554, 25.161],
                            [119.441, 25.205],
                            [119.477, 25.248]
                        ],
                        [
                            [114.629, 22.448],
                            [114.62, 22.466],
                            [114.656, 22.466],
                            [114.651, 22.454],
                            [114.639, 22.454],
                            [114.629, 22.448]
                        ],
                        [
                            [114.301, 22.35],
                            [114.292, 22.365],
                            [114.298, 22.373],
                            [114.301, 22.372],
                            [114.303, 22.363],
                            [114.301, 22.35]
                        ],
                        [
                            [112.775, 21.564],
                            [112.782, 21.668],
                            [112.713, 21.673],
                            [112.709, 21.701],
                            [112.876, 21.773],
                            [112.876, 21.75],
                            [112.833, 21.736],
                            [112.811, 21.704],
                            [112.775, 21.564]
                        ],
                        [
                            [110.107, 20.027],
                            [110.698, 20.163],
                            [110.822, 20.026],
                            [110.962, 20.024],
                            [111.044, 19.764],
                            [111.069, 19.619],
                            [110.677, 19.286],
                            [110.499, 18.652],
                            [110.261, 18.619],
                            [110.081, 18.382],
                            [109.794, 18.344],
                            [109.741, 18.185],
                            [109.584, 18.144],
                            [109.118, 18.322],
                            [108.953, 18.308],
                            [108.883, 18.416],
                            [108.658, 18.463],
                            [108.587, 18.838],
                            [108.664, 19.374],
                            [109.155, 19.71],
                            [109.265, 19.905],
                            [109.499, 19.873],
                            [109.663, 20.014],
                            [110.107, 20.027]
                        ],
                        [
                            [113.897, 7.607],
                            [114.415, 7.953],
                            [114.541, 7.946],
                            [114.368, 7.639],
                            [114.059, 7.538],
                            [113.897, 7.607]
                        ],
                        [
                            [117.708, 15.183],
                            [117.719, 15.229],
                            [117.743, 15.234],
                            [117.839, 15.159],
                            [117.845, 15.127],
                            [117.732, 15.218],
                            [117.725, 15.131],
                            [117.829, 15.11],
                            [117.727, 15.105],
                            [117.708, 15.183]
                        ],
                        [
                            [111.716, 16.235],
                            [111.658, 16.259],
                            [111.772, 16.262],
                            [111.816, 16.187],
                            [111.733, 16.171],
                            [111.774, 16.217],
                            [111.716, 16.235]
                        ],
                        [
                            [122.178, 29.978],
                            [122.195, 29.958],
                            [122.183, 29.955],
                            [122.168, 29.967],
                            [122.154, 29.971],
                            [122.142, 29.97],
                            [122.178, 29.978]
                        ],
                        [
                            [113.554, 22.107],
                            [113.532, 22.176],
                            [113.538, 22.209],
                            [113.546, 22.21],
                            [113.548, 22.213],
                            [113.549, 22.214],
                            [113.55, 22.214],
                            [113.55, 22.214],
                            [113.556, 22.214],
                            [113.559, 22.213],
                            [113.565, 22.211],
                            [113.567, 22.21],
                            [113.604, 22.133],
                            [113.554, 22.107]
                        ],
                        [
                            [124.486, 40.182],
                            [124.487, 40.175],
                            [124.478, 40.179],
                            [124.481, 40.181],
                            [124.484, 40.181],
                            [124.486, 40.182]
                        ],
                        [
                            [111.203, 19.925],
                            [111.203, 19.926],
                            [111.204, 19.926],
                            [111.204, 19.926],
                            [111.204, 19.924],
                            [111.203, 19.924],
                            [111.203, 19.925]
                        ],
                        [
                            [116.489, 10.396],
                            [116.534, 10.426],
                            [116.515, 10.349],
                            [116.648, 10.343],
                            [116.467, 10.309],
                            [116.489, 10.396]
                        ],
                        [
                            [114.233, 22.54],
                            [114.224, 22.538],
                            [114.214, 22.524],
                            [114.218, 22.524],
                            [114.223, 22.526],
                            [114.226, 22.529],
                            [114.232, 22.528],
                            [114.247, 22.547],
                            [114.262, 22.547],
                            [114.269, 22.524],
                            [114.292, 22.522],
                            [114.283, 22.509],
                            [114.309, 22.497],
                            [114.342, 22.505],
                            [114.205, 22.437],
                            [114.224, 22.427],
                            [114.278, 22.435],
                            [114.347, 22.477],
                            [114.412, 22.411],
                            [114.386, 22.411],
                            [114.363, 22.332],
                            [114.341, 22.349],
                            [114.338, 22.373],
                            [114.321, 22.389],
                            [114.284, 22.388],
                            [114.266, 22.201],
                            [114.078, 22.33],
                            [114.005, 22.267],
                            [114.009, 22.212],
                            [113.849, 22.191],
                            [113.898, 22.309],
                            [113.955, 22.298],
                            [114.026, 22.345],
                            [113.918, 22.418],
                            [114, 22.49],
                            [114.025, 22.481],
                            [114.029, 22.503],
                            [114.056, 22.5],
                            [114.057, 22.5],
                            [114.06, 22.501],
                            [114.061, 22.502],
                            [114.062, 22.502],
                            [114.062, 22.503],
                            [114.064, 22.51],
                            [114.069, 22.514],
                            [114.07, 22.514],
                            [114.074, 22.515],
                            [114.077, 22.515],
                            [114.079, 22.515],
                            [114.081, 22.513],
                            [114.082, 22.512],
                            [114.088, 22.516],
                            [114.084, 22.527],
                            [114.09, 22.529],
                            [114.093, 22.533],
                            [114.094, 22.534],
                            [114.095, 22.534],
                            [114.097, 22.534],
                            [114.103, 22.531],
                            [114.114, 22.534],
                            [114.115, 22.528],
                            [114.117, 22.527],
                            [114.153, 22.539],
                            [114.154, 22.539],
                            [114.153, 22.541],
                            [114.153, 22.541],
                            [114.155, 22.543],
                            [114.157, 22.544],
                            [114.157, 22.552],
                            [114.158, 22.552],
                            [114.16, 22.552],
                            [114.161, 22.552],
                            [114.165, 22.558],
                            [114.166, 22.558],
                            [114.166, 22.558],
                            [114.167, 22.559],
                            [114.167, 22.558],
                            [114.169, 22.557],
                            [114.181, 22.557],
                            [114.186, 22.552],
                            [114.195, 22.552],
                            [114.2, 22.553],
                            [114.201, 22.553],
                            [114.201, 22.554],
                            [114.202, 22.554],
                            [114.206, 22.555],
                            [114.215, 22.554],
                            [114.218, 22.552],
                            [114.223, 22.552],
                            [114.233, 22.54]
                        ],
                        [
                            [110.518, 21.079],
                            [110.526, 20.916],
                            [110.461, 20.989],
                            [110.199, 20.943],
                            [110.306, 21.088],
                            [110.518, 21.079]
                        ],
                        [
                            [120.444, 22.441],
                            [120.274, 22.56],
                            [120.133, 23],
                            [120.022, 23.06],
                            [120.103, 23.701],
                            [121.025, 25.04],
                            [121.602, 25.304],
                            [121.745, 25.162],
                            [121.929, 25.13],
                            [122.012, 25.001],
                            [121.845, 24.836],
                            [121.885, 24.53],
                            [121.639, 24.084],
                            [121.429, 23.124],
                            [120.995, 22.566],
                            [120.867, 21.889],
                            [120.702, 21.927],
                            [120.641, 22.241],
                            [120.444, 22.441]
                        ],
                        [
                            [122.451, 30.742],
                            [122.478, 30.714],
                            [122.535, 30.727],
                            [122.537, 30.701],
                            [122.433, 30.693],
                            [122.451, 30.742]
                        ],
                        [
                            [122.26, 30.236],
                            [122.263, 30.266],
                            [122.314, 30.256],
                            [122.313, 30.25],
                            [122.277, 30.247],
                            [122.26, 30.236]
                        ],
                        [
                            [122.287, 30.226],
                            [122.273, 30.237],
                            [122.314, 30.249],
                            [122.318, 30.272],
                            [122.401, 30.275],
                            [122.427, 30.251],
                            [122.287, 30.226]
                        ],
                        [
                            [122.257, 30.065],
                            [122.347, 30.017],
                            [122.324, 29.941],
                            [122.174, 29.988],
                            [122.14, 29.987],
                            [122.123, 29.983],
                            [122.107, 30.006],
                            [122.073, 30.005],
                            [122.028, 29.991],
                            [121.981, 30.049],
                            [121.936, 30.165],
                            [122.257, 30.065]
                        ]
                    ]
                },
                properties: {
                    name: '中华人民共和国',
                    adcode: '100000',
                    telecode: '86',
                    level: 'country',
                    parent: null,
                    center: {
                        lng: 116.3683244,
                        lat: 39.915085
                    }
                }
            }]
        };

        var datas = [
            [{
                fromName: '合肥',
                toName: '上海',
                count: '1',
                amount: '89999',
                coords: [
                    [118.8062, 31.9208],
                    [119.4543, 25.9222]
                ]
            }, {
                fromName: '拉萨',
                toName: '上海',
                count: '1',
                amount: '89999',
                coords: [
                    [127.9688, 45.368],
                    [119.4543, 25.9222]
                ]

            }, {
                fromName: '吉林',
                toName: '上海',
                count: '1',
                amount: '89999',
                coords: [
                    [110.3467, 41.4899],
                    [119.4543, 25.9222]
                ]
            }, {
                fromName: '吉林',
                toName: '上海',
                count: '1',
                amount: '89999',
                coords: [
                    [125.8154, 44.2584],
                    [119.4543, 25.9222]
                ]
            }],
            [{
                fromName: '吉林',
                toName: '上海',
                count: '1',
                amount: '89999',
                coords: [
                    [116.4551, 40.2539],
                    [119.4543, 25.9222]
                ]
            }, {
                fromName: '吉林',
                toName: '上海',
                count: '1',
                amount: '89999',
                coords: [
                    [123.1238, 42.1216],
                    [119.4543, 25.9222]
                ]
            }, {
                fromName: '吉林',
                toName: '上海',
                count: '1',
                amount: '89999',
                coords: [
                    [114.4995, 38.1006],
                    [119.4543, 25.9222]
                ]
            }, {
                fromName: '吉林',
                toName: '上海',
                count: '1',
                amount: '89999',
                coords: [
                    [117.4219, 39.4189],
                    [119.4543, 25.9222]
                ]
            }, {
                fromName: '吉林',
                toName: '上海',
                count: '1',
                amount: '89999',
                coords: [
                    [112.3352, 37.9413],
                    [119.4543, 25.9222]
                ]
            }],
            [{
                "fromName": "天津市",
                "toName": "天津市",
                "coords": [
                    [117.19, 39.1256],
                    [117.19, 39.1256]
                ],
                "count": 1,
                "amount": 9544
            }, {
                "fromName": "唐山市",
                "toName": "沧州市",
                "coords": [
                    [118.175, 39.6351],
                    [116.857, 38.3106]
                ],
                "count": 1,
                "amount": 188
            }, {
                "fromName": "太原市",
                "toName": "临汾市",
                "coords": [
                    [112.549, 37.857],
                    [111.518, 36.0841]
                ],
                "count": 1,
                "amount": 550
            }, {
                "fromName": "太原市",
                "toName": "吕梁市",
                "coords": [
                    [112.549, 37.857],
                    [111.134, 37.5244]
                ],
                "count": 1,
                "amount": 7297
            }, {
                "fromName": "锦州市",
                "toName": "朝阳市",
                "coords": [
                    [121.136, 41.1193],
                    [120.451, 41.5768]
                ],
                "count": 1,
                "amount": 1635
            }, {
                "fromName": "玉林市",
                "toName": "太原市",
                "coords": [
                    [110.154, 22.6314],
                    [112.549, 37.857]
                ],
                "count": 1,
                "amount": 1
            }, {
                "fromName": "玉林市",
                "toName": "锦州市",
                "coords": [
                    [110.154, 22.6314],
                    [121.136, 41.1193]
                ],
                "count": 1,
                "amount": 109
            }, {
                "fromName": "玉林市",
                "toName": "重庆市",
                "coords": [
                    [110.154, 22.6314],
                    [106.505, 29.5332]
                ],
                "count": 1,
                "amount": 1
            }],
            [{
                "fromName": "眉山市",
                "toName": "资阳市",
                "coords": [
                    [103.832, 30.0483],
                    [104.642, 30.1222]
                ],
                "count": 1,
                "amount": 375
            }, {
                "fromName": "资阳市",
                "toName": "成都市",
                "coords": [
                    [104.642, 30.1222],
                    [104.066, 30.6595]
                ],
                "count": 1,
                "amount": 5195
            }, {
                "fromName": "资阳市",
                "toName": "内江市",
                "coords": [
                    [104.642, 30.1222],
                    [105.066, 29.5871]
                ],
                "count": 1,
                "amount": 3523
            }, {
                "fromName": "省直辖县级行政区划",
                "toName": "武汉市",
                "coords": [
                    [114.299, 30.5844],
                    [114.299, 30.5844]
                ],
                "count": 1,
                "amount": 3442
            }, {
                "fromName": "省直辖县级行政区划",
                "toName": "宜昌市",
                "coords": [
                    [114.299, 30.5844],
                    [111.291, 30.7026]
                ],
                "count": 1,
                "amount": 4754
            }, {
                "fromName": "省直辖县级行政区划",
                "toName": "荆门市",
                "coords": [
                    [114.299, 30.5844],
                    [112.204, 31.0354]
                ],
                "count": 1,
                "amount": 145
            }, {
                "fromName": "襄阳市",
                "toName": "武汉市",
                "coords": [
                    [112.144, 32.0424],
                    [114.299, 30.5844]
                ],
                "count": 1,
                "amount": 4158
            }, {
                "fromName": "襄阳市",
                "toName": "省直辖县级行政区划",
                "coords": [
                    [112.144, 32.0424],
                    [114.299, 30.5844]
                ],
                "count": 1,
                "amount": 835
            }],
            [{
                "fromName": "锦州市",
                "toName": "茂名市",
                "coords": [
                    [121.136, 41.1193],
                    [110.919, 21.6597]
                ],
                "count": 1,
                "amount": 122
            }, {
                "fromName": "长春市",
                "toName": "松原市",
                "coords": [
                    [125.325, 43.8868],
                    [124.824, 45.1182]
                ],
                "count": 1,
                "amount": 190
            }, {
                "fromName": "南通市",
                "toName": "盐城市",
                "coords": [
                    [120.865, 32.0162],
                    [120.14, 33.3776]
                ],
                "count": 1,
                "amount": 5807
            }, {
                "fromName": "连云港市",
                "toName": "盐城市",
                "coords": [
                    [119.179, 34.6],
                    [120.14, 33.3776]
                ],
                "count": 1,
                "amount": 24
            }, {
                "fromName": "蚌埠市",
                "toName": "宿州市",
                "coords": [
                    [117.363, 32.9397],
                    [116.984, 33.6339]
                ],
                "count": 1,
                "amount": 1354
            }, {
                "fromName": "福州市",
                "toName": "莆田市",
                "coords": [
                    [119.306, 26.0753],
                    [119.008, 25.431]
                ],
                "count": 1,
                "amount": 985
            }, {
                "fromName": "景德镇市",
                "toName": "抚州市",
                "coords": [
                    [117.215, 29.2926],
                    [116.358, 27.9839]
                ],
                "count": 1,
                "amount": 787
            }, {
                "fromName": "青岛市",
                "toName": "潍坊市",
                "coords": [
                    [120.355, 36.083],
                    [119.107, 36.7093]
                ],
                "count": 1,
                "amount": 6052
            }, {
                "fromName": "枣庄市",
                "toName": "临沂市",
                "coords": [
                    [117.558, 34.8564],
                    [118.326, 35.0653]
                ],
                "count": 1,
                "amount": 1037
            }, {
                "fromName": "郑州市",
                "toName": "新乡市",
                "coords": [
                    [113.665, 34.758],
                    [113.884, 35.3026]
                ],
                "count": 1,
                "amount": 95
            }, {
                "fromName": "郑州市",
                "toName": "周口市",
                "coords": [
                    [113.665, 34.758],
                    [114.65, 33.6204]
                ],
                "count": 1,
                "amount": 1702
            }, {
                "fromName": "开封市",
                "toName": "周口市",
                "coords": [
                    [114.341, 34.7971],
                    [114.65, 33.6204]
                ],
                "count": 1,
                "amount": 902
            }, {
                "fromName": "平顶山市",
                "toName": "周口市",
                "coords": [
                    [113.308, 33.7352],
                    [114.65, 33.6204]
                ],
                "count": 1,
                "amount": 16802
            }, {
                "fromName": "新乡市",
                "toName": "郑州市",
                "coords": [
                    [113.884, 35.3026],
                    [113.665, 34.758]
                ],
                "count": 1,
                "amount": 39
            }, {
                "fromName": "新乡市",
                "toName": "鹤壁市",
                "coords": [
                    [113.884, 35.3026],
                    [114.295, 35.7482]
                ],
                "count": 1,
                "amount": 15600
            }, {
                "fromName": "武汉市",
                "toName": "宜昌市",
                "coords": [
                    [114.299, 30.5844],
                    [111.291, 30.7026]
                ],
                "count": 1,
                "amount": 575
            }, {
                "fromName": "成都市",
                "toName": "内江市",
                "coords": [
                    [104.066, 30.6595],
                    [105.066, 29.5871]
                ],
                "count": 1,
                "amount": 126
            }, {
                "fromName": "成都市",
                "toName": "眉山市",
                "coords": [
                    [104.066, 30.6595],
                    [103.832, 30.0483]
                ],
                "count": 1,
                "amount": 5600
            }, {
                "fromName": "铜川市",
                "toName": "泸州市",
                "coords": [
                    [108.98, 34.9166],
                    [105.443, 28.8891]
                ],
                "count": 1,
                "amount": 728
            }, {
                "fromName": "铜川市",
                "toName": "眉山市",
                "coords": [
                    [108.98, 34.9166],
                    [103.832, 30.0483]
                ],
                "count": 1,
                "amount": 1003
            }, {
                "fromName": "保定市",
                "toName": "沧州市",
                "coords": [
                    [115.482, 38.8677],
                    [116.857, 38.3106]
                ],
                "count": 1,
                "amount": 231
            }, {
                "fromName": "沧州市",
                "toName": "唐山市",
                "coords": [
                    [116.857, 38.3106],
                    [118.175, 39.6351]
                ],
                "count": 1,
                "amount": 378
            }, {
                "fromName": "朝阳市",
                "toName": "锦州市",
                "coords": [
                    [120.451, 41.5768],
                    [121.136, 41.1193]
                ],
                "count": 1,
                "amount": 890
            }, {
                "fromName": "朝阳市",
                "toName": "盐城市",
                "coords": [
                    [120.451, 41.5768],
                    [120.14, 33.3776]
                ],
                "count": 1,
                "amount": 120
            }, {
                "fromName": "四平市",
                "toName": "松原市",
                "coords": [
                    [124.371, 43.1703],
                    [124.824, 45.1182]
                ],
                "count": 1,
                "amount": 46
            }, {
                "fromName": "宿迁市",
                "toName": "亳州市",
                "coords": [
                    [118.275, 33.963],
                    [115.783, 33.8693]
                ],
                "count": 1,
                "amount": 40
            }, {
                "fromName": "阜阳市",
                "toName": "亳州市",
                "coords": [
                    [115.82, 32.897],
                    [115.783, 33.8693]
                ],
                "count": 1,
                "amount": 316
            }, {
                "fromName": "宿州市",
                "toName": "蚌埠市",
                "coords": [
                    [116.984, 33.6339],
                    [117.363, 32.9397]
                ],
                "count": 1,
                "amount": 1441
            }, {
                "fromName": "宿州市",
                "toName": "亳州市",
                "coords": [
                    [116.984, 33.6339],
                    [115.783, 33.8693]
                ],
                "count": 1,
                "amount": 311
            }, {
                "fromName": "龙岩市",
                "toName": "南平市",
                "coords": [
                    [117.03, 25.0916],
                    [118.178, 26.6356]
                ],
                "count": 1,
                "amount": 40923
            }, {
                "fromName": "赣州市",
                "toName": "衢州市",
                "coords": [
                    [114.94, 25.851],
                    [118.873, 28.9417]
                ],
                "count": 1,
                "amount": 692
            }, {
                "fromName": "临沂市",
                "toName": "潍坊市",
                "coords": [
                    [118.326, 35.0653],
                    [119.107, 36.7093]
                ],
                "count": 1,
                "amount": 2330
            }, {
                "fromName": "南阳市",
                "toName": "郑州市",
                "coords": [
                    [112.541, 32.9991],
                    [113.665, 34.758]
                ],
                "count": 1,
                "amount": 6580
            }, {
                "fromName": "荆门市",
                "toName": "武汉市",
                "coords": [
                    [112.204, 31.0354],
                    [114.299, 30.5844]
                ],
                "count": 1,
                "amount": 3920
            }, {
                "fromName": "荆门市",
                "toName": "省直辖县级行政区划",
                "coords": [
                    [112.204, 31.0354],
                    [114.299, 30.5844]
                ],
                "count": 1,
                "amount": 300
            }, {
                "fromName": "岳阳市",
                "toName": "益阳市",
                "coords": [
                    [113.133, 29.3703],
                    [112.355, 28.5701]
                ],
                "count": 1,
                "amount": 6401
            }, {
                "fromName": "重庆市",
                "toName": "重庆市",
                "coords": [
                    [106.505, 29.5332],
                    [106.505, 29.5332]
                ],
                "count": 1,
                "amount": 7726
            }, {
                "fromName": "泸州市",
                "toName": "成都市",
                "coords": [
                    [105.443, 28.8891],
                    [104.066, 30.6595]
                ],
                "count": 1,
                "amount": 8793
            }, {
                "fromName": "泸州市",
                "toName": "自贡市",
                "coords": [
                    [105.443, 28.8891],
                    [104.773, 29.3528]
                ],
                "count": 1,
                "amount": 1474
            }, {
                "fromName": "泸州市",
                "toName": "眉山市",
                "coords": [
                    [105.443, 28.8891],
                    [103.832, 30.0483]
                ],
                "count": 1,
                "amount": 3560
            }, {
                "fromName": "德阳市",
                "toName": "资阳市",
                "coords": [
                    [104.399, 31.128],
                    [104.642, 30.1222]
                ],
                "count": 1,
                "amount": 4967
            }, {
                "fromName": "绵阳市",
                "toName": "德阳市",
                "coords": [
                    [104.742, 31.464],
                    [104.399, 31.128]
                ],
                "count": 1,
                "amount": 390
            }, {
                "fromName": "绵阳市",
                "toName": "广元市",
                "coords": [
                    [104.742, 31.464],
                    [105.83, 32.4337]
                ],
                "count": 1,
                "amount": 24026
            }, {
                "fromName": "绵阳市",
                "toName": "宜宾市",
                "coords": [
                    [104.742, 31.464],
                    [104.631, 28.7602]
                ],
                "count": 1,
                "amount": 324
            }, {
                "fromName": "遂宁市",
                "toName": "绵阳市",
                "coords": [
                    [105.571, 30.5133],
                    [104.742, 31.464]
                ],
                "count": 1,
                "amount": 280
            }, {
                "fromName": "遂宁市",
                "toName": "广元市",
                "coords": [
                    [105.571, 30.5133],
                    [105.83, 32.4337]
                ],
                "count": 1,
                "amount": 55
            }, {
                "fromName": "宜宾市",
                "toName": "重庆市",
                "coords": [
                    [104.631, 28.7602],
                    [106.505, 29.5332]
                ],
                "count": 1,
                "amount": 310
            }, {
                "fromName": "宜宾市",
                "toName": "泸州市",
                "coords": [
                    [104.631, 28.7602],
                    [105.443, 28.8891]
                ],
                "count": 1,
                "amount": 1101
            }, {
                "fromName": "阿坝藏族羌族自治州",
                "toName": "内江市",
                "coords": [
                    [102.221, 31.8998],
                    [105.066, 29.5871]
                ],
                "count": 1,
                "amount": 228
            }, {
                "fromName": "渭南市",
                "toName": "平凉市",
                "coords": [
                    [109.503, 34.4994],
                    [106.685, 35.5428]
                ],
                "count": 1,
                "amount": 1043
            }, {
                "fromName": "延安市",
                "toName": "渭南市",
                "coords": [
                    [109.491, 36.5965],
                    [109.503, 34.4994]
                ],
                "count": 1,
                "amount": 143
            }, {
                "fromName": "运城市",
                "toName": "太原市",
                "coords": [
                    [111.004, 35.0228],
                    [112.549, 37.857]
                ],
                "count": 1,
                "amount": 1108
            }, {
                "fromName": "临汾市",
                "toName": "太原市",
                "coords": [
                    [111.518, 36.0841],
                    [112.549, 37.857]
                ],
                "count": 1,
                "amount": 416
            }, {
                "fromName": "六安市",
                "toName": "合肥市",
                "coords": [
                    [116.508, 31.7529],
                    [117.283, 31.8612]
                ],
                "count": 1,
                "amount": 42553
            }, {
                "fromName": "六安市",
                "toName": "蚌埠市",
                "coords": [
                    [116.508, 31.7529],
                    [117.363, 32.9397]
                ],
                "count": 1,
                "amount": 37493
            }, {
                "fromName": "亳州市",
                "toName": "阜阳市",
                "coords": [
                    [115.783, 33.8693],
                    [115.82, 32.897]
                ],
                "count": 1,
                "amount": 22573
            }, {
                "fromName": "抚州市",
                "toName": "景德镇市",
                "coords": [
                    [116.358, 27.9839],
                    [117.215, 29.2926]
                ],
                "count": 1,
                "amount": 457
            }, {
                "fromName": "抚州市",
                "toName": "邵阳市",
                "coords": [
                    [116.358, 27.9839],
                    [111.469, 27.2378]
                ],
                "count": 1,
                "amount": 1348
            }, {
                "fromName": "抚州市",
                "toName": "上饶市",
                "coords": [
                    [116.358, 27.9839],
                    [117.971, 28.4444]
                ],
                "count": 1,
                "amount": 120
            }, {
                "fromName": "周口市",
                "toName": "郑州市",
                "coords": [
                    [114.65, 33.6204],
                    [113.665, 34.758]
                ],
                "count": 1,
                "amount": 1402
            }, {
                "fromName": "驻马店市",
                "toName": "郑州市",
                "coords": [
                    [114.025, 32.9802],
                    [113.665, 34.758]
                ],
                "count": 1,
                "amount": 2105
            }, {
                "fromName": "驻马店市",
                "toName": "南阳市",
                "coords": [
                    [114.025, 32.9802],
                    [112.541, 32.9991]
                ],
                "count": 1,
                "amount": 145976
            }, {
                "fromName": "眉山市",
                "toName": "成都市",
                "coords": [
                    [103.832, 30.0483],
                    [104.066, 30.6595]
                ],
                "count": 1,
                "amount": 252
            }]
        ]


        var colors1 = ["#FF3144", "#BB33FF", "#00D5FF", "#00CC66", "#0066FF"]
        var colors = ["255,49,68", "187,51,255", "0,213,255", "0,204,102", "0,102,255"]
        echarts.registerMap('chinaMapOutline', chinaMapOutline);

        option = {
            // backgroundColor: '#090F27',
            tooltip: {
                triggerOn: "onmousemove",
            },
            color: ['#00D8FF', '#FF4343'],
            /* legend: {
                orient: 'horizontal',
                top: '15%',
                left: 'center',
                data: [{
                    name: '猪',
                    icon: 'image://' + uploadedDataURL1
                }, {
                    name: '田',
                    icon: 'image://' + uploadedDataURL2
                }, {
                    name: '渔',
                    icon: 'image://' + uploadedDataURL3
                }, {
                    name: '蛋',
                    icon: 'image://' + uploadedDataURL4
                }, {
                    name: '柑橘',
                    icon: 'image://' + uploadedDataURL5
                }],
                // data:["猪","田","渔","蛋","柑橘"],
                selectedMode: 'multiple',
                textStyle: {
                    fontStyle: 'lighter',
                    color: '#fff',
                    fontSize: 12,
                    padding: [0, 20, 0, 3]
        
                },
                itemHeight: 7,
                itemWidth: 10
            }, */

            // 地理位置
            geo: {
                map: 'china',
                //调整以下3个配置项与页面地图重合
                // aspectScale: 1,			//echarts地图的长宽比（就是胖瘦）
                center: [104.29, 35.8], //设置可见中心坐标，以此坐标来放大和缩小
                // zoom: 1.00, //放大级别
                // roam:true,
                label: {
                    show: false
                },
                // 放大1.2倍
                // zoom: 1.1,
                itemStyle: {
                    normal: {
                        // 地区颜色
                        areaColor: 'rgb(20, 41, 87, .8)',
                        borderWidth: 0.8, //设置外层边框
                        borderColor: '#0692a4',

                    },
                    emphasis: {
                        areaColor: '#0b1c2d',
                        borderWidth: 0.8, //设置外层边框
                        // borderColor: '#223055',
                    }
                },
                emphasis: {
                    label: {
                        show: false,
                    }
                }

            },
            series: [{
                name: 'outsideborder',
                map: 'chinaMapOutline',
                type: 'map',
                roam: true,
                show: true,
                //调整以下3个配置项与页面地图重合
                // aspectScale: 1,			//echarts地图的长宽比（就是胖瘦）
                center: [104.29, 35.8], //设置可见中心坐标，以此坐标来放大和缩小
                // zoom: 1, //放大级别
                tooltip: {
                    show: false
                },
                label: {
                    show: false
                },
                roam: false,
                itemStyle: {
                    normal: {
                        areaColor: 'rgba(20,30,64,0)',

                        borderWidth: 1.6, //设置外层边框
                        borderColor: 'rgba(28,199,242,0.9)',
                        shadowBlur: 5,
                        shadowColor: '#4682B4',
                        shadowOffsetY: 6,
                    },
                    emphasis: {
                        areaColor: 'rgba(20,30,64,0)',

                        borderWidth: 1.6, //设置外层边框
                        borderColor: 'rgba(28,199,242,0.9)',
                        shadowBlur: 5,
                        shadowColor: '#4682B4',
                        shadowOffsetY: 6,
                    }
                },
                emphasis: {
                    label: {
                        show: false,
                    }
                }
            },
            {
                name: '猪',
                type: 'lines',
                zlevel: 2,
                tooltip: {
                    formatter: function (param) {
                        return param.data.fromName + '->' + param.data.toName + '<br>订单数：' + param.data.count + ' 条<br>订单总金额：' + parseFloat(param.data.amount).toFixed(2) + ' 元'
                    }
                },
                effect: {
                    show: true,
                    period: 3, //箭头指向速度，值越小速度越快
                    trailLength: 0.4, //特效尾迹长度[0,1]值越大，尾迹越长重
                    symbol: 'arrow', //箭头图标
                    symbolSize: 5, //图标大小
                },
                lineStyle: {
                    normal: {
                        color: {
                            type: 'linear',
                            x: 1,
                            y: 0,
                            x2: 0,
                            y2: 1,
                            colorStops: [{
                                offset: 0,
                                color: 'rgba(' + colors[0] + ',0.1)' // 0% 处的颜色
                            }, {
                                offset: 1,
                                color: 'rgba(' + colors[0] + ',1)' // 100% 处的颜色
                            }],
                            global: false // 缺省为 false
                        },
                        // color: '#E0474D'
                        /* function (value){ //随机颜色
                            
                            ['#f21347','#f3243e','#f33736','#f34131','#f34e2b',
                            '#f56321','#f56f1c','#f58414','#f58f0e','#f5a305',
                            '#e7ab0b','#dfae10','#d5b314','#c1bb1f','#b9be23',
                            '#a6c62c','#96cc34','#89d23b','#7ed741','#77d64c',
                            '#71d162','#6bcc75','#65c78b','#5fc2a0','#5abead',
                            '#52b9c7','#4fb6d2','#4ab2e5']
     return "#"+("00000"+((Math.random()*16777215+0.5)>>0).toString(16)).slice(-6);
     },*/

                        width: 2, //线条宽度
                        opacity: 0.1, //尾迹线条透明度
                        curveness: .3 //尾迹线条曲直度
                    },
                    emphasis: {
                        width: 3,
                        opacity: 0.5,
                    }
                },
                data: datas[0]
            },
            {
                name: '田',
                type: 'lines',
                zlevel: 2,
                tooltip: {
                    formatter: function (param) {
                        return param.data.fromName + '->' + param.data.toName + '<br>订单数：' + param.data.count + ' 条<br>订单总金额：' + parseFloat(param.data.amount).toFixed(2) + ' 元'
                    }
                },
                effect: {
                    show: true,
                    period: 3, //箭头指向速度，值越小速度越快
                    trailLength: 0.4, //特效尾迹长度[0,1]值越大，尾迹越长重
                    symbol: 'arrow', //箭头图标
                    symbolSize: 5, //图标大小
                },
                lineStyle: {
                    normal: {
                        color: {
                            type: 'linear',
                            x: 1,
                            y: 0,
                            x2: 0,
                            y2: 1,
                            colorStops: [{
                                offset: 0,
                                color: 'rgba(' + colors[1] + ',0.1)' // 0% 处的颜色
                            }, {
                                offset: 1,
                                color: 'rgba(' + colors[1] + ',1)' // 100% 处的颜色
                            }],
                            global: false // 缺省为 false
                        },
                        // color: '#E0474D'
                        /* function (value){ //随机颜色
                            
                            ['#f21347','#f3243e','#f33736','#f34131','#f34e2b',
                            '#f56321','#f56f1c','#f58414','#f58f0e','#f5a305',
                            '#e7ab0b','#dfae10','#d5b314','#c1bb1f','#b9be23',
                            '#a6c62c','#96cc34','#89d23b','#7ed741','#77d64c',
                            '#71d162','#6bcc75','#65c78b','#5fc2a0','#5abead',
                            '#52b9c7','#4fb6d2','#4ab2e5']
     return "#"+("00000"+((Math.random()*16777215+0.5)>>0).toString(16)).slice(-6);
     },*/

                        width: 2, //线条宽度
                        opacity: 0.1, //尾迹线条透明度
                        curveness: .3 //尾迹线条曲直度
                    },
                    emphasis: {
                        width: 3,
                        opacity: 0.5,
                    }
                },
                data: datas[1]
            },
            {
                name: '渔',
                type: 'lines',
                zlevel: 2,
                tooltip: {
                    formatter: function (param) {
                        return param.data.fromName + '->' + param.data.toName + '<br>订单数：' + param.data.count + ' 条<br>订单总金额：' + parseFloat(param.data.amount).toFixed(2) + ' 元'
                    }
                },
                effect: {
                    show: true,
                    period: 3, //箭头指向速度，值越小速度越快
                    trailLength: 0.4, //特效尾迹长度[0,1]值越大，尾迹越长重
                    symbol: 'circle', //箭头图标
                    symbolSize: 4, //图标大小
                },
                lineStyle: {
                    normal: {
                        color: {
                            type: 'linear',
                            x: 0,
                            y: 0,
                            x2: 1,
                            y2: 1,

                            colorStops: [{
                                offset: 0,
                                color: 'rgba(' + colors[2] + ',0.1)' // 0% 处的颜色
                            }, {
                                offset: 1,
                                color: 'rgba(' + colors[2] + ',1)' // 100% 处的颜色
                            }],
                            global: false // 缺省为 false
                        },
                        width: 1.5, //线条宽度
                        opacity: 0.2, //尾迹线条透明度
                        curveness: 0.3 //尾迹线条曲直度
                    },
                    emphasis: {
                        width: 3,
                        opacity: 0.5,
                    }
                },
                data: datas[2]
            },
            {
                name: '蛋',
                type: 'lines',
                zlevel: 2,
                tooltip: {
                    formatter: function (param) {
                        return param.data.fromName + '->' + param.data.toName + '<br>订单数：' + param.data.count + ' 条<br>订单总金额：' + parseFloat(param.data.amount).toFixed(2) + ' 元'
                    }
                },
                effect: {
                    show: true,
                    period: 3, //箭头指向速度，值越小速度越快
                    trailLength: 0.4, //特效尾迹长度[0,1]值越大，尾迹越长重
                    symbol: 'circle', //箭头图标
                    symbolSize: 4, //图标大小
                },
                lineStyle: {
                    normal: {
                        color: {
                            type: 'linear',
                            x: 0,
                            y: 0,
                            x2: 1,
                            y2: 1,

                            colorStops: [{
                                offset: 0,
                                color: 'rgba(' + colors[3] + ',0.1)' // 0% 处的颜色
                            }, {
                                offset: 1,
                                color: 'rgba(' + colors[3] + ',1)' // 100% 处的颜色
                            }],
                            global: false // 缺省为 false
                        },
                        width: 1.5, //线条宽度
                        opacity: 0.2, //尾迹线条透明度
                        curveness: 0.3 //尾迹线条曲直度
                    },
                    emphasis: {
                        width: 3,
                        opacity: 0.5,
                    }
                },
                data: datas[3]
            },
            ]
        };
        mychart.setOption(option);
        window.addEventListener('resize', function () {
            mychart.resize();
        })
    }
    window.centerMap = centerMap;
})();

// 获取数据
(function () {
    function getData(weatherData, city) {
        console.log('city: ', city);
        $.ajax({
            url: "https://api.jisuapi.com/weather/query?appkey=665578ff149eca2b",
            // jsonp : "cb",
            type: 'get',
            data: {
                city: city
            },
            dataType: 'jsonp',
            success: function (data) {
                weatherData(data.result);
            }
        })
    }
    window.getData = getData;
})();

// 执行函数
function draw(weatherData) {
    console.log('weatherData: ', weatherData);
    if (!weatherData) {
        $('.notfound').css('display', 'block').delay(2000).hide(1000);
        return false;
    }
    // 现况
    bar1(weatherData);

    // 实况数据加载
    $('.nowtime').html(weatherData.updatetime);
    var weatherAll = $('<div class="day"><span class="iconfont icon-cloudy-line"> ' + weatherData.weather + '</span></div><div class="winddirect"><span class="iconfont icon-daohang"> ' + weatherData.winddirect + '</span><span class="iconfont icon-signal-wifi-line"> ' + weatherData.windpower + '</span></div><div><span class="iconfont icon-temp-hot-line"> 今日温度：' + weatherData.templow + '~' + weatherData.temphigh + '</span></div>');
    $('.chartRight').html(weatherAll);

    // 当天24小时
    line1(weatherData.hourly);

    // 右上角贴心提示
    console.log("$('bar2 .chart').children():", $('.bar2 .chart').children());
    $('.bar2 .chart').children().each(function (e) {
        // console.log('e: ', e);
        // console.log('$(this).attr(data-index): ', $(this).attr('data-index'));
        $(this).html('<span class="iconfont ' + $(this).attr('data-index') + '"></span><span>' + (weatherData.index[e].iname).slice(0, weatherData.index[e].iname.length - 2) + '</span><span class="value">' + weatherData.index[e].ivalue + '</span>');
    })

    // 处理七天天气数据
    var daily = [['date', 'temphigh', 'templow', 'sunrise', 'sunset']];
    $(weatherData.daily).each(function (e) {
        var alldata = weatherData.daily[e];
        var data = [(alldata.date).slice(5, 10), alldata.day.temphigh, alldata.night.templow, alldata.sunrise, alldata.sunset];
        daily.push(data);
    })

    // 七天天气线型图
    line2(daily);

    // 中间的地图。。
    centerMap();
}
getData(draw, $('.city>span').html());

// 切换城市
(function () {
    function changeCity() {
        // console.log('changeCity函数！！！');
        // console.log($('#inputCity').val());
        var value = $('#inputCity').val();
        if(getData(draw, value)) {
            $('.city>span').html(value);
        }
        $('.cities').hide();
    }

    // 阻止input框回车
    $('#inputCity').on('keypress', function (e) {
        if (e.keyCode == 13) {
            e.preventDefault();
        }
    })

    $('.hotcity ul').on('click', function (e) {
        console.log(e.target);
        // $(e.target).css('backgroundColor', 'red');
        $('.city>span').html($(e.target).html());
        $('.cities').hide();
        getData(draw, $('.city>span').html());
    })
    window.changeCity = changeCity;
})();

// 以下无关数据
// 右上角时间
(function () {
    /* 页面布局 */
    // $(window).resize = function() {
    //     $(body).css('background-size', '100% 100%');
    // }

    /* 右上角时间 */

    // 当前时间：2020年3月17日
    var dt = new Date();
    var y = dt.getFullYear(); // 年
    var month = dt.getMonth() + 1; // 月得加一
    var day = dt.getDate();
    $('.showTime').html('当前时间：' + y + '年' + month + '月' + day + '日');
})();

// 右上角加减
(function () {
    $('#living-prev').on('click', function (e) {
        $('.chart1').css('transform', 'translate(0, 0)');
        $('.chart2').css('transform', 'translate(0, 0)');
        // $('.chart2').show();
    })
    $('#living-next').on('click', function (e) {
        $('.chart1').css('transform', 'translate(0, -150%)');
        $('.chart2').css('transform', 'translate(0, -105%)');
    })
})();

// 切换城市
(function () {
    $('.city a').on('click', function () {
        if ($('.cities').css('display') == 'none') {
            $('.cities').show();
        } else {
            $('.cities').hide();
        }
    })
})();


// bar1();
// bar2();
// line1();
// line2();
// centerMap()
