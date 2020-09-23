import { decorate, observable } from "mobx";
import instance from "./instance";

class ProgressStores {
  progresses = [];
  // followedGoals = [];
  loading = true;

  fetchProgresses = async () => {
    try {
      const response = await instance.get("/progress");
      this.progresses = response.data;

      this.loading = false;
    } catch (error) {
      console.log("error", error);
    }
  };

  // fetchFollowedGoals = async (userId) => {
  //   try {
  //     const response = await instance.get("/progress");
  //     this.followedGoals = response.data.filter(
  //       (progress) => progress.profileId === userId
  //     );
  //     console.log(
  //       "ProgressStores -> fetchFollowedGoals -> this.followedGoal",
  //       this.followedGoal
  //     );
  //     this.loading = false;
  //   } catch (error) {
  //     console.log("error", error);
  //   }
  // };
}

decorate(ProgressStores, {
  progresses: observable,
  followedGoals: observable,
  loading: observable,
});

const progressStore = new ProgressStores();
progressStore.fetchProgresses();
// progressStore.fetchFollowedGoals();
export default progressStore;