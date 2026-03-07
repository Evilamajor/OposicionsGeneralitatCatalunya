import { getBasePath } from '@/utils/basePath';

export default function WelcomePanel() {
  return (
    <section className="welcome-panel">
      <img
        src={getBasePath('assets/images/catalunya-portada.png')}
        alt="Portada Catalunya"
        className="welcome-image"
      />
    </section>
  );
}
