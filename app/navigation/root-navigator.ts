import { createStackNavigator, createDrawerNavigator } from "react-navigation"
import { ExampleNavigator } from "./example-navigator"
import { Drawer } from "./drawer/drawer"
import { FirstExampleScreen } from "../screens/first-example-screen"

export const RootNavigator = createDrawerNavigator(
  {
    exampleScreen: { screen: FirstExampleScreen },
  },
  {
    navigationOptions: {
      gesturesEnabled: false,
    },
    initialRouteName: "exampleScreen",
    contentComponent: Drawer,
  },
)
