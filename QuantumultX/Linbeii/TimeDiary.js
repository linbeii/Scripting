var obj = JSON.parse($response.body);

obj={
   "success": 1,
   "msg": "成功",
   "data": {
      "id": 0,
      "memberType": 2
   }
}

$done({body: JSON.stringify(obj)});

// Descriptions
