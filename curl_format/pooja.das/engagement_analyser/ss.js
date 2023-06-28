fetch("https://www.instagram.com/api/v1/feed/user/lilian_the_writer/username/?count=9", {
  "headers": {
    "accept": "*/*",
    "accept-language": "en-GB,en-US;q=0.9,en;q=0.8",
    "sec-ch-prefers-color-scheme": "dark",
    "sec-ch-ua": "\"Not.A/Brand\";v=\"8\", \"Chromium\";v=\"114\", \"Google Chrome\";v=\"114\"",
    "sec-ch-ua-full-version-list": "\"Not.A/Brand\";v=\"8.0.0.0\", \"Chromium\";v=\"114.0.5735.90\", \"Google Chrome\";v=\"114.0.5735.90\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"macOS\"",
    "sec-ch-ua-platform-version": "\"12.3.1\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
    "viewport-width": "928",
    "x-asbd-id": "129477",
    "x-csrftoken": "dHppSYbXBSQaHXq79nXrUDqT5mOwWByW",
    "x-ig-app-id": "936619743392459",
    "x-ig-www-claim": "hmac.AR1KcDdF0fPpDKlMPTvl_KtQS_IY-ZcEr5jC2EY4X53ywt5r",
    "x-requested-with": "XMLHttpRequest",
    "cookie": "ig_did=F5F41D95-77EF-4FC4-B76C-E7DCDE1D201F; mid=YoNsgQAEAAFBLiNUbWo-OIIAqH2j; datr=bde-Y7xmMLv2Ugk0DZJifp6t; fbm_124024574287414=base_domain=.instagram.com; dpr=2; shbid=\"16482\\05457761454758\\0541717679291:01f7e568328f5167319b13f2a045e4fd7af736514f55100f78379ea761838463215bf2f2\"; shbts=\"1686143291\\05457761454758\\0541717679291:01f7fceed09d48926796e91c092d2f6e7215e5a7b11eedb25422e1347e45cadcbcc33934\"; csrftoken=dHppSYbXBSQaHXq79nXrUDqT5mOwWByW; ds_user_id=41297474967; sessionid=41297474967%3AVW7oc0EIVQdICz%3A11%3AAYdGuShUI16OXL4aXCTh583Gx-D7CFkLzLi_7cVz-w; fbsr_124024574287414=-CcD8ncDjT56YZ1k5MmZvJrq_H71T_kY2KZyrC1PkJ8.eyJ1c2VyX2lkIjoiMTAwMDkxOTI2NzkzMzUzIiwiY29kZSI6IkFRRGhYY1NzUXExNVItOVRXME4xck9aenl5UG11ZTJhZ0ZxdzRTR0JndHZyc0N2WlpteE0tWm1EUFkxNUlNQ2Job2JKSTZrYUpUOVBiOXUtNXkxU2RiOWY0SlFWcWQ1N0ZleXNmcmlfOFJvVkZKd1ZvZlF6TDRhV3BoU0pMRDZXSDZMdUFhaGUzNTNhUkF4TkVZeU1LdWF3YmFjOHMydS12QXRiWjdzX0twUUE3d0gyMjIwNDRpeWh1WlktZTd3SW5jQTRKZTUwQjVSSUgtRmxRR2h5NUZJWnd2QWhMLWczQUFqY2J5eWdGNl9uNXlzZVAwZ1J2cjFZZjkwa052XzI4T25IMVRVOFFEX0ZxSTNZcVVTeDUtbVZCNVRPR2JkcGQ4ZkpVanJEWUp0SFllZGtDQTFKQlVLRWJJOXRyM3lYT3VqLU5GTkMwUmZsQ0tpVi1wMlVzTE1tIiwib2F1dGhfdG9rZW4iOiJFQUFCd3pMaXhuallCQUM2bm5peEQzNllyT2NlTk9RSkl3TmdaQ3ZWSHRTT0VpclFvTWNreVdJWkFBM2V5aURLOFdObzBSNm5GN1pDMFZpVTFtb3ZyODltVVNMUmVUQ0t0d2c2TkFOOUJDcDdhNDFId1VZRTFhZXVaQjNpbm12VXh5c1hoMXVtU0tIYmJpSHk4cEd3dUJPbjlmQ2NEOFg2THdaQWRPUnNjcGhYbkFidDc2Qkp5bkFhSGRreVhCQkRFWkQiLCJhbGdvcml0aG0iOiJITUFDLVNIQTI1NiIsImlzc3VlZF9hdCI6MTY4NjIyMzQzMn0; fbsr_124024574287414=-CcD8ncDjT56YZ1k5MmZvJrq_H71T_kY2KZyrC1PkJ8.eyJ1c2VyX2lkIjoiMTAwMDkxOTI2NzkzMzUzIiwiY29kZSI6IkFRRGhYY1NzUXExNVItOVRXME4xck9aenl5UG11ZTJhZ0ZxdzRTR0JndHZyc0N2WlpteE0tWm1EUFkxNUlNQ2Job2JKSTZrYUpUOVBiOXUtNXkxU2RiOWY0SlFWcWQ1N0ZleXNmcmlfOFJvVkZKd1ZvZlF6TDRhV3BoU0pMRDZXSDZMdUFhaGUzNTNhUkF4TkVZeU1LdWF3YmFjOHMydS12QXRiWjdzX0twUUE3d0gyMjIwNDRpeWh1WlktZTd3SW5jQTRKZTUwQjVSSUgtRmxRR2h5NUZJWnd2QWhMLWczQUFqY2J5eWdGNl9uNXlzZVAwZ1J2cjFZZjkwa052XzI4T25IMVRVOFFEX0ZxSTNZcVVTeDUtbVZCNVRPR2JkcGQ4ZkpVanJEWUp0SFllZGtDQTFKQlVLRWJJOXRyM3lYT3VqLU5GTkMwUmZsQ0tpVi1wMlVzTE1tIiwib2F1dGhfdG9rZW4iOiJFQUFCd3pMaXhuallCQUM2bm5peEQzNllyT2NlTk9RSkl3TmdaQ3ZWSHRTT0VpclFvTWNreVdJWkFBM2V5aURLOFdObzBSNm5GN1pDMFZpVTFtb3ZyODltVVNMUmVUQ0t0d2c2TkFOOUJDcDdhNDFId1VZRTFhZXVaQjNpbm12VXh5c1hoMXVtU0tIYmJpSHk4cEd3dUJPbjlmQ2NEOFg2THdaQWRPUnNjcGhYbkFidDc2Qkp5bkFhSGRreVhCQkRFWkQiLCJhbGdvcml0aG0iOiJITUFDLVNIQTI1NiIsImlzc3VlZF9hdCI6MTY4NjIyMzQzMn0; rur=\"CLN\\05441297474967\\0541717761592:01f7828179b65811dd40c87a766fd60230aee96b5a9bfa338bbda75ef6a492c5cea60751\"",
    "Referer": "https://www.instagram.com/lilian_the_writer/",
    "Referrer-Policy": "strict-origin-when-cross-origin"
  },
  "body": null,
  "method": "GET"
});