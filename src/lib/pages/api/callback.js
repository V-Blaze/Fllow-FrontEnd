import crypto from 'crypto';
import mongoose from 'mongoose';
import Payment from '@/lib/models/payment';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const { sign, amount, is_final, status, order_id } = req.body;

      if (!sign) {
        return res.status(400).json({ message: 'Invalid payload' });
      }

      const data = { ...req.body };
      delete data.sign;

      const hash = crypto.createHash('md5')
        .update(Buffer.from(JSON.stringify(data)).toString('base64') + process.env.API_KEY)
        .digest('hex');

      if (hash !== sign) {
        return res.status(400).json({ message: 'Invalid payload' });
      }

      if (!amount) {
        return res.status(400).json({ message: 'Please make a payment' });
      }

      if (is_final === true && status === "paid" && amount) {
        const payment = await Payment.findById(order_id);

        if (!payment) {
          return res.status(404).json({ message: 'Payment not found' });
        }
        payment.amount = amount;

        await payment.save();
        return res.status(200).json({ message: 'Payment made successfully' });
      }

      res.sendStatus(200);
    } catch (error) {
      return res.status(500).json({ message: 'Error processing callback', error });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
