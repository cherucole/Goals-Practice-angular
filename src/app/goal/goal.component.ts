import { Component, OnInit } from '@angular/core';
import {Goal} from '../goal'
import {Goals} from '../goals'


@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css']
})
export class GoalComponent implements OnInit {
    goals = Goals;

    toogleDetails(index){
        this.goals[index].showDescription = !this.goals[index].showDescription;
    }

    completeGoal(isComplete,index){
       if (isComplete){
           this.goals.splice(index,1);
           }
           }

  constructor() { }
  ngOnInit() {
  }
  deleteGoal(isComplete,index){
        if (isComplete){
            let toDelete=confirm(`Are you sure you want to delete ${this.goals[index].name}`)

            if(toDelete){
                this.goals.splice(index,1)
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
