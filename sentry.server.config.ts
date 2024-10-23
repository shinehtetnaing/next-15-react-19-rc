import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://f4a5a4eb78fe9e2e65bbdf0297d6c913@o4508169939976192.ingest.us.sentry.io/4508169948102656",

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for tracing.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,

  // ...

  // Note: if you want to override the automatic release value, do not set a
  // `release` value here - use the environment variable `SENTRY_RELEASE`, so
  // that it will also get attached to your source maps
});
