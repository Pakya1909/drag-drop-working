import { Component, VERSION, ViewChild, OnInit, OnDestroy, Output, EventEmitter, Input } from '@angular/core';
import {FormControl, FormGroup,Validators, FormBuilder} from '@angular/forms';

declare const PlainDraggable: any;
declare const LeaderLine: any;

@Component({
  selector: 'app-c2',
  templateUrl: './c2.component.html',
  styleUrls: ['./c2.component.css']
})
export class C2Component implements OnInit {


  tabs = ['tabs-1']

  content : string = 'tabs works and will work doesnt matter how ????'

  addTab()
  {
    
    this.tabs.push('New')
  }

  deleteTab(idx:number)
  {
    if(this.tabs.length > 1)
    {
      this.tabs.splice(idx, 1);
    }
  }


  @ViewChild('container', { static: true })
  public container: any;

  @ViewChild('draggable1', { static: true })
  public handle1: any;
  @ViewChild('draggable2', { static: true })
  public handle2: any;
  @ViewChild('draggable3', { static: true })
  public handle3: any; 
  public ngOnInit(): void {
    const container = this.container.nativeElement;
    const handle1 = this.handle1.nativeElement;
    const handle2 = this.handle2.nativeElement;
    const handle3 = this.handle3.nativeElement;

    const options = {
      containment: container,
    };


    function init() {
      try {
        const d1 = new PlainDraggable(handle1, {onMove: fixLine} );
        const d2 = new PlainDraggable(handle2, {onMove: fixLine} );
        const d3 = new PlainDraggable(handle3, {onMove: fixLine} );

        const l1 = new LeaderLine(LeaderLine.mouseHoverAnchor(handle1), handle2);
        const l2 = new LeaderLine(LeaderLine.mouseHoverAnchor(handle1), handle3);

        function fixLine() {
               l1.position();
               l2.position();
        }

      }
      catch (error) {
        setTimeout(init, 200);
      }
    }
    init();
  }

  public ngOnDestroy(): void {}

  @Output() fillerName = new EventEmitter<FormGroup>()
  @Output() selector = new EventEmitter<string>()
  @Output() nodeNo = new EventEmitter<string>()

  nodeDetails !: FormGroup;

  constructor(private formBuilder : FormBuilder)
  {
    this.nodeDetails = formBuilder.group({
      fillerNodeName : new FormControl(),
      selectsome : new FormControl(),
      clear : new FormControl(),
      append : new FormControl(),
      nodeNumber : new FormControl()
    })
  }


  getDetails()
  {
    console.log('c2-working')
    this.fillerName.emit(this.nodeDetails)
  }
}
         