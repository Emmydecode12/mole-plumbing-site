function AboutStory() {
  return (
    <section className="section">
      <div className="container story__inner">
        <div className="story__content">
          <span className="section-label">Our Story</span>
          <h2>Plumbing Built on Trust</h2>

          {/* PLACEHOLDER story text: replace with the real story */}
          <p>
            What started as fixing leaks for neighbours grew into a full
            plumbing service. Over 7 years and 200+ completed jobs, we have
            built our name on showing up on time, quoting honestly and
            finishing the job properly.
          </p>
          <p>
            Every home we work in is treated like our own. We use quality
            materials, keep the work area clean, and explain the problem in
            plain words before we start.
          </p>

          <div className="story__stats">
            <div>
              <strong>7</strong>
              <span>Years Experience</span>
            </div>
            <div>
              <strong>200+</strong>
              <span>Jobs Done</span>
            </div>
          </div>
        </div>

        <div className="story__image">
          <img src="public/moleplumbing.png" alt="Our plumbing team at work" />
        </div>
      </div>
    </section>
  );
}

export default AboutStory;