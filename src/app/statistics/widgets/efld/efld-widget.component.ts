import { Component, OnInit, HostBinding } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { EfldWidgetService, EfldDataModel, DiaryCompletionDataModel } from './efld-widget.service';

@Component({
  selector: 'widget-efld', 
  templateUrl: './efld-widget.component.html',
  styleUrls: ['./efld-widget.component.css'],
  providers: [EfldWidgetService],
  animations: [
      trigger('showEfldWidgetScreenAnimation', [
      state('*', style({
        opacity: 1
      })),
      transition(':enter' , [
        style({
          opacity: 0
        }),
        animate('.15s ease-in')
      ]),
      transition(':leave' , [
        animate( '.15s ease-in', style({ opacity: 0 }) )
      ])
    ])
  ]
})
export class EfldWidgetComponent implements OnInit {

  @HostBinding('@showEfldWidgetScreenAnimation') EfldWidgetAnimation = true;
  efldDataSubscription: any = null;
  EFLDChartData: EfldDataModel[];
  DiaryCompletionChartData: DiaryCompletionDataModel[];
  YesELFD: number = 0;
  NoEFLD: number = 0;
  YesDiary: number = 0;
  NoDiary: number = 0;

  constructor(private efldWidgetService: EfldWidgetService) {}

  ngOnInit() {
    this.getAvailableTeams()
  }

  getAvailableTeams() {
        this.efldDataSubscription = this.efldWidgetService.getEFLDInfo()
        .pluck('data', 'getProjectDiary')
        .subscribe((queryResult: any) => {
            queryResult.forEach(element => {
              if (element.DiaryInfo == null) {
                this.YesELFD++;
                this.NoDiary++;
              }
              else {
                if ( element.DiaryInfo.Err_foundRE == "0" || element.DiaryInfo.Err_foundRE == null)
                  this.YesELFD++;
                else
                  this.NoEFLD++;
                this.YesDiary++
              }
            });
            this.EFLDChartData = [{
                EFLDYesNo: "Yes",
                total: this.YesELFD
            }, {
                EFLDYesNo: "No",
                total: this.NoEFLD
            }];
            this.DiaryCompletionChartData = [{
                DiaryYesNo: "Yes",
                total: this.YesDiary
            }, {
                DiaryYesNo: "No",
                total: this.NoDiary
            }];
        });
    }

  customizeLabel(arg) {
      return arg.valueText + " (" + arg.percentText + ")";
  }
}