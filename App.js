import React from "react"
import { StyleSheet, View } from "react-native"
import { List, InputItem, Button, Toast, WhiteSpace } from "antd-mobile"

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { enableInput: "", disableInput: "" }
  }

  toastInput() {
    console.log(`state is: ${this.state}`)
    let content = `enable input: ${this.state.enableInput}\ndisable input: ${
      this.state.disableInput
    }`
    Toast.info(content)
  }

  render() {
    return (
      <View style={styles.container}>
        <List>
          <InputItem
            placeholder="this is enable."
            value={this.state.enableInput}
            onChange={value => this.setState({ enableInput: value })}
          >
            Enable:
          </InputItem>
          <InputItem
            disabled
            value={this.state.disableInput}
            placeholder="this is disable"
            onChange={value => this.setState({ disableInput: value })}
          >
            Disable:
          </InputItem>
        </List>
        <WhiteSpace size="xl" />
        <Button
          style={{ marginLeft: 20, marginRight: 20 }}
          onClick={this.toastInput.bind(this)}
        >
          Toast Input
        </Button>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
