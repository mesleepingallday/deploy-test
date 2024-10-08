import { Elysia } from "elysia";
import { submit } from "./api/submit";
import { cors } from '@elysiajs/cors'

const port = process.env.PORT || 5432;

const app = new Elysia()
  .use(cors())
  .get("/", () => "Hello")
  .post('/submit', submit)
  .listen(port, () => console.log(`Server is running on port ${port}`));
  
export default app;