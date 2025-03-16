import express from 'express';
import { setupGraphQL } from './presentation/gql/server';
import cors from 'cors'; // I
const app = express();
app.use(cors());
await setupGraphQL(app);


app.listen(4000, () => {
  console.log('Server is running on http://localhost:4000');
});