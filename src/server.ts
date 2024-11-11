import { Server } from 'http';
import app from './app';
import { config } from './app/config';

async function Main() {
  try {
    const server: Server = app.listen(config.port, () => {
      console.log(`App is listening at port ${config.port}`);
    });
  } catch (error) {
    console.log(error);
  }
}

Main();
