import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RegistrationComponent } from './registration.component';
import { FormsModule } from '@angular/forms';

describe('RegistrationComponent', () => {
  let component: RegistrationComponent;
  let fixture: ComponentFixture<RegistrationComponent>;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [],
      providers: [
        {
          provide: Router,
          useValue: { navigate: jasmine.createSpy('navigate') }
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(RegistrationComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show success message and redirect when form is valid', () => {
    spyOn(window, 'alert');
    
    component.firstname = 'John';
    component.lastname = 'Doe';
    component.mobile = '1234567890';
    component.email = 'john@example.com';
    component.address = '123 Street';
    component.password = '123456';

    component.completeRegistration();

    expect(window.alert).toHaveBeenCalledWith('Registration successful!');
    expect(router.navigate).toHaveBeenCalledWith(['/login']);
  });

  it('should show validation errors when form is invalid', () => {
    spyOn(window, 'alert');
    component.completeRegistration();
    expect(window.alert).toHaveBeenCalled();
    expect(router.navigate).not.toHaveBeenCalled();
  });
});