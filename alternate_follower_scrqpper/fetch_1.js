const fetchData = () => {
    return new Promise((resolve, reject) => {
      fetch("https://www.instagram.com/graphql/query/?query_hash=37479f2b8209594dde7facb0d904896a&variables=%7B%22id%22%3A7449266310%2C%22after%22%3A%22%22%2C%22first%22%3A50%7D", {
        headers: {
          "accept": "*/*",
          "accept-language": "en-GB,en-US;q=0.9,en;q=0.8",
          "sec-ch-ua": "\"Not.A/Brand\";v=\"8\", \"Chromium\";v=\"114\", \"Google Chrome\";v=\"114\"",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": "\"macOS\"",
          "sec-fetch-dest": "empty",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "none",
          "cookie": "ig_did=F5F41D95-77EF-4FC4-B76C-E7DCDE1D201F; mid=YoNsgQAEAAFBLiNUbWo-OIIAqH2j; datr=bde-Y7xmMLv2Ugk0DZJifp6t; fbm_124024574287414=base_domain=.instagram.com; ig_nrcb=1; csrftoken=BRRYX5CK4GCfErJhnKs66z7AnLEPOyG1; ds_user_id=60116995316; dpr=2; sessionid=60116995316%3AYmkhqL91epmD4p%3A18%3AAYcDyEUvq14NEzDsKPl7VUcMUWJ31-fAB1M712_r4A; fbsr_124024574287414=O-CkkgP8sXIzlEmZK6ovBfEEkY2l0_-uhZsY1wmETqU.eyJ1c2VyX2lkIjoiMTAwMDkxOTI2NzkzMzUzIiwiY29kZSI6IkFRQUNoXzNhNmRkazVJQ0JlbkhFYjZnTWstdk9wdG5oemsybjFXeVZsNzdMZHA0eTY1WEtwdExrQ2tBUlFaVlIzd3hzX3VxQjh3dWdrWGZWNE93NDlJc2VjTFEyT2FMNGlRYW5qeDR1emJ5LVlrMENDdmdqZWpNd2NHRjFJa2hsb0doaWN4VlY0dHhucHFNT1V0V1JHdEJVeXBlZUxhMGFqS0ZPMFVtVmJ0Zk8zNXFsZjh1Y1RVdzlCV0V4dkt4eVBXcXR3TnctMVFTWkthSHdkby1maGlZMnNUcEdCY3VzSktpdFJvT0FKUHNpSkNLTVladl9XOHd6MktPZ2ZranVOb2dEZ3BleVYzWkxta2ExcHQ1elRkWUtfUkljMzNJZDV5RU5YQlVPbUVyZUlYa0V2em1sa1dFanlVbkg4QkpFNGFDazUySnlUU1VpbW1heFlkbU44Ql9VIiwib2F1dGhfdG9rZW4iOiJFQUFCd3pMaXhuallCQVBWaHZITlBjVlh5UHdIZ1Bub3A5TURNRVpDV1BKUU0zcjkyQ0hMMHZBMm5BekxqRWVaQkJIVlpCbHpYTVpCUzhSdTB3UThEamVCWWlHaTFDSWpOczVaQVpBaW1jNVpDUkxsYldLTnlWd2tidlJKNzZoRTNRM1pBb243bzdkMFpBaGpQb1Q0N0dvUzNoQ2swZzh5MmJ4UWpnS0hJT2ZnVzBtV2lGbVpDRlZmQmhWOG41dm1KOGdxOVlaRCIsImFsZ29yaXRobSI6IkhNQUMtU0hBMjU2IiwiaXNzdWVkX2F0IjoxNjg3MTUxMDQwfQ; rur=\"LDC\\05460116995316\\0541718687042:01f706f172760dc435c32a1d9248e709075c79fb9d9619a1a07705adc9e166eebd18b2d6\"",
        },
        referrerPolicy: "strict-origin-when-cross-origin",
        body: null,
        method: "GET"
      })
        .then((res) => res.json())
        .then((data) => resolve(data))
        .catch((error) => reject(error));
    });
  };
  
  // Usage:
  fetchData()
    .then((data) => {
      console.log(JSON.stringify(data));
    })
    .catch((error) => {
      console.error(error);
    });
  