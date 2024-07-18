import { Database } from "./database.js";


export class Charts {

    tabStars = [];
    StarsObj = {};
    constructor() {
       this.tabStars = new Database("StarsProducts");
    }


    getChartsInfo () {
        let ChartInfoTab = [];
        let ChartInfoProducts = [];
        let MyStars = this.tabStars.get();
        console.log(MyStars);
        for (let Star of MyStars) {
            ChartInfoTab.push(parseInt(Star.Stars));
            ChartInfoProducts.push(Star.products);
        }
        console.log(ChartInfoProducts);
        console.log(ChartInfoTab);

        // ---------- CHARTS ----------

// BAR CHART
var barChartOptions = {
    series: [{
      data: ChartInfoTab,
      name: "Products",
    }],
    chart: {
      type: "bar",
      background: "transparent",
      height: 350,
      toolbar: {
        show: false,
      },
    },
    colors: [
      "#2962ff",
      "#d50000",
      "#2e7d32",
      "#ff6d00",
      "#583cb3",
    ],
    plotOptions: {
      bar: {
        distributed: true,
        borderRadius: 4,
        horizontal: false,
        columnWidth: "40%",
      }
    },
    dataLabels: {
      enabled: false,
    },
    fill: {
      opacity: 1,
    },
    grid: {
      borderColor: "#55596e",
      yaxis: {
        lines: {
          show: true,
        },
      },
      xaxis: {
        lines: {
          show: true,
        },
      },
    },
    legend: {
      labels: {
        colors: "#f5f7ff",
      },
      show: true,
      position: "top",
    },
    stroke: {
      colors: ["transparent"],
      show: true,
      width: 2
    },
    tooltip: {
      shared: true,
      intersect: false,
      theme: "dark",
    },
    xaxis: {
      categories: ChartInfoProducts,
      title: {
        style: {
          color: "#f5f7ff",
        },
      },
      axisBorder: {
        show: true,
        color: "#55596e",
      },
      axisTicks: {
        show: true,
        color: "#55596e",
      },
      labels: {
        style: {
          colors: "#f5f7ff",
        },
      },
    },
    yaxis: {
      title: {
        text: "Count",
        style: {
          color:  "#f5f7ff",
        },
      },
      axisBorder: {
        color: "#55596e",
        show: true,
      },
      axisTicks: {
        color: "#55596e",
        show: true,
      },
      labels: {
        style: {
          colors: "#f5f7ff",
        },
      },
    }
  };
  
  var barChart = new ApexCharts(document.querySelector("#bar-chart"), barChartOptions);
  barChart.render();
  
        
    }
}