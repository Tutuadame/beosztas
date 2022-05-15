import { Directive, ElementRef, HostBinding, HostListener, ViewContainerRef } from "@angular/core";
import { AddBarBComponent } from '../../../../shared/add-bar/add-bar-b/add-bar-b.component';

let id: string;
let div:any;
let modify:any;
let del:any;
let view: boolean = false;

@Directive({
    selector: '[hover]'
})
export class HoverDirective{
    
    
    constructor( private el: ElementRef, private vc: ViewContainerRef){}

    @HostListener('mouseenter') onMouseEnter(){
        if(!view){
            view = true;
            div = document.createElement('div');
div.style.cssText = `
                    position: absolute;
                    width: 100%;
                    top: 0%;
                    `;

    modify = document.createElement('button');
modify.innerHTML = "Módosít";
modify.style.position = 'relative';
modify.style.cssText= `
                        font-size: calc(50% + .8vw);
                        letter-spacing: .1rem;
                        background: none;
                        border: 1px solid black;
                        background: rgba(0,0,0,0.9);
                        cursor: pointer;
                        border-bottom: none;
                        color: yellow;
                        text-align: center;
                      `;
modify.setAttribute('id', 'modify');
            


    del = document.createElement('button');
del.innerHTML = "Töröl";
del.style.position = 'relative';
del.style.cssText= `
                        font-size: calc(90% + .6vw);
                        letter-spacing: .1rem;
                        background: none;
                        border: 1px solid black;                        
                        background: rgba(0,0,0,0.9);
                        cursor: pointer;
                        color: yellow;
                        text-align: center;
                    `;
del.setAttribute('id', 'modify');            

div.appendChild(modify);
div.appendChild(del);
        
        id = this.el.nativeElement.title;

        //console.log(id);
        this.el.nativeElement.style.position = "relative";
        //console.log(this.el.nativeElement.offsetWidth);
        //console.log(this.el.nativeElement.offsetHeight);

        let default_width = this.el.nativeElement.offsetWidth;
        let default_height = this.el.nativeElement.offsetHeight;

        del.style.width = default_width + 'px';
        del.style.height =  default_height/2 + 'px';

        modify.style.width = default_width + 'px';
        modify.style.height = default_height/2 + 'px';
        this.el.nativeElement.appendChild(div);

        modify.addEventListener('click', ()=>{
            this.vc.createComponent(AddBarBComponent);  
            this.el.nativeElement.removeChild(div);
            this.el.nativeElement.style.display="none";
            document.getElementById('submit')?.addEventListener('click', ()=>{
                //invoke modify
                this.vc.clear();
                this.el.nativeElement.style.display = "flex";
                this.el.nativeElement.style.width = default_width + 'px';
                this.el.nativeElement.style.height = default_height + 'px';
                this.el.nativeElement.style.cssText = "margin-bottom: 20%;";


                view = false;
            });
        })
            
        }
        
    }


    @HostListener('mouseleave') onMouseLeave(){

        this.vc.clear();
        if( this.el.nativeElement == div.parentNode){
            this.el.nativeElement.removeChild(div);
            div.remove();
            modify.remove();
            del.remove();
            view = false;
        } 
        
       
        //console.log(id);
    }

}