import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import RecentExpenses from "./screens/RecentExpenses";
import CreateExpense from "./screens/CreateExpense";
import EditExpense from "./screens/EditExpense";
import AllExpenses from "./screens/AllExpenses";
import Colors from "./constants/Colors";
import AntDesign from "@expo/vector-icons/AntDesign";
import { ExpenseContextProvider } from "./store/context";

const BottomTabs = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function BottomTabsNavigator() {
  return (
    <BottomTabs.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: Colors.blue },
        headerTintColor: Colors.white,
        tabBarActiveBackgroundColor: Colors.blue,
        tabBarActiveTintColor: Colors.white,
        tabBarInactiveTintColor: Colors.blue,
      }}
    >
      <BottomTabs.Screen
        name="RecentExpense"
        component={RecentExpenses}
        options={{
          title: "Recent Expenses",
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="filter" size={size} color={color} />
          ),
        }}
      />
      <BottomTabs.Screen
        name="AllExpense"
        component={AllExpenses}
        options={{
          title: "All Expenses",
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="calendar" size={size} color={color} />
          ),
        }}
      />
    </BottomTabs.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <ExpenseContextProvider>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: { backgroundColor: Colors.blue },
              headerTintColor: Colors.white,
              contentStyle: { backgroundColor: Colors.lightblue },
            }}
          >
            <Stack.Screen
              name="BottomTabs"
              component={BottomTabsNavigator}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="CreateExpense"
              component={CreateExpense}
              options={{ title: "Create Expense" }}
            />
            <Stack.Screen
              name="EditExpense"
              component={EditExpense}
              options={{ title: "Edit Expense" }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </ExpenseContextProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
