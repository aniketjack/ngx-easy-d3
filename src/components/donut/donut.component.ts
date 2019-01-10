import { Component, OnInit, Input } from '@angular/core';
import { DonutService } from '../../services/donut.service';
import * as d3 from 'd3';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'ngx-easy-d3-donut',
    templateUrl: './donut.component.html',
    styleUrls: ['./donut.component.scss']
})
export class DonutComponent implements OnInit {
    @Input()
    name: any;
    data = [
        { value: 4, range: 1, angle: 45, color: '#377eb8', width: 1 },
        { value: 2, range: 2, angle: 315, color: '#4daf4a', width: 0.6 },
        { value: 5, range: 2, angle: 90, color: '#ff7f00', width: 0.8 },
        { value: 3, range: 1, angle: 180, color: '#e41a1c', width: 0.4 },
        { value: 1, range: 0.5, angle: 225, color: '#984ea3', width: 0.9 },
        { value: 2.5, range: 1, angle: 270, color: '#f781bf', width: 0.7 }
    ];
    constructor(private donutService: DonutService) {}

    ngOnInit(): void {
       this.drawDonut();
       // tslint:disable-next-line:no-bitwise
       this.name = 'Aniket' || this.name;
    }

    drawDonut() {
        const chart = {
            width: 960,
            height: 500,
            margins: { x: 20, y: 20 }
        };
        const bar = {
            width: 55,
            height: 65,
            spacing: 20
        };
        // animation properties
        const animation = {
            duration: 400,
            pauseDuration: 400
        };
        // simple data to visualize
     /*    const Datum = (function () {
            function Datum():void {
            }
            return Datum;
        })(); */
          const thisRef = this;
          const text = '';

          const width = chart.width;
          const height = chart.height;
          const thickness = 40;
          const duration = 750;

          const radius = Math.min(width, height) / 2;
          const color = d3.scaleOrdinal(d3.schemeCategory10);

          const svg = d3.select('#ngxeasydonut')
          .append('svg')
          .attr('class', 'pie')
          .attr('width', width)
          .attr('height', height)
          .attr('class', 'donutSVGContainer');

          const g = svg.append('g')
          .attr('transform', 'translate(' + (width / 2) + ',' + (height / 2) + ')');

          const rects = svg.selectAll('rect')
          .data(this.data)
          .enter()
          .append('rect');
          render(rects);

          function render(selection: any) {
            // tslint:disable-next-line:max-line-length
            selection.attr('width', function (d: { width: number; }, i: any) { return d.width * bar.width; })
                    // tslint:disable-next-line:max-line-length
                    .attr('height', function (d: { range: number; }, i: any) { return d.range * bar.height; }).attr('fill', function (d: { color: any; }, i: any) { return d.color; }).attr('transform', function (d: { value: number; angle: any; range: number; }, i: number) { return 'translate(' + [chart.margins.x + i * (bar.width + bar.spacing), -chart.margins.y + chart.height - d.value * bar.height] + ') ' + 'rotate(' + [(d.angle)] + ')' + 'translate(' + [-bar.width / 2, -d.range / 2] + ')'; });
        }
    }

}
