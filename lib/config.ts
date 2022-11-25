import type { IronSessionOptions } from "iron-session"
import { User } from "../types/types"

export const sessionOptions: IronSessionOptions = {
	password: process.env.SECRET_COOKIE_PASSWORD as string,
	cookieName: "usr",
	cookieOptions: {
		secure: process.env.NODE_ENV === "production"
	}
}

// This is where we specify the typings of req.session.*
declare module "iron-session" {
	interface IronSessionData {
		auth?: {
			token: string
		}
	}
}
