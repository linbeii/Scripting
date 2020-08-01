/*

[rewrite_local]
^http://ajj\.laotouge\.cn/api/UserProfile/BasicUserInfo url script-response-body 爱剪辑.js

[mitm]
hostname = jj.laotouge.cn

*/

let obj = JSON.parse($response.body);
obj={
    "response": {
        "profile": {
            "avatar_url": "https://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTL97jNwq03DZQID85nGKqg0mFSByYWaeUt5sHWLVN0mAoxFzBsh9mCsgV8YMePlZSkiatAPwZvh1sQ/132",
            "birthday": null,
            "expire": 1996824714,
            "free_ocr_count": 4,
            "gender": "male",
            "ocr_count": 0,
            "shimo_id": 1465183,
            "signature": "M/xu5hFe41eV56vW3bpHfuucEnnDVGT8VKIFpMm5WkyV3FvW83YH1ATdidIPGrFyuqUiKXGCdolfVYPXSSZDYxhQ5JAgC3A8JXHllS2oKmyEcnX8m/ylWxpMSmkLv2t0o4nn3UcBID8jLMT1tpWDB1yRIg6wfbqRNB+E9Ll0lR99ycCPR+dF9TEkdINwVsJBW6vl+GOipmoTth5k4ViQbCxTiHUDLc+lYm6xUNYGSvBQhyH5az9JHG5gaaMKg8UAU4p9ikILbtHbxoCLe77dBot/p1Qhfzqfv+pksOX1jBbqGUws4EuClvdwbFqU8gus56ISDu8q0cfJjT+Vo4qq0A==",
            "timestamp": 1596219972,
            "user_name": "Pamper.",
            "vip": true,
            "vip_type": "subscription"
        }
    },
    "success": true
}

$done({body: JSON.stringify(obj)});