import "./App.css";
import { Container, Row, Col } from "react-bootstrap";
import Sidebar from "./components/Sidebar";
import Cell from "./components/Cell";
import React from "react";
import { Resolutions, Palettes } from "./constants";

class App extends React.Component {
  constructor(props) {
    super(props);

    const red = 16 + Math.floor(Math.random() * 220);
    const green = 16 + Math.floor(Math.random() * 220);
    const blue = 16 + Math.floor(Math.random() * 220);
    const sidebarColor =
      "#" + red.toString(16) + green.toString(16) + blue.toString(16);

    const defaultState = {
      resolution: "MD",
      sampleType: "AVG",
      paletteKey: "Default",
      sidebarColor,
    };

    this.state = defaultState;
  }

  render() {
    // TODO: Cell size varies with resolution

    const floors = [];
    const ceilings = [];
    const resolution = Resolutions[this.state.resolution];
    const cellSize = 256 / resolution;
    for (let i = 0; i <= 256 - cellSize; i += cellSize) {
      floors.push(i);
      ceilings.push(i + cellSize - 1);
    }

    return (
      <div className="App" style={{ height: "100vh" }}>
        <Container className="h-100 fullwidth">
          <Row className="h-100">
            <Col xs={3} style={{ backgroundColor: this.state.sidebarColor }}>
              <Sidebar
                resolution={this.state.resolution}
                sampleType={this.state.sampleType}
                paletteKey={this.state.paletteKey}
                setResolution={(resolution) => {
                  this.setState({ resolution });
                }}
                setSampleType={(sampleType) => {
                  this.setState({ sampleType });
                }}
                setPalette={(paletteKey) => {
                  console.log("Set palette");
                  this.setState({ paletteKey });
                }}
              />
            </Col>
            <Col xs={9}>
              {floors.map((blueFloor, blueIndex) => {
                // Layers (Blue axis)
                const blueCeiling = ceilings[blueIndex];
                return (
                  <div className="layer" key={"blue" + blueIndex}>
                    {floors.map((greenFloor, greenIndex) => {
                      // Cell Rows (Green axis)
                      const greenCeiling = ceilings[greenIndex];
                      return (
                        <div className="cellRow" key={"green" + greenIndex}>
                          {floors.map((redFloor, redIndex) => {
                            // Cells (Red axis)
                            const redCeiling = ceilings[redIndex];
                            return (
                              <Cell
                                key={"red" + redIndex}
                                redFloor={redFloor}
                                greenFloor={greenFloor}
                                blueFloor={blueFloor}
                                redCeiling={redCeiling}
                                greenCeiling={greenCeiling}
                                blueCeiling={blueCeiling}
                                sampleType={this.state.sampleType}
                                palette={Palettes[this.state.paletteKey].colors}
                              />
                            );
                          })}
                        </div>
                      );
                    })}
                  </div>
                );
              })}
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
