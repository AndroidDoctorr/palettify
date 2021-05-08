import { Form } from "react-bootstrap";
import { Resolutions, SampleTypes, Palettes } from "../constants";

export default function Sidebar(props) {
  return (
    <div>
      <Form>
        <Form.Group>
          <Form.Label>Resolution: </Form.Label>
          <Form.Control
            as="select"
            value={props.resolution}
            onChange={(event) => {
              props.setResolution(event.target.value);
            }}
          >
            {Object.keys(Resolutions).map((resolution) => {
              return (
                <option key={resolution} value={resolution}>
                  {Resolutions[resolution]}
                </option>
              );
            })}
          </Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label>Err (Sample Point): </Form.Label>
          <Form.Control
            as="select"
            value={props.sampleType}
            onChange={(event) => props.setSampleType(event.target.value)}
          >
            {Object.keys(SampleTypes).map((sampleType) => {
              return (
                <option key={sampleType} value={sampleType}>
                  {SampleTypes[sampleType]}
                </option>
              );
            })}
          </Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label>Palette: </Form.Label>
          <Form.Control
            as="select"
            value={props.paletteKey}
            onChange={(event) => props.setPalette(event.target.value)}
          >
            {Object.keys(Palettes).map((paletteKey) => {
              return (
                <option key={paletteKey} value={paletteKey}>
                  {Palettes[paletteKey].name}
                </option>
              );
            })}
          </Form.Control>
        </Form.Group>

        {/* TODO: ADD COLORS TO PALETTE */}

        {/* TODO: EDIT COLORS IN PALETTE */}

        {/* TODO: REMOVE COLORS FROM PALETTE */}
      </Form>
    </div>
  );
}
