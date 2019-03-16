import * as React from "react"
import { Text, ViewStyle, View, Animated, SafeAreaView } from "react-native"
import { NavigationInjectedProps } from "react-navigation"

const CONTAINER: ViewStyle = {
  flex: 1,
  alignContent: "stretch",
}

interface DrawerState {
  drawerWidth?: number
}

/**
 * The Navigation Drawer
 */
export class Drawer extends React.Component<NavigationInjectedProps, DrawerState> {
  state = {
    drawerWidth: 0,
  }
  render() {
    const { drawerWidth } = this.state
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
        }}
      >
        {/* Left Pane */}
        <Animated.View
          style={{
            left: -drawerWidth,
            width: drawerWidth,
            backgroundColor: "#00c3e3",
          }}
        >
          <Text>Left Pane</Text>
        </Animated.View>
        {/* Right Pane */}
        <Animated.View
          style={{
            left: -drawerWidth,
            width: drawerWidth,
            backgroundColor: "#ff4554",
          }}
        >
          <Text>Right Pane</Text>
        </Animated.View>
      </SafeAreaView>
    )
  }
}
