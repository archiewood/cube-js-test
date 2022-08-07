cube(`MARKETINGSpend`, {
  sql: `SELECT * FROM "PUBLIC"."MARKETING_SPEND"`,
  
  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started  
  },
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [id]
    }
  },
  
  dimensions: {
    spend: {
      sql: `${CUBE}."SPEND"`,
      type: `string`
    },
    
    channelMonth: {
      sql: `${CUBE}."CHANNEL_MONTH"`,
      type: `string`
    },
    
    id: {
      sql: `${CUBE}."ID"`,
      type: `number`,
      primaryKey: true
    },
    
    marketingchannel: {
      sql: `${CUBE}."MARKETING_CHANNEL"`,
      type: `string`
    },
    
    monthbegin: {
      sql: `${CUBE}."MONTH_BEGIN"`,
      type: `time`
    }
  }
});
