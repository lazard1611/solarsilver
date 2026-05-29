const translateButton = () => {
    const translateBuyNow = () => {            
        const buttons = document.querySelectorAll(`
            shopify-buy-it-now-button button,
            shopify-payment-button button,
            button[aria-label*="Buy it now"],
            .shopify-payment-button__button
        `);

        buttons.forEach(button => {
        let text = button.textContent.trim();

        if (text.includes('Buy it now') || 
            button.getAttribute('aria-label')?.includes('Buy it now')) {               
            button.textContent = button.textContent.replace('Buy it now', 'Купити зараз');
            if (button.hasAttribute('aria-label')) {
            button.setAttribute('aria-label', button.getAttribute('aria-label').replace('Buy it now', 'Купити зараз'));
            }
        }
        });
    };

    translateBuyNow();          
    const observer = new MutationObserver(translateBuyNow);
    observer.observe(document.body, { 
        childList: true, 
        subtree: true 
    });
}

document.addEventListener('DOMContentLoaded', () => {
    translateButton();
});