// Netlify Function pour authentification GitHub avec Decap CMS
exports.handler = async (event) => {
  const { code } = event.queryStringParameters || {};

  if (!code) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: 'No code provided' })
    };
  }

  const clientId = process.env.GITHUB_CLIENT_ID;
  const clientSecret = process.env.GITHUB_CLIENT_SECRET;

  if (!clientId || !clientSecret) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Missing GitHub credentials in environment' })
    };
  }

  try {
    const tokenResponse = await fetch('https://github.com/login/oauth/access_token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        client_id: clientId,
        client_secret: clientSecret,
        code,
      }),
    });

    const data = await tokenResponse.json();
    const { access_token, error } = data;

    if (error || !access_token) {
      console.error('GitHub OAuth error:', error);
      return {
        statusCode: 401,
        body: JSON.stringify({ error: error || 'Failed to get access token' })
      };
    }

    // Redirect avec le token pour Decap CMS
    return {
      statusCode: 302,
      headers: {
        Location: `/#access_token=${access_token}&token_type=bearer&expires_in=3600`,
      },
    };
  } catch (error) {
    console.error('Auth error:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message })
    };
  }
};
