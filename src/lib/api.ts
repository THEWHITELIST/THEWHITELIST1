/**
 * Redirection directe vers Stripe sans chichis
 */
export async function redirectToCheckout(
  instantDbUserId: string,
  email: string
): Promise<void> {
  const STRIPE_LINK = "https://buy.stripe.com/cNi3cveZm9Jybjwg6m67S0q";
  
  // Construction de l'URL avec les paramètres
  const finalUrl = STRIPE_LINK + 
    "?prefilled_email=" + encodeURIComponent(email) + 
    "&client_reference_id=" + instantDbUserId;

  console.log("Redirection vers :", finalUrl);
  window.location.href = finalUrl;
}

/**
 * Gardée pour éviter de casser les imports ailleurs dans le site
 */
export async function createCheckoutSession(instantDbUserId: string, email: string) {
  return { url: "", sessionId: "" };
}
