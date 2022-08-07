cube(`DELIVERIES`, {
  sql: `SELECT * FROM "PUBLIC"."DELIVERIES"`,
  
  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started  
  },
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [id, orderDatetime]
    }
  },
  
  dimensions: {
    id: {
      sql: `${CUBE}."ID"`,
      type: `number`,
      primaryKey: true
    },
    
    deliverySlotEnd: {
      sql: `${CUBE}."DELIVERY_SLOT_END"`,
      type: `time`
    },
    
    orderDatetime: {
      sql: `${CUBE}."ORDER_DATETIME"`,
      type: `time`
    },
    
    deliverySlotStart: {
      sql: `${CUBE}."DELIVERY_SLOT_START"`,
      type: `time`
    },
    
    deliveryTime: {
      sql: `${CUBE}."DELIVERY_TIME"`,
      type: `time`
    }
  }
});
