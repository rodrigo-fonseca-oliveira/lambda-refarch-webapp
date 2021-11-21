// You can obtain these values by running:
// aws cloudformation describe-stacks --stack-name <YOUR STACK NAME> --query "Stacks[0].Outputs[]"

const config = {
  "aws_user_pools_web_client_id": "se17m55l5nq0989f168kj48th",     // CognitoClientID
  "api_base_url": "https://2gw7z6dbv7.execute-api.us-east-1.amazonaws.com/dev",                                     // TodoFunctionApi
  "cognito_hosted_domain": "lambda-refarch-webapp-lambda-refarch-webapp.auth.us-east-1.amazoncognito.com",                   // CognitoDomainName
  "redirect_url": "https://master.d10n977vev1zvs.amplifyapp.com"                                      // AmplifyURL
};

export default config;
