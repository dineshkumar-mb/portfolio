import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, name = 'Dinesh Kumar M B', type = 'website', image = 'https://portfolio-five-chi-11.vercel.app/profile.jpeg', url = 'https://portfolio-five-chi-11.vercel.app' }) => {
  return (
    <Helmet>
      {/* Standard metadata tags */}
      <title>{title}</title>
      <meta name='description' content={description} />
      <link rel="canonical" href={url} />
      
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
      <meta name="keywords" content="Full Stack Developer, React.js, TypeScript, Node.js, MERN Stack, GenAI, RAG, InnoIDE, Software Engineer, Chennai" />

      {/* Schema.org markup for Google */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          "name": name,
          "jobTitle": "Full Stack Developer",
          "description": "Full Stack Developer with 4+ years of experience specializing in React.js, TypeScript, Node.js, MERN, GenAI, and RAG.",
          "url": url,
          "sameAs": [
            "https://www.linkedin.com/in/dinesh-kumar-mannibrundha13393/",
            "https://github.com/dineshkumar-mb"
          ],
          "knowsAbout": [
            "React.js",
            "TypeScript",
            "Node.js",
            "Express.js",
            "MongoDB",
            "MERN Stack",
            "GenAI",
            "RAG",
            "Redux Toolkit",
            "React Flow",
            "ChromaDB"
          ]
        })}
      </script>
    </Helmet>
  );
};

export default SEO;
