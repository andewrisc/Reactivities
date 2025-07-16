import { Grid2, Typography } from "@mui/material"
import { useParams } from "react-router";
import { useActivities } from "../../../lib/hooks/useActivities";
import ActivityDetailsHeader from "./ActivityDetailsHeader";
import ActivityDetailsChat from "./ActivityDetailsChat";
import ActivityDetailsInfo from "./ActivityDetailsInfo";
import ActivityDetailsSideBar from "./ActivityDetailsSideBar";


export default function ActivityDetails() {
    const {id} = useParams();
    const {activity,isLoadingActivity} = useActivities(id);

    if(isLoadingActivity) return <Typography>Loading ... </Typography>
    if(!activity) return <Typography>Activity Not Found...</Typography>

  return (
   <Grid2 container spacing={3}>
        <Grid2 size={8}>
            <ActivityDetailsHeader  activity={activity}/>
            <ActivityDetailsInfo activity={activity}/>
            <ActivityDetailsChat />
        </Grid2>
        <Grid2 size={4}>
            <ActivityDetailsSideBar />
        </Grid2>
   </Grid2>
  )
}
