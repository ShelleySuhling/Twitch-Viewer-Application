import moment from "moment";

//mock_stream_array_1
//  sum: 1000
export let mock_stream_array_1 = [
  {
    mapValue: {
      fields: { viewer_count: { integerValue: "200" } }
    }
  },
  {
    mapValue: {
      fields: { viewer_count: { integerValue: "100" } }
    }
  },
  {
    mapValue: {
      fields: { viewer_count: { integerValue: "400" } }
    }
  },
  {
    mapValue: {
      fields: { viewer_count: { integerValue: "300" } }
    }
  }
];

//mock_stream_array_2
//  sum: 500
export let mock_stream_array_2 = [
  {
    mapValue: {
      fields: { viewer_count: { integerValue: "100" } }
    }
  },
  {
    mapValue: {
      fields: { viewer_count: { integerValue: "50" } }
    }
  },
  {
    mapValue: {
      fields: { viewer_count: { integerValue: "50" } }
    }
  },
  {
    mapValue: {
      fields: { viewer_count: { integerValue: "300" } }
    }
  }
];

//mock_stream_array_3
//  sum: 1150
export let mock_stream_array_3 = [
  {
    mapValue: {
      fields: { viewer_count: { integerValue: "100" } }
    }
  },
  {
    mapValue: {
      fields: { viewer_count: { integerValue: "700" } }
    }
  },
  {
    mapValue: {
      fields: { viewer_count: { integerValue: "50" } }
    }
  },
  {
    mapValue: {
      fields: { viewer_count: { integerValue: "300" } }
    }
  }
];

export let mock_raw_stream_data_1 = [
  {
    createTime: moment(new Date(2018, 5, 24, 18, 0)).format(), // datetime: 5/24/2018 6 PM
    fields: { data: { arrayValue: { values: mock_stream_array_1 } } } //sum: 1000
  },
  {
    createTime: moment(new Date(2018, 5, 24, 18, 0)).format(), // datetime: 5/24/2018 6 PM
    fields: { data: { arrayValue: { values: mock_stream_array_2 } } } //sum: 500
  },
  {
    createTime: moment(new Date(2018, 5, 24, 18, 0)).format(), // datetime: 5/24/2018 6 PM
    fields: { data: { arrayValue: { values: mock_stream_array_3 } } } //sum: 1150
  }
];

export let mock_raw_stream_data_2 = [
  {
    createTime: moment(new Date(2018, 5, 24, 8, 0)).format(), // datetime: 5/24/2018 8 AM
    fields: { data: { arrayValue: { values: mock_stream_array_1 } } } //sum: 1000
  },
  {
    createTime: moment(new Date(2018, 5, 24, 1, 0)).format(), // datetime: 5/24/2018 1 AM
    fields: { data: { arrayValue: { values: mock_stream_array_2 } } } //sum: 500
  },
  {
    createTime: moment(new Date(2018, 5, 23, 8, 0)).format(), // datetime: 5/23/2018 8 AM
    fields: { data: { arrayValue: { values: mock_stream_array_3 } } } //sum: 1150
  },
  {
    createTime: moment(new Date(2018, 5, 23, 1, 0)).format(), // datetime: 5/23/2018 1 AM
    fields: { data: { arrayValue: { values: mock_stream_array_2 } } } // sum: 500
  }
];
