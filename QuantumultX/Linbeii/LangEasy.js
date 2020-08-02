let obj = JSON.parse($response.body);
obj ={
    "result_code": 200,
    "data_kind": "user_launch_app",
    "data_version": "1.0",
    "data_body": {
        "user_info": {
            "password": "4891594d4f2a597a78f822a9995cb05c",
            "Email": "298226025@qq.com",
            "phone": "150****1998",
            "nickname": "Linbeii",
            "avatar_image": "/AvatarImage/iscool/1012745891.png",
            "id": 29804740
        },
        "bindings": {
            "sns_bindings": {
                "huawei": 0,
                "xiaomi": 0,
                "oppo": 0,
                "wechat": 0,
                "sina": 0,
                "qzone": 0
            },
            "primary_binding": "*"
        },
        "privileges": {
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
        },
        "user_status": {
            "dl_quota": 100000,
            "subscription_count": 0,
            "logged_off": 0,
            "login_prompt": "你上次使用 ID 29804740 登录过",
            "upload_count": 1,
            "user_has_preferences": 1,
            "subscription_has_updates": 0
        },
        "actions": {
            "card_action": {
                "enable": 0
            },
            "web_page": {
                "enable": 0,
                "url": ""
            },
            "float_button_action": {
                "enable": 0
            },
            "bind_phone_action": 0
        },
        "base_info": {}
    }
}
$done({body: JSON.stringify(obj)});