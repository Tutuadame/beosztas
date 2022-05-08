import { Directive, ElementRef, HostListener, ViewContainerRef } from "@angular/core";
import { AddBarBComponent } from "../../../../shared/add-bar/add-bar-b/add-bar-b.component";
import { BFieldComponent } from "../b-field/b-field.component";

@Directive({
    selector: '[modify]'
})
export class ChangeDirective{

    constructor(private vc: ViewContainerRef, private el: ElementRef){}

    @HostListener('click') onClick(){
        this.el.nativeElement.innerHTML = '';
        this.vc.createComponent(AddBarBComponent);
    }

    @HostListener('mouseleave') onMouseLeave(){
            window.location.reload();
    }
}


@Directive({
    selector: '[change2]'
})
export class Change2Directive{

   /* constructor(private vc: ViewContainerRef, private el: ElementRef){}

    @HostListener('click') onClick(){

        const div =  document.getElementById('changer');

        if(div !== null){
            div.style.display = 'flex';
            div.style.flexDirection = 'column';

            const torolt = document.createElement('td');
            torolt.innerHTML = "torolt";
            div.appendChild(torolt);
            window.location.reload();

        }
        
    }*/

}