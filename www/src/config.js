// You can obtain these values by running:
// aws cloudformation describe-stacks --stack-name <YOUR STACK NAME> --query "Stacks[0].Outputs[]"

const config = {
  "aws_user_pools_web_client_id": "6548nvfhdbnl93fikevulbihq5",     // CognitoClientID
  "api_base_url": "https://f6wctltw3e.execute-api.us-east-1.amazonaws.com/dev",                                     // TodoFunctionApi
  "cognito_hosted_domain": "lambda-refarch-webapp-lambda-refarch-webapp.auth.us-east-1.amazoncognito.com",                   // CognitoDomainName
  "redirect_url": "https://master.d80fku5i9q01l.amplifyapp.com"                                      // AmplifyURL
};

export default config;
