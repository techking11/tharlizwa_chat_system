import 'dotenv/config';
import { httpServer } from './app';
const PORT = process.env.PORT || 5000;
const LOCALHOST = process.env.LOCALHOST || 'localhost';

httpServer.listen(PORT, () => {
  console.log(`Server running on http://${LOCALHOST}:${PORT}`);
});
