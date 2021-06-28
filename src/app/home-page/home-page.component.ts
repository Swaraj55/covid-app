import { Component, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { fadeIn, slideInFromLeft, slideInFromRight } from '../animate';
import { HomePageService } from './home-page.service';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import am4themes_material from "@amcharts/amcharts4/themes/material"
import am4themes_amchartsdark from '@amcharts/amcharts4/themes/amchartsdark';

// Base chart themes.
am4core.useTheme(am4themes_animated);
am4core.useTheme(am4themes_material);


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  animations: [
    fadeIn,
    slideInFromRight,
    slideInFromLeft
  ]
})
export class HomePageComponent implements OnInit {

  covidData: any;
  elem: any;
  constructor(private homePageService: HomePageService,
              @Inject(DOCUMENT) private document: any
    ) { }

  ngOnInit(): void {
    this.subscribeTheSpecificCountryData();
    this.createLineChartForConfirmedCases();
    this.createLineChartForActiveCases();
    this.createLineChartForDeceasedCases();
    this.createLineChartForRecoveredCases();
    this.elem = document.documentElement;
    console.log(this.elem.requestFullscreen)
  }

  openFullscreen() {
    if (this.elem.requestFullscreen) {
      this.elem.requestFullscreen();
    } else if (this.elem.mozRequestFullScreen) {
      /* Firefox */
      this.elem.mozRequestFullScreen();
    } else if (this.elem.webkitRequestFullscreen) {
      /* Chrome, Safari and Opera */
      this.elem.webkitRequestFullscreen();
    } else if (this.elem.msRequestFullscreen) {
      /* IE/Edge */
      this.elem.msRequestFullscreen();
    }
  }

  subscribeTheSpecificCountryData() {
    this.homePageService.getSpecificCountryData().subscribe((data: any) => {
      console.log(data)
      this.covidData = data;
    })
  }

  createLineChartForRecoveredCases() {
    // Create chart instance
    var chart = am4core.create("recoveredCases", am4charts.XYChart);
    chart.logo.__disabled = true;
    chart.paddingRight = 20;

    this.homePageService.getAllDetailsOfCovid().subscribe((data: any) => {
      let chartData = [];

      data.forEach((item) => {
        chartData.push({
           value: item.negative,
           label: item.dateChecked 
        })
      })

      chart.data = chartData;

      // Create axes
      var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
      categoryAxis.dataFields.category = "label";
      categoryAxis.renderer.grid.template.disabled = true;
      categoryAxis.renderer.labels.template.disabled = true;

      // Create value axis
      var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
      valueAxis.baseValue = 0;
      valueAxis.renderer.grid.template.disabled = true;
      valueAxis.renderer.labels.template.disabled = true;

      // Create series
      var series = chart.series.push(new am4charts.LineSeries());
      series.dataFields.valueY = "value";
      series.dataFields.categoryX = "label";
      series.stroke = am4core.color("#16af23");
      series.strokeWidth = 3;
      series.tensionX = 0.77;
    })
  }

  createLineChartForConfirmedCases() {
    // Create chart instance
    var chart = am4core.create("confirmedCases", am4charts.XYChart);
    chart.logo.__disabled = true;
    chart.paddingRight = 20;

    this.homePageService.getAllDetailsOfCovid().subscribe((data: any) => {
      let chartData = [];

      data.forEach((item) => {
        chartData.push({
           value: item.totalTestResults,
           label: item.dateChecked 
        })
      })

      chart.data = chartData;

      // Create axes
      var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
      categoryAxis.dataFields.category = "label";
      categoryAxis.renderer.grid.template.disabled = true;
      categoryAxis.renderer.labels.template.disabled = true;

      // Create value axis
      var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
      valueAxis.baseValue = 0;
      valueAxis.renderer.grid.template.disabled = true;
      valueAxis.renderer.labels.template.disabled = true;

      // Create series
      var series = chart.series.push(new am4charts.LineSeries());
      series.dataFields.valueY = "value";
      series.dataFields.categoryX = "label";
      series.strokeWidth = 3;
      series.tensionX = 0.77;
    })
  }

  createLineChartForActiveCases() {
    // Create chart instance
    var chart = am4core.create("activeCases", am4charts.XYChart);
    chart.logo.__disabled = true;
    chart.paddingRight = 20;

    this.homePageService.getAllDetailsOfCovid().subscribe((data: any) => {
      let chartData = [];

      data.forEach((item) => {
        chartData.push({
           value: item.positive,
           label: item.dateChecked 
        })
      })

      chart.data = chartData;

      // Create axes
      var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
      categoryAxis.dataFields.category = "label";
      categoryAxis.renderer.grid.template.disabled = true;
      categoryAxis.renderer.labels.template.disabled = true;

      // Create value axis
      var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
      valueAxis.baseValue = 0;
      valueAxis.renderer.grid.template.disabled = true;
      valueAxis.renderer.labels.template.disabled = true;

      // Create series
      var series = chart.series.push(new am4charts.LineSeries());
      series.dataFields.valueY = "value";
      series.dataFields.categoryX = "label";
      series.stroke = am4core.color("#0f52ba");
      series.strokeWidth = 3;
      series.tensionX = 0.77;
    })
  }

  createLineChartForDeceasedCases() {
    // Create chart instance
    var chart = am4core.create("deceasedCases", am4charts.XYChart);
    chart.logo.__disabled = true;
    chart.paddingRight = 20;

    this.homePageService.getAllDetailsOfCovid().subscribe((data: any) => {
      let chartData = [];
      console.log()
      data.forEach((item) => {
        chartData.push({
           value: item.death,
           label: item.dateChecked 
        })
      })

      chart.data = chartData;

      // Create axes
      var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
      categoryAxis.dataFields.category = "label";
      categoryAxis.renderer.grid.template.disabled = true;
      categoryAxis.renderer.labels.template.disabled = true;

      // Create value axis
      var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
      valueAxis.baseValue = 0;
      valueAxis.renderer.grid.template.disabled = true;
      valueAxis.renderer.labels.template.disabled = true;

      // Create series
      var series = chart.series.push(new am4charts.LineSeries());
      series.dataFields.valueY = "value";
      series.dataFields.categoryX = "label";
      series.stroke = am4core.color("#808080");
      series.strokeWidth = 3;
      series.tensionX = 0.77;
    })
  }
}
