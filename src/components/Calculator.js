import { Grid, Table, Button, Input } from "semantic-ui-react";
export default function Calculator(props) {
  return (
    <>
      <Grid centered columns={4}>
        <Grid.Column textAlign="center">
          <h1>Simple Calculator</h1>
          <Table color="grey" inverted celled textAlign="center">
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell colSpan="4">
                  <Input
                    size="large"
                    disabled
                    style={{ width: "100%", color: "white" }}
                    value={props.enteredValue.join("")}
                  />
                </Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body
              style={{
                fontSize: "20px",
                fontStyle: "bold",
                fontWeight: "bold",
              }}
            >
              <Table.Row>
                <Table.Cell
                  selectable
                  data-value="clear"
                  onClick={props.handleClick}
                >
                  <a href="#">AC</a>
                </Table.Cell>
                <Table.Cell
                  selectable
                  data-value="erase"
                  onClick={props.handleClick}
                >
                  <a href="#">X</a>
                </Table.Cell>

                <Table.Cell
                  selectable
                  data-value="%"
                  onClick={props.handleClick}
                >
                  <a href="#">%</a>
                </Table.Cell>
                <Table.Cell
                  selectable
                  data-value="/"
                  onClick={props.handleClick}
                >
                  <a href="#">/</a>
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell
                  selectable
                  data-value="7"
                  onClick={props.handleClick}
                >
                  <a href="#">7</a>
                </Table.Cell>
                <Table.Cell
                  selectable
                  data-value="8"
                  onClick={props.handleClick}
                >
                  <a href="#">8</a>
                </Table.Cell>
                <Table.Cell
                  selectable
                  data-value="9"
                  onClick={props.handleClick}
                >
                  <a href="#">9</a>
                </Table.Cell>
                <Table.Cell
                  selectable
                  data-value="*"
                  onClick={props.handleClick}
                >
                  <a href="#">*</a>
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell
                  selectable
                  data-value="4"
                  onClick={props.handleClick}
                >
                  <a href="#">4</a>
                </Table.Cell>
                <Table.Cell
                  selectable
                  data-value="5"
                  onClick={props.handleClick}
                >
                  <a href="#">5</a>
                </Table.Cell>
                <Table.Cell
                  selectable
                  data-value="6"
                  onClick={props.handleClick}
                >
                  <a href="#">6</a>
                </Table.Cell>
                <Table.Cell
                  selectable
                  data-value="-"
                  onClick={props.handleClick}
                >
                  <a href="#">-</a>
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell
                  selectable
                  data-value="1"
                  onClick={props.handleClick}
                >
                  <a href="#">1</a>
                </Table.Cell>
                <Table.Cell
                  selectable
                  data-value="2"
                  onClick={props.handleClick}
                >
                  <a href="#">2</a>
                </Table.Cell>
                <Table.Cell
                  selectable
                  data-value="3"
                  onClick={props.handleClick}
                >
                  <a href="#">3</a>
                </Table.Cell>
                <Table.Cell
                  selectable
                  data-value="+"
                  onClick={props.handleClick}
                >
                  <a href="#">+</a>
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell
                  selectable
                  colSpan="2"
                  data-value="0"
                  onClick={props.handleClick}
                >
                  <a href="#">0</a>
                </Table.Cell>
                <Table.Cell
                  selectable
                  data-value="."
                  onClick={props.handleClick}
                >
                  <a href="#">.</a>
                </Table.Cell>
                <Table.Cell
                  selectable
                  data-value="equal"
                  onClick={props.handleClick}
                >
                  <a href="#">=</a>
                </Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </Grid.Column>
      </Grid>
    </>
  );
}
