import { Component, OnInit } from '@angular/core';
import {Goal} from '../goal'
import {Goals} from '../goals'
import {GoalService} from '../goals/goal.service';
import {AlertsService} from '../alert-service/alerts.service'


@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  providers:[GoalService, AlertsService], //add the providers to the component
  styleUrls: ['./goal.component.css']
})
export class GoalComponent implements OnInit {
    // goals = Goals;
    goals:Goal[];
    alertService:AlertsService;
    constructor(goalService:GoalService,alertService:AlertsService) {
 this.goals = goalService.getGoals();
 this.alertService = alertService;//make the service available to the class
  }

    toogleDetails(index){
        this.goals[index].showDescription = !this.goals[index].showDescription;
    }

    completeGoal(isComplete,index){
       if (isComplete){
           this.goals.splice(index,1);
           }
           }

           constructor(goalService:GoalService,alertService:AlertsService) {
           this.goals = goalService.getGoals();
           this.alertService = alertService;//make the service available to the class
            }
  ngOnInit() {
  }
  deleteGoal(isComplete,index){
          if (isComplete){

              let toDelete=confirm(`Are you sure you want to delete ${this.goals[index].name}`)

              if(toDelete){
                  this.goals.splice(index,1)
                  this.alertService.alertMe(`${this.goals[index].name} has been deleted`)
              }

          }
      }
    addNewGoal(goal){
        let goalLength = this.goals.length;
        goal.id=goalLength+1;
        goal.completeDate = new Date(goal.completeDate)
        this.goals.push(goal)

    }


}
