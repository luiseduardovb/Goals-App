import React from "react";

//Components
import ProgressBar from "../ProgressBar";
import GoalChart from "../GoalChart";
import CategoriesPieChart from "../CategoriesPieChart";

//Stores
import authStore from "../../stores/authStore";
import profileStore from "../../stores/profileStore";

//Styles
import { StyledView } from "./styles";
import { SafeAreaView } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

const Dashboard = ({ navigation }) => {
  const profileOwnedGoals = profileStore.profiles.find(
    (profile) => profile.userId === authStore.user.id
  );

  return (
    <SafeAreaView>
      <ScrollView>
        <GoalChart goals={profileOwnedGoals.goal} navigation={navigation} />
        <CategoriesPieChart />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Dashboard;
