import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import * as XLSX from "xlsx";

const AppDetail = () => {
  const { appId } = useParams();
  const navigate = useNavigate();

  const [appDetails, setAppDetails] = useState(null);
  const [similarApps, setSimilarApps] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAppDetails = async () => {
      if (typeof XLSX === "undefined") {
        setError(
          "XLSX library not loaded. Please ensure the script tag for 'xlsx' is included."
        );
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        setError(null);

        const response = await fetch(`${import.meta.env.BASE_URL}AppData.xlsx`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const arrayBuffer = await response.arrayBuffer();

        const workbook = XLSX.read(arrayBuffer, { type: "array" });
        const sheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[sheetName];
        const json = XLSX.utils.sheet_to_json(worksheet);

        const foundApp = json.find((app) => String(app.Id) === appId);

        if (foundApp) {
          setAppDetails(foundApp);

          const category = foundApp.Category;
          const filteredSimilarApps = json
            .filter(
              (app) => app.Category === category && String(app.AppID) !== appId
            )
            .slice(0, 8);

          setSimilarApps(filteredSimilarApps);
        } else {
          setError(`App with ID: ${appId} not found.`);
        }
      } catch (err) {
        setError(
          `Failed to load app data. Check console for details: ${err.message}`
        );
      } finally {
        setLoading(false);
      }
    };

    fetchAppDetails();
  }, [appId]);

  if (loading) {
    return (
      <div className="app-detail-page p-8 text-center text-xl font-semibold">
        Loading app details...
      </div>
    );
  }

  if (error) {
    return (
      <div className="app-detail-page p-8 text-center text-red-600 font-bold">
        Error: {error}
      </div>
    );
  }

  if (!appDetails) {
    return (
      <div className="app-detail-page p-8 text-center text-gray-500">
        No details available.
      </div>
    );
  }

  return (
    <div className="app-list-container">
      <div className="app-list">
        <div className="app-section">
          <div className="section-header">
            <div className="BreadCrum">
              <p>Apps &gt; </p>
              <p>{appDetails.Category} &gt; </p>
              <h4>{appDetails.AppName}</h4>
            </div>
            <div>
              <button className="auth-btn appDetails-btn-Breadcrum">
                Share
              </button>
              <button className="auth-btn appDetails-btn-Breadcrum">
                Bookmark
              </button>
            </div>
          </div>
          <div className="section-header">
            <div className="BreadCrum">
              <img
                src={appDetails.AppLogo}
                alt={appDetails.AppName}
                className="appDetail-logo"
              />
              <div className="appDetails-disc-div">
                <h3 className="appDetails-name">{appDetails.AppName}</h3>
                <p className="appDetails-version">{appDetails.Version}</p>
                <p className="appDetails-developer">{appDetails.Developer}</p>
                <div className="BreadCrum">
                  <p className="app-rating">
                    {appDetails.Rating}★({appDetails.ReviewCount} Reviews)
                  </p>
                  <p className="Divider"></p>
                  <p className="app-rating">{appDetails.Downloads} Downloads</p>
                  <p className="Divider"></p>
                  <p className="app-rating">{appDetails.Size}</p>
                </div>
              </div>
            </div>
            <button className="auth-btn auth-register">Install</button>
          </div>
          <div className="hotapps-container">
            <img
              src={appDetails.img1}
              alt={appDetails.AppName}
              className="appDetail-image"
            />
            <img
              src={appDetails.img2}
              alt={appDetails.AppName}
              className="appDetail-image"
            />
            <img
              src={appDetails.img3}
              alt={appDetails.AppName}
              className="appDetail-image"
            />
            <img
              src={appDetails.img4}
              alt={appDetails.AppName}
              className="appDetail-image"
            />
          </div>
          <div className="about-container">
            <div className="about-content">
              <div className="about-info-grid">
                <div>
                  <div className="about-us-text-column">
                    <h4 className="about-heading ">
                      About - {appDetails.AppName}
                    </h4>
                    <div
                      className="about-description"
                      dangerouslySetInnerHTML={{ __html: appDetails.About }}
                    ></div>
                  </div>
                </div>
                <div className="info-container">
                  <div className="about-us-text-column">
                    <h4 className="about-heading ">More Information</h4>
                  </div>
                  <div className="info-desc-grid">
                    <div>
                      <h4>Version</h4>
                      <p className="info-text">{appDetails.Version}</p>
                    </div>
                    <div>
                      <h4>License</h4>
                      <p className="info-link">{appDetails.Licence}</p>
                    </div>
                    <div>
                      <h4>Downloads</h4>
                      <p className="info-text">{appDetails.Downloads}</p>
                    </div>
                    <div>
                      <h4>Category</h4>
                      <p className="info-link">{appDetails.Category}</p>
                    </div>
                    <div>
                      <h4>Size</h4>
                      <p className="info-text">{appDetails.Size}</p>
                    </div>
                    <div>
                      <h4>Ads</h4>
                      <p className="info-text">{appDetails.Ads}</p>
                    </div>
                    <div>
                      <h4>Developer</h4>
                      <p className="info-link">{appDetails.Developer}</p>
                    </div>
                    <div>
                      <h4>Changelog</h4>
                      <p className="info-link">Show Changelog</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="about-us-text-column">
                  <h4 className="about-heading ">Description</h4>
                  <div
                    className="about-description"
                    dangerouslySetInnerHTML={{ __html: appDetails.Description }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="app-details-section">
          <div className="app-permission-other-div">
            <div className="info-container">
              <div className="about-us-text-column">
                <h2 className="about-heading">
                  Technologies Used by {appDetails.AppName}
                </h2>
                <p className="about-description">
                  {appDetails.AppName} is requesting {appDetails.Permission} permissions and {appDetails.Libraries} libraries.
                </p>
              </div>
            </div>
            <div className="app-other-div">
              <div className="Monetise-grid2">
                <div className="promote-card">
                  <div className="promote-disc-div">
                    <h3 className="promote-name">
                      Apps other peoples are watching
                    </h3>
                  </div>
                </div>
                <div className="promote-card">
                  <div className="promote-disc-div">
                    <h3 className="promote-name">
                      Popular {appDetails.Category} Games
                    </h3>
                  </div>
                </div>
              </div>
              <div className="Monetise-grid1">
                <div className="promote-card">
                  <div className="promote-disc-div">
                    <h3 className="promote-name">Apps On Sale</h3>
                  </div>
                </div>
                <div className="promote-card">
                  <div className="promote-disc-div">
                    <h3 className="promote-name">Today's Trending Apps</h3>
                  </div>
                </div>
                <div className="promote-card">
                  <div className="promote-disc-div">
                    <h3 className="promote-name">Top New Apps</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {similarApps.length > 0 && (
          <div className="app-section">
            <div className="section-header">
              <h2>You Might Also Like</h2>
              <button className="auth-btn auth-login see-all">View All</button>
            </div>
            <div className="hotapps-container">
              {similarApps.map((app, index) => (
                <div key={index} className="app-card-similar">
                  <div className="app-image-div-similar">
                    <img
                      src={app.AppLogo}
                      alt={app.AppName}
                      className="appDetail-logo"
                    />

                    {/* <div className='app-btn-div'>
                <button className="auth-btn auth-register" onClick={() => handleViewDetails(app.Id || index)}>{app.Button}</button>
              </div> */}
                  </div>
                  <div className="app-disc-div-similar">
                    <h3 className="app-name">{app.AppName}</h3>
                    <p className="app-developer">{app.Developer}</p>
                    <p className="app-rating">★{app.Rating}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AppDetail;
