import React, { useEffect } from 'react';
import '../../Styles/SocialMedia.css';

const SocialMedia = () => {
  useEffect(() => {
    // Load Instagram Embed Script
    const script = document.createElement('script');
    script.src = 'https://www.instagram.com/embed.js';
    script.async = true;
    document.body.appendChild(script);

    // Facebook SDK
    if (!window.FB) {
      const fbScript = document.createElement('script');
      fbScript.src = 'https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v12.0';
      fbScript.async = true;
      fbScript.defer = true;
      document.body.appendChild(fbScript);
    } else {
      window.FB.XFBML.parse();
    }
  }, []);

  return (
    <div className="container-fluid p-3" style={{ backgroundColor: '#e1f9fd' }}>
      <h4 className="bi bi-globe2 text-center fw-bold mt-2">हमारे साथ जुड़ें</h4>

      <div className="row d-flex justify-content-center mt-4 gy-4">
        {/* Twitter */}
        <div className="col-md-4">
          <div className="social-box-wrapper">
            <h2><i className="bi bi-twitter-x"></i> Twitter</h2>
            <div className="details">
              <blockquote className="twitter-tweet">
                <p lang="hi" dir="ltr">गुरु पूर्णिमा की हार्दिक शुभकामनाएं <a href="https://t.co/5Al5N5SfPL">pic.twitter.com/5Al5N5SfPL</a></p>&mdash; Jansampark CG
                (<a href="https://twitter.com/DPRChhattisgarh/status/1943185651391664533?ref_src=twsrc%5Etfw">July 10, 2025</a>)
              </blockquote>
              <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>
            </div>
          </div>
        </div>

        {/* Instagram */}
        <div className="col-md-4">
          <div className="social-box-wrapper">
            <h2><i className="bi bi-instagram"></i> Instagram</h2>
            <div className="details">
              <blockquote
                className="instagram-media"
                data-instgrm-permalink="https://www.instagram.com/p/C5vHY1ePVpR/"
                data-instgrm-version="14"
                style={{ width: '100%', maxWidth: '100%' }}
              ></blockquote>
            </div>
          </div>
        </div>

        {/* Facebook */}
        <div className="col-md-4">
          <div className="social-box-wrapper">
            <h2><i className="bi bi-facebook"></i> Facebook</h2>
            <div className="details">
              <div
                className="fb-page"
                data-href="https://www.facebook.com/DPRChhattisgarh"
                data-tabs="timeline"
                data-width=""
                data-height=""
                data-small-header="false"
                data-adapt-container-width="true"
                data-hide-cover="false"
                data-show-facepile="true"
              >
                <blockquote
                  cite="https://www.facebook.com/DPRChhattisgarh"
                  className="fb-xfbml-parse-ignore"
                >
                  <a href="https://www.facebook.com/DPRChhattisgarh">DPR Chhattisgarh</a>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialMedia;

