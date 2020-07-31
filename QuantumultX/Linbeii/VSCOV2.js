let obj = JSON.parse($response.body);
obj ={
    "user_subscription": {
        "user_id": 54624336,
        "subscription_code": "VSCOANNUAL",
        "sku": "VSCOANNUAL",
        "expired": false,
        "starts_on_sec": 1560831070,
        "expires_on_sec": 1800000000000,
        "last_verified_sec": 1560831070,
        "canceled_at_sec": null,
        "source": 1,
        "payment_type": 2,
        "invalid_reason": 999,
        "is_active": true
    },
    "created_at": "2088-07-30T19:24:47.502810339Z"
}
$done({body: JSON.stringify(obj)});