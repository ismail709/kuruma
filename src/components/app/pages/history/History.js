import { useEffect } from "react";
import { useSelector } from "react-redux";
import TripCard from "../../common/trip-card";
import "./history.css";

function History() {
  const user = useSelector(state => state.user.user);
  /*useEffect(() => {
        const appbar = document.querySelector("#appbar");
        const historyview = document.querySelector("#historyview");
        historyview.style.height =
            window.innerHeight - appbar.getBoundingClientRect().height + "px";
        window.onresize = () => {
            historyview.style.height =
                window.innerHeight -
                appbar.getBoundingClientRect().height +
                "px";
        };
    });*/

    useEffect(() => {
      console.log(user);

    })
    
    if(!user){
      return (<div className="d-flex flex-column justify-content-center align-items-center h-100">
      <div className='fs-1'>
          Please login to see your trip history
      </div>
      </div>);
    }

  return (
    <div id="historyview">
      <TripCard
        carname="Kia Picanto"
        enddate={new Date().getDate() + "/" + new Date().getMonth()}
      />
      <TripCard
        carname="Kia Picanto"
        enddate={new Date().getDate() + "/" + new Date().getMonth()}
      />
      <TripCard
        carname="Kia Picanto"
        enddate={new Date().getDate() + "/" + new Date().getMonth()}
      />
      <TripCard
        carname="Kia Picanto"
        enddate={new Date().getDate() + "/" + new Date().getMonth()}
      />
      <TripCard
        carname="Kia Picanto"
        enddate={new Date().getDate() + "/" + new Date().getMonth()}
      />
      <TripCard
        carname="Kia Picanto"
        enddate={new Date().getDate() + "/" + new Date().getMonth()}
      />
      <TripCard
        carname="Kia Picanto"
        enddate={new Date().getDate() + "/" + new Date().getMonth()}
      />
      <TripCard
        carname="Kia Picanto"
        enddate={new Date().getDate() + "/" + new Date().getMonth()}
      />
      <TripCard
        carname="Kia Picanto"
        enddate={new Date().getDate() + "/" + new Date().getMonth()}
      />
      <TripCard
        carname="Kia Picanto"
        enddate={new Date().getDate() + "/" + new Date().getMonth()}
      />
      <TripCard
        carname="Kia Picanto"
        enddate={new Date().getDate() + "/" + new Date().getMonth()}
      />
      <TripCard
        carname="Kia Picanto"
        enddate={new Date().getDate() + "/" + new Date().getMonth()}
      />
    </div>
  );
}

export default History;
