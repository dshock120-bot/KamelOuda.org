import { Client } from "appwrite";

const client = new Client()
.setEndpoint("https://fra.cloud.appwrite.io/v1")
.setProject("6afe09ed0002aa765acb");

export { client };

client.ping()
.then(() => console.log("Appwrite connected successfully!"))
.catch(error => console.error("Appwrite connection error:", error));