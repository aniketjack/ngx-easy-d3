import { inject, TestBed } from '@angular/core/testing';

import { SumService } from '../../ngx-easy-d3';

describe('SumService', () => {

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                SumService
            ]
        });
    });

    it('should calculate the sum',
        inject([SumService],
            (sumService: SumService) => {
                sumService.calculate(45, 78, 90, 674);
                expect(sumService.sum).toEqual(887);
            })
    );

});
