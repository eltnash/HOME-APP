// im guessing this is the interface that we can use to let the component know what type to data to expect?
export interface HousingLocation {
    // are these input properties that we can use to pass data to our component ?
    // properties have key value pairs and the syntax below contans key value pair structure
    id:number,
    name:string,
    city:string,
    state:string,
    photo:string,
    availableUnits:number,
    wifi:boolean,
    laundry:boolean,
}

//inside the housing-location.component.ts file we want to pass the date to, we'l need to create an input decorator that tells angular that the property can be set in a template
