export class AppConfig {
  static dev = {
    mapBoxAPI: process.env.MAPBOX_API_KEY,
  };

  static initConfig = () => {
    console.log('process.env', process.env);
  };
}

export default AppConfig;
