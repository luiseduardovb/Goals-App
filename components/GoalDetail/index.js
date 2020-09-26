import React, { useState } from "react";
import { observer } from "mobx-react";
import { SafeAreaView } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Circle } from "react-native-svg";

//Components
import ProgressCircle from "../ProgressCircle";
import PopularityGraph from "../PopularityGraph";

//Store

//Styles
import { LeaderBoard, PersonalProgress, Popularity } from "./styles";
import { Text } from "native-base";

const GoalDetail = ({ route }) => {
  const { goal } = route.params;

  return (
    <SafeAreaView>
      <ScrollView>
        <LeaderBoard>
          <Text>Leaderboard</Text>
        </LeaderBoard>
        <PersonalProgress>
          <Text>Progress</Text>
          <ProgressCircle route={route} />
        </PersonalProgress>
        <Popularity>
          <Text>Popularity</Text>
          <PopularityGraph route={route} />
        </Popularity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default observer(GoalDetail);
