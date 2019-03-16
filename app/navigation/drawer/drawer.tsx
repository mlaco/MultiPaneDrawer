import * as React from "react"
import { ViewStyle, View, Animated, SafeAreaView } from "react-native"
import { NavigationInjectedProps } from "react-navigation"

const CONTAINER: ViewStyle = {
  flex: 1,
  alignContent: "stretch",
}

interface DrawerState {}

/**
 * The Navigation Drawer
 */
export class Drawer extends React.Component<NavigationInjectedProps, DrawerState> {
  render() {
    return <SafeAreaView />
  }
}
