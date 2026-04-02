const getDistance = ([x1, y1], [x2, y2]) => {
    const xs = x2 - x1;
    const ys = y2 - y1;
  
    return Math.sqrt(xs ** 2 + ys ** 2);
  };

// BEGIN
const getTheNearestLocation = (locations, point) => {
    if (locations.length === 0) {
        return null;
    }
    let nearestLocation = null;
    let minDistance = Infinity;
    for (const location of locations) {
        const [name, coords] = location;
        const distance = getDistance(point, coords);
        if (distance < minDistance) {
            minDistance = distance;
            nearestLocation = [name, coords];
        }
    }
    return nearestLocation;
}

export { getTheNearestLocation };
// END

