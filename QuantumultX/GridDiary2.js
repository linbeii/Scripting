var obj = JSON.parse($response.body);
obj=
    {
        "data": {
            "active_device_ids": [],
            "avatar": "https://avatar.sumi.io/io.sumi.griddiary2-avatar-edf98eea-9361-4888-8f05-813493b4879d-version-39d9ae65-1ab7-4614-b0e9-5852ee4d0c71!apache",
            "email": "944841236@qq.com",
            "email_is_valid": true,
            "expires_at": "2119-09-21T07:04:30.225189",
            "id": "edf98eea-9361-4888-8f05-813493b4879d",
            "inserted_at": "2019-09-18T05:26:19.370995",
            "membership_status": "premium",
            "name": "Linbeii"
        }
    };
$done({body: JSON.stringify(obj)});
