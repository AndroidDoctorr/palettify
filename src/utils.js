export const rgbToHex = (red, green, blue) => {
  return (
    "#" +
    (red < 16 ? "00" : red.toString(16)) +
    (green < 16 ? "00" : green.toString(16)) +
    (blue < 16 ? "00" : blue.toString(16))
  );
};

export const findClosest = (red, green, blue, palette) => {
  let closestColor = palette[0];
  let closestDistance = 99999999;
  for (let index in palette) {
    const color = palette[index];
    const thisRed = parseInt("0x" + color.substring(1, 3));
    const thisGreen = parseInt("0x" + color.substring(3, 5));
    const thisBlue = parseInt("0x" + color.substring(5, 7));

    const distance = getDistance(
      red,
      green,
      blue,
      thisRed,
      thisGreen,
      thisBlue
    );
    if (distance < closestDistance) {
      closestDistance = distance;
      closestColor = color;
    }
  }
  return closestColor;
};

function getDistance(x1, y1, z1, x2, y2, z2) {
  return Math.sqrt(
    Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2) + Math.pow(z2 - z1, 2)
  );
}
