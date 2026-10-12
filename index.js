console.log('ciao')

// messaggio alert
const showToast = () => {
  const toast = document.createElement('div');

  toast.textContent = 'ATTENZIONE: dati sensibili';
  toast.style.position = 'fixed';
  toast.style.right = '20px';
  toast.style.bottom = '20px';
  toast.style.padding = '14px 18px';
  toast.style.borderRadius = '12px';
  toast.style.background = 'rgba(237, 239, 241, 0.95)';
  toast.style.color = '#02070f';
  toast.style.fontFamily = 'Arial, sans-serif';
  toast.style.fontSize = '14px';
  toast.style.fontWeight = '600';
  toast.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.25)';
  toast.style.zIndex = '9999';
  toast.style.opacity = '0';
  toast.style.transform = 'translateY(20px)';
  toast.style.transition = 'all 3s ease';

  document.body.appendChild(toast);

  requestAnimationFrame(() => {
    toast.style.opacity = '1';
    toast.style.transform = 'translateY(0)';
  });
// time del popup
  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(20px)';
    setTimeout(() => toast.remove(), 3500);
  }, 4000);
};

showToast();


