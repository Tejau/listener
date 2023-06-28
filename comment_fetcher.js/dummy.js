// child comment

fetch("https://www.instagram.com/api/v1/media/3123342094862329196/comments/18266378521149397/child_comments/?max_id=", {
  "headers": {
    "accept": "*/*",
    "accept-language": "en-GB,en-US;q=0.9,en;q=0.8",
    "sec-ch-prefers-color-scheme": "light",
    "sec-ch-ua": "\"Not.A/Brand\";v=\"8\", \"Chromium\";v=\"114\", \"Google Chrome\";v=\"114\"",
    "sec-ch-ua-full-version-list": "\"Not.A/Brand\";v=\"8.0.0.0\", \"Chromium\";v=\"114.0.5735.106\", \"Google Chrome\";v=\"114.0.5735.106\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"macOS\"",
    "sec-ch-ua-platform-version": "\"12.3.1\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
    "viewport-width": "1440",
    "x-asbd-id": "129477",
    "x-csrftoken": "JlkOLu6d2xfaAqM59M0BkeZ6q8oaqVNW",
    "x-ig-app-id": "936619743392459",
    "x-ig-www-claim": "hmac.AR3v09qKitQInYuz9OCJ6ZQN3PVx3Invm69kYgqYXUgLDkUP",
    "x-requested-with": "XMLHttpRequest",
    "cookie": "mid=ZGGZCAAEAAHX2c9KlxyZBs0OcXI3; ig_nrcb=1; ig_did=ECFEB947-D39A-4319-B056-1EB95BF7DFFD; fbm_124024574287414=base_domain=.instagram.com; datr=b6NhZNVrFi1_mm2BNrKSpV1m; shbid=\"15584\\05451304663025\\0541717736267:01f73a945d33a170be92362ea429bdd2ee4d3e6e3eca3c2988a58686e2b21d66195b5211\"; shbts=\"1686200267\\05451304663025\\0541717736267:01f7caeaf501ad39e8b4e6acfe32efa10808dfc56d70b3057fc5d3b62aa3d237d449c214\"; dpr=2; csrftoken=JlkOLu6d2xfaAqM59M0BkeZ6q8oaqVNW; ds_user_id=59502245384; fbsr_124024574287414=0mj3yxs3IyyUX4OhF7dBHP8AgnEqzfdh4UMT4sKBIbs.eyJ1c2VyX2lkIjoiMTAwMDA0ODQ1ODE4ODkzIiwiY29kZSI6IkFRQkZRRTlHUzIzNWF2VWNVWDJXRDU2V2gyLU5BQlpBdExiZGJ1dFp4VEdhY2FMbW9WNkFhWEFHcDBURzhnTUQ5T2xtbDhDZUZwaC1DRWIzOHFGOHpZTzBOZzB5NU1QWk1MTjIyRjdqTVdYUzBScFBBNXQ3eXhIUEtYSklSVmJvY1F2RnNCUl94bm5ZU1VGbXNVUXpfS1N5TjFjOGxIWk9XNU02SzBWanZyWENMdWJiOGo2ckFnNjR0UVA3RXhnOXlaUkVtR25MTjdFOUJNYVBzLXpjOTM0T0cwb1NuNDd2eko3X0xoUzF3RFVMMWg1MnhtSkxLcVZIUDBoWXI4YzAxem4xSllQR1doWFJGOWUtdmp6amxJUXRCWnFOSG1jN3Vvay1FNXRtVVhnaUtUaC1UbGo0ZV9iTnNDUEFhUmdPbHZHRWEwejZVeXEyRnYxeDgzS01RWWlTNUd4RFZCaFBKS1dKTzh1N0YtdnR2USIsIm9hdXRoX3Rva2VuIjoiRUFBQnd6TGl4bmpZQkFFOUZBRlhzaDNsVmh4aDBQYmZPdHZzYkkwdjFaQlF1UmZFM3FNMlFHNWZmYkVGeVpBREVtTVZFbVR4ZGFWUTJrc0pBQjFlcU1rcVZqd1U5QllZMnJSeGg0eTJrVlk2WWtReHpTYmFUMTh5QTJCY2Fic2diYzVrbVpDTmhwNVA4YVdaQmFPN2JGaEw2a2twaTJwaGVQTzRuSHpCN2pFWWpQWkJKQ1VkWExVQWZjVHRNZWdOODNIMXNvRkN6Q1hRWkRaRCIsImFsZ29yaXRobSI6IkhNQUMtU0hBMjU2IiwiaXNzdWVkX2F0IjoxNjg2NTY0NTQ3fQ; sessionid=59502245384%3AftlFiP2p23p4Ob%3A6%3AAYe4oUj4-hJLtcBD0X1DmHRdUqlWGm3QEDjr33ko0A; rur=\"EAG\\05459502245384\\0541718162813:01f79cfa54db66e358ec21b12dffef0c439ab91210ef540658d00125e589c6a5d4220458\"",
    "Referer": "https://www.instagram.com/p/CtYVxZMSyVs/",
    "Referrer-Policy": "strict-origin-when-cross-origin"
  },
  "body": null,
  "method": "GET"
});

// initial fetch
fetch("https://www.instagram.com/api/v1/media/3123342094862329196/comments/?can_support_threading=true&permalink_enabled=false", {
  "headers": {
    "accept": "*/*",
    "accept-language": "en-GB,en-US;q=0.9,en;q=0.8",
    "sec-ch-prefers-color-scheme": "light",
    "sec-ch-ua": "\"Not.A/Brand\";v=\"8\", \"Chromium\";v=\"114\", \"Google Chrome\";v=\"114\"",
    "sec-ch-ua-full-version-list": "\"Not.A/Brand\";v=\"8.0.0.0\", \"Chromium\";v=\"114.0.5735.106\", \"Google Chrome\";v=\"114.0.5735.106\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"macOS\"",
    "sec-ch-ua-platform-version": "\"12.3.1\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
    "viewport-width": "1440",
    "x-asbd-id": "129477",
    "x-csrftoken": "JlkOLu6d2xfaAqM59M0BkeZ6q8oaqVNW",
    "x-ig-app-id": "936619743392459",
    "x-ig-www-claim": "hmac.AR3v09qKitQInYuz9OCJ6ZQN3PVx3Invm69kYgqYXUgLDkUP",
    "x-requested-with": "XMLHttpRequest",
    "cookie": "mid=ZGGZCAAEAAHX2c9KlxyZBs0OcXI3; ig_nrcb=1; ig_did=ECFEB947-D39A-4319-B056-1EB95BF7DFFD; fbm_124024574287414=base_domain=.instagram.com; datr=b6NhZNVrFi1_mm2BNrKSpV1m; shbid=\"15584\\05451304663025\\0541717736267:01f73a945d33a170be92362ea429bdd2ee4d3e6e3eca3c2988a58686e2b21d66195b5211\"; shbts=\"1686200267\\05451304663025\\0541717736267:01f7caeaf501ad39e8b4e6acfe32efa10808dfc56d70b3057fc5d3b62aa3d237d449c214\"; dpr=2; csrftoken=JlkOLu6d2xfaAqM59M0BkeZ6q8oaqVNW; ds_user_id=59502245384; sessionid=59502245384%3AftlFiP2p23p4Ob%3A6%3AAYfS7dLKQTHBC034jZOePR1u4J7P0ddrMcbqeLSVIw; fbsr_124024574287414=0mj3yxs3IyyUX4OhF7dBHP8AgnEqzfdh4UMT4sKBIbs.eyJ1c2VyX2lkIjoiMTAwMDA0ODQ1ODE4ODkzIiwiY29kZSI6IkFRQkZRRTlHUzIzNWF2VWNVWDJXRDU2V2gyLU5BQlpBdExiZGJ1dFp4VEdhY2FMbW9WNkFhWEFHcDBURzhnTUQ5T2xtbDhDZUZwaC1DRWIzOHFGOHpZTzBOZzB5NU1QWk1MTjIyRjdqTVdYUzBScFBBNXQ3eXhIUEtYSklSVmJvY1F2RnNCUl94bm5ZU1VGbXNVUXpfS1N5TjFjOGxIWk9XNU02SzBWanZyWENMdWJiOGo2ckFnNjR0UVA3RXhnOXlaUkVtR25MTjdFOUJNYVBzLXpjOTM0T0cwb1NuNDd2eko3X0xoUzF3RFVMMWg1MnhtSkxLcVZIUDBoWXI4YzAxem4xSllQR1doWFJGOWUtdmp6amxJUXRCWnFOSG1jN3Vvay1FNXRtVVhnaUtUaC1UbGo0ZV9iTnNDUEFhUmdPbHZHRWEwejZVeXEyRnYxeDgzS01RWWlTNUd4RFZCaFBKS1dKTzh1N0YtdnR2USIsIm9hdXRoX3Rva2VuIjoiRUFBQnd6TGl4bmpZQkFFOUZBRlhzaDNsVmh4aDBQYmZPdHZzYkkwdjFaQlF1UmZFM3FNMlFHNWZmYkVGeVpBREVtTVZFbVR4ZGFWUTJrc0pBQjFlcU1rcVZqd1U5QllZMnJSeGg0eTJrVlk2WWtReHpTYmFUMTh5QTJCY2Fic2diYzVrbVpDTmhwNVA4YVdaQmFPN2JGaEw2a2twaTJwaGVQTzRuSHpCN2pFWWpQWkJKQ1VkWExVQWZjVHRNZWdOODNIMXNvRkN6Q1hRWkRaRCIsImFsZ29yaXRobSI6IkhNQUMtU0hBMjU2IiwiaXNzdWVkX2F0IjoxNjg2NTY0NTQ3fQ; rur=\"CLN\\05459502245384\\0541718162658:01f7a78d48c632d4735e5b8a73221aad1acf194d1b076f1facf0f001e96267f463620db3\"",
    "Referer": "https://www.instagram.com/p/CtYVxZMSyVs/",
    "Referrer-Policy": "strict-origin-when-cross-origin"
  },
  "body": null,
  "method": "GET"
});

// second fetch using mini id and details
fetch("https://www.instagram.com/api/v1/media/3123342094862329196/comments/?can_support_threading=true&min_id=%7B%22cached_comments_cursor%22%3A%20%2218010255855676040%22%2C%20%22bifilter_token%22%3A%20%22KHkAwJGbecihQAABuOgQH0BBACIe4IE9zT8AhWnYsCIzQQCnJVmoPBRAAApVJ3JoCkAAyxSj4SqMPwCtg6hazPs_ADIqila1hj8A1f8VqyzlQABf_Gfh3uFAANxBGf2VQkEAvElAwgb_PwAeM9z7ceA_AH8ojNoSQUEAAA%3D%3D%22%7D", {
  "headers": {
    "accept": "*/*",
    "accept-language": "en-GB,en-US;q=0.9,en;q=0.8",
    "sec-ch-prefers-color-scheme": "light",
    "sec-ch-ua": "\"Not.A/Brand\";v=\"8\", \"Chromium\";v=\"114\", \"Google Chrome\";v=\"114\"",
    "sec-ch-ua-full-version-list": "\"Not.A/Brand\";v=\"8.0.0.0\", \"Chromium\";v=\"114.0.5735.106\", \"Google Chrome\";v=\"114.0.5735.106\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"macOS\"",
    "sec-ch-ua-platform-version": "\"12.3.1\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
    "viewport-width": "1440",
    "x-asbd-id": "129477",
    "x-csrftoken": "JlkOLu6d2xfaAqM59M0BkeZ6q8oaqVNW",
    "x-ig-app-id": "936619743392459",
    "x-ig-www-claim": "hmac.AR3v09qKitQInYuz9OCJ6ZQN3PVx3Invm69kYgqYXUgLDkUP",
    "x-requested-with": "XMLHttpRequest",
    "cookie": "mid=ZGGZCAAEAAHX2c9KlxyZBs0OcXI3; ig_nrcb=1; ig_did=ECFEB947-D39A-4319-B056-1EB95BF7DFFD; fbm_124024574287414=base_domain=.instagram.com; datr=b6NhZNVrFi1_mm2BNrKSpV1m; shbid=\"15584\\05451304663025\\0541717736267:01f73a945d33a170be92362ea429bdd2ee4d3e6e3eca3c2988a58686e2b21d66195b5211\"; shbts=\"1686200267\\05451304663025\\0541717736267:01f7caeaf501ad39e8b4e6acfe32efa10808dfc56d70b3057fc5d3b62aa3d237d449c214\"; dpr=2; csrftoken=JlkOLu6d2xfaAqM59M0BkeZ6q8oaqVNW; ds_user_id=59502245384; fbsr_124024574287414=0mj3yxs3IyyUX4OhF7dBHP8AgnEqzfdh4UMT4sKBIbs.eyJ1c2VyX2lkIjoiMTAwMDA0ODQ1ODE4ODkzIiwiY29kZSI6IkFRQkZRRTlHUzIzNWF2VWNVWDJXRDU2V2gyLU5BQlpBdExiZGJ1dFp4VEdhY2FMbW9WNkFhWEFHcDBURzhnTUQ5T2xtbDhDZUZwaC1DRWIzOHFGOHpZTzBOZzB5NU1QWk1MTjIyRjdqTVdYUzBScFBBNXQ3eXhIUEtYSklSVmJvY1F2RnNCUl94bm5ZU1VGbXNVUXpfS1N5TjFjOGxIWk9XNU02SzBWanZyWENMdWJiOGo2ckFnNjR0UVA3RXhnOXlaUkVtR25MTjdFOUJNYVBzLXpjOTM0T0cwb1NuNDd2eko3X0xoUzF3RFVMMWg1MnhtSkxLcVZIUDBoWXI4YzAxem4xSllQR1doWFJGOWUtdmp6amxJUXRCWnFOSG1jN3Vvay1FNXRtVVhnaUtUaC1UbGo0ZV9iTnNDUEFhUmdPbHZHRWEwejZVeXEyRnYxeDgzS01RWWlTNUd4RFZCaFBKS1dKTzh1N0YtdnR2USIsIm9hdXRoX3Rva2VuIjoiRUFBQnd6TGl4bmpZQkFFOUZBRlhzaDNsVmh4aDBQYmZPdHZzYkkwdjFaQlF1UmZFM3FNMlFHNWZmYkVGeVpBREVtTVZFbVR4ZGFWUTJrc0pBQjFlcU1rcVZqd1U5QllZMnJSeGg0eTJrVlk2WWtReHpTYmFUMTh5QTJCY2Fic2diYzVrbVpDTmhwNVA4YVdaQmFPN2JGaEw2a2twaTJwaGVQTzRuSHpCN2pFWWpQWkJKQ1VkWExVQWZjVHRNZWdOODNIMXNvRkN6Q1hRWkRaRCIsImFsZ29yaXRobSI6IkhNQUMtU0hBMjU2IiwiaXNzdWVkX2F0IjoxNjg2NTY0NTQ3fQ; sessionid=59502245384%3AftlFiP2p23p4Ob%3A6%3AAYe4oUj4-hJLtcBD0X1DmHRdUqlWGm3QEDjr33ko0A; rur=\"CLN\\05459502245384\\0541718162671:01f77faa5396e4384da88c45243ecd635c80bd5f7283c6a3c9dcbc2d744377fb8c0f7970\"",
    "Referer": "https://www.instagram.com/p/CtYVxZMSyVs/",
    "Referrer-Policy": "strict-origin-when-cross-origin"
  },
  "body": null,
  "method": "GET"
});

// third fetch
fetch("https://www.instagram.com/api/v1/media/3123342094862329196/comments/?can_support_threading=true&min_id=%7B%22cached_comments_cursor%22%3A%20%2218221122198232418%22%2C%20%22bifilter_token%22%3A%20%22KFQBDgCwACgAIAAYABAACAAIAP97_f939-d__a___783___5-_f_4v4HXouJ_furDhTj18uvvvr_3_27__77__3n7__X_f-7_v_e3tuzdjbs8wTJB8IA%22%7D", {
  "headers": {
    "accept": "*/*",
    "accept-language": "en-GB,en-US;q=0.9,en;q=0.8",
    "sec-ch-prefers-color-scheme": "light",
    "sec-ch-ua": "\"Not.A/Brand\";v=\"8\", \"Chromium\";v=\"114\", \"Google Chrome\";v=\"114\"",
    "sec-ch-ua-full-version-list": "\"Not.A/Brand\";v=\"8.0.0.0\", \"Chromium\";v=\"114.0.5735.106\", \"Google Chrome\";v=\"114.0.5735.106\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"macOS\"",
    "sec-ch-ua-platform-version": "\"12.3.1\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
    "viewport-width": "1440",
    "x-asbd-id": "129477",
    "x-csrftoken": "JlkOLu6d2xfaAqM59M0BkeZ6q8oaqVNW",
    "x-ig-app-id": "936619743392459",
    "x-ig-www-claim": "hmac.AR3v09qKitQInYuz9OCJ6ZQN3PVx3Invm69kYgqYXUgLDkUP",
    "x-requested-with": "XMLHttpRequest",
    "cookie": "mid=ZGGZCAAEAAHX2c9KlxyZBs0OcXI3; ig_nrcb=1; ig_did=ECFEB947-D39A-4319-B056-1EB95BF7DFFD; fbm_124024574287414=base_domain=.instagram.com; datr=b6NhZNVrFi1_mm2BNrKSpV1m; shbid=\"15584\\05451304663025\\0541717736267:01f73a945d33a170be92362ea429bdd2ee4d3e6e3eca3c2988a58686e2b21d66195b5211\"; shbts=\"1686200267\\05451304663025\\0541717736267:01f7caeaf501ad39e8b4e6acfe32efa10808dfc56d70b3057fc5d3b62aa3d237d449c214\"; dpr=2; csrftoken=JlkOLu6d2xfaAqM59M0BkeZ6q8oaqVNW; ds_user_id=59502245384; fbsr_124024574287414=0mj3yxs3IyyUX4OhF7dBHP8AgnEqzfdh4UMT4sKBIbs.eyJ1c2VyX2lkIjoiMTAwMDA0ODQ1ODE4ODkzIiwiY29kZSI6IkFRQkZRRTlHUzIzNWF2VWNVWDJXRDU2V2gyLU5BQlpBdExiZGJ1dFp4VEdhY2FMbW9WNkFhWEFHcDBURzhnTUQ5T2xtbDhDZUZwaC1DRWIzOHFGOHpZTzBOZzB5NU1QWk1MTjIyRjdqTVdYUzBScFBBNXQ3eXhIUEtYSklSVmJvY1F2RnNCUl94bm5ZU1VGbXNVUXpfS1N5TjFjOGxIWk9XNU02SzBWanZyWENMdWJiOGo2ckFnNjR0UVA3RXhnOXlaUkVtR25MTjdFOUJNYVBzLXpjOTM0T0cwb1NuNDd2eko3X0xoUzF3RFVMMWg1MnhtSkxLcVZIUDBoWXI4YzAxem4xSllQR1doWFJGOWUtdmp6amxJUXRCWnFOSG1jN3Vvay1FNXRtVVhnaUtUaC1UbGo0ZV9iTnNDUEFhUmdPbHZHRWEwejZVeXEyRnYxeDgzS01RWWlTNUd4RFZCaFBKS1dKTzh1N0YtdnR2USIsIm9hdXRoX3Rva2VuIjoiRUFBQnd6TGl4bmpZQkFFOUZBRlhzaDNsVmh4aDBQYmZPdHZzYkkwdjFaQlF1UmZFM3FNMlFHNWZmYkVGeVpBREVtTVZFbVR4ZGFWUTJrc0pBQjFlcU1rcVZqd1U5QllZMnJSeGg0eTJrVlk2WWtReHpTYmFUMTh5QTJCY2Fic2diYzVrbVpDTmhwNVA4YVdaQmFPN2JGaEw2a2twaTJwaGVQTzRuSHpCN2pFWWpQWkJKQ1VkWExVQWZjVHRNZWdOODNIMXNvRkN6Q1hRWkRaRCIsImFsZ29yaXRobSI6IkhNQUMtU0hBMjU2IiwiaXNzdWVkX2F0IjoxNjg2NTY0NTQ3fQ; sessionid=59502245384%3AftlFiP2p23p4Ob%3A6%3AAYe4oUj4-hJLtcBD0X1DmHRdUqlWGm3QEDjr33ko0A; rur=\"CLN\\05459502245384\\0541718162691:01f76c1355358c64ec7717841d750472520f4af62deaae581295cea858ec207ea340c562\"",
    "Referer": "https://www.instagram.com/p/CtYVxZMSyVs/",
    "Referrer-Policy": "strict-origin-when-cross-origin"
  },
  "body": null,
  "method": "GET"
});