/*
redFloor
greenFloor
blueFloor
redCeiling
greenCeiling
blueCeiling
sampleType
palette
applyPalette
*/
import { SampleTypes } from "../constants";
import { rgbToHex, findClosest } from "../utils";

export default function Cell(props) {
  let red, green, blue, color;
  switch (SampleTypes[props.sampleType]) {
    case SampleTypes.BLK:
      red = props.redFloor;
      green = props.greenFloor;
      blue = props.blueFloor;
      break;
    case SampleTypes.RED:
      red = props.redCeiling;
      green = props.greenFloor;
      blue = props.blueFloor;
      break;
    case SampleTypes.GRN:
      red = props.redFloor;
      green = props.greenCeiling;
      blue = props.blueFloor;
      break;
    case SampleTypes.BLU:
      console.log("BLUE!!!");
      red = props.redFloor;
      green = props.greenFloor;
      blue = props.blueCeiling;
      break;
    case SampleTypes.MAG:
      red = props.redCeiling;
      green = props.greenFloor;
      blue = props.blueCeiling;
      break;
    case SampleTypes.CYN:
      red = props.redFloor;
      green = props.greenCeiling;
      blue = props.blueCeiling;
      break;
    case SampleTypes.YLW:
      red = props.redCeiling;
      green = props.greenCeiling;
      blue = props.blueFloor;
      break;
    case SampleTypes.WHT:
      red = props.redCeiling;
      green = props.greenCeiling;
      blue = props.blueCeiling;
      break;
    case SampleTypes.AVG:
    default:
      red = Math.floor((props.redCeiling + props.redFloor) / 2);
      green = Math.floor((props.greenCeiling + props.greenFloor) / 2);
      blue = Math.floor((props.blueCeiling + props.blueFloor) / 2);
      break;
  }
  if (props.palette.length !== 0) {
    color = findClosest(red, green, blue, props.palette);
  } else {
    color = rgbToHex(red, green, blue);
  }
  return <div className="cell" style={{ backgroundColor: color }}></div>;
}
