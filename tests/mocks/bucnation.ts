import { HttpResponse, http, passthrough, type HttpHandler } from 'msw'

const { json } = HttpResponse
const hoopsApi = process.env.HOOPS_API;

const passthroughBucnation = process.env.NODE_ENV !== 'test'

export const handlers: Array<HttpHandler> = [
	http.get(`${hoopsApi}/api/etsu/roster`, async () => {
		if (passthroughBucnation) return passthrough();

		return json({ test: 'testroster' })
	}),
  http.get(`${hoopsApi}/api/etsu/schedule`, async () => {
		if (passthroughBucnation) return passthrough();

		return json({ test: 'testschedule' })
	}),
  http.get(`${hoopsApi}/api/etsu/stats`, async () => {
		if (passthroughBucnation) return passthrough();

		return json({ test: 'teststats' })
	}),
]