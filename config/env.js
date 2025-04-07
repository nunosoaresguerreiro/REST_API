import {config} from "dotenv";

config({path: `.env.development`});

export const {PORT, NODE_ENV} = process.env;