import { Component, ContentChild, ContentChildren, ElementRef, QueryList } from '@angular/core';
import { TestComponent } from '../test/test.component';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {

 @ContentChild('para') paraElM :ElementRef;
 @ContentChildren('para') paraElements : QueryList<ElementRef>;
 @ContentChildren(TestComponent) testElements : QueryList<TestComponent>;
  

 onTest(){
  this.testElements.forEach((el) => console.log(el))
 }
}
