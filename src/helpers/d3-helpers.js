import * as _ from "lodash";
import moment from "moment";

export let sumViewersInStreamArray = stream_array => {
  let viewer_sum = 0;
  _.map(stream_array, s => {
    viewer_sum += parseFloat(s.mapValue.fields.viewer_count.integerValue);
  });
  return viewer_sum;
};

export let averageByTimeFormat = (data, timeFormat) => {
  let averaged_list = _.map(
    _.groupBy(data, e =>
      moment(e.createTime).format(timeFormat)
    ),
    (e, i) => {
      return {
        datetime: i,
        average: _.round(
          _.meanBy(e, o => {
            return sumViewersInStreamArray(o.fields.data.arrayValue.values);
          })
        )
      };
    }
  );

  return _.sortBy(averaged_list, d => {
    return moment(d.datetime, timeFormat);
  });
};
