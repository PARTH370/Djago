
Highcharts.getJSON('http://127.0.0.1:8000/top-performance/view/?share_class_id=48270&asset_type=Equity&period=week', function(data) {

  // Create the chart
  var chart = Highcharts.stockChart('containeramol', {

    chart: {
      height:250
    },

    rangeSelector: {
      enabled: false
    },

    chart: {
      backgroundColor: '#F39C11',
      zoomType: 'x'
    },

    credits: {
      enabled: false
    },

    series: [{
      name: 'FGFAX',
      data: data.graph,
      type: 'area',
      threshold: null,
    marker: {
      enabled: false,
      symbol: 'circle',
      radius: 2,
      states: {
        hover: {
          fillColor: 'white',
          lineColor: 'white',
          lineWidth: 10
        }
      }
    },      
      tooltip: {
        valueDecimals: 2
      },
      color: '#FFFFFF',
      fillColor: {
        linearGradient: {
          x1: 1,
          y1: 0,
          x2: 1,
          y2: 1
        },
        stops: [
          [0, Highcharts.getOptions().colors[0]],
          [0, Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0.2).get('rgba')]
        ]
      }
    }],

    xAxis: {
      labels: {
        style: {
          color: '#FFFFFF',
          fontSize: '12px',
        }
      },
    },
    yAxis: {
      tickInterval: 40,
      min: 100,
      max: 250,
      labels: {
        style: {
          color: '#FFFFFF',
          fontSize: '12px'
        }
      },
      gridLineWidth: 0.3,
    },
    navigator: {
      enabled: false
    },



    scrollbar: {
      barBackgroundColor: 'white',
      barBorderRadius: 7,
      barBorderWidth: 0,
      buttonBackgroundColor: 'white',
      buttonBorderWidth: 0,
      buttonBorderRadius: 7,
      trackBackgroundColor: 'gray',
      trackBorderWidth: 1,
      trackBorderRadius: 8,
      trackBorderColor: '#CCC',
      enabled: false
    },



    responsive: {
      rules: [{
        condition: {
          maxWidth: 500
        },
        chartOptions: {
          chart: {
            height: 300
          },
          subtitle: {
            text: null
          },
          navigator: {
            enabled: false
          }
        }
      }]
    }
  });


});

//First chart end 








Highcharts.getJSON('https://www.highcharts.com/samples/data/aapl-c.json', function(data) {

  // Create the chart
  var chart = Highcharts.stockChart('containera', {

    chart: {
      height:250
    },

    rangeSelector: {
      enabled: false
    },

    chart: {
      backgroundColor: '#F65050',
      zoomType: 'x'
    },

    credits: {
      enabled: false
    },

    series: [{
      name: 'FGFAX',
      data: data,
      type: 'area',
      threshold: null,
    marker: {
      enabled: false,
      symbol: 'circle',
      radius: 2,
      states: {
        hover: {
          fillColor: 'white',
          lineColor: 'white',
          lineWidth: 10
        }
      }
    },      
      tooltip: {
        valueDecimals: 2
      },
      color: '#FFFFFF',
      fillColor: {
        linearGradient: {
          x1: 1,
          y1: 0,
          x2: 1,
          y2: 1
        },
        stops: [
          [0, Highcharts.getOptions().colors[0]],
          [0, Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0.2).get('rgba')]
        ]
      }
    }],

    xAxis: {
      labels: {
        style: {
          color: '#FFFFFF',
          fontSize: '12px',
        }
      },
    },
    yAxis: {
      tickInterval: 40,
      min: 100,
      max: 250,
      labels: {
        style: {
          color: '#FFFFFF',
          fontSize: '12px'
        }
      },
      gridLineWidth: 0.3,
    },
    navigator: {
      enabled: false
    },



    scrollbar: {
      barBackgroundColor: 'white',
      barBorderRadius: 7,
      barBorderWidth: 0,
      buttonBackgroundColor: 'white',
      buttonBorderWidth: 0,
      buttonBorderRadius: 7,
      trackBackgroundColor: 'gray',
      trackBorderWidth: 1,
      trackBorderRadius: 8,
      trackBorderColor: '#CCC',
      enabled: false
    },



    responsive: {
      rules: [{
        condition: {
          maxWidth: 500
        },
        chartOptions: {
          chart: {
            height: 300
          },
          subtitle: {
            text: null
          },
          navigator: {
            enabled: false
          }
        }
      }]
    }
  });


});

//Second chart end 





Highcharts.getJSON('https://www.highcharts.com/samples/data/aapl-c.json', function(data) {

  // Create the chart
  var chart = Highcharts.stockChart('containerb', {

    chart: {
      height:300
    },

    rangeSelector: {
      enabled: false
    },

    chart: {
      backgroundColor: '#508CC8',
      zoomType: 'x'
    },

    credits: {
      enabled: false
    },

    series: [{
      name: 'FGFAX',
      data: data,
      type: 'area',
      threshold: null,
    marker: {
      enabled: false,
      symbol: 'circle',
      radius: 2,
      states: {
        hover: {
          fillColor: 'white',
          lineColor: 'white',
          lineWidth: 10
        }
      }
    },      
      tooltip: {
        valueDecimals: 2
      },
      color: '#FFFFFF',
      fillColor: {
        linearGradient: {
          x1: 1,
          y1: 0,
          x2: 1,
          y2: 1
        },
        stops: [
          [0, Highcharts.getOptions().colors[0]],
          [0, Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0.3).get('rgba')]
        ]
      }
    }],

    xAxis: {
      labels: {
        style: {
          color: '#FFFFFF',
          fontSize: '12px',
        }
      },
    },
    yAxis: {
      tickInterval: 40,
      min: 100,
      max: 250,
      labels: {
        style: {
          color: '#FFFFFF',
          fontSize: '12px'
        }
      },
      gridLineWidth: 0.3,
    },
    navigator: {
      enabled: false
    },



    scrollbar: {
      barBackgroundColor: 'white',
      barBorderRadius: 7,
      barBorderWidth: 0,
      buttonBackgroundColor: 'white',
      buttonBorderWidth: 0,
      buttonBorderRadius: 7,
      trackBackgroundColor: 'gray',
      trackBorderWidth: 1,
      trackBorderRadius: 8,
      trackBorderColor: '#CCC',
      enabled: false
    },



    responsive: {
      rules: [{
        condition: {
          maxWidth: 500
        },
        chartOptions: {
          chart: {
            height: 300
          },
          subtitle: {
            text: null
          },
          navigator: {
            enabled: false
          }
        }
      }]
    }
  });


});

//third chart end 


Highcharts.getJSON('https://www.highcharts.com/samples/data/aapl-c.json', function(data) {

  // Create the chart
  var chart = Highcharts.stockChart('containerc', {

    chart: {
      height:300
    },

    rangeSelector: {
      enabled: false
    },

    chart: {
      backgroundColor: '#00C0EF',
      zoomType: 'x'
    },

    credits: {
      enabled: false
    },

    series: [{
      name: 'FGFAX',
      data: data,
      type: 'area',
      threshold: null,
    marker: {
      enabled: false,
      symbol: 'circle',
      radius: 2,
      states: {
        hover: {
          fillColor: 'white',
          lineColor: 'white',
          lineWidth: 10
        }
      }
    },      
      tooltip: {
        valueDecimals: 2
      },
      color: '#FFFFFF',
      fillColor: {
        linearGradient: {
          x1: 1,
          y1: 0,
          x2: 1,
          y2: 1
        },
        stops: [
          [0, Highcharts.getOptions().colors[0]],
          [0, Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0.6).get('rgba')]
        ]
      }
    }],

    xAxis: {
      labels: {
        style: {
          color: '#FFFFFF',
          fontSize: '12px',
        }
      },
    },
    yAxis: {
      tickInterval: 40,
      min: 100,
      max: 250,
      labels: {
        style: {
          color: '#FFFFFF',
          fontSize: '12px'
        }
      },
      gridLineWidth: 0.3,
    },
    navigator: {
      enabled: false
    },



    scrollbar: {
      barBackgroundColor: 'white',
      barBorderRadius: 7,
      barBorderWidth: 0,
      buttonBackgroundColor: 'white',
      buttonBorderWidth: 0,
      buttonBorderRadius: 7,
      trackBackgroundColor: 'gray',
      trackBorderWidth: 1,
      trackBorderRadius: 8,
      trackBorderColor: '#CCC',
      enabled: false
    },



    responsive: {
      rules: [{
        condition: {
          maxWidth: 500
        },
        chartOptions: {
          chart: {
            height: 300
          },
          subtitle: {
            text: null
          },
          navigator: {
            enabled: false
          }
        }
      }]
    }
  });


});

//forth chart end 





Highcharts.getJSON('https://www.highcharts.com/samples/data/aapl-c.json', function(data) {

  // Create the chart
  var chart = Highcharts.stockChart('containerd', {

    chart: {
      height:300
    },

    rangeSelector: {
      enabled: false
    },

    chart: {
      backgroundColor: '#00A65A',
      zoomType: 'x'
    },

    credits: {
      enabled: false
    },

    series: [{
      name: 'FGFAX',
      data: data,
      type: 'area',
      threshold: null,
    marker: {
      enabled: false,
      symbol: 'circle',
      radius: 2,
      states: {
        hover: {
          fillColor: 'white',
          lineColor: 'white',
          lineWidth: 10
        }
      }
    },      
      tooltip: {
        valueDecimals: 2
      },
      color: '#FFFFFF',
      fillColor: {
        linearGradient: {
          x1: 1,
          y1: 0,
          x2: 1,
          y2: 1
        },
        stops: [
          [0, Highcharts.getOptions().colors[0]],
          [0, Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0.2).get('rgba')]
        ]
      }
    }],

    xAxis: {
      labels: {
        style: {
          color: '#FFFFFF',
          fontSize: '12px',
        }
      },
    },
    yAxis: {
      tickInterval: 40,
      min: 100,
      max: 250,
      labels: {
        style: {
          color: '#FFFFFF',
          fontSize: '12px'
        }
      },
      gridLineWidth: 0.3,
    },
    navigator: {
      enabled: false
    },



    scrollbar: {
      barBackgroundColor: 'white',
      barBorderRadius: 7,
      barBorderWidth: 0,
      buttonBackgroundColor: 'white',
      buttonBorderWidth: 0,
      buttonBorderRadius: 7,
      trackBackgroundColor: 'gray',
      trackBorderWidth: 1,
      trackBorderRadius: 8,
      trackBorderColor: '#CCC',
      enabled: false
    },



    responsive: {
      rules: [{
        condition: {
          maxWidth: 500
        },
        chartOptions: {
          chart: {
            height: 300
          },
          subtitle: {
            text: null
          },
          navigator: {
            enabled: false
          }
        }
      }]
    }
  });


});

//fifth chart end













