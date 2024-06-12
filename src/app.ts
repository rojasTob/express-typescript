import express, {NextFunction, Request, Response} from 'express';
import { PrismaClient } from '@prisma/client';
import AuthorRoutes from './routes/AuthorRoutes';
import CategoryRoutes from './routes/CategoryRoutes';
import EditorialRoutes from './routes/EditorialRoutes';
import BookRoutes from './routes/BookRoutes';
import { errorMiddleware } from './middlewares/errors';
import { NotFoundException } from './exceptions/NotFoundException';

export const prisma = new PrismaClient();

const app = express();
const PORT = process.env.PORT || 3001;


async function main(){
  app.use(express.json());

  app.get('/', (req: Request, res: Response) => {
    res.send('Hello World + prisma connection!');
  });

  app.use("/api/author", AuthorRoutes);
  app.use("/api/category", CategoryRoutes);
  app.use("/api/editorial", EditorialRoutes);
  app.use("/api/book", BookRoutes);

  app.all("*", (req: Request, res: Response, next: NextFunction) => {
    next(new NotFoundException("Route not registered", [` ${req.originalUrl} not found`]));
  });

  app.use(errorMiddleware);

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
