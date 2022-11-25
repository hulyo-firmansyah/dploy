import { withIronSessionApiRoute } from "iron-session/next"
import { sessionOptions } from "../../lib/config"
import type { NextApiRequest, NextApiResponse } from "next"
import axios, { AxiosError } from "axios"

export default withIronSessionApiRoute(login, sessionOptions)

async function login(req: NextApiRequest, res: NextApiResponse) {
	if (req.method === "POST") {
		try {
			const payload = await axios.post<{ token: string }>(
				process.env.API_BASE_URL + "/auth/login",
				req.body
			)
			req.session.auth = {
				token: payload.data.token
			}
			await req.session.save()

			return res.json({ ok: true, redirect: "/secret" })
		} catch (e) {
			if (e instanceof AxiosError) {
				res.statusCode = e.response?.status ?? 500
				res.json(e.response?.data)
			}
			return
		}
	}
}
