import { Directive, ElementRef, HostListener } from "@angular/core";
import { AssistantService } from "src/app/services/assistants/assistant.service";


@Directive({
    selector: '[change_a]'
})
export class ChangeAsszisztensDirective{

    constructor(private a_s: AssistantService, private el: ElementRef){}

    @HostListener('click') onClick(){
        let id = this.el.nativeElement.value;
        const elements = document.getElementsByClassName(id);


        elements[0].innerHTML =`<input
                                id="input_name"
                                value="${elements[0].textContent}"
                                style=  "
                                        width: 6rem;
                                        margin: 0;
                                        "
                                >`;
        elements[2].innerHTML = `
                                <button
                                id="ok"                                    
                                style= "
                                        background-color: #F7FF93;
                                        color: black;
                                        margin: .2rem;
                                        width: 5rem;"
                                        mat-raised-button
                                        title="${id}"
                                >Ok</button>
                                `;                                                           
        
        let ora: string = elements[1].textContent!;

        const ok = document.getElementById('ok');                                    
        ok?.addEventListener('click',()=>{
        //console.log('event');                
        
        const name = (<HTMLInputElement>document.getElementById('input_name')).value;                                            
        this.a_s.update(ok.title, name, ora);         
        });                               

    }
}