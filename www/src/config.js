// You can obtain these values by running:
// aws cloudformation describe-stacks --stack-name <YOUR STACK NAME> --query "Stacks[0].Outputs[]"

const config = {
  "aws_user_pools_web_client_id": "2tnt2eopf96bfoomnjbf46c18p",     // CognitoClientID
  "api_base_url": "https://uns82psx0e.execute-api.us-east-1.amazonaws.com/dev",                                     // TodoFunctionApi
  "cognito_hosted_domain": "mytodoappdemo-lambda-refarch-webapp-rodrigo.auth.us-east-1.amazoncognito.com",                   // CognitoDomainName
  "redirect_url": "https://master.d1znuy543p622o.amplifyapp.com"                                      // AmplifyURL
};

export default config;
