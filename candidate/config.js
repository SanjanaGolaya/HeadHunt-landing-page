/* HeadHunt - candidate
   The only file that holds your settings. Edit this one, never index.html.
   Safe to keep in a public repo: the publishable key is meant for browsers
   and is protected by row level security in Supabase.
   The secret / service_role key must never go in here. */

window.HH_CONFIG = {

  SUPABASE_URL:      'https://qvqhgytpzcisezajegez.supabase.co',
  SUPABASE_ANON_KEY: 'sb_publishable_Siu6wFPZ23QAXPYl_Vh9cw_V86jpzyO',

  // Flip to true once each one is set up. Left false, the flow
  // skips that step instead of breaking.
  // Length of the login code Supabase sends. Must match
  // Authentication > Email OTP Length in your project.
  OTP_LENGTH:           8,

  GOOGLE_SIGNIN:        false,
  APPLE_SIGNIN:         false,
  WHATSAPP:             false,
  LINKEDIN_ENRICHMENT:  false

};
