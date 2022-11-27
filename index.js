// Code your solution in this file!
function distanceFromHqInBlocks(distance) {
    return Math.abs(distance - 42);

}
function distanceFromHqInFeet(distance) {
    return Math.abs(distance - 42) * 264;

}

function distanceTravelledInFeet(startdistance, stopdistance) {
    let dist_in_feet = (stopdistance - startdistance);

    if (stopdistance > startdistance) {
        return dist_in_feet * 264;
    } else {
        return Math.abs(dist_in_feet * 264);
    }


}

function calculatesFarePrice(startdistance, stopdistance) {
    let distance_travelled = Math.abs(stopdistance - startdistance);

    if ((distance_travelled * 264) <= 400) {
        return 0;
    } else if ((distance_travelled*264) <= 2000) {
        return (((distance_travelled*264) - 400) * 2)/100;
    } else if (distance_travelled * 264 <= 2500) {
        return 25;
    } else {
        return "cannot travel that far";
    }
}