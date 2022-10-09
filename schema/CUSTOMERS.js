cube(`CUSTOMERS`, {
  sql: `SELECT * FROM "DBT_ARCHIE"."CUSTOMERS"`,
  
  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started  
  },
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [name, lastName, orderDatetime]
    },
    
    avgNps: {
      sql: `${CUBE}."AVG_NPS"`,
      type: `sum`
    },
    
    totalReviews: {
      sql: `${CUBE}."TOTAL_REVIEWS"`,
      type: `sum`
    },
    
    totalOrders: {
      sql: `${CUBE}."TOTAL_ORDERS"`,
      type: `sum`
    },
    
    avgOrderValue: {
      sql: `${CUBE}."AVG_ORDER_VALUE"`,
      type: `number`
    },
    
    totalRevenue: {
      sql: `${CUBE}."TOTAL_REVENUE"`,
      type: `number`
    }
  },
  
  dimensions: {
    zipcode: {
      sql: `${CUBE}."ZIPCODE"`,
      type: `string`
    },
    
    email: {
      sql: `${CUBE}."EMAIL"`,
      type: `string`,
      primaryKey: true
    },
    
    address: {
      sql: `${CUBE}."ADDRESS"`,
      type: `string`
    },
    
    name: {
      sql: `${CUBE}."NAME"`,
      type: `string`
    },
    
    state: {
      sql: `${CUBE}."STATE"`,
      type: `string`
    },
    
    channel: {
      sql: `${CUBE}."CHANNEL"`,
      type: `string`
    },
    
    lastName: {
      sql: `${CUBE}."LAST_NAME"`,
      type: `string`
    },
    
    orderDatetime: {
      sql: `${CUBE}."ORDER_DATETIME"`,
      type: `time`
    }
  }
});
