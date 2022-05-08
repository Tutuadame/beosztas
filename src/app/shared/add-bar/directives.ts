import {ElementRef, Directive, HostListener } from '@angular/core';

@Directive({
    selector: '[sight]'
})
export class SightDirective {
  
    view: boolean = false;
    constructor(private el: ElementRef) {}
  
    @HostListener('click') onClick() {
        this.view = !this.view;
        this.display(this.view);
        this.displayOff(this.view);
       
        //console.log(this.el.nativeElement.title);
    }
    
    display(view: boolean) {
        let inputs = document.querySelectorAll(".inputnone_container");
        let submit = document.querySelector(".submit_none");

        console.log(submit);

        if(view && inputs != null && submit != null){
            console.log("Display");
            inputs.forEach( element => {
                element.setAttribute('class', 'input_container');
            });
            submit.className = 'submit';
        } 
        //this.el.nativeElement.style.display = 'none';
    }

    displayOff(view: boolean){

        let inputs = document.querySelectorAll(".input_container");
        let submit = document.querySelector(".submit");

        if(!view && inputs != null && submit != null){
            console.log("DisplayOff");
            inputs.forEach( element => {
                element.setAttribute('class', 'inputnone_container');
            });
            submit.className = 'submit_none';
        } 
        //this.el.nativeElement.style.display = 'default';
    }
}