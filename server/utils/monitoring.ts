import { nodeProfilingIntegration } from '@sentry/profiling-node'
import Sentry from '@sentry/remix'

export function init() {
	Sentry.init({
		dsn: process.env.SENTRY_DSN,
		environment: process.env.NODE_ENV,
		tracesSampleRate: process.env.NODE_ENV === 'production' ? 1 : 0,
		autoInstrumentRemix: true,
		denyUrls: [
			/\/resources\/healthcheck/,
			// TODO: be smarter about the public assets...
			/\/build\//,
			/\/favicons\//,
			/\/img\//,
			/\/fonts\//,
			/\/favicon.ico/,
			/\/site\.webmanifest/,
		],
		integrations: [
			Sentry.httpIntegration(),
			Sentry.prismaIntegration(),
			Sentry.httpContextIntegration(),
			nodeProfilingIntegration(),
		],
		tracesSampler(samplingContext) {
			// ignore healthcheck transactions by other services (consul, etc.)
			if (samplingContext.request?.url?.includes('/resources/healthcheck')) {
				return 0
			}
			return 1
		},
		beforeSendTransaction(event) {
			// ignore all healthcheck related transactions
			//  note that name of header here is case-sensitive
			if (event.request?.headers?.['x-healthcheck'] === 'true') {
				return null
			}

			// Check if the event contains an HTTP context with a response status code
			// 405 Method Not Allowed
			if (event.contexts?.response?.status_code === 405) {
				// Return null to drop the event and prevent it from being sent to Sentry
				return null;
			}

			return event
		},
	})
}
