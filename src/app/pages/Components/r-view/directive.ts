import { Directive, ElementRef, HostListener } from "@angular/core";
import { CouldworkService } from "src/app/services/couldworks/couldwork.service";
import { CouldWorkWithoutID } from "../../Objects/interfaces";


@Directive({
    selector: '[change_r]'
})
export class ChangeRendlesDirective {
    view: boolean = false;
    nap : any;
    begin : any;
    end : any;
    rname : any;
    doctor : any;

    buttons :any; 
    constructor(private c_s: CouldworkService, private el: ElementRef){}

    @HostListener('click') onClick() {
        if(!this.view){            

            let id = this.el.nativeElement.value;
            const elements = document.getElementsByClassName(id);

            const nap = elements[0];
            const begin = elements[1];
            const end = elements[2];
            const rname = elements[3];        
            const doctor = elements[4];   
            console.log(nap);         
            
            nap.innerHTML = `<input
                            id="input_nap"
                            value="${nap.textContent}"
                            style=  "
                                    width: 2.5rem;
                                    margin: 0;
                                    "
                            >`;

            begin.innerHTML = `<input
                            id="input_begin"
                            value="${begin.textContent}"
                            style=  "
                                    width: 3rem;
                                    margin: 0;
                                    "
                            >`;

            end.innerHTML = `<input
                            id="input_end"
                            value="${end.textContent}"
                            style=  "
                                    width: 3rem;
                                    margin: 0;
                                    "
                            >`;

            rname.innerHTML = `<input
                            id="input_rname"
                            value="${rname.textContent}"
                            style=  "
                                    width: 5rem;
                                    margin: 0;
                                    "
                            >`;

            doctor.innerHTML =`<input
                            id="input_doctor"
                            value="${doctor.textContent}"
                            style=  "
                                    width: 5rem;
                                    margin: 0;
                                    "
                            >`;

            elements[5].innerHTML = `
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

            const ok = document.getElementById('ok');                                    
            ok?.addEventListener('click',()=>{
                console.log('event');                

                const day = (<HTMLInputElement>document.getElementById('input_nap')).value;
                const begin = (<HTMLInputElement>document.getElementById('input_begin')).value;
                const end = (<HTMLInputElement>document.getElementById('input_end')).value;
                const rname = (<HTMLInputElement>document.getElementById('input_rname')).value;
                const doctor = (<HTMLInputElement>document.getElementById('input_doctor')).value;                

                let new_r:CouldWorkWithoutID = {
                    'day' : day,
                    'rname' : rname,
                    'begin' : begin,
                    'end' : end,
                    'doctor' : doctor
                }

                this.c_s.update(ok.title, new_r);
                //window.location.reload();
            });

            this.view = true;
        }

    }
}
