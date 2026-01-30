import Stripe from 'stripe';

// On initialise Stripe avec ta clé secrète (enregistrée dans Vercel)
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: '2023-10-16',
});

export default async function handler(req: any, res: any) {
  // On n'accepte que les requêtes POST (celles de ton bouton)
  if (req.method === 'POST') {
    try {
      // Création de la session de paiement Stripe
      const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items: [
          {
            price_data: {
              currency: 'eur',
              product_data: {
                name: 'Accès Membre The White List',
                description: 'Accès exclusif aux restaurants de luxe',
              },
              unit_amount: 1000, // Le prix en centimes (1000 = 10€)
            },
            quantity: 1,
          },
        ],
        mode: 'payment',
        // Redirection après le paiement
        success_url: `https://www.the-white-list.com/success`,
        cancel_url: `https://www.the-white-list.com/cancel`,
      });

      // On renvoie l'URL de paiement au bouton
      return res.status(200).json({ data: { url: session.url } });
    } catch (err: any) {
      console.error(err);
      return res.status(500).json({ error: { message: err.message } });
    }
  } else {
    // Si quelqu'un essaie d'y accéder autrement que par le bouton
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
}
