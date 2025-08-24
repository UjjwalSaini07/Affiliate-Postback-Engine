# Author: UjjwalS
if [ -n "$AFFILIATE_ENGINE_CONFIG" ]; then
  PARAMS="$AFFILIATE_ENGINE_CONFIG"
else
  PARAMS=$(jq -n \
    --arg apiBaseURL "$API_BASE_URL" \
    --arg appEnv "$APP_ENV" \
    --arg appVersion "$APP_VERSION" \
    '{
      apiBaseURL: $apiBaseURL,
      appEnv: $appEnv,
      appVersion: $appVersion
    }')
fi

# Overwrite base image config.json with our own and let nginx serve it
if [ -z "$DISABLE_CONFIG_OVERWRITE" ]; then
  echo "$PARAMS" > /usr/share/nginx/html/config.json
fi

exec nginx -g "daemon off;"
