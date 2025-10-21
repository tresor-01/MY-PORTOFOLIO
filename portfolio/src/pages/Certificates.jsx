import React from 'react';

const Certificates = () => {
  return (
    <div>
      {/* BLOG SECTION */}
      <article className="blog" data-page="certificates">
        <header>
          <h2 className="h2 article-title">Certification</h2>
        </header>

        <section className="blog-posts">
          <ul className="blog-posts-list">
            <li className="blog-post-item">
              <a href="#">
                <figure className="blog-banner-box">
                  <img
                    src="./images/GoogleCert.png"
                    alt="Google Cybersecurity Certificate"
                    loading="lazy"
                  />
                </figure>

                <div className="blog-content">
                  <div className="blog-meta">
                    <p className="blog-category">Google CyberSecurity Certificate</p>
                    <span className="dot"></span>
                    <time dateTime="2022-02-23">September, 2025</time>
                  </div>

                  <h3 className="h3 blog-item-title">Issued on Coursera</h3>

                  <p className="blog-text">
                    Completed a six-month Google Coursera course on Cybersecurity Professional
                    Certificate, where I learned more about cybersecurity concepts and practices.
                  </p>
                </div>
              </a>
            </li>

            <li className="blog-post-item">
              <a href="#">
                <figure className="blog-banner-box">
                  <img
                    src="./images/ethical.png"
                    alt="Ethical Hacking Certificate"
                    loading="lazy"
                  />
                </figure>

                <div className="blog-content">
                  <div className="blog-meta">
                    <p className="blog-category">Ethical Hacking</p>
                    <span className="dot"></span>
                    <time dateTime="2022-02-23">April, 2022</time>
                  </div>

                  <h3 className="h3 blog-item-title">Issued by Coursera</h3>

                  <p className="blog-text">
                    Completed a Coursera course on Ethical Hacking, covering both theory and
                    practice using Kali Linux.
                  </p>
                </div>
              </a>
            </li>

            <li className="blog-post-item">
              <a href="#">
                <figure className="blog-banner-box">
                  <img
                    src="./images/ciscocert.png"
                    alt="Cisco Cybersecurity Certificate"
                    loading="lazy"
                  />
                </figure>

                <div className="blog-content">
                  <div className="blog-meta">
                    <p className="blog-category">Cisco Introduction to Cybersecurity</p>
                    <span className="dot"></span>
                    <time dateTime="2022-02-23">September, 2025</time>
                  </div>

                  <h3 className="h3 blog-item-title">Offered by Cisco on NetAcad</h3>

                  <p className="blog-text">
                    Completed a six-hour course on NetAcad introducing key cybersecurity concepts
                    and principles.
                  </p>
                </div>
              </a>
            </li>
          </ul>
        </section>
      </article>
    </div>
  );
};

export default Certificates;
