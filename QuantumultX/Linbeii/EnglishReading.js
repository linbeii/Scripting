var obj = JSON.parse($response.body);
obj=
    {
    "isVip": true,
    "code": 200,
    "expireDays": 9999
    };
$done({body: JSON.stringify(obj)});
