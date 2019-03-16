import * as React from "react"
import { Text, ViewStyle, View, Animated, SafeAreaView, TouchableOpacity } from "react-native"
import { NavigationInjectedProps } from "react-navigation"

const CONTAINER: ViewStyle = {
  flex: 1,
  alignContent: "stretch",
}

interface DrawerState {
  drawerWidth?: number
  displayLeftPane?: boolean
}

/**
 * The Navigation Drawer
 */
export class Drawer extends React.Component<NavigationInjectedProps, DrawerState> {
  state = {
    drawerWidth: 0,
    displayLeftPane: false,
  }
  render() {
    const { drawerWidth, displayLeftPane } = this.state
    const paneShift = displayLeftPane ? 0 : -drawerWidth
    return (
      <SafeAreaView
        onLayout={event => {
          this.setState({
            drawerWidth: event.nativeEvent.layout.width,
          })
        }}
        style={{
          flexDirection: "row",
          height: "100%",
          overflow: "hidden",
        }}
      >
        {/* Left Pane */}
        <Animated.View
          style={{
            left: paneShift,
            width: drawerWidth,
            backgroundColor: "#00c3e3",
          }}
        >
          <Text>Left Pane</Text>
          {this.renderSlideButton()}
        </Animated.View>
        {/* Right Pane */}
        <Animated.View
          style={{
            left: paneShift,
            width: drawerWidth,
            backgroundColor: "#ff4554",
          }}
        >
          <Text>Right Pane</Text>
          {this.renderSlideButton()}
        </Animated.View>
      </SafeAreaView>
    )
  }

  renderSlideButton() {
    return (
      <TouchableOpacity
        style={{
          height: 100,
          marginVertical: 50,
        }}
        onPress={() => {
          this.setState({
            displayLeftPane: !this.state.displayLeftPane,
          })
        }}
      >
        <Text>Slide Drawer</Text>
      </TouchableOpacity>
    )
  }
}
