import * as d3helpers from "./d3-helpers";
import * as mockdata from "../tests/mockdata";

it("sumViewersInStreamArray", () => {
  expect(d3helpers.sumViewersInStreamArray(mockdata.mock_stream_array_1)).toBe(
    1000
  );
});

it("sumViewersInStreamArray", () => {
  expect(d3helpers.sumViewersInStreamArray(mockdata.mock_stream_array_2)).toBe(
    500
  );
});

it("sumViewersInStreamArray", () => {
  expect(d3helpers.sumViewersInStreamArray(mockdata.mock_stream_array_3)).toBe(
    1150
  );
});

it("processDataByTimeFormat, single average, hour", () => {
  expect(
    d3helpers.processDataByTimeFormat(mockdata.mock_raw_stream_data_1, "h A")
  ).toEqual([{ datetime: "6 PM", average: 883 }]);
});

it("processDataByTimeFormat, single average, weekday", () => {
  expect(
    d3helpers.processDataByTimeFormat(mockdata.mock_raw_stream_data_1, "dddd")
  ).toEqual([{ datetime: "Sunday", average: 883 }]);
});

it("processDataByTimeFormat, multiple averages, hour", () => {
  expect(
    d3helpers.processDataByTimeFormat(mockdata.mock_raw_stream_data_2, "h A")
  ).toEqual([
    { datetime: "1 AM", average: 500 },
    { datetime: "8 AM", average: 1075 }
  ]);
});

it("processDataByTimeFormat, multiple averages, weekday", () => {
  expect(
    d3helpers.processDataByTimeFormat(mockdata.mock_raw_stream_data_2, "dddd")
  ).toEqual([
    { datetime: "Sunday", average: 750 },
    { datetime: "Saturday", average: 825 }
  ]);
});
