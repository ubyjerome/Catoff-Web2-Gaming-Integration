export interface IConfigs {
  project: {
    name: string;
    description: string;
    port?: string;
    url: {
      deployment: string;
    };
  };
  mongoUrl:string,
  organisation: {
    name?: string;
  };
  website: {
    favicon:string
    themeing:{
        primaryColor:string
    },
    openGraphTemplateUrl:string,
    logo:{
        primary:string
    }
  },cloudinary:{
    apiKey:string,
    apiSecret:string,
    cloudName:string
  },
  web3:{
    solanaPrivateKey:string,
    solanaNetwork: string,
    privateKeyArray: any,
    solanaProgramId:string
  }
}
