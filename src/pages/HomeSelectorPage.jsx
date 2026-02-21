import './HomeSelectorPage.css';

export default function HomeSelectorPage() {
  return (
    <section className="home-selector-page">
      <div className="home-content-top-baseline">
        <section className="welcome-panel home-welcome-panel">
          <div className="home-image-frame">
            <img
              src="/assets/images/catalunya-portada.png"
              alt="Paisatge de Catalunya"
              className="welcome-image home-welcome-image"
            />
          </div>
        </section>
      </div>
    </section>
  );
}
