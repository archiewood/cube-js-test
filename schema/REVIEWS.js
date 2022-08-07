cube(`REVIEWS`, {
  sql: `SELECT * FROM "PUBLIC"."REVIEWS"`,
  
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
    id: {
      sql: `${CUBE}."ID"`,
      type: `number`,
      primaryKey: true
    },
    nps_score: {
      sql: `${CUBE}."NPS_SCORE"`,
      type: `number`
    },
    order_id: {
      sql: `${CUBE}."ORDER_ID"`,
      type: `number`
    }
  }
});
