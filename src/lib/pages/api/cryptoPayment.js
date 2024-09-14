import mongoose from 'mongoose';
import Payment from '@/lib/models/payment';
import axios from 'axios';
import crypto from 'crypto';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const { id } = req.query;
      const { amount, currency } = req.body;

      if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ message: 'Invalid ObjectId, User not found' });
      }

      let payment = await Payment.findById(id);

      if (!payment) {
        return res.status(404).json({ message: 'User not found' });
      }

      if (!amount) {
        return res.status(400).json({ message: 'Invalid amount' });
      }

      const data = {
        amount,
        currency,
        order_id: id,
        url_callback: `${process.env.NEXT_PUBLIC_CONVEX_HTTP_URL}/callback`,
      };

      const sign = crypto.createHash('md5')
        .update(Buffer.from(JSON.stringify(data)).toString('base64') + process.env.API_KEY)
        .digest('hex');

      const response = await axios.post("https://api.cryptomus.com/v1/payment", data, {
        headers: {
          merchant: process.env.MERCHANT_ID,
          sign: sign,
        }
      });

      res.status(200).send(response.data);
    } catch (error) {
      return res.status(500).send({ message: 'Error making payment', error });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
