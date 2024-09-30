import { Credentials } from "../interfaces/Credentials"

export const standartUser: Credentials = {
    userEmail: `${process.env.BASE_EMAIL}`,
    userPassword: `${process.env.BASE_PASSWORD}`
}