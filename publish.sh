\rm -rf lambda_upload.zip
zip -r lambda_upload.zip index.js node_modules
aws lambda update-function-code --function-name PokemonLookup --zip-file fileb://lambda_upload.zip