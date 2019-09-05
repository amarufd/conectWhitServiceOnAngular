import { TestBed } from '@angular/core/testing';

import { CognitoAouthService } from './cognito-aouth.service';

describe('CognitoAouthService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CognitoAouthService = TestBed.get(CognitoAouthService);
    expect(service).toBeTruthy();
  });
});
