var obj = JSON.parse($response.body);

obj={
    "response": {
        "profile": {
            "avatar_url": "https://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTL97jNwq03DZQID85nGKqg0mFSByYWaeUt5sHWLVN0mAoxFzBsh9mCsgV8YMePlZSkiatAPwZvh1sQ/132",
            "birthday": null,
            "expire": 0,
            "free_ocr_count": 66788889,
            "gender": "male",
            "ocr_count": 5435788,
            "shimo_id": 1465183,
            "signature": "TbIHQfsCwt5UJJZJ4obsqrwGKNwoAp709E5D/+u5I+SjTmGamODdjzK+FXHIFD2oG9oaRwNe/yLCyZOe9TKta/3p39k6qcKsGRIyRWB4cc1E8uW+thpOoKTl2AMnIwnD2XGhhIdCG/3QydOg5eqoq31yjbrafkJV3wk42QqoGBbo8i83bUyrbuK/AufTy2yaQCWLTK4uUL0eHJThA7WDck7gxvQDL3Vyq1DbFU/3BKOKoTD0K/0aOdixttqzQ5N9djcAtJQbXtXq8jiMp42QDtoEu1wNapWfkSHVHW8Eh7R9aFgyh+e9Q3F7OqXWY0y0vBVHjN7N9pg29bdZcYrnrg==",
            "timestamp": 1596186254,
            "user_name": "Pamper.",
            "vip": true,
            "vip_type": "none"
        }
    },
    "success": true
}

$done({body: JSON.stringify(obj)});

// Descriptions
