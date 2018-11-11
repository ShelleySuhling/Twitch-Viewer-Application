import * as _ from "lodash";
import moment from "moment";

export let processDataByTimeFormat = (data, timeFormat) => {
  let summed_streams = _.map(data, (d) => {
    return {
      datetime: d.createTime,
      viewers: sumViewersInStreamArray(d.fields.data.arrayValue.values),
    }
  })
  return averageByTimeFormat(summed_streams, timeFormat)
}

export let sumViewersInStreamArray = stream_array => {
  let viewer_sum = 0;
  _.map(stream_array, s => {
    viewer_sum += parseFloat(s.mapValue.fields.viewer_count.integerValue);
  });
  return viewer_sum;
};

export let averageByTimeFormat = (data, timeFormat) => {
  let averaged_list = _.map(
    _.groupBy(data, e => moment(e.datetime).format(timeFormat)),
    (e, i) => {
      return {
        datetime: i,
        average: 
          _.round(_.meanBy(e, o => {
            return o.viewers;
          }))
      };
    }
  );
  return _.sortBy(averaged_list, d => {
    return moment(d.datetime, timeFormat);
  });
};
