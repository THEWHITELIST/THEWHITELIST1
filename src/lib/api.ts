// @ts-nocheck
/**
 * Redirection brute vers Stripe
 */
export async function redirectToCheckout(instantDbUserId, email) {
  const STRIPE_LINK = "https://buy.stripe.com/cNi3cveZm9Jybjwg6m67S0q";
  const finalUrl = `${STRIPE_LINK}?prefilled_email=${encodeURIComponent(email)}&client_reference_id=${instantDbUserId}`;
  
  window.location.href = finalUrl;
}

/**
 * Fonction de secours pour ne pas casser le reste du site
 */
export async function createCheckoutSession(instantDbUserId, email) {
  const STRIPE_LINK = "https://buy.stripe.com/cNi3cveZm9Jybjwg6m67S0q";
  return { 
    url: `${STRIPE_LINK}?prefilled_email=${encodeURIComponent(email)}&client_reference_id=${instantDbUserId}`, 
    sessionId: "direct" 
  };
}
