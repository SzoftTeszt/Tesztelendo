import { TestBed, fakeAsync } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[
        FormsModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  // it(`should have as title 'Tesztelendo'`, () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.componentInstance;
  //   expect(app.title).toEqual('Tesztelendo');
  // });

  // it('should render title', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.nativeElement as HTMLElement;
  //   expect(compiled.querySelector('.content span')?.textContent).toContain('Tesztelendo app is running!');
  // });

  it('Üdvözlés ellenőrzése',()=>{
      const fixture = TestBed.createComponent(AppComponent);
      const app = fixture.componentInstance;
      const appElements = fixture.nativeElement;
      const h1= appElements.querySelector('h1');
      fixture.detectChanges();
      expect(h1.textContent).toContain('Helló');
  })

  it('UserName ellenőrzése',()=>{
      const fixture = TestBed.createComponent(AppComponent);
      const app = fixture.componentInstance;
      const appElements = fixture.nativeElement;
      const h1= appElements.querySelector('h1');
      app.userName="Csilla";
      fixture.detectChanges();
      expect(h1.textContent).toContain(app.userName);
  })

  it('Template=>Controller Bind',()=>{
      const fixture = TestBed.createComponent(AppComponent);
      const app = fixture.componentInstance;
      const appElements = fixture.nativeElement;
      const adatInput= appElements.querySelector('input');
      adatInput.value="Valami";
      fixture.detectChanges();
      adatInput.dispatchEvent(new Event('input'));
      expect(app.adat).toEqual(adatInput.value);
  })


  it('Add User',fakeAsync( ()=>{
      const fixture = TestBed.createComponent(AppComponent);
      const app = fixture.componentInstance;
      const appElements = fixture.nativeElement;
      
      const adatInput= appElements.querySelector('input');
      adatInput.value="Attila";      
      //adatInput.dispatchEvent(new Event('input')); 
      fixture.detectChanges();
      fixture.whenStable().then(
        ()=>{
          const gomb= appElements.querySelector('button');
          const adatok= appElements.querySelector('#adatok');
          gomb.click();
          fixture.detectChanges();
          expect(adatok.textContent).toContain(app.adat);
        })
  })
  )
  it('Delete Users',fakeAsync( ()=>{
      const fixture = TestBed.createComponent(AppComponent);
      const app = fixture.componentInstance;
      const appElements = fixture.nativeElement;

      const delGomb= appElements.querySelector('#deleteButton');
      delGomb.click();
      fixture.detectChanges();

      fixture.whenStable().then(
        ()=>{          
          const adatok= appElements.querySelector('#adatok'); 
          // expect(app.adatok).toEqual([]);
          expect(adatok.textContent).toEqual('[]');
        })
  })
  )

  it('Controller=>Template Bind',fakeAsync(
    ()=>{
      const fixture = TestBed.createComponent(AppComponent);
      const app = fixture.componentInstance;
      const appElements = fixture.nativeElement;
      const adatInput= appElements.querySelector('input');
      app.adat="Érték";      
      fixture.detectChanges();
      //adatInput.dispatchEvent(new Event('input'));
      fixture.whenStable().then(
        ()=>{expect(adatInput.value).toEqual(app.adat);}
      )
      
  })
  )


  it('empty',()=>{
      const fixture = TestBed.createComponent(AppComponent);
      const app = fixture.componentInstance;
      const appElements = fixture.nativeElement;
  })
});
