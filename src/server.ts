import { Server } from 'http';
import app from './app';

const port = 3000;

async function Main() {
  try {
    const server: Server = app.listen(port, () => {
      console.log(`App is listening at port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
}

Main();
