import { NgModule, ModuleWithProviders } from '@angular/core';
import { DonutComponent } from '../components/donut/donut.component';
import { DonutService } from '../services/donut.service';


@NgModule({
    declarations: [
        // Pipes.
        // Directives.
        // Components.
        DonutComponent
    ],
    exports: [
        // Pipes.
        // Directives.
        // Components.
        DonutComponent
    ]
})
// Consider registering providers using a forRoot() method
// when the module exports components, directives or pipes that require sharing the same providers instances.
// Consider registering providers also using a forChild() method
// when they requires new providers instances or different providers in child modules.
export class EasyD3GraphModule {

    /**
     * Use in AppModule: new instance of SumService.
     */
    public static forRoot(): ModuleWithProviders<EasyD3GraphModule> {
        return {
            ngModule: EasyD3GraphModule,
            providers: [DonutService]
        };
    }

    /**
     * Use in features modules with lazy loading: new instance of SumService.
     */
    public static forChild(): ModuleWithProviders<EasyD3GraphModule> {
        return {
            ngModule: EasyD3GraphModule,
            providers: [DonutService]
        };
    }

}