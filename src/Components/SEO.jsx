import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, name = 'Dinesh Kumar M B', type = 'website', image = 'https://portfolio-five-chi-11.vercel.app/profile.jpeg', url = 'https://portfolio-five-chi-11.vercel.app' }) => {
  return (
    <Helmet>
      {/* Standard metadata tags */}
      <title>{title}</title>
      <meta name='description' content={description} />
      
      {/* Open Graph tags for social media sharing */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content={name} />
      
      {/* Twitter Card tags */}
      <meta name="twitter:creator" content={name} />
      <meta name="twitter:card" content={type === 'article' ? 'summary_large_image' : 'summary'} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Keywords */}
      <meta name="keywords" content="Full Stack Developer Chennai, MERN Stack Developer, React Developer, Node.js Developer, AI Application Developer, LangChain Developer, Software Engineer" />

      {/* Schema.org markup for Google */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          "name": name,
          "jobTitle": "Full-Stack MERN Developer | AI Application Builder",
          "url": url,
          "sameAs": [
            "https://www.linkedin.com/in/dinesh-kumar-mannibrundha13393/",
            "https://github.com/dineshkumar-mb"
          ]
        })}
      </script>
    </Helmet>
  );
};

export default SEO;
