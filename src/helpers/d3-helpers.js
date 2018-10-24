import * as _ from "lodash";
import moment from 'moment'
import { stackOrderInsideOut } from "d3-shape";

export let pruneAndSort = api_data => {
  let tmp =  _.map(api_data, d => {
    return {datetime: d.createTime, 
            viewers: sumViewersInStreamArray(d.fields.data.arrayValue.values)
          }
  })
  let re = _.sortBy(tmp, d => {
    return d.datetime;
  });
  return re
}

export let sumViewersInStreamArray = stream_array => {
  let viewer_sum = 0;
  _.map(stream_array, s => {
    viewer_sum += parseFloat(s.mapValue.fields.viewer_count.integerValue);
  });
  return viewer_sum;
};


export let getAverageViewersByHour = data => {
  let temp_obj = {};
  _.map(data, d => {
    let curr_date = moment(d.datetime).hour();
    if (temp_obj[d.datetime]) {
      temp_obj[curr_date] = {
        sum: temp_obj[curr_date].sum + d.viewers,
        count: temp_obj[curr_date].count + 1
      };
    } else {
      temp_obj[curr_date] = {
        sum: d.viewers,
        count: 1
      };
    }
  });

  let formatted_list = [];
  _.map(temp_obj, (value, key) => {
    let set_date = moment().hour(key);
    formatted_list.push({
      datetime: set_date,
      viewers: value.sum / value.count
    });
  });

  return formatted_list;
};

export let getAverageViewersByWeekday = data => {
  let temp_obj = {};
  _.map(data, d => {
    let curr_day = moment(d.datetime).weekday();
    if (temp_obj[d.datetime]) {
      temp_obj[curr_day] = {
        sum: temp_obj[curr_day].sum + d.viewers,
        count: temp_obj[curr_day].count + 1
      };
    } else {
      temp_obj[curr_day] = {
        sum: d.viewers,
        count: 1
      };
    }
  });

  let formatted_list = [];
  _.map(temp_obj, (value, key) => {
    let set_date = moment().day(key);
    formatted_list.push({
      datetime: set_date,
      viewers: value.sum / value.count
    });
  });
  return formatted_list;
};
