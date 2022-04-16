import TripCard from "../components/TripCard";
import "./history.css";

function History() {
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
