import { IConfigs } from "./types";
require("dotenv").config();
const solanaPrivateKey = process.env.SOLANA_PRIVATE_KEY || "";

export const Configs: IConfigs = {
  project: {
    port: process.env.PORT,
    name: process.env.PROJECT_NAME || "Boiler",
    description: process.env.PROJECT_DESCRIPTION || "Boiler",
    url: {
      deployment: process.env.PROJECT_DEPLOYMENT_URL || "Boiler",
    },
    phase:process.env.PROJECT_PHASE
  },
  mongoUrl: `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASS}@${process.env.MONGODB_URL}`,
  organisation: {
    name: process.env.ORGANISATION_NAME,
  },
  website: {
    favicon: process.env.FAVICON || "Boiler",
    themeing: {
      primaryColor: process.env.COLOR_PRIMARY || "Boiler",
    },
    openGraphTemplateUrl: process.env.OPENGRAPH_TEMPLATE_URL || "Boiler",
    logo: {
      primary: process.env.LOGO || "Boiler",
    },
  },
  cloudinary: {
    apiKey: process.env.CLOUDINARY_API_KEY || "Boiler",
    apiSecret: process.env.CLOUDINARY_API_SECRET || "Boiler",
    cloudName: process.env.CLOUDINARY_API_CLOUDNAME || "Boiler",
  },
  web3: {
    solanaPrivateKey,
    solanaNetwork: process.env.SOLANA_NETWORK || "devnet",
    privateKeyArray: Uint8Array.from(solanaPrivateKey.split(',').map(Number)),
    solanaProgramId:process.env.SOLANA_PROGRAM_ID || "test"
  },
};
