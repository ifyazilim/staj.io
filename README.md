# staj.io

Türkiyede stajyer alan firmaların bilgileri listeleyen uygulamadır.

[Türkçe versiyon](https://github.com/previousdeveloper/staj.io/blob/master/README.md)

[English version](https://github.com/previousdeveloper/staj.io/blob/master/README_ENG.md)


### Run server

To run server execute:
```
node bin/www 
```

### Make Requests

Creating and refreshing access tokens:
```
http POST http://localhost:1337/api/oauth/token grant_type=password client_id=android client_secret=SomeRandomCharsAndNumbers username=myapi password=abc1234
http POST http://localhost:1337/api/oauth/token grant_type=refresh_token client_id=android client_secret=SomeRandomCharsAndNumbers refresh_token=[TOKEN]
```

## Todo

1.Android Client for api.

2.Ios Client for api.

3.Web Application.

## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create a new Pull Request
