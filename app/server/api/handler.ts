import httpStatus from 'http-status-codes';
import nextConnect from 'next-connect';
import morgan from 'morgan';
import Cors from 'cors';

import { Req, Res } from '@/types/server';

const cors = Cors({
  methods: 'GET',
  origin: [],
  allowedHeaders: ['Content-Type'],
});

export default () =>
  nextConnect<Req, Res>({
    onError(e) {
      console.log(e);
    },
    onNoMatch(req, res) {
      const { method } = req;
      res
        .status(httpStatus.METHOD_NOT_ALLOWED)
        .end(`Method ${method} Not Allowed`);
    },
  })
    .use(morgan('common'))
    .use(cors);
