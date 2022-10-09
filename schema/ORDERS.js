cube(`ORDERS`, {
  sql: `SELECT * FROM "DBT_ARCHIE"."ORDERS"`,
  
  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started  
  },
  
  joins: {
    CUSTOMERS: {
      sql: `${CUBE}."EMAIL" = ${CUSTOMERS}."EMAIL"`,
      relationship: `hasOne`
    }
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [firstName, id, lastName, orderDatetime]
    },
    
    sales: {
      sql: `${CUBE}."SALES"`,
      type: `number`
    }
  },
  
  dimensions: {
    zipcode: {
      sql: `${CUBE}."ZIPCODE"`,
      type: `string`
    },
    
    firstName: {
      sql: `${CUBE}."FIRST_NAME"`,
      type: `string`
    },
    
    address: {
      sql: `${CUBE}."ADDRESS"`,
      type: `string`
    },
    
    channel: {
      sql: `${CUBE}."CHANNEL"`,
      type: `string`
    },
    
    email: {
      sql: `${CUBE}."EMAIL"`,
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
    
    channelGroup: {
      sql: `${CUBE}."CHANNEL_GROUP"`,
      type: `string`
    },
    
    category: {
      sql: `${CUBE}."CATEGORY"`,
      type: `string`
    },
    
    orderMonth: {
      sql: `${CUBE}."ORDER_MONTH"`,
      type: `time`
    },
    
    orderDatetime: {
      sql: `${CUBE}."ORDER_DATETIME"`,
      type: `time`
    }
  }
});
