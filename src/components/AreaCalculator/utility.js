
export const getAreaOfCircle = (radius) => {
    let convertedNumber = Number(radius);
    return (Math.PI * convertedNumber * convertedNumber).toFixed(2);
}

