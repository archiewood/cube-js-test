cube(`ORDERS`, {
  sql: `SELECT * FROM "PUBLIC"."ORDERS"`,
  
  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started  
  },
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [firstName, id, lastName, orderDatetime]
    }
  },
  
  dimensions: {
    sales: {
      sql: `${CUBE}."SALES"`,
      type: `number`
    },
    
    email: {
      sql: `${CUBE}."EMAIL"`,
      type: `string`
    },
    
    firstName: {
      sql: `${CUBE}."FIRST_NAME"`,
      type: `string`
    },
    
    channel: {
      sql: `${CUBE}."CHANNEL"`,
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
    
    lastName: {
      sql: `${CUBE}."LAST_NAME"`,
      type: `string`
    },
    
    category: {
      sql: `${CUBE}."CATEGORY"`,
      type: `string`
    },
    
    address: {
      sql: `${CUBE}."ADDRESS"`,
      type: `string`
    },
    
    channelGroup: {
      sql: `${CUBE}."CHANNEL_GROUP"`,
      type: `string`
    },
    
    item: {
      sql: `${CUBE}."ITEM"`,
      type: `string`
    },
    
    state: {
      sql: `${CUBE}."STATE"`,
      type: `string`
    },
    
    orderDatetime: {
      sql: `${CUBE}."ORDER_DATETIME"`,
      type: `time`
    },
    
    orderMonth: {
      sql: `${CUBE}."ORDER_MONTH"`,
      type: `time`
    }
  }
});
