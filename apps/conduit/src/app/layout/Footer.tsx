export const Footer = () => {
  return (
    <footer className="footer sm:footer-horizontal footer-center bg-base-300 text-base-content p-4 mt-auto">
      <aside>
        <p>© {new Date().getFullYear()} - Banana Cat</p>
      </aside>
    </footer>
  );
};
