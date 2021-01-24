export class CounterServirce {
    activeC = 0; 
    inactiveC = 0; 

    incrementActiveToInactive(){
        this.activeC++; 
        console.log("Times to inactivate: " + this.activeC);
    }

    incrementInactiveToActive(){
        this.inactiveC++; 
        console.log("Times to activate: " + this.inactiveC);
    }

}