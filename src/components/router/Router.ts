import Vue from 'vue';
import VueRouter from 'vue-router';

import { InfoComponent } from './../info';
import { ExperimentStartComponent } from './../experiment-start';
import { MntsComponent } from './../mnts';
import { ExperimentUpdateComponent } from '../experiment-upate/experiment-update';

// @ts-ignore
Vue.use(VueRouter);

export const createRouter = () => new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            components: {
                content: ExperimentStartComponent,
                'experiment-container': MntsComponent,
            },
        },
        {
            path: '/update',
            components: {
                content: ExperimentUpdateComponent,
                'experiment-container': MntsComponent,
            },
        },

        {
            path: '/info',
            components: {
                content: InfoComponent,
                'experiment-container': MntsComponent
            },
        },
    ],
    base: '/mntns/',
    scrollBehavior () {
        return { x: 0, y: 0 };
    }
});
