import { animate, keyframes, state, style, transition, trigger } from '@angular/animations';

export let fadeIn = trigger('fadeIn', [
    transition('void => *', [
     style({opacity: 0}),
     animate(3000) 
    ])
])

export let slideInFromRight = trigger('slideInFromRight', [
    transition('void => *', [
        animate(1000, keyframes([
            style({offset: 0,opacity: 0, transform: 'translateX(100%)'}),
            style({offset: 1,opacity: 1, transform: 'translateX(10px)'})
        ])),
    ])
])

export let slideInFromLeft = trigger('slideInFromLeft', [
    transition('void => *', [
        animate(1000, keyframes([
            style({offset:0, opacity: 0, transform: 'translateX(-100%)'}),
            style({offset:1, opacity: 1, transform: 'translateX(10px)'})
        ]))
    ])
])