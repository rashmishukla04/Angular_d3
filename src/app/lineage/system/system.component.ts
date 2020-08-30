import { Component, OnInit, HostListener } from '@angular/core';
import * as d3 from 'd3'
import { transformAll } from '@angular/compiler/src/render3/r3_ast';

@Component({
  selector: 'app-system',
  templateUrl: './system.component.html',
  styleUrls: ['./system.component.scss']
})
export class SystemComponent implements OnInit {
 private width=window.innerWidth;
 private height=window.innerHeight;
 private margin=50;
 private svg;
  constructor() { }

  ngOnInit(): void {
    this.createSvg();
    this.createSystem();
  }
  createSvg(){
    this.svg=d3.select('figure#systemLineage')
    .append('svg')
    .attr('width',this.width)
    .attr('height',this.height)
    
  }
  @HostListener('window:resize', ['$event'])
    onResize(event) {
    this.width = window.innerWidth;
    this.height=window.innerHeight;
    }
    createSystem(){
     var g= this.svg.append('g')
     .attr("transform","translate("+this.margin+","+this.margin+")")
    for(let i=0;i<=5;i++){
      var rect= g.append("rect")
      .attr('x',10+i*200)
      .attr('y',20)
      .attr('width',75)
      .attr('height',80)
      .style("stroke","#006600")
      .style('fill','#00cc00')
      

      g.append("text")
      .attr("x", 25)
		 .attr("y", 60)
		 .attr("stroke", "#000000")
		 .text("Box1");
      
    }
    }
    

}
