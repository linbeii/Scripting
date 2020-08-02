let obj = JSON.parse($response.body);
obj["data_body"]["privileges"]= [
    {
        "lrc_unlimited_online_playback": {
            "expire_date": 3395112528000,
            "granted": 1
        },
        "wordroot": {
            "expire_date": 3395112528000,
            "user_type": 1,
            "granted": 1
        },
        "collins": {
            "expire_date": 3395112528000,
            "granted": 1,
            "collins_user_type": 1
        },
        "lrc_unlimited_download": {
            "expire_date": 3395112528000,
            "granted": 1
        }
    }];
obj.data_body.user_status["dl_quota"]= 100000;
obj.data_body.user_status["user_has_preferences"]= 1;

$done({body: JSON.stringify(obj)});