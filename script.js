// EBICO - Custom JavaScript
// این فایل برای قابلیت‌های تعاملی آینده آماده شده است.

document.addEventListener('DOMContentLoaded', () => {
  // به‌روزرسانی خودکار سال فوتر
  const yearElement = document.getElementById('currentYear');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  // پس از انتخاب لینک منو در موبایل، منو بسته می‌شود.
  const navLinks = document.querySelectorAll('#mainNav .nav-link');
  const navCollapse = document.getElementById('mainNav');

  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      if (window.bootstrap && navCollapse && navCollapse.classList.contains('show')) {
        window.bootstrap.Collapse.getOrCreateInstance(navCollapse).hide();
      }
    });
  });
});
