import React, { useState, useEffect, useMemo } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import * as XLSX from "xlsx";

const fetchAndParseBlogs = async () => {
  if (typeof XLSX === "undefined") {
    throw new Error(
      "XLSX library not available. Please ensure the 'xlsx' dependency is installed."
    );
  }

  try {
    const response = await fetch("/BlogData.xlsx");
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const arrayBuffer = await response.arrayBuffer();

    const workbook = XLSX.read(arrayBuffer, { type: "array" });
    const sheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[sheetName];

    return XLSX.utils.sheet_to_json(worksheet);
  } catch (err) {
    console.error("Data fetching error:", err);
    throw new Error(`Failed to load blog data: ${err.message}`);
  }
};

const SimilarBlogCard = ({ blog, navigate }) => {
  const blogId = blog.Id;

  const handleViewDetails = (id) => {
    navigate(`/blog/${id}`);
  };

  return (
    <div
      key={blogId}
      className="Blog-card"
      onClick={() => handleViewDetails(blogId)}
    >
      <div className="Blog-image-div">
        <img
          src={blog.ImagePath || "placeholder.png"}
          alt={blog.BlogTitle}
          className="Blog-logo"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "placeholder.png";
          }}
        />
        <div className="Blog-disc-div">
          <h3 className="Blog-name">{blog.BlogTitle}</h3>
          <p className="Blog-Date">{blog.Date}</p>
        </div>
      </div>
    </div>
  );
};

const BlogDetails = () => {
  const { BlogId } = useParams();
  const navigate = useNavigate();

  const [allBlogs, setAllBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const SIMILAR_BLOG_COUNT = 3;

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await fetchAndParseBlogs();
        setAllBlogs(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);
  const { currentBlog, similarBlogs } = useMemo(() => {
    if (allBlogs.length === 0) {
      return { currentBlog: null, similarBlogs: [] };
    }

    const foundBlog = allBlogs.find((blog) => String(blog.Id) === BlogId);

    if (!foundBlog) {
      return { currentBlog: null, similarBlogs: [] };
    }

    const tag2 = foundBlog.Tag2;
    const filteredSimilarBlogs = allBlogs
      .filter((blog) => blog.Tag2 === tag2 && String(blog.Id) !== BlogId)
      .slice(0, SIMILAR_BLOG_COUNT);

    return { currentBlog: foundBlog, similarBlogs: filteredSimilarBlogs };
  }, [allBlogs, BlogId]);
  const sections = useMemo(() => {
    if (!currentBlog) return [];

    const sectionData = [];
    for (let i = 1; i <= 10; i++) {
      const title = currentBlog[`Section${i}`] ?? "";
      const htmlContent = currentBlog[`SectionDesc${i}`] ?? "";

      if (title || htmlContent) {
        sectionData.push({ title, htmlContent });
      }
    }
    return sectionData;
  }, [currentBlog]);

  if (loading) {
    return (
      <div className="app-detail-page p-8 text-center text-xl font-semibold">
        Loading Blog details...
      </div>
    );
  }

  if (error || !currentBlog) {
    return (
      <div className="app-detail-page p-8 text-center text-red-600 font-bold">
        Error: {error || `Blog with ID: ${BlogId} not found.`}
      </div>
    );
  }

  const { BlogTitle, Blogger, Date, ReadTime, Tag1, Tag2, ImagePath } =
    currentBlog;

  return (
    <div className="app-list-container">
      <div className="app-list">
        <div className="Blog-section">
          <div className="section-header">
            <div className="BreadCrum">
              <p>Blogs &gt; </p>
              <h4> {BlogTitle}</h4>
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
          <div className="">
            <h4 className="Blog-Title">{BlogTitle}</h4>
            <div>
              <p>
                {Blogger} . {Date}
              </p>
            </div>
            <div className="Blog-Tags">
              <button className="auth-btn">{ReadTime} Read</button>
              <button className="auth-btn auth-login">{Tag1}</button>
              <button className="auth-btn auth-login">{Tag2}</button>
            </div>
          </div>
          <div className="section-desc-div">
            <div>
              <div className="Blog-section-Heading">
                <h4>In This Article</h4>
                {sections.map((section, index) => (
                  <p key={index}>{section.title}</p>
                ))}
              </div>
            </div>

            <div>
              <img
                src={ImagePath || "placeholder.png"}
                alt={BlogTitle}
                className="BlogDetail-image"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "placeholder.png";
                }}
              />

              {sections.map((section, index) => (
                <div key={index} className="Blog-section-desc">
                  <h4>{section.title}</h4>
                  <div
                    className="about-description"
                    dangerouslySetInnerHTML={{ __html: section.htmlContent }}
                  ></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {similarBlogs.length > 0 && (
          <div className="Blog-section">
            <div className="section-header">
              <h2>Similar Articles</h2>
            </div>
            <div className="Blog-grid">
              {similarBlogs.map((blog) => (
                <SimilarBlogCard
                  key={blog.Id}
                  blog={blog}
                  navigate={navigate}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogDetails;
