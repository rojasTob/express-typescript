import express, {Request, Response} from 'express';
import { PrismaClient } from '@prisma/client';
import AuthorRoutes from './routes/AuthorRoutes';
import CategoryRoutes from './routes/CategoryRoutes';
import EditorialRoutes from './routes/EditorialRoutes';

export const prisma = new PrismaClient();

const app = express();
const PORT = process.env.PORT || 3000;


async function main(){
  app.use(express.json());

  app.get('/', (req: Request, res: Response) => {
    res.send('Hello World + prisma connection!');
  });

  app.use("/api/author", AuthorRoutes);
  app.use("/api/category", CategoryRoutes);
  app.use("/api/editorial", EditorialRoutes);

  app.listen(PORT,()=>{
    console.log(`Server is listening at ${PORT} port.`)
  });
  
}

main()
  .then(async () => {
    await prisma.$connect();
    console.info("Connected successfully with the db.")
  })
  .catch(async (e) => {
    console.error(`Cannot connect with prisma ${e}`);
    await prisma.$disconnect();
    process.exit(1);
  });
