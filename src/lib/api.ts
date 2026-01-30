/**
 * Redirige l'utilisateur directement vers le lien de paiement Stripe
 */
export async function redirectToCheckout(
  instantDbUserId: string,
  email: string
): Promise<void> {
  const STRIPE_LINK = "https://buy.stripe.com/cNi3cveZm9Jybjwg6m67S0q";
  
  // On ajoute l'ID utilisateur et l'email pour que Stripe les reconnaisse
  const finalUrl = `${STRIPE_LINK}?prefilled_email=${encodeURIComponent(email)}&client_reference_id=${instantDbUserId}`;

  window.location.href = finalUrl;
}

/**
 * Cette fonction est conservée pour éviter les erreurs de compilation 
 * mais elle ne sert plus à appeler le dossier /api
 */
export async function createCheckoutSession(
  instantDbUserId: string,
  email: string
): Promise<{ url: string; sessionId: string }> {
  const STRIPE_LINK = "https://buy.stripe.com/cNi3cveZm9Jybjwg6m67S0q";
  return { 
    url: `${STRIPE_LINK}?prefilled_email=${encodeURIComponent(email)}&client_reference_id=${instantDbUserId}`, 
    sessionId: "direct_link" 
  };
}
