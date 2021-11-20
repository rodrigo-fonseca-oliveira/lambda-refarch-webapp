// You can obtain these values by running:
// aws cloudformation describe-stacks --stack-name <YOUR STACK NAME> --query "Stacks[0].Outputs[]"

const config = {
  "aws_user_pools_web_client_id": "72mgrml0ahbfoulg4u61c7ugcn",     // CognitoClientID
  "api_base_url": "https://p2s93umzz2.execute-api.us-east-1.amazonaws.com/dev",                                     // TodoFunctionApi
  "cognito_hosted_domain": "lambda-refarch-webapp-lambda-refarch-webapp.auth.us-east-1.amazoncognito.com",                   // CognitoDomainName
  "redirect_url": "https://master.d1brff6a4cp8w5.amplifyapp.com"                                      // AmplifyURL
};

export default config;
