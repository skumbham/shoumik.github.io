const spec1 = {
  "config": {
    "view": {
      "continuousWidth": 300,
      "continuousHeight": 300
    }
  },
  "data": {
    "url": "https://data.cityofchicago.org/resource/v6vf-nfxy.json"
  },
  "mark": {
    "type": "bar",
    "cornerRadiusTopLeft": 3,
    "cornerRadiusTopRight": 3
  },
  "encoding": {
    "color": {
      "field": "sr_type",
      "legend": null,
      "type": "nominal"
    },
    "tooltip": [
      {
        "field": "sr_type",
        "type": "nominal"
      },
      {
        "field": "count",
        "title": "Count",
        "type": "quantitative"
      }
    ],
    "x": {
      "field": "sr_type",
      "sort": "-y",
      "title": "Service Request Type",
      "type": "nominal"
    },
    "y": {
      "field": "count",
      "title": "Count",
      "type": "quantitative"
    }
  },
  "height": 400,
  "params": [
    {
      "name": "Status",
      "select": {
        "type": "point",
        "fields": [
          "status"
        ]
      },
      "bind": {
        "input": "select",
        "options": [
          "Open", "Completed",  "Canceled"
        ]
      }
    }
  ],
  "title": "Top 10 Service Requests by Type and Status",
  "transform": [
    {
      "filter": {
        "param": "Status"
      }
    },
    {
      "aggregate": [
        {
          "op": "count",
          "as": "count"
        }
      ],
      "groupby": [
        "sr_type"
      ]
    },
    {
      "window": [
        {
          "op": "rank",
          "field": "count",
          "as": "rank"
        }
      ],
      "sort": [
        {
          "field": "count",
          "order": "descending"
        }
      ]
    },
    {
      "filter": "(datum.rank <= 10)"
    }
  ],
  "width": 400,
  "$schema": "https://vega.github.io/schema/vega-lite/v5.16.3.json"
}
vegaEmbed("#vis1", spec1);  

// const spec2 = {
//   $schema: "https://vega.github.io/schema/vega-lite/v5.json",
//   data: {
//     values: [
//       { category: "A", group: "x", value: 0.1 },
//       { category: "A", group: "y", value: 0.6 },
//       { category: "A", group: "z", value: 0.9 },
//       { category: "B", group: "x", value: 0.7 },
//       { category: "B", group: "y", value: 0.2 },
//       { category: "B", group: "z", value: 1.1 },
//       { category: "C", group: "x", value: 0.6 },
//       { category: "C", group: "y", value: 0.1 },
//       { category: "C", group: "z", value: 0.2 },
//     ],
//   },
//   mark: "bar",
//   encoding: {
//     x: { field: "category" },
//     y: { field: "value", type: "quantitative" },
//     xOffset: { field: "group" },
//     color: { field: "group" },
//   },
// };
// vegaEmbed("#vis2", spec2);

const spec3 = {
  $schema: "https://vega.github.io/schema/vega-lite/v5.json",
  data: {
    url: "https://cdn.jsdelivr.net/npm/vega-datasets@latest/data/seattle-weather.csv",
  },
  mark: "bar",

  encoding: {
    x: {
      timeUnit: "month",
      field: "date",
      type: "ordinal",
      title: "Month of the year",
    },
    y: {
      aggregate: "count",
      type: "quantitative",
    },
    color: {
      field: "weather",
      type: "nominal",
      scale: {
        domain: ["sun", "fog", "drizzle", "rain", "snow"],
        range: ["#e7ba52", "#c7c7c7", "#aec7e8", "#1f77b4", "#9467bd"],
      },
      title: "Weather type",
    },
  },
};
vegaEmbed("#vis3", spec3);

const spec4 = {
  $schema: "https://vega.github.io/schema/vega-lite/v5.json",
  data: {
    url: "https://cdn.jsdelivr.net/npm/vega-datasets@latest/data/seattle-weather.csv",
  },
  mark: { type: "bar", cornerRadiusTopLeft: 3, cornerRadiusTopRight: 3 },
  encoding: {
    x: { timeUnit: "month", field: "date", type: "ordinal" },
    y: { aggregate: "count" },
    color: { field: "weather" },
  },
};
vegaEmbed("#vis4", spec4);

const spec5 = {
  $schema: "https://vega.github.io/schema/vega-lite/v5.json",
  description: "Google's stock price over time.",
  data: {
    url: "https://cdn.jsdelivr.net/npm/vega-datasets@latest/data/stocks.csv",
  },
  transform: [{ filter: "datum.symbol==='GOOG'" }],
  mark: "line",
  encoding: {
    x: { field: "date", type: "temporal" },
    y: { field: "price", type: "quantitative" },
  },
};
vegaEmbed("#vis5", spec5);

const spec6 = {
  $schema: "https://vega.github.io/schema/vega-lite/v5.json",
  description: "Stock prices of 5 Tech Companies over Time.",
  data: {
    url: "https://cdn.jsdelivr.net/npm/vega-datasets@latest/data/stocks.csv",
  },
  mark: {
    type: "line",
    point: true,
  },
  encoding: {
    x: { timeUnit: "year", field: "date" },
    y: { aggregate: "mean", field: "price", type: "quantitative" },
    color: { field: "symbol", type: "nominal" },
  },
};
vegaEmbed("#vis6", spec6);
