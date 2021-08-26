/// <reference types="svelte" />
/// <reference types="vite/client" />

interface Clinic {
	superUser: SuperUser
	name: String
}
interface SuperUser {
	name: String,
	login: String,
	password: String
}

type SuperUserCollections = "admins"
| "doctors"
| "servicesGroups"
| "services"


type AdminCollections = "clients"
| "bills"