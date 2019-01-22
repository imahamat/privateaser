'use strict';

//list of bats
//useful for ALL 5 steps
//could be an array of objects that you fetched from api or database
const bars = [{
'id': 'f944a3ff-591b-4d5b-9b67-c7e08cba9791',
'name': 'freemousse-bar',
'pricePerHour': 50,
'pricePerPerson': 20
}, {
'id': '165d65ec-5e3f-488e-b371-d56ee100aa58',
'name': 'solera',
'pricePerHour': 100,
'pricePerPerson': 40
}, {
'id': '6e06c9c0-4ab0-4d66-8325-c5fa60187cf8',
'name': 'la-poudriere',
'pricePerHour': 250,
'pricePerPerson': 80
}];

//list of current booking events
//useful for ALL steps
//the time is hour
//The `price` is updated from step 1 and 2
//The `commission` is updated from step 3
//The `options` is useful from step 4
const events = [{
'id': 'bba9500c-fd9e-453f-abf1-4cd8f52af377',
'booker': 'esilv-bde',
'barId': 'f944a3ff-591b-4d5b-9b67-c7e08cba9791',
'time': 4,
'persons': 8,
'options': {
'deductibleReduction': false
},
'price': 0,
'commission': {
'insurance': 0,
'treasury': 0,
'privateaser': 0
}
}, {
'id': '65203b0a-a864-4dea-81e2-e389515752a8',
'booker': 'societe-generale',
'barId': '165d65ec-5e3f-488e-b371-d56ee100aa58',
'time': 8,
'persons': 30,
'options': {
'deductibleReduction': true
},
'price': 0,
'commission': {
'insurance': 0,
'treasury': 0,
'privateaser': 0
}
}, {
'id': '94dab739-bd93-44c0-9be1-52dd07baa9f6',
'booker': 'otacos',
'barId': '6e06c9c0-4ab0-4d66-8325-c5fa60187cf8',
'time': 5,
'persons': 80,
'options': {
'deductibleReduction': true
},
'price': 0,
'commission': {
'insurance': 0,
'treasury': 0,
'privateaser': 0
}
}];

//list of actors for payment
//useful from step 5
const actors = [{
'eventId': 'bba9500c-fd9e-453f-abf1-4cd8f52af377',
'payment': [{
'who': 'booker',
'type': 'debit',
'amount': 0
}, {
'who': 'bar',
'type': 'credit',
'amount': 0
}, {
'who': 'insurance',
'type': 'credit',
'amount': 0
}, {
'who': 'treasury',
'type': 'credit',
'amount': 0
}, {
'who': 'privateaser',
'type': 'credit',
'amount': 0
}]
}, {
'eventId': '65203b0a-a864-4dea-81e2-e389515752a8',
'payment': [{
'who': 'booker',
'type': 'debit',
'amount': 0
}, {
'who': 'bar',
'type': 'credit',
'amount': 0
}, {
'who': 'insurance',
'type': 'credit',
'amount': 0
}, {
'who': 'treasury',
'type': 'credit',
'amount': 0
}, {
'who': 'privateaser',
'type': 'credit',
'amount': 0
}]
}, {
'eventId': '94dab739-bd93-44c0-9be1-52dd07baa9f6',
'payment': [{
'who': 'booker',
'type': 'debit',
'amount': 0
}, {
'who': 'bar',
'type': 'credit',
'amount': 0
}, {
'who': 'insurance',
'type': 'credit',
'amount': 0
}, {
'who': 'treasury',
'type': 'credit',
'amount': 0
}, {
'who': 'privateaser',
'type': 'credit',
'amount': 0
}]
}];

/*
* **time component**: the number of booked time multiplied by the `bar` price per hour
* **people component**: the number of persons multiplied by the `bar` price per person

```
booking price = time + people
*/
const test = {
"squadName": "Super hero squad",
"homeTown": "Metro City",
"formed": 2016,
"secretBase": "Super tower",
"active": true,
"members": [
{
"name": "Molecule Man",
"age": 29,
"secretIdentity": "Dan Jukes",
"powers": [
"Radiation resistance",
"Turning tiny",
"Radiation blast"
]
},
{
"name": "Madame Uppercut",
"age": 39,
"secretIdentity": "Jane Wilson",
"powers": [
"Million tonne punch",
"Damage resistance",
"Superhuman reflexes"
]
},
{
"name": "Eternal Flame",
"age": 1000000,
"secretIdentity": "Unknown",
"powers": [
"Immortality",
"Heat Immunity",
"Inferno",
"Teleportation",
"Interdimensional travel"
]
}
]
}

// -------------------------------------------------------------------------- //

// *** Step 1 *** //
function step1()
{
for(let i = 0; i < events.length; i++)
{	//document.write(events[i].id);
for(let j = 0; j < bars.length; j++)
{
if(events[i].barId == bars[j].id)
{
events[i].price = events[i].time * bars[j].pricePerHour + events[i].persons * bars[j].pricePerPerson;
//document.write(events[i].price);
}
}
}
}

// *** Step 2 *** //
function step2()
{
for(let i= 0; i < events.length; i++)
{
//document.write(events[i].id);
for(let j= 0; j < bars.length; j++)
{
if(events[i].barId==bars[j].id)
{
if (events[i].persons>10 && events[i].persons<=20 )
{
	bars[j].pricePerPerson= bars[j].pricePerPerson-0.1*bars[j].pricePerPerson;
	events[i].price= events[i].time*bars[j].pricePerHour+events[i].persons*bars[j].pricePerPerson;
}else if (events[i].persons>20 && events[i].persons<=60)
{
	bars[j].pricePerPerson= bars[j].pricePerPerson-0.3*bars[j].pricePerPerson;
	 events[i].price= events[i].time*bars[j].pricePerHour+events[i].persons*bars[j].pricePerPerson;
}else if (events[i].persons>60)
{
	bars[j].pricePerPerson= bars[j].pricePerPerson-0.5*bars[j].pricePerPerson;
	 events[i].price= events[i].time*bars[j].pricePerHour+events[i].persons*bars[j].pricePerPerson;
}else {
			events[i].price=events[i].time*bars[j].pricePerHour+events[i].persons*bars[j].pricePerPerson;
}

}
}
}
}
// *** Step 3 *** //
function step3()
{
step2();
for(let i= 0; i < events.length; i++)
{
let c = events[i].price*0.3;
events[i].commission.insurance=c/2;
events[i].commission.treasury=events[i].persons;
events[i].commission.privateaser=c-events[i].commission.insurance-events[i].commission.treasury;
}
}
// *** Step 4 *** //
function step4()
{
step3();
for(let i= 0; i < events.length; i++)
{
if(events[i].options.deductibleReduction==true)
{
events[i].price+=events[i].persons;
events[i].commission.privateaser+=events[i].persons;
}
}
}

// *** Main *** //
//step1();
step2();
//step3();
//step4();
//console.log(bars);
//console.log(events);
//console.log(actors);
