import { Store } from '@/store';

declare module '@vue/runtime-core' {
    interface ComponentCustomProperties {
        $store: Store;
    }
}

declare module '*.vue' {
    import type { DefineComponent } from 'vue';
    const component: DefineComponent;
    export default component;
}

declare namespace NodeJS {
    interface Process {
        env: ProcessEnv;
    }
    interface ProcessEnv {
        /**
         * By default, there are two modes in Vite:
         *
         * * `development` is used by vite and vite serve
         * * `production` is used by vite build
         *
         * You can overwrite the default mode used for a command by passing the --mode option flag.
         *
         */
        readonly NODE_ENV: 'development' | 'production';
    }
}
