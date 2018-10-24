import React, { Component } from "react";
import * as _ from "lodash";
import * as firebaseAPI from "../firebase/firebaseAPI";
import BarChart from "../components/BarChart";
import bootstrap from "bootstrap";
import * as d3helpers from "../helpers/d3-helpers";

class Home extends Component {
  constructor() {
    super();
    this.state = { loaded: false };
  }

  componentWillMount() {
    firebaseAPI.getStreams().then(streams => {
      let tmp_data = d3helpers.pruneAndSort(streams);
      this.hourData = d3helpers.getAverageViewersByHour(tmp_data);
      this.weekdayData = d3helpers.getAverageViewersByWeekday(tmp_data);
      this.setState({
        data: tmp_data,
        currentDisplay: this.hourData,
        timeFormatting: "%H h",
        loaded: true
      });
    });
  }

  changeViewByData = d => {
    switch (d) {
      case "weekday":
        this.setState({
          currentDisplay: this.weekdayData,
          timeFormatting: "%A"
        });
        break;
      case "hour":
        this.setState({
          currentDisplay: this.hourData,
          timeFormatting: "%H h"
        });
        break;
      default:
        break;
    }
  };

  render() {
    return (
      <div>
        <div className="dropdown">
          <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            {this.state.viewBy}
          </button>
          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a
              className={"dropdown-item"}
              onClick={e => {
                this.changeViewByData("weekday");
              }}
            >
              Week Day
            </a>
            <a
              className={"dropdown-item"}
              onClick={e => {
                this.changeViewByData("hour");
              }}
            >
              Hour
            </a>
          </div>
        </div>

        {this.state.loaded ? (
          <BarChart
            data={this.state.currentDisplay}
            timeFormatting={this.state.timeFormatting}
          />
        ) : null}
      </div>
    );
  }
}

export default Home;
